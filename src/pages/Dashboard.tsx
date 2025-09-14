import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Zap, Home, Leaf, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/')}
            className="h-10 w-10"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Dashboard Energético</h1>
        </div>

        {/* Energy Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-smart-blue to-smart-purple border-0 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Energia Gerada Hoje</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">24.7 kWh</div>
              <p className="text-white/80 text-sm">+12% vs ontem</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-yellow border-0 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2">
                <Home className="h-5 w-5" />
                <span>Consumo Atual</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">8.2 kW</div>
              <p className="text-white/80 text-sm">Economia de R$ 45</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-orange border-0 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2">
                <Leaf className="h-5 w-5" />
                <span>CO2 Evitado</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12.5 kg</div>
              <p className="text-white/80 text-sm">Este mês</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-smart-green to-smart-blue border-0 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Eficiência</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">92%</div>
              <p className="text-white/80 text-sm">Sistema funcionando bem</p>
            </CardContent>
          </Card>
        </div>

        {/* Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Produção vs Consumo (24h)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Gráfico de energia em tempo real</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;