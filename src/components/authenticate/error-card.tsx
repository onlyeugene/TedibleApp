
import { CardWrapper } from './auth-card'

const ErrorCard = () => {
  return (
    <div className="signUp text-white bg-cover w-full bg-center h-screen flex flex-col justify-center items-center">
      <CardWrapper headerLabel="Error" backButtonLabel="Back" backButtonHref="/auth/login">
        <p>Something went wrong</p>
      </CardWrapper>
    </div>
  )
}

export default ErrorCard
