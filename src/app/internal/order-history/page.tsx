"use client";
import React, { useState } from "react";
import Image from "next/image";
import Action from "@/assets/backgroundImages/order 2 func.png" // Ensure the path is correct

interface Order {
  id: number;
  menu: string;
  date: string;
  amount: string;
  status: string;
}

const OrderHistory: React.FC = () => {
  const [orders] = useState<Order[]>([
    {
      id: 24643,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "Pending",
    },
    {
      id: 24644,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "pending",
    },
    {
      id: 24645,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "Complete",
    },
    {
      id: 24645,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "Complete",
    },
    {
      id: 24645,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "Complete",
    },
    {
      id: 24645,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "Cancelled",
    },
    {
      id: 24645,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "Complete",
    },
    {
      id: 24645,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "Cancelled",
    },
    {
      id: 24645,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "Cancelled",
    },
  ]);

  const [visibleDropdownId, setVisibleDropdownId] = useState<number | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleDropdown = (id: number) => {
    setVisibleDropdownId((prevId) => (prevId === id ? null : id));
  };

  const handleAction = (action: string, id: number) => {
    console.log(`Performing ${action} for order ID: ${id}`);
    // Add specific logic for each action here
  };

  // const filteredOrders = orders.filter((order) =>
  //   order.menu.toLowerCase().includes(searchQuery.toLowerCase())
  // );


  return (
    <div className="w-[900px] max-w-[910px] p-4 rounded-lg max-auto">
      {/* Header Section */}
      <h1 className="text-[24px] leading-[32.68px] font-[opensans] ml-4 text-[#0C513F] mb-4">
        Order History
      </h1>

      

      {/* Table Section */}
      
      <div className="bg-[#FFFFFF] shadow overflow-hidden w-[800px] h-[676px] p-6">
      <div className="mb-4">
          <input
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-[400px] px-4 py-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-[#0C513F]"
          />
        </div>
        {/* Table */}
        <table className="w-full bg-[#FFFFFF]">
          <thead className="bg-[#0C513F] text-[#FFFFFF] h-[42px] rounded-[6px]">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Menu</th>
              <th className="px-4 py-2 text-left ">Date</th>
              <th className="px-4 py-2 text-left ">Amount</th>
              <th className="px-4 py-2 text-left ">Status</th>
              <th className="px-4 py-2 text-left ">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-4 py-4 font-[opensans]">#{order.id}</td>
                <td className="px-4 py-4 font-[opensans] text-[11.93px]">
                  {order.menu}
                </td>
                <td className="px-4 py-4 font-[opensans] ">{order.date}</td>
                <td className="px-4 py-4 font-[opensans] ">₦{order.amount}</td>
                <td
                  className={`px-4 py-2 font-[opensans]  ${
                    order.status.toLowerCase() === "complete"
                    ? "text-[#39BC0B]" // Complete color
                    : order.status.toLowerCase() === "pending"
                    ? "text-[#F8BD00]" // Pending color
                    : order.status.toLowerCase() === "cancelled"
                    ? "text-[#BD3826]" // Cancelled color
                    : ""
                  }`}
                >
                  {order.status}
                </td>
                <td className="relative px-4 py-2">
                  {/* Action Button */}
                  <button
                    onClick={() => toggleDropdown(order.id)}
                    className="flex items-center gap-2"
                  >
                    <Image
                      src={Action}
                      alt="Action"
                      width={20}
                      height={20}
                      className="cursor-pointer"
                    />
                  </button>

                  {/* Dropdown */}
                  {visibleDropdownId === order.id && (
                    <div className="absolute right-0 left-0 top-full rounded-md shadow-lg z-10">
                      {order.status === "Completed" && (
                        <button
                          onClick={() => handleAction("Reorder", order.id)}
                          className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        >
                          Reorder
                        </button>
                      )}
                      {order.status === "Pending" && (
                        <>
                          <button
                            onClick={() => handleAction("Modify", order.id)}
                            className="block top-2  px-4 py-2 text-left hover:bg-gray-100"
                          >
                            Modify
                          </button>
                          <button
                            onClick={() => handleAction("Cancel", order.id)}
                            className="block  text-left hover:bg-gray-100"
                          >
                            Cancel
                          </button>
                        </>
                      )}
                      {order.status === "Cancelled" && (
                        <button
                          onClick={() => handleAction("Reorder", order.id)}
                          className="block  text-left"
                        >
                          Reorder
                        </button>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;

