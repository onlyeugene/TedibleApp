"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Action from "@/assets/backgroundImages/order 2 func.png"; // Ensure the path is correct

interface Order {
  id: number;
  menu: string;
  date: string;
  amount: string;
  status: string;
}

const OrderHistory: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
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
      status: "Pending",
    },
    {
      id: 24645,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "Completed",
    },
    {
      id: 24646,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "Completed",
    },
    {
      id: 24647,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "Completed",
    },
    {
      id: 24648,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "Cancelled",
    },
    {
      id: 24649,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "Completed",
    },
    {
      id: 24650,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "Cancelled",
    },
    {
      id: 24651,
      menu: "Chicken Curry Special with Cucumber",
      date: "9/4/12 10:00am",
      amount: "3000",
      status: "Cancelled",
    }
  ]);

  const [visibleDropdownId, setVisibleDropdownId] = useState<number | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleDropdown = (id: number) => {
    setVisibleDropdownId((prevId) => (prevId === id ? null : id));
  };

  const closeDropdown = () => {
    setVisibleDropdownId(null);
  };

  const handleAction = (action: string, id: number) => {
    console.log(`Performing ${action} for order ID: ${id}`);
    // Example actions
    if (action === "Reorder") {
      // alert(`Reordering order ID: ${id}`);
    } else if (action === "Modify") {
      // alert(`Modifying order ID: ${id}`);
    } else if (action === "Cancel") {
      // alert(`Cancelling order ID: ${id}`);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === id ? { ...order, status: "Cancelled" } : order
        )
      );
    }
    closeDropdown(); // Close the dropdown after performing the action
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
        closeDropdown();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const filteredOrders = orders.filter((order) =>
    order.menu.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-[900px] max-w-[910px] p-4 rounded-lg max-auto">
      <h1 className="text-[24px] leading-[32.68px] font-[opensans] ml-4 text-[#0C513F] mb-4">
        Order History
      </h1>

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

        <table className="w-full bg-[#FFFFFF]">
          <thead className="bg-[#0C513F] text-[#FFFFFF] h-[42px] rounded-[6px]">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Menu</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-4 py-4 font-[opensans]">#{order.id}</td>
                <td className="px-4 py-4 font-[opensans] text-[11.93px]">
                  {order.menu}
                </td>
                <td className="px-4 py-4 font-[opensans]">{order.date}</td>
                <td className="px-4 py-4 font-[opensans]">₦{order.amount}</td>
                <td
                  className={`px-4 py-2 font-[opensans] ${
                    order.status.toLowerCase() === "completed"
                      ? "text-[#39BC0B]"
                      : order.status.toLowerCase() === "pending"
                      ? "text-[#F8BD00]"
                      : order.status.toLowerCase() === "cancelled"
                      ? "text-[#BD3826]"
                      : ""
                  }`}
                >
                  {order.status}
                </td>
                <td className="relative px-4 py-2 dropdown">
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

                  {visibleDropdownId === order.id && (
                    <div className="absolute right-0 left-10 top-0 rounded-md shadow-lg z-10 bg-white dropdown w-36">
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
                            className="block px-4 py-2 text-left hover:bg-gray-100"
                          >
                            Modify
                          </button>
                          <button
                            onClick={() => handleAction("Cancel", order.id)}
                            className="block px-4 py-2 text-left hover:bg-gray-100"
                          >
                            Cancel
                          </button>
                        </>
                      )}
                      {order.status === "Cancelled" && (
                        <button
                          onClick={() => handleAction("Reorder", order.id)}
                          className="block px-4 py-2 text-left hover:bg-gray-100"
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
