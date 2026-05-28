"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AnalyticsPage() {
  const [campaigns, setCampaigns] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("campaigns") || "[]"
    );

    setCampaigns(stored);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-6xl font-black text-red-500">
              VIRAL ANALYTICS
            </h1>

            <p className="text-zinc-400 mt-2">
              Internal Red Bull Autonomous Marketing Dashboard
            </p>
          </div>

          <Link
            href="/"
            className="bg-zinc-800 px-6 py-3 rounded-xl hover:bg-zinc-700"
          >
            Back
          </Link>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-zinc-800">
          <table className="w-full text-left">
            <thead className="bg-zinc-900 text-red-400">
              <tr>
                <th className="p-4">Challenge</th>
                <th className="p-4">Influencer Plan</th>
                <th className="p-4">Controversy</th>
                <th className="p-4">Views</th>
              </tr>
            </thead>

            <tbody>
              {campaigns.map((campaign, index) => (
                <tr
                  key={index}
                  className="border-t border-zinc-800 hover:bg-zinc-900/50"
                >
                  <td className="p-4 font-semibold text-zinc-200 max-w-sm">
                    {campaign.title}
                  </td>

                  <td className="p-4 text-zinc-400 max-w-md">
                    {campaign.influencer}
                  </td>

                  <td className="p-4 text-orange-400">
                    {campaign.controversy}
                  </td>

                  <td className="p-4 text-green-400 font-bold">
                    {campaign.views}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
