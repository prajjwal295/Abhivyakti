import React from "react";
import { TbMoodSad2 } from "react-icons/tb";
import { RiFocus3Fill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

export default function DashboardStatsGrid() {
  return (
    <div className="flex gap-4">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Students
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">40</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <TbMoodSad2 className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Not Interested
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">10</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <RiFocus3Fill className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Focused</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">20</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <FaHandsHelping className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Help Required
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">10</strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
