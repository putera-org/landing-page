import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AIChat } from "@/components/AIChat";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Target
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Tin nhắn đã được gửi!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Địa chỉ văn phòng",
      content: "123 Đường Công Nghệ, Quận 1, TP.HCM, Việt Nam"
    },
    {
      icon: Phone,
      title: "Điện thoại",
      content: "+84 28 1234 5678"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@rotexai.com"
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 6: 8:00 - 18:00"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Khách hàng tin tưởng" },
    { icon: Target, value: "98%", label: "Tỷ lệ hài lòng" },
    { icon: MessageSquare, value: "24/7", label: "Hỗ trợ khách hàng" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 text-foreground">
            Liên hệ với <span className="text-primary">RotexAI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sẵn sàng chuyển đổi doanh nghiệp của bạn? Hãy để chúng tôi tư vấn giải pháp tốt nhất cho bạn.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Gửi tin nhắn cho chúng tôi</CardTitle>
                  <p className="text-muted-foreground">
                    Điền thông tin bên dưới và chúng tôi sẽ liên hệ với bạn trong 24 giờ.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Họ và tên *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Nhập họ và tên"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="example@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Công ty
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Tên công ty"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Số điện thoại
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+84 xxx xxx xxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Tin nhắn *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Mô tả dự án hoặc yêu cầu của bạn..."
                      />
                    </div>

              {/* Contact Information */}
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="flex-shrink-0">
                      <div className="w-5 h-5 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-xs text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>


                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                      variant="hero"
                    >
                      {isSubmitting ? (
                        "Đang gửi..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Gửi tin nhắn
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

            </div>

            {/* AI Chat */}
            <div>
              <AIChat />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
