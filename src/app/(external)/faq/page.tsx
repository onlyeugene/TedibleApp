
import Accordion from "@/components/ui/accordion";
import React from "react";

interface FaqSectionProps {
  title: string;
  content: React.ReactNode;
}

const FaqSection: React.FC<FaqSectionProps> = ({ title, content }) => (
  <div className="sm:px-10 w-full px-[2rem] flex flex-col sm:gap-10 gap-5 py-[2rem] overflow-hidden">
    <div className="relative">
      <h1 className="text-[#242629] sm:text-[45px] text-[14px] font-bold">
        {title}
      </h1>
      <span className="sm:border-b-2 border-b-[1px] border-[#242629] inline-block sm:w-[40.5rem] w-[12.5rem] absolute sm:top-[3.8rem] top-[1rem]" />
    </div>
    {content}
  </div>
);

interface GuideProps {
  text: string;
}

const Guide: React.FC<GuideProps> = ({ text }) => (
  <div className="flex w-full px-[.5rem] py-2 rounded-sm">
    <h1 className="font-bold sm:text-[24px] text-[10px]">
      {text}
      <hr className="border-[#9f9f9f] mt-2" />
    </h1>
  </div>
);

const Faq: React.FC = () => {
  return (
    <div className="w-full">
      <div className="faqBg bg-center">
        <h1 className="sm:text-[187px] text-[55.2px] px-[4rem] py-[2rem] text-[#ffffff] font-semibold">
          FAQ
        </h1>
      </div>

      <FaqSection
        title="Frequently Asked Questions"
        content={
          <div className="text-white w-full text-2xl font-semibold ">
            <Accordion
              title="How do I register as a vendor?"
              answer="To register as a vendor, please visit our website and fill out the vendor registration form."
            />
            <Accordion
              title="How do I add new menu items?"
              answer="To add new menu items, please log in to your account and navigate to the Menu Page."
            />
            <Accordion
              title="How do I manage incoming orders?"
              answer='To manage incoming orders, please log in to your account and navigate to the "orders page".'
            />
            <Accordion
              title="How do I edit my restaurant profile?"
              answer='To edit your restaurant profile, please log in to your account and navigate to the "Profile Page".'
            />
            <Accordion
              title="How do I view my sales report?"
              answer='To view your sales report, please log in to your account and navigate to the "Analytics Page".'
            />
          </div>
        }
      />

      <FaqSection
        title="Troubleshooting Guides"
        content={
          <div className="w-full grid sm:gap-[2rem] gap-3 text-[#494B4D]">
            <Guide text="If you can't find the order you're supposed to deliver, please contact our support team via email or phone." />
            <Guide text="If you can't reach the customer for delivery, please contact our support team or the customer directly to arrange an alternative delivery time or address." />
            <Guide text="If you encounter any technical issues while using the app, please restart the app or contact our support team for assistance." />
            <Guide text="If you need to report a problem with a customer, please contact our support team with details of the incident." />
            <Guide text="If you experience issues with order notification, please check your app settings and ensure that notifications are enabled. If the issue persists, please contact our support team for assistance." />
            <Guide text="If you encounter any issues with customer ratings or feedback, please review our vendor policies and guidelines or contact our support team for further clarification." />
            <Guide text="If you have any questions or concerns regarding our policies, payment terms, or delivery procedures, please review our vendor agreement or contact our support team for assistance." />
          </div>
        }
      />
    </div>
  );
};

export default Faq;
