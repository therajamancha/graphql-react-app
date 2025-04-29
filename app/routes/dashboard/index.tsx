import React from "react";
import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Dashboard = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-card p-6 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h2 className="text-sm font-medium">Total Customers</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="flex items-center pt-4">
            <div className="text-2xl font-bold">2,340</div>
            <div className="ml-2 text-sm text-green-500">+12%</div>
          </div>
        </div>

        <div className="rounded-xl bg-card p-6 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h2 className="text-sm font-medium">Active This Month</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </div>
          <div className="flex items-center pt-4">
            <div className="text-2xl font-bold">1,274</div>
            <div className="ml-2 text-sm text-green-500">+8%</div>
          </div>
        </div>

        <div className="rounded-xl bg-card p-6 shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h2 className="text-sm font-medium">Customer Satisfaction</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M2 12h20" />
            </svg>
          </div>
          <div className="flex items-center pt-4">
            <div className="text-2xl font-bold">98%</div>
            <div className="ml-2 text-sm text-green-500">+2%</div>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Recent Customer Activity</h2>
          <div className="flex items-center space-x-2">
            <button className="rounded-lg border bg-background px-3 py-1 text-sm">
              Last 7 days
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5 text-primary"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium">New customer registered</p>
              <p className="text-sm text-muted-foreground">2 hours ago</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5 text-primary"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium">
                Customer activity spike detected
              </p>
              <p className="text-sm text-muted-foreground">5 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
