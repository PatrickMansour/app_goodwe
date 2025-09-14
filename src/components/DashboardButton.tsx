import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardButton = () => {
  const navigate = useNavigate();

  return (
    <Button 
      size="lg" 
      className="w-full h-20 bg-gradient-yellow hover:opacity-90 text-smart-yellow-light shadow-yellow border-0 transition-all duration-300 hover:scale-[1.02]"
      onClick={() => navigate('/dashboard')}
    >
      <div className="flex items-center space-x-4">
        <div className="bg-white/20 p-3 rounded-full">
          <BarChart3 className="h-8 w-8 text-white" />
        </div>
        <div className="text-left">
          <h3 className="text-xl font-bold text-white">Dashboard</h3>
          <p className="text-white/80 text-sm">Ver estatísticas completas</p>
        </div>
        <TrendingUp className="h-6 w-6 text-white ml-auto" />
      </div>
    </Button>
  );
};

export default DashboardButton;