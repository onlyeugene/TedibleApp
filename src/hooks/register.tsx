import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useUserSession } from "@/session/useUserSession";

export const useRegister = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { session } = useUserSession();

  useEffect(() => {
    if (session) {
      const timer = setTimeout(() => {
        router.push("/internal/dashboard");
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [session, router]);

  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear any previous error

    const payload = { firstname, lastname, email, password, phone };
    const url = "api/auth/register";

    try {
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        toast.success("You have successfully created an account!", {
          position: "top-right",
          autoClose: 3000,
        });

        // Optionally clear the form fields
        setFirstName("");
        setLastname("");
        setEmail("");
        setPassword("");
        setPhone("");

        setTimeout(() => {
          router.push("/login");
        }, 3500);
      }

      return response;
    } catch (error) {
      setError("Something went wrong.");
      toast.error("Something went wrong.");
      setLoading(false);
    }
  };

  return {
    firstname,
    setFirstName,
    lastname,
    setLastname,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    loading,
    error,
    handleCreateUser,
  };
};