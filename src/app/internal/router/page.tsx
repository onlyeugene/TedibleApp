import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const Router = async () => {
    const session = await getServerSession(authOptions)
  return (
    <div>
      {JSON.stringify(session)}
      
      <h1>{session?.user.firstName}</h1>
      <h1>{session?.user.lastName}</h1>
      <h2>{session?.user.email}</h2>
      <h3>{session?.user.phone}</h3>
      <h4>{session?.user.image}</h4>
      <h5>{session?.user.id}</h5>
    </div>
  )
}

export default Router
