'use client'

import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

interface AccordionProps {
  title: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  return (
    <div className='mb-4 py-2 text-[#494B4D] rounded-md '>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='flex justify-between w-full items-center'
      >
        <span className='sm:text-2xl text-[10px]'>{title}</span>
        {accordionOpen ? (
          <RiArrowUpSLine />
        ) : (
          <RiArrowDownSLine />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className='pt-2 text-[#494B4D] sm:text-lg text-[10px] font-medium'>
          {answer}
        </div>
      </div>
      <hr className='border-[#494B4D] mt-3'/>
    </div>
  );
};

export default Accordion;


// 'use client';

// import React, { useState } from 'react';
// import { RiArrowDownSLine, RiArrowUpSLine, RiSubtractLine } from 'react-icons/ri';

// interface AccordionProps {
//   title: string;
//   answer: string;
// }

// const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
//   const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

//   return (
//     <div className="mb-4 py-2 text-[#494B4D] rounded-md">
//       <button
//         onClick={() => setAccordionOpen(!accordionOpen)}
//         className="flex justify-between w-full items-center"
//       >
//         <span className="sm:text-2xl text-[10px]">{title}</span>
//         {accordionOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
//       </button>
//       <div
//         className={`overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
//       >
//         <div className="pt-2 text-[#494B4D] sm:text-lg text-[10px] font-medium">
//           {answer}
//         </div>
//       </div>
//       <hr className="border-[#494B4D] mt-3" />
//     </div>
//   );
// };

// const AccordionWithDash: React.FC<AccordionProps> = ({ title, answer }) => {
//   const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

//   return (
//     <div className="mb-4 py-2 text-[#494B4D] rounded-md">
//       <button
//         onClick={() => setAccordionOpen(!accordionOpen)}
//         className="flex justify-between w-full items-center"
//       >
//         <span className="sm:text-2xl text-[10px]">{title}</span>
//         {accordionOpen ? <RiSubtractLine style={{color: 'white'}} /> : <RiArrowDownSLine style={{color: 'white'}} size={30} />}
//       </button>
//       <div
//         className={`overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
//       >
//         <div className="pt-2 text-[#494B4D] sm:text-lg text-[10px] font-medium">
//           {answer}
//         </div>
//       </div>
//       {!accordionOpen && <hr className="border-[#494B4D] mt-3" />}
//     </div>
//   );
// };

// export { Accordion, AccordionWithDash };
