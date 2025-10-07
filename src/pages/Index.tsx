import UserProfile from "@/components/UserProfile";
import DashboardButton from "@/components/DashboardButton";
import FavoritesGrid from "@/components/FavoritesGrid";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* User Profile Section */}
        <UserProfile />
        
        {/* Dashboard Button */}
        <DashboardButton />
        
        {/* Favorites Grid */}
        <FavoritesGrid />
      </div>
      
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;