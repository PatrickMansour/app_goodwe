import { Button } from "@/components/ui/button";
import { MessageCircle, Grid3X3, Settings } from "lucide-react";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-border/50 px-4 py-3 shadow-soft">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <Button
          variant="ghost"
          size="lg"
          className="flex-1 flex-col h-16 space-y-1 hover:bg-smart-purple/10"
        >
          <div className="bg-gradient-to-br from-smart-purple to-smart-blue p-2 rounded-xl">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <span className="text-xs font-medium">Assistente</span>
        </Button>

        <Button
          variant="ghost"
          size="lg"
          className="flex-1 flex-col h-16 space-y-1 hover:bg-smart-green/10"
        >
          <div className="bg-gradient-to-br from-smart-green to-smart-blue p-2 rounded-xl">
            <Grid3X3 className="h-6 w-6 text-white" />
          </div>
          <span className="text-xs font-medium">Controles</span>
        </Button>

        <Button
          variant="ghost"
          size="lg"
          className="flex-1 flex-col h-16 space-y-1 hover:bg-muted/50"
        >
          <div className="bg-gradient-to-br from-muted-foreground to-foreground p-2 rounded-xl">
            <Settings className="h-6 w-6 text-white" />
          </div>
          <span className="text-xs font-medium">Configurações</span>
        </Button>
      </div>
    </div>
  );
};

export default BottomNavigation;