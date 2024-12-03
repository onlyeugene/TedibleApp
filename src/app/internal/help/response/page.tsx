import React from "react";

interface ResponseItem {
  id: number;
  title: string;
  subject: string;
  content: string;
  response: string;
}
export const response: ResponseItem[] = [
  {
      id: 1,
      title: 'Response for the 29th of October, 2025',
      subject: ' Lorem ipsum dolor sit amet consectetur.',
      content: 'Lorem ipsum dolor sit amet consectetur. Non tincidunt mollis varius felis neque egestas diam nibh vestibulum. Adipiscing aliquet tristique potenti senectus sit sit molestie vitae. ',
      response: 'Lorem ipsum dolor sit amet consectetur. Non tincidunt mollis varius felis neque egestas diam nibh vestibulum. Adipiscing aliquet tristique potenti senectus sit sit molestie vitae. '
  },
  
  {
      id: 2,
      title: 'Response for the 30th of November, 2025',
      subject: ' Lorem ipsum dolor sit amet consectetur.',
      content: 'Lorem ipsum dolor sit amet consectetur. Non tincidunt mollis varius felis neque egestas diam nibh vestibulum. Adipiscing aliquet tristique potenti senectus sit sit molestie vitae. ',
      response: 'Lorem ipsum dolor sit amet consectetur. Non tincidunt mollis varius felis neque egestas diam nibh vestibulum. Adipiscing aliquet tristique potenti senectus sit sit molestie vitae. '
  },
  {
      id: 3,
      title: 'Response for the 31st of November, 2025',
      subject: ' Lorem ipsum dolor sit amet consectetur.',
      content: 'Lorem ipsum dolor sit amet consectetur. Non tincidunt mollis varius felis neque egestas diam nibh vestibulum. Adipiscing aliquet tristique potenti senectus sit sit molestie vitae. ',
      response: 'Lorem ipsum dolor sit amet consectetur. Non tincidunt mollis varius felis neque egestas diam nibh vestibulum. Adipiscing aliquet tristique potenti senectus sit sit molestie vitae. '
  },
  {
      id: 4,
      title: 'Response for the 22nd of December, 2025',
      subject: ' Lorem ipsum dolor sit amet consectetur.',
      content: 'Lorem ipsum dolor sit amet consectetur. Non tincidunt mollis varius felis neque egestas diam nibh vestibulum. Adipiscing aliquet tristique potenti senectus sit sit molestie vitae. ',
      response: 'Lorem ipsum dolor sit amet consectetur. Non tincidunt mollis varius felis neque egestas diam nibh vestibulum. Adipiscing aliquet tristique potenti senectus sit sit molestie vitae. '
  },

]
const Response = () => {
  return (
    <>
      <div className="scrollbar-custom h-[616px] overflow-y-scroll scrollbar-thumb-blue-500 scrollbar-track-gray-300">
        <div className="w-full grid gap-[42px] ">
        
          {response.map((res) => (
            <div
              key={res.id}
              className="border border-[#CED4DA] rounded-[8px] px-6 py-8 grid gap-4"
            >
                {/* Subject */}
              <div className="grid gap-[6px] ">
                <div className="flex gap-2 items-center">
                  <div className="bg-tertiary w-2 h-2 rounded-full text-tertiary"></div>
                  <h4 className="text-nowrap text-tertiary">{res?.title}</h4>
                </div>

                <p className="font-bold">
                  Subject: <span className="font-normal">{res?.subject}</span>
                </p>

                <p className="max-w-[100ch]">{res?.content}</p>
              </div>

              {/* Border */}
              <div className="bg-[#DEE9F1] w-full h-[1px]"></div>

              {/* Admin Response */}
              <div>
                <h5 className="font-bold">Admin Response</h5>
                <p className="max-w-[100ch]">{res?.response}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Response;
