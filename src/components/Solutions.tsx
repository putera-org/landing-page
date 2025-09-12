import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Code, Globe } from "lucide-react";

export const Solutions = () => {
  const solutions = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Tối ưu quy trình và phân tích dữ liệu kinh doanh với trí tuệ nhân tạo tiên tiến.",
    },
    {
      icon: Shield,
      title: "Blockchain Integration",
      description: "Hệ thống minh bạch, an toàn và sẵn sàng cho tương lai với công nghệ blockchain.",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Ứng dụng tùy chỉnh nâng cao hiệu suất và đáp ứng nhu cầu riêng của doanh nghiệp.",
    },
    {
      icon: Globe,
      title: "Web Solutions",
      description: "Website hiện đại, tối ưu SEO và mở rộng khả năng tiếp cận khách hàng.",
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-background to-light-aqua"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="itemListOrder" content="http://schema.org/ItemListOrderAscending" />
      <meta itemProp="numberOfItems" content={solutions.length.toString()} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold font-display mb-6 text-foreground"
            itemProp="name"
          >
            Giải pháp <span className="text-primary">Toàn diện</span>
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            itemProp="description"
          >
            Chúng tôi cung cấp các giải pháp công nghệ hàng đầu để biến đổi doanh nghiệp của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={(index + 1).toString()} />

              {/* Phần tử chính là một Service */}
              <Card
                className="card-shadow hover:luxury-shadow transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm group hover:-translate-y-2"
                itemProp="item"
                itemScope
                itemType="https://schema.org/Service"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold" itemProp="name">
                    {solution.title}
                  </CardTitle>
                  {/* Tuỳ chọn: mô tả loại dịch vụ */}
                  <meta itemProp="serviceType" content={solution.title} />
                  {/* Tuỳ chọn: nhà cung cấp (text). Có thể nâng cấp lên Organization nếu cần. */}
                  <meta itemProp="provider" content="RotexAI" />
                </CardHeader>

                <CardContent>
                  <CardDescription
                    className="text-center text-muted-foreground leading-relaxed"
                    itemProp="description"
                  >
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

