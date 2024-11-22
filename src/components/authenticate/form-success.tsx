import { CheckCircle } from "lucide-react";

interface FormSuccessProps {
    message: string;  
  }
  
const FormSuccess = ({ message }: FormSuccessProps) => {
    return (
      <div className="text-white text-sm border-green-500 bg-green-100 border-2 rounded-md p-2 mt-4 flex items-center gap-2">
        <CheckCircle className="w-4 h-4" />
        <p>{message}</p>
      </div>
    );
  }
  
export default FormSuccess;
