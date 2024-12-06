"use client"

import { useQuery } from "@tanstack/react-query";
import { StudioPerformance } from "./types/studio-performance";

export default function Home() {

  const fetchPerformanceData = async () => {
    const res = await fetch("/api/performance");
    if (!res.ok) {
      throw new Error("Error fetching studio performance data");
    }
    return res.json()
  }

  const { 
    data,
    error,
    isLoading
  } = useQuery<StudioPerformance[]>({
    queryKey: ['perfomanceData'],
    queryFn: fetchPerformanceData
  })

  const calculateCPL = (performance: StudioPerformance) => {
    const totalLeads = performance.fb_ad_lead + performance.non_fb_ad_lead;
    return totalLeads > 0 ? performance.fb_budget / totalLeads : 0;
  };

  const calculateChurn = (performance: StudioPerformance) => {
    const pausedMembers = parseFloat(performance.paused_members || "0");
    const averageMembers = parseFloat(performance.average_members || "0");
    return averageMembers > 0 ? (pausedMembers / averageMembers) * 100 : 0;
  };

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Ooops.. Something went wrong.</p>
  }

  if (!data) {
    return <p>No data available.</p>
  }
  
  return ( 
    <main className="px-4 py-8">
    <h1 className="text-3xl font-bold pl-4 sticky mb-8">Studio Performance Dashboard</h1>
    <table className="w-full border-collapse bg-white shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-4">Studio ID</th>
            <th className="border p-4">CPL (AUD)</th>
            <th className="border p-4">Churn (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((performance) => {
            const cpl = calculateCPL(performance);
            const churn = calculateChurn(performance);

            return (
              <tr key={performance.id} className="odd:bg-white even:bg-gray-50">
                <td className="border p-4">{performance.studio_id}</td>
                <td className="border p-4">{cpl.toFixed(2)}</td>
                <td className="border p-4">{churn.toFixed(2)}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
   
    </main>
  );
}
