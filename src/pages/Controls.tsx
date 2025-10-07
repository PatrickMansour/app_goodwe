import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, AirVent, Tv, Lightbulb, Car, Zap, Volume2, Thermometer, Wifi } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Controls = () => {
  const navigate = useNavigate();
  const [devices, setDevices] = useState({
    ac: { on: true, temp: 22 },
    tv: { on: false, volume: 50 },
    lights: { on: true, brightness: 80 },
    charger: { on: false, power: 0 },
    alexa: { on: true, volume: 30 },
    solar: { on: true, efficiency: 92 },
    router: { on: true, signal: 98 },
    thermostat: { on: true, temp: 24 }
  });

  const toggleDevice = (device: string) => {
    setDevices(prev => ({
      ...prev,
      [device]: { ...prev[device as keyof typeof prev], on: !prev[device as keyof typeof prev].on }
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6 space-y-6 bg-white rounded-xl">
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
          <h1 className="text-2xl font-bold">Controles da Casa</h1>
        </div>

        {/* Device Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Ar Condicionado */}
                  <Card className="bg-white border border-black">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AirVent className="h-5 w-5 text-smart-blue" />
                  <span>Ar Condicionado</span>
                </div>
                <Switch 
                  checked={devices.ac.on} 
                  onCheckedChange={() => toggleDevice('ac')}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Temperatura</span>
                  <span>{devices.ac.temp}°C</span>
                </div>
                <Slider 
                  value={[devices.ac.temp]} 
                  onValueChange={([value]) => setDevices(prev => ({
                    ...prev, 
                    ac: {...prev.ac, temp: value}
                  }))}
                  max={30} 
                  min={16} 
                  step={1}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* TV */}
                  <Card className="bg-white border border-black">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                          <Tv className="h-5 w-5 text-black" />
                  <span>Smart TV</span>
                </div>
                <Switch 
                  checked={devices.tv.on} 
                  onCheckedChange={() => toggleDevice('tv')}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Volume</span>
                  <span>{devices.tv.volume}%</span>
                </div>
                <Slider 
                  value={[devices.tv.volume]} 
                  onValueChange={([value]) => setDevices(prev => ({
                    ...prev, 
                    tv: {...prev.tv, volume: value}
                  }))}
                  max={100} 
                  min={0} 
                  step={5}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* Luzes */}
                  <Card className="bg-white border border-black">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                          <Lightbulb className="h-5 w-5 text-red-600" />
                  <span>Luzes Inteligentes</span>
                </div>
                <Switch 
                  checked={devices.lights.on} 
                  onCheckedChange={() => toggleDevice('lights')}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Brilho</span>
                  <span>{devices.lights.brightness}%</span>
                </div>
                <Slider 
                  value={[devices.lights.brightness]} 
                  onValueChange={([value]) => setDevices(prev => ({
                    ...prev, 
                    lights: {...prev.lights, brightness: value}
                  }))}
                  max={100} 
                  min={0} 
                  step={10}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* Carregador */}
                  <Card className="bg-white border border-black">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                          <Car className="h-5 w-5 text-black" />
                  <span>Carregador EV</span>
                </div>
                <Switch 
                  checked={devices.charger.on} 
                  onCheckedChange={() => toggleDevice('charger')}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                {devices.charger.on ? "Carregando..." : "Desconectado"}
              </div>
            </CardContent>
          </Card>

          {/* Alexa */}
                  <Card className="bg-white border border-black">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                          <Volume2 className="h-5 w-5 text-red-600" />
                  <span>Alexa</span>
                </div>
                <Switch 
                  checked={devices.alexa.on} 
                  onCheckedChange={() => toggleDevice('alexa')}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Volume</span>
                  <span>{devices.alexa.volume}%</span>
                </div>
                <Slider 
                  value={[devices.alexa.volume]} 
                  onValueChange={([value]) => setDevices(prev => ({
                    ...prev, 
                    alexa: {...prev.alexa, volume: value}
                  }))}
                  max={100} 
                  min={0} 
                  step={5}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* Sistema Solar */}
                  <Card className="bg-white border border-black">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                          <Zap className="h-5 w-5 text-red-600" />
                  <span>Sistema Solar</span>
                </div>
                <Switch 
                  checked={devices.solar.on} 
                  onCheckedChange={() => toggleDevice('solar')}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                <span>Eficiência: {devices.solar.efficiency}%</span>
              </div>
            </CardContent>
          </Card>

          {/* Roteador */}
                  <Card className="bg-white border border-black">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                          <Wifi className="h-5 w-5 text-black" />
                  <span>Wi-Fi</span>
                </div>
                <Switch 
                  checked={devices.router.on} 
                  onCheckedChange={() => toggleDevice('router')}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                <span>Sinal: {devices.router.signal}%</span>
              </div>
            </CardContent>
          </Card>

          {/* Termostato */}
                  <Card className="bg-white border border-black">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                          <Thermometer className="h-5 w-5 text-red-600" />
                  <span>Termostato</span>
                </div>
                <Switch 
                  checked={devices.thermostat.on} 
                  onCheckedChange={() => toggleDevice('thermostat')}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                <span>Temperatura: {devices.thermostat.temp}°C</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Controls;