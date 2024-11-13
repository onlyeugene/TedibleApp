// import { Top_Order } from "@/lib/consts/top-order";
// import Image from "next/image";

// interface RestaurantPageProps {
//   params: { restaurantId: string }; // params.restaurantId is typically a string in Next.js dynamic routes
// }

// const RestaurantPage = async ({ params }:{params: RestaurantPageProps}) => {
//   const { restaurantId } = await params; // Await params to resolve any promises

//   const restaurantIdNumber = Number(restaurantId); // Convert restaurantId to a number

//   // Find the restaurant by matching the id
//   const restaurant = Top_Order.find((restaurant) => restaurant.id === restaurantIdNumber);

//   if (!restaurant) {
//     console.log("Restaurant not found for ID:", restaurantIdNumber);
//     return <div>Restaurant not found</div>;
//   }

//   return (
//     <div className="w-full">
//       <h1>{restaurant.restaurant}</h1>
//       <Image src={restaurant.image} alt="Image" width={40} height={40} />
//       <p>{restaurant.price}</p>
//     </div>
//   );
// };

// export default RestaurantPage;
