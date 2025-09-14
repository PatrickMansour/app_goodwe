import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Mic, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Assistant = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const chatMessages = [
    {
      type: "assistant",
      content: "Olá! Sou sua assistente de casa inteligente. Como posso ajudar você hoje?"
    },
    {
      type: "user", 
      content: "Qual é o consumo atual da casa?"
    },
    {
      type: "assistant",
      content: "O consumo atual da sua casa é de 8.2 kW. Seus painéis solares estão gerando 12.5 kW, então você está exportando 4.3 kW para a rede elétrica!"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 py-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/')}
            className="h-10 w-10"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Assistente Virtual</h1>
        </div>

        {/* Chat Messages */}
        <Card className="flex-1 flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>Chat com IA</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <div 
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.type === 'user' 
                        ? 'bg-gradient-to-r from-smart-blue to-smart-purple text-white' 
                        : 'bg-muted'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="flex space-x-2">
              <Input
                placeholder="Digite sua mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && setMessage('')}
              />
              <Button size="icon" className="bg-gradient-to-r from-smart-blue to-smart-purple border-0">
                <Mic className="h-4 w-4" />
              </Button>
              <Button size="icon" className="bg-gradient-to-r from-smart-purple to-smart-blue border-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Assistant;