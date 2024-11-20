
interface RestaurantPageIdProps {
    params: {
        restuarantId: string
    }
}

const RestaurantPageId = async ({params}: RestaurantPageIdProps) => {
  const { restuarantId } = await params;



  return (
    <div>
     {restuarantId}
     h1
    </div>
  )
}

export default RestaurantPageId
