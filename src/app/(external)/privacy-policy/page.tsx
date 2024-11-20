import React from "react";

const PrivacyPolicy: React.FC = () => {
  const privacyItems = [
    {
      title: "Account Security",
      description:
        "Set a strong password and enable two-factor authentication for added protection.",
    },
    {
      title: "Order History",
      description: "Review, edit, or delete your order history at any time.",
    },
    {
      title: "Data Removal",
      description:
        "If you decide to delete your account, we will promptly delete all your personal data.",
    },
    {
      title: "Data Transparency",
      description:
        "You can always view our Privacy Policy or contact our Support Team for more information about how we handle your data.",
    },
    {
      title: "Access Control",
      description:
        "You can manage which devices have access to your account and immediately disable access if you suspect unauthorized activity.",
    },
    {
      title: "Responsible Data Practices",
      description:
        "We collect only the data necessary to provide you with the best possible experience, and we will never sell or share your data without your consent.",
    },
    {
      title: "Fraud Prevention",
      description:
        "We employ advanced anti-fraud measures to protect your financial information and prevent unauthorized transactions.",
    },
  ];

  return (
    <div className="w-full bg-gray-100">
      <div className="privacy-bg bg-center">
        <h1 className="text-3xl font-bold  mb-4 flex justify-center text-white py-[7rem]">
          PRIVACY POLICY
        </h1>
      </div>
      <div className="w-full p-6 sm:p-12 text-gray-800">
        <div className="mb-8">
          <p className="text-[29px]">
            At Tedible, we are committed to protecting your privacy and
            security. We offer the following features to safeguard your
            information and maintain your peace of mind.
          </p>
          <hr className="border-[#aaaaaa] mt-7" />
        </div>

        <div className="space-y-6">
          {privacyItems.map((item, index) => (
            <p key={index} className="text-[25.5px]">
              <span className="text-[29px] font-semibold">{item.title}</span>:{" "}
              {item.description}
            </p>
          ))}
        </div>
        <hr className="border-[#aaaaaa] mt-7" />

        <p className="mt-8 text-[29px]  text-[#494B4D]">
          Thank you for trusting us with your information. We value your privacy
          and will continue to maintain the highest standards of security and
          transparency.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
