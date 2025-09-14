import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, User, Bell, Shield, Wifi, Moon, Globe, HelpCircle, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
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
          <h1 className="text-2xl font-bold">Configurações</h1>
        </div>

        {/* Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Perfil do Usuário</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-gradient-to-br from-smart-blue to-smart-purple rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">João Silva</h3>
                <p className="text-sm text-muted-foreground">joao.silva@email.com</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Editar Perfil
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Notificações</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Alertas de Energia</p>
                <p className="text-sm text-muted-foreground">Notificar sobre picos de consumo</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notificações Push</p>
                <p className="text-sm text-muted-foreground">Receber notificações no dispositivo</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Relatórios Semanais</p>
                <p className="text-sm text-muted-foreground">Receber resumo semanal por email</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Segurança</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Autenticação Biométrica</p>
                <p className="text-sm text-muted-foreground">Usar digital/Face ID</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Button variant="outline" className="w-full">
              Alterar Senha
            </Button>
            <Button variant="outline" className="w-full">
              Dispositivos Conectados
            </Button>
          </CardContent>
        </Card>

        {/* System Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Sistema</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Modo Escuro</p>
                <p className="text-sm text-muted-foreground">Tema escuro automático</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Modo Economia</p>
                <p className="text-sm text-muted-foreground">Otimizar para economia de energia</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Button variant="outline" className="w-full">
              <Globe className="h-4 w-4 mr-2" />
              Idioma: Português
            </Button>
          </CardContent>
        </Card>

        {/* Network */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Wifi className="h-5 w-5" />
              <span>Rede</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Wi-Fi: Casa_Smart</p>
                <p className="text-sm text-muted-foreground">Conectado • Sinal forte</p>
              </div>
              <div className="text-smart-green">●</div>
            </div>
            <Button variant="outline" className="w-full">
              Configurar Rede
            </Button>
          </CardContent>
        </Card>

        {/* Help & Support */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <HelpCircle className="h-5 w-5" />
              <span>Ajuda & Suporte</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              Central de Ajuda
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Contatar Suporte
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Sobre o App
            </Button>
          </CardContent>
        </Card>

        {/* Logout */}
        <Card>
          <CardContent className="pt-6">
            <Button variant="destructive" className="w-full">
              <LogOut className="h-4 w-4 mr-2" />
              Sair da Conta
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;