"use client";

import Sidebar from "../Component/Sidebar";
import { FaEye } from "react-icons/fa";

interface DataItem {
  id: number;
  time: string;
  date: string;
  status: string;
  imageUrl: string;
}

export default function DataView() {
  const data: DataItem[] = [
    {
      id: 1,
      time: "10:30 AM",
      date: "2024-12-05",
      status: "Fatigue",
      imageUrl: "/images/img1.jpg",
    },
    {
      id: 2,
      time: "12:45 PM",
      date: "2024-12-05",
      status: "Fatigue",
      imageUrl: "/images/img2.jpg",
    },
    {
      id: 3,
      time: "02:00 PM",
      date: "2024-12-05",
      status: "Normal",
      imageUrl: "/images/img3.jpg",
    },
  ];

  const handleImageClick = (imageUrl: string) => {
    alert(`Open image: ${imageUrl}`);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-200 min-h-screen flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
          Data Overview
        </h1>

        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-[#071952] text-white">
                <th className="py-3 px-4 text-left">No.</th>
                <th className="py-3 px-4 text-left">Time</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b hover:bg-[#f0f4f8]">
                  <td className="py-3 px-4 text-gray-800">{item.id}</td>
                  <td className="py-3 px-4 text-gray-700">{item.time}</td>
                  <td className="py-3 px-4 text-gray-700">{item.date}</td>
                  <td className="py-3 px-4 text-gray-700">{item.status}</td>
                  <td className="py-3 px-4 text-gray-700">
                    <button
                      onClick={() => handleImageClick(item.imageUrl)}
                      className="text-teal-500 hover:text-teal-700"
                    >
                      <FaEye size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
