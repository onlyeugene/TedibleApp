import { authOptions } from "@/lib/authOptions";
import User from "@/models/user";
import { getServerSession } from "next-auth";

// Define a return type if using TypeScript (for example, `User | null`)

export async function getSession() {
    try {
        const session = await getServerSession(authOptions);
        return session;
    } catch (error) {
        console.error("Error fetching session:", error);
        return null;
    }
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await User.findOne({ email: session.user.email });
        
        return currentUser || null;  // Return null if no user found

    } catch (error) {
        console.error("Error fetching current user:", error);
        return null;
    }
}
