import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Zap, Sun } from "lucide-react";

const UserProfile = () => {
  return (
  <div className="bg-red-600 rounded-2xl p-6 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12 border-2 border-white">
            <AvatarImage src="/placeholder.svg" alt="Usuário" />
            <AvatarFallback className="bg-white text-red-600 font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">João Silva</h2>
            <p className="text-white/80 text-sm">Casa Conectada</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="bg-black text-white hover:bg-white/30">
            <Zap className="h-3 w-3 mr-1" />
            75%
          </Badge>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="flex items-center justify-center">
              <Sun className="h-4 w-4 mr-1 text-white" />
              <span className="text-2xl font-bold">2.4</span>
              <span className="text-sm text-white/80 ml-1">kW</span>
            </div>
            <p className="text-xs text-white/70">Energia Solar</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center">
              <Zap className="h-4 w-4 mr-1 text-white" />
              <span className="text-2xl font-bold">1.8</span>
              <span className="text-sm text-white/80 ml-1">kW</span>
            </div>
            <p className="text-xs text-white/70">Consumo</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-white">+R$ 45</p>
          <p className="text-xs text-white/70">Economia hoje</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;