import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useLogin = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Redirect to home if the user is already logged in
  useEffect(() => {
    if (session) {
      const timer = setTimeout(() => {
        router.push('/internal/dashboard');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [session, router]);

  // Handle login request
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });

      if (response && response.ok) {
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
        });

        setTimeout(() => {
          router.push("/internal/dashboard");
        }, 3500);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      toast.error("Invalid credentials. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    userType,
    setUserType,
    loading,
    error,
    handleLogin,
  };
};
