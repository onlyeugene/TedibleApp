import { AlertCircle } from "lucide-react";

interface FormErrorProps {
  message: string;  
}

const FormError = ({ message }: FormErrorProps) => {
  return (
    <div className="text-red-500 text-sm border-red-100 bg-red-100 border-2 rounded-md p-2 flex items-center gap-2">
      <AlertCircle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
}

export default FormError;
