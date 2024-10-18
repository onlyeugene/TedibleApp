import lock from '../../src/images/lock.png'
import arrow from '../../src/images/arrow-down.png'
import {props} from '../components/PortfolioDb'
import PortfolioProp from '../components/PortfolioProp'



const Portfolio = () => {
  return (
    <div className="w-full text-center text-[40px] py-[2rem] md:px-[7rem]">
        <h1 className="p-[2rem] uppercase font-normal">Our Portfolio</h1>

        <div className="border rounded-md bg-[#F6F6F6] border-[#F6F6F6] md:flex grid md:gap-[10rem] gap-[2rem] py-[3rem]  justify-center">
            <div className="grid md:gap-[2rem]">
                <h1 className="text-[20px] text-[#676D79]">Investment</h1>
                <p className="text-[34px] text-[#292D32] font-semibold">$1.7 Billion</p>
            </div>
            <div className="grid md:gap-[2rem]">
                <h1 className="text-[20px] text-[#676D79]">Revenue</h1>
                <p className="text-[34px] text-[#292D32] font-semibold">$2.5 Billion</p>
            </div>
            <div className="grid md:gap-[2rem]">
                <h1 className="text-[20px] text-[#676D79]">Active Users</h1>
                <p className="text-[34px] text-[#292D32] font-semibold">1,500,321</p>
            </div>
            <div className="grid md:gap-[2rem]">
                <h1 className="text-[20px] text-[#676D79]">Conversion Rate</h1>
                <p className="text-[34px] text-[#292D32] font-semibold">61%</p>
            </div>
        </div>


        <div className="md:flex grid gap-[2rem] justify-center md:justify-between py-[4rem]">
            <div className="border text-[16px] bg-[#F6F6F6] border-[#F6F6F6] py-[.7rem] rounded-md">
                <button className='px-2 pr-[1rem] flex items-center'>Cohort 1 - <span className='font-semibold'>2022</span>
                <button className="border px-[1rem] py-[.8rem] border-white ml-[1rem] bg-white flex rounded-md ">Cohort 2- <span className='font-semibold'>2023</span>
                <img src={lock} alt="" className='pl-4 w-[2.5rem]'/>
                </button>
                </button>
            </div>

            <div className='md:flex grid justify-center  gap-[1rem]'>
                <button className='flex gap-[.5rem] items-center text-[16px] md:py-0 py-[1.5rem] w-full px-[5rem] border rounded-lg md:px-[1rem] border-[#292D32]'><span className='text-[#676D79]'>Month:</span> December 
                    <img src={arrow} alt="" />
                </button>
                <button className='flex items-center gap-[.5rem] w-full md:py-0 py-[1.5rem] md:px-[1rem] px-[5rem]  text-[16px] border rounded-lg border-[#292D32]'><span className='text-[#676D79]'>Sort: </span>Descending
                    <img src={arrow} alt="" />
                </button>
            </div>
        </div>
        
        <div>
            <div className='md:flex gap-[10rem] text-[16px] font-medium pb-3 hidden'>
                <h1>Product</h1>
                <h2 className='pl-[9.5rem]'>Financials</h2>
                <h3 className='pl-[8rem]'>Marketing</h3>
                <h4 className='pl-[8rem]'>Sales</h4>
            </div>
            {props.map((prop) =>
                <PortfolioProp
                key ={prop.id}
                image ={prop.image}
                title ={prop.title}
                text= {prop.text}
                customers = {prop.customers}
                revenue ={prop.revenue}
                subscribers= {prop.subscribers}
                traffic = {prop.traffic}
                icon ={prop.icon}
                icons ={prop.icons}
                numbergreen={prop.numbergreen}
                numberred={prop.numberred}
                serial={prop.serial}
                />
            )}
        </div>
    </div>
  )
}

export default Portfolio