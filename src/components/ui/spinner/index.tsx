import Image from "next/image";
import logo from '@/assets/navbar/logo.svg'

const LoadingSpinner = () => (
    <div className="animate-pulse ">
      <Image src={logo} alt="logo" width={230} height={230}/>
    </div>
  );
  
  export default LoadingSpinner;
  