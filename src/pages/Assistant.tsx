import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Mic, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Componente principal com efeito de digitação realista
export default function AssistantTypingEffect() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const bottomRef = useRef(null);

  // fila inicial de mensagens (vêm do usuário no exemplo)
  const initialQueue = [
    {
      type: "assistant",
      content: "Olá! Sou sua assistente de casa inteligente. Como posso ajudar você hoje?",
    },
    {
      type: "user",
      content: "Qual é o consumo atual da casa?",
    },
    {
      type: "assistant",
      content: "O consumo atual da sua casa é de 8.2 kW. Seus painéis solares estão gerando 12.5 kW, então você está exportando 4.3 kW para a rede elétrica!",
    },
    {
      type: "user",
      content: "Quantos dispositivos estão ligados agora?",
    },
    {
      type: "assistant",
      content: "No momento, 7 dispositivos estão ligados: geladeira, ar-condicionado, TV, computador, lâmpadas da sala, máquina de lavar e roteador.",
    },
    {
      type: "user",
      content: "Me avise se o consumo passar de 10 kW.",
    },
    {
      type: "assistant",
      content: "Pode deixar! Vou te avisar imediatamente se o consumo ultrapassar 10 kW.",
    },
  ];

  // queue: mensagens ainda a serem exibidas (em ordem)
  const [queue, setQueue] = useState(initialQueue);
  // displayed: mensagens já concluídas (exibidas por completo)
  const [displayed, setDisplayed] = useState([]);
  // currentTyping: conteúdo intermediário enquanto está sendo digitado
  const [currentTyping, setCurrentTyping] = useState("");
  // está o assistente digitando agora?
  const [isTyping, setIsTyping] = useState(false);

  // input control
  const [message, setMessage] = useState("");

  // rolagem automática para o fim
  const scrollToBottom = (behavior = "smooth") => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior });
  };

  // quando a fila muda e não estamos digitando, começar a processar a próxima
  useEffect(() => {
    if (isTyping) return; // já está digitando
    if (queue.length === 0) return;

    const next = queue[0];
    setIsTyping(true);
    setCurrentTyping("");
    const text = next.content;
    let i = 0;
    const speed = text.length < 60 ? 30 : 10;
    const typeChar = () => {
      setCurrentTyping(text.slice(0, i + 1));
      i++;
      if (i < text.length) {
        setTimeout(typeChar, speed);
      } else {
        setDisplayed((d) => [...d, next]);
        setQueue((q) => q.slice(1));
        setIsTyping(false);
      }
    };
    typeChar();
    setTimeout(() => scrollToBottom(), 100);
  }, [queue, isTyping]);

  return (
  <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 py-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/')}
            className="h-10 w-10 text-black hover:text-red-600"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold text-black">Assistente Virtual</h1>
        </div>

        {/* Chat Messages */}
  <Card className="flex-1 flex flex-col bg-white border-black border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-black">
              <MessageCircle className="h-5 w-5 text-red-600" />
              <span>Chat com IA</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1 space-y-4 mb-4 overflow-y-auto" ref={containerRef}>
              {displayed.map((msg, index) => (
                <div 
                  key={index}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${msg.type === 'user' ? 'bg-red-600 text-white' : 'bg-black text-white'}`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className={`flex ${queue[0]?.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg ${queue[0]?.type === 'user' ? 'bg-red-600 text-white' : 'bg-black text-white'}`}>
                    {currentTyping}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input Area */}
            <div className="flex space-x-2 mt-2">
              <Input
                placeholder="Digite sua mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-black text-white border-white"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && message.trim()) {
                    setQueue((q) => [...q, { type: 'user', content: message }]);
                    setMessage('');
                  }
                }}
              />
              <Button size="icon" className="bg-black text-white border-white border">
                <Mic className="h-4 w-4" />
              </Button>
              <Button size="icon" className="bg-red-600 text-white border-white border" onClick={() => {
                if (message.trim()) {
                  setQueue((q) => [...q, { type: 'user', content: message }]);
                  setMessage('');
                }
              }}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}