export const About = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 text-foreground">
          Về <span className="text-primary">RotexAI</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 font-light">
            RotexAI là doanh nghiệp công nghệ định hướng trở thành đối tác B2B đáng tin cậy trong AI, Blockchain, Phát triển phần mềm và Giải pháp số cho doanh nghiệp.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Hiệu quả</div>
              <p className="text-muted-foreground">Tối ưu quy trình và nâng cao năng suất</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Tiết kiệm</div>
              <p className="text-muted-foreground">Giảm thiểu chi phí vận hành</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Cạnh tranh</div>
              <p className="text-muted-foreground">Tăng khả năng cạnh tranh trên thị trường</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};