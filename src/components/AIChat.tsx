import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, MessageCircle } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Xin chào! Tôi là AI Assistant của RotexAI. Tôi có thể giúp bạn tìm hiểu về các giải pháp công nghệ của chúng tôi. Bạn cần hỗ trợ gì?",
      sender: "ai",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const predefinedResponses = [
    {
      keywords: ["ai", "trí tuệ nhân tạo", "machine learning"],
      response: "RotexAI cung cấp các giải pháp AI tiên tiến giúp tối ưu hóa quy trình kinh doanh, phân tích dữ liệu và tự động hóa tác vụ. Chúng tôi có thể phát triển các mô hình AI tùy chỉnh cho nhu cầu cụ thể của doanh nghiệp bạn."
    },
    {
      keywords: ["blockchain", "crypto", "smart contract"],
      response: "Chúng tôi phát triển các giải pháp blockchain an toàn và minh bạch, bao gồm smart contracts, DeFi applications và hệ thống thanh toán phi tập trung. Blockchain của chúng tôi giúp tăng tính bảo mật và tin cậy cho doanh nghiệp."
    },
    {
      keywords: ["phần mềm", "software", "ứng dụng", "app"],
      response: "RotexAI chuyên phát triển phần mềm tùy chỉnh cho doanh nghiệp, từ ứng dụng web, mobile đến hệ thống quản lý nội bộ. Chúng tôi sử dụng công nghệ hiện đại để đảm bảo hiệu suất và khả năng mở rộng."
    },
    {
      keywords: ["giá", "chi phí", "báo giá", "price"],
      response: "Chi phí dự án phụ thuộc vào quy mô và yêu cầu cụ thể. Chúng tôi cung cấp tư vấn miễn phí và báo giá chi tiết. Vui lòng liên hệ với team sales để được tư vấn phù hợp nhất."
    },
    {
      keywords: ["liên hệ", "contact", "tư vấn", "demo"],
      response: "Bạn có thể liên hệ với chúng tôi qua email: contact@rotexai.com hoặc hotline: +84 28 1234 5678. Chúng tôi cũng cung cấp demo miễn phí để bạn trải nghiệm giải pháp trước khi quyết định."
    }
  ];

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const response of predefinedResponses) {
      if (response.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return response.response;
      }
    }
    
    return "Cảm ơn bạn đã quan tâm đến RotexAI! Để được tư vấn chi tiết hơn về yêu cầu cụ thể của bạn, vui lòng điền form liên hệ hoặc gọi hotline +84 28 1234 5678. Team chuyên gia của chúng tôi sẽ hỗ trợ bạn tốt nhất.";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: getAIResponse(inputMessage),
      sender: "ai",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiResponse]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Card className="h-[600px] flex flex-col card-shadow">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <MessageCircle className="h-4 w-4 text-primary-foreground" />
          </div>
          AI Assistant
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-auto"></div>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Hỏi đáp về các giải pháp công nghệ của RotexAI
        </p>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 px-6" ref={scrollAreaRef}>
          <div className="space-y-4 pb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "ai" && (
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
                
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString("vi-VN", {
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </span>
                </div>
                
                {message.sender === "user" && (
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="h-4 w-4 text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="bg-muted rounded-lg px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <div className="p-6 pt-4 border-t">
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nhập câu hỏi của bạn..."
              className="flex-1"
              disabled={isTyping}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              size="sm"
              variant="hero"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Nhấn Enter để gửi tin nhắn
          </p>
        </div>
      </CardContent>
    </Card>
  );
};