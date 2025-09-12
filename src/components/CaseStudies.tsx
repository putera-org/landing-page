import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

export const CaseStudies = () => {
  const cases = [
    {
      icon: TrendingUp,
      metric: "85%",
      title: "Tăng hiệu suất",
      description:
        "Khách hàng trong ngành sản xuất tăng 85% hiệu suất sau 6 tháng triển khai AI.",
    },
    {
      icon: Clock,
      metric: "60%",
      title: "Tiết kiệm thời gian",
      description:
        "Doanh nghiệp logistics giảm 60% thời gian xử lý với hệ thống tự động hóa.",
    },
    {
      icon: DollarSign,
      metric: "40%",
      title: "Giảm chi phí",
      description:
        "Công ty fintech tiết kiệm 40% chi phí vận hành nhờ blockchain solution.",
    },
  ];

  return (
    <section
      className="py-24 px-6 bg-gradient-to-b from-light-aqua to-background"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Metadata về danh sách */}
      <meta itemProp="itemListOrder" content="http://schema.org/ItemListOrderAscending" />
      <meta itemProp="numberOfItems" content={cases.length.toString()} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold font-display mb-6 text-foreground"
            itemProp="name"
          >
            Kết quả <span className="text-primary">Thực tế</span>
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            itemProp="description"
          >
            Những con số ấn tượng từ các dự án triển khai thành công
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <Card
              key={index}
              className="card-shadow hover:luxury-shadow transition-all duration-500 border-0 bg-card text-center group hover:-translate-y-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <meta itemProp="position" content={(index + 1).toString()} />
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <case_.icon className="h-8 w-8 text-primary" />
                </div>

                {/* metric có thể là headline phụ */}
                <div
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                  itemProp="headline"
                >
                  {case_.metric}
                </div>

                <CardTitle className="text-xl font-semibold" itemProp="name">
                  {case_.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground leading-relaxed" itemProp="text">
                  {case_.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

