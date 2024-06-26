import HeroSection from "@/components/Layout/HeroSection";
import RecentActivities from "@/components/recentActivities/RecentActivities";
import AllTokens from "@/components/tokensGrid/AllTokens";
import ForSale from "@/components/tokensGrid/ForSale";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between text-gray-200 dark:text-gray-800 static">
      <HeroSection />
      <div className="dark:bg-black bg-secondary-100 w-screen sticky top-0 px-7 text-black dark:text-gray-200">
        <RecentActivities />
        <div className="py-10 flex flex-col gap-y-10">
          <ForSale />
          <AllTokens />
        </div>
      </div>
    </main>
  );
}
