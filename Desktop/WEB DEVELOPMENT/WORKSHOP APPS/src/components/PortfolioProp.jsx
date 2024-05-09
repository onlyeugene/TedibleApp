import chart from '../../src/images/chart.png'
import layout from '../../src/images/layout.png'
import circle from '../../src/images/circle.png'
import Circle from './Circle'

const PortfolioProp = (product) => {
  return (
    <div className='w-full md:flex mb-[2rem] justify-center gap-[1rem] relative'>


        <div className='absolute -left-[4rem] flex top-[1rem] items-center gap-[.3rem]'>
            <div>
                <img src={product.icon} alt="" className='-left-[2rem] top-[1rem]'/>
                <div className='text-[13px] leading-3'>
                    <h1 className='text-[#26C82D] font-semibold font'>{product.numbergreen}</h1>
                </div>
            </div>
            <div className=' leading-3 text-[13px] pt-4'>
                <div>
                    <h1 className='text-[#EF2323] font-semibold font'>{product.numberred}</h1>
                </div>
                <img src={product.icons} alt="" className='-left-[2rem] top-[1rem]'/>
            </div>
            <div className='text-[24px] font-medium pt-2'>
                <p>{product.serial}</p>
            </div>
        </div>

        {/* PRODUCT  */}

        <div className='border bg-[#F6F6F6] border-[#F6F6F6 rounded-md grid text-start p-[1rem] w-full text-[16px]'>
            <div className='flex text-[24px] gap-[1rem] items-center mb-3'>
                <img src={product.image} alt="" />
                <h1>{product.title}</h1>
            </div>
            <p>{product.text}</p>
        </div>

        {/* FINANCIALS  */}

        <div className='border bg-[#F6F6F6] border-[#F6F6F6 rounded-md grid  w-full text-start text-[16px] p-[1rem]'>
            <div className='flex items-center justify-between'>
               <div>
                    <h1>Customers</h1>
                    <p className='font-bold text-[24px]'>{product.customers}</p>
               </div>
               <div>
                    <h1>Revenue</h1>
                    <p className='font-bold text-[24px]'>{product.revenue}</p>
               </div>
            </div>
                <h1>Site Visits</h1>
            <div className='relative'>
                <img src={layout} alt="" className='w-[30rem]'/>
                <img src={chart} alt="" className='absolute md:top-4 top-[17px] md:w-[19rem] w-[21rem]'/>
            </div>
        </div>

        {/* MARKETING  */}


        <div className='border bg-[#F6F6F6] border-[#F6F6F6 w-full p-[1rem] rounded-md grid items-center'>
            <div className='text-[16px] flex justify-between'>
                <h1>Subcribers</h1>
                <p>{product.subscribers}</p>
            </div>
            <div className='text-[16px] flex justify-between '>
                <h1>Website traffic</h1>
                <p>{product.traffic}</p>
            </div>
            <div className='text-[16px] flex justify-between items-center'>
                <h1>Click-through rate</h1>
                <div className='relative grid text-center justify-center items-center'>
                    <img src={circle} alt="" />
                    <p className='absolute md:top-5 md:left-[18px] left-2 font-semibold'>735</p>
                </div>
            </div>
        </div>
        <div className='w-full border bg-[#F6F6F6] border-[#F6F6F6 rounded-md text-[18px] grid items-center justify-center gap-[1rem] p-[1rem]'>
            <h1>Cost of selling</h1>
            <Circle/>
        </div>
    </div>
  )
}

export default PortfolioProp