import Image from 'next/image'
import cart from '@/assets/internal/cart/cart.svg'
import Button from '@/components/buttons'

const CartPreview = () => {
  return (
    <div className='bg-white border rounded-l-3xl py-4 px-7 h-[35rem] flex flex-col w-1/4'>
      <div>
        <h1 className='font-semibold'>My Cart Preview</h1>
      </div>
      <div className='mt-10 flex flex-col justify-center items-center'>
        <Image src={cart} alt=''  className='rounded-full border border-[#D9D9D938] bg-[#D9D9D938] py-[3.5rem] px-5'/>
        <h2 className='flex flex-col items-center justify-center mt-5 text-2xl'>Oops... <span className='text-sm'>Your cart is empty</span></h2>
      </div>
      <hr className='mt-4 border-[#C2C2C2]'/>
        <div className=''/>
      <div className='flex flex-col gap-3 justify-center mt-5'>
        <Button className='rounded-md py-3 border-inActive'>Get a discount</Button>
        <Button className='rounded-md py-3 border-inActive bg-inActive text-primary'>Check Out</Button>
      </div>
    </div>
  )
}

export default CartPreview
