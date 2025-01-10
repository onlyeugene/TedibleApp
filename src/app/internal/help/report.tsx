import React from 'react'

const ReportIssues = () => {
  return (
    <div className='w-full lg:w-[430px] space-y-4'>
      <div className="">
        <p>We &apos;re here to help! Share your concerns, feedback, or report issues, and we will give a prompt response.</p>
      </div>
      <form className="space-y-4">
        <div className="flex flex-col gap-[14px]">
          <label  className='font-semibold'>Subject</label>
          <input type="text" placeholder='Subject title' className='border border-[#CED4DA] py-[9.34px] px-[11.21px] outline-none rounded-lg'/>
        </div>
        <div className="flex flex-col gap-[14px]">
          <label  className='font-semibold'>Write your issue</label>
          <textarea  placeholder='Type your message' className='border border-[#CED4DA] pt-[9.34px] px-[11.21px] pb-24 outline-none rounded-lg'/>
        </div>
        <button className='bg-tertiary py-3 text-center rounded-md w-40 text-white text-sm font-medium'>Submit</button>
      </form>
    </div>
  )
}

export default ReportIssues