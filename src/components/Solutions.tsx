import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Code, Globe } from "lucide-react";

export const Solutions = () => {
  const solutions = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Tối ưu quy trình và phân tích dữ liệu kinh doanh với trí tuệ nhân tạo tiên tiến."
    },
    {
      icon: Shield,
      title: "Blockchain Integration", 
      description: "Hệ thống minh bạch, an toàn và sẵn sàng cho tương lai với công nghệ blockchain."
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Ứng dụng tùy chỉnh nâng cao hiệu suất và đáp ứng nhu cầu riêng của doanh nghiệp."
    },
    {
      icon: Globe,
      title: "Web Solutions",
      description: "Website hiện đại, tối ưu SEO và mở rộng khả năng tiếp cận khách hàng."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-light-aqua">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-foreground">
            Giải pháp <span className="text-primary">Toàn diện</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chúng tôi cung cấp các giải pháp công nghệ hàng đầu để biến đổi doanh nghiệp của bạn
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="card-shadow hover:luxury-shadow transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm group hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};