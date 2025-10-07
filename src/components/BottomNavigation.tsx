import { Button } from "@/components/ui/button";
import { MessageCircle, Grid3X3, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();

  return (
  <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-white px-4 py-3">
  <div className="flex items-center justify-around max-w-md mx-auto">
        <Button
          variant="ghost"
          size="lg"
          className="flex-1 flex-col h-16 space-y-1 hover:bg-red-100"
          onClick={() => navigate('/assistant')}
        >
          <div className="bg-red-600 p-2 rounded-xl">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <span className="text-xs font-medium text-white">Assistente</span>
        </Button>

        <Button
          variant="ghost"
          size="lg"
          className="flex-1 flex-col h-16 space-y-1 hover:bg-red-100"
          onClick={() => navigate('/controls')}
        >
          <div className="bg-red-600 p-2 rounded-xl">
            <Grid3X3 className="h-6 w-6 text-white" />
          </div>
          <span className="text-xs font-medium text-white">Controles</span>
        </Button>

        <Button
          variant="ghost"
          size="lg"
          className="flex-1 flex-col h-16 space-y-1 hover:bg-red-100"
          onClick={() => navigate('/settings')}
        >
          <div className="bg-red-600 p-2 rounded-xl">
            <Settings className="h-6 w-6 text-white" />
          </div>
          <span className="text-xs font-medium text-white">Configurações</span>
        </Button>
      </div>
    </div>
  );
};

export default BottomNavigation;