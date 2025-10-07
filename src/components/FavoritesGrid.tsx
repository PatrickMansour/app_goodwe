import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  AirVent, 
  Tv, 
  Mic, 
  Car, 
  Lightbulb, 
  Thermometer,
  WashingMachine,
  Refrigerator 
} from "lucide-react";

interface Device {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  status: "on" | "off";
  info?: string;
}

const devices: Device[] = [
  { id: "ac", name: "Ar Condicionado", icon: AirVent, status: "on", info: "22°C" },
  { id: "tv", name: "Smart TV", icon: Tv, status: "on", info: "Netflix" },
  { id: "alexa", name: "Alexa", icon: Mic, status: "on", info: "Ouvindo" },
  { id: "car", name: "Carregador EV", icon: Car, status: "off", info: "85%" },
  { id: "light", name: "Luzes Sala", icon: Lightbulb, status: "on", info: "Dim 60%" },
  { id: "thermo", name: "Aquecedor", icon: Thermometer, status: "off", info: "18°C" },
  { id: "washer", name: "Lavadora", icon: WashingMachine, status: "on", info: "2h restante" },
  { id: "fridge", name: "Geladeira", icon: Refrigerator, status: "on", info: "4°C" },
];

const FavoritesGrid = () => {
  const navigate = useNavigate();

  return (
  <div className="bg-black rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center">
          ⭐ Favoritos
        </h2>
  <Badge variant="secondary" className="bg-red-600 text-white">
          {devices.filter(d => d.status === "on").length} ativos
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {devices.map((device) => {
          const IconComponent = device.icon;
          return (
            <Card 
              key={device.id} 
              className="cursor-pointer transition-all duration-300 hover:scale-105 border-0 bg-white shadow-lg"
              onClick={() => navigate('/controls')}
            >
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="p-3 rounded-full transition-colors bg-red-600 text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-black leading-tight">
                      {device.name}
                    </h3>
                    {device.info && (
                      <p className="text-xs mt-1 text-red-600">
                        {device.info}
                      </p>
                    )}
                  </div>
                  <div className="h-2 w-2 rounded-full bg-red-600" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesGrid;