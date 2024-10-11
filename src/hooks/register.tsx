import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export const useRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(''); // Optional TSA ID
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
  
    const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setError(''); // Clear any previous error
  
      const payload = { name, email, password, username, phone };
      const url = "https://tedible-backend.onrender.com/api/auth/register";
  
      try {
        const response = await axios.post(url, payload, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      
        if (response.status === 201) {
          toast.success("You have successfully created an account!", {
            position: "top-right",
            autoClose: 3000,
          });

          // Optionally clear the form fields
          setName('');
          setEmail('');
          setPassword('');
          setUsername('');
          setPhone('');

          setTimeout(() => {
            router.push("/login");
          }, 3500);
        }

        return response;

      } catch (error) {
          setError('Something went wrong.');
          toast.error('Something went wrong.');
          setLoading(false);
        }
    };
  
    return {
      name,
      setName,
      email,
      setEmail,
      password,
      setPassword,
      username,
      setUsername,
      phone,
      setPhone,
      loading,
      error,
      handleCreateUser,
    };
};
