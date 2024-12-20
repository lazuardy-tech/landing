import Link from "next/link";
import { Database, Receipt, RefreshCw, Settings } from "lucide-react";

export default function Problem() {
  return (
    <div className="w-full bg-neutral-950 mt-20 lg:mt-40 py-20 lg:py-40">
      <div className="container px-12 lg:px-16">
        <div className="flex flex-col text-center items-center">
          <div className="flex flex-col">
            <div className="max-w-sm md:max-w-lg lg:max-w-xl mx-auto text-3xl md:text-4xl lg:text-5xl font-light mb-8">
              We know you&apos;re tired to grow your business
            </div>
            <div className="text-md font-light text-gray-400 text-center mb-8 lg:mb-16">
              <div className="max-w-md md:max-w-xl lg:max-w-lg mx-auto mb-2">
                Statistic says, 90% of startups that exist are failing, while
                18.4% business tend to fail at the first year. —{" "}
                <Link
                  href="https://luisazhou.com/blog/businesses-that-fail/"
                  target="_blank"
                  className="text-white font-semibold hover:underline"
                >
                  luisazhou.com
                </Link>
              </div>
              <div className="max-w-md md:max-w-xl lg:max-w-xl mx-auto">
                We know your journey is tough, and growth can feel exhausting
                for now.
              </div>
            </div>
            <div className="mb-8 lg:mb-16">
              <Stat />
            </div>
            <div className="text-md font-light text-gray-400 text-center max-w-lg lg:max-w-xl mx-auto">
              Thus, let us handle the hard work for you, so you don&apos;t have
              to. You can focus on what you do best for the next step.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Stat() {
  return (
    <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-8 lg:px-16">
      <div className="flex gap-0 flex-col justify-between p-6 border border-zinc-800">
        <Settings className="w-6 h-6 mb-10 text-primary" />
        <div className="text-2xl lg:text-3xl max-w-xl text-left font-regular text-white flex flex-row gap-4 items-end">
          74%
        </div>
        <div className="text-md text-light text-gray-300 text-left mt-2">
          Business with Operational Bottlenecks
        </div>
      </div>
      <div className="flex gap-0 flex-col justify-between p-6 border border-zinc-800">
        <Database className="w-6 h-6 mb-10 text-primary" />
        <div className="text-2xl lg:text-3xl max-w-xl text-left font-regular text-white flex flex-row gap-4 items-end">
          68%
        </div>
        <div className="text-md text-light text-gray-300 text-left mt-2">
          Business Struggle to Use Data Effectively
        </div>
      </div>
      <div className="flex gap-0 flex-col justify-between p-6 border border-zinc-800">
        <Receipt className="w-6 h-6 mb-10 text-primary" />
        <div className="text-2xl lg:text-3xl max-w-xl text-left font-regular text-white flex flex-row gap-4 items-end">
          60%
        </div>
        <div className="text-md text-light text-gray-300 text-left mt-2">
          Higher Cost to Performance Average Ratio
        </div>
      </div>
      <div className="flex gap-0 flex-col justify-between p-6 border border-zinc-800">
        <RefreshCw className="w-6 h-6 mb-10 text-primary" />
        <div className="text-2xl lg:text-3xl max-w-xl text-left font-regular text-white flex flex-row gap-4 items-end">
          40%
        </div>
        <div className="text-md text-light text-gray-300 text-left mt-2">
          Hours a Week Spent Doing Repetitive Jobs
        </div>
      </div>
    </div>
  );
}
