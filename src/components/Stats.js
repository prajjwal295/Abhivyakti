import React from "react";
import DashboardStatsGrid from "./DashboardStatsGrid";
import TransactionChart from "./TransationChart";
import RecentOrders from "./RecentOrders";
import BuyerProfilePieChart from "./BuyerProfilePieChart";
import { useSelector } from "react-redux";

const Stats = () => {
  const user = useSelector((store) => store.profile.user);
  console.log({ user });
  return user?.accountType == "Student" ? (
    <>
      <div className="text-white text-3xl">
        This Route is Protocted for Instructor. Contact Instructor for Your
        Progress
      </div>
    </>
  ) : (
    <div>
      <span className=" text-3xl font-bold text-white mb-10">Stats</span>
      <div className="flex flex-col gap-4">
        <DashboardStatsGrid />
        <div className="flex flex-row gap-4 w-full">
          <TransactionChart />
          <BuyerProfilePieChart />
        </div>
        {/* <div className="flex flex-row gap-4 w-full">
          <RecentOrders />
        </div> */}
      </div>
    </div>
  );
};

export default Stats;
