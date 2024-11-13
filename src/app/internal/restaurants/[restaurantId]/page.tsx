import { Top_Order } from "@/lib/consts/top-order";
import Image from "next/image";

interface RestaurantPageProps {
    params: { restaurantId: string }; // params.restaurantId is typically a string in Next.js dynamic routes
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
    // Explicitly awaiting params (even though params are usually provided synchronously)
    const awaitedParams = await params; // Just for testing to see if this resolves the issue
    const restaurantId = Number(awaitedParams.restaurantId); // Convert restaurantId to a number

    // Find the restaurant by matching the id
    const restaurant = await Top_Order.find((restaurant) => restaurant.id === restaurantId);

    if (!restaurant) {
        console.log("Restaurant not found for ID:", restaurantId);
        return <div>Restaurant not found</div>;
    }

    return (
        <div className="w-full">
            <p>{restaurant.title}</p>
            <h1>{restaurant.restaurant}</h1>
            <Image src={restaurant.image} alt="Image" width={40} height={40} />
            <p>{restaurant.price}</p>
        </div>
    );
};

export default RestaurantPage;
