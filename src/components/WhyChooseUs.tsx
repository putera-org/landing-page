import { Lightbulb, Shield, Target } from "lucide-react";

export const WhyChooseUs = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Đột phá công nghệ",
      description: "Luôn tiên phong áp dụng công nghệ mới nhất, định hướng tương lai cho doanh nghiệp."
    },
    {
      icon: Shield,
      title: "Đối tác tin cậy",
      description: "Cam kết bảo mật thông tin, minh bạch trong quy trình và xây dựng uy tín lâu dài."
    },
    {
      icon: Target,
      title: "Hiệu quả thực tế",
      description: "Mang lại tác động rõ ràng, kết quả có thể đo lường được cho doanh nghiệp."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-foreground">
            Vì sao chọn <span className="text-primary">RotexAI?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ba trụ cột nền tảng tạo nên sự khác biệt của chúng tôi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto mb-8 p-6 rounded-full primary-gradient w-fit group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};