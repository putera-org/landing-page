export const About = () => {
  return (
    <section
      className="py-24 px-6"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* Tổ chức được mô tả trong trang About */}
      <div
        className="max-w-6xl mx-auto text-center"
        itemProp="about"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <h2
          className="text-4xl md:text-5xl font-bold font-display mb-8 text-foreground"
        >
          Về <span className="text-primary" itemProp="name">RotexAI</span>
        </h2>

        {/* Mô tả tổ chức */}
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 font-light"
            itemProp="description"
          >
            RotexAI là doanh nghiệp công nghệ định hướng trở thành đối tác B2B đáng tin cậy trong AI, Blockchain, Phát triển phần mềm và Giải pháp số cho doanh nghiệp.
          </p>

          {/* Danh sách giá trị cốt lõi dưới dạng ItemList */}
          <div
            className="grid md:grid-cols-3 gap-8 mt-16"
            itemScope
            itemType="https://schema.org/ItemList"
            itemProp="hasOfferCatalog"
          >
            {/* Tuỳ chọn: đảm bảo thứ tự các phần tử */}
            <meta itemProp="itemListOrder" content="http://schema.org/ItemListOrderAscending" />
            <meta itemProp="numberOfItems" content="3" />

            <div className="text-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <meta itemProp="position" content="1" />
              <div className="text-3xl font-bold text-primary mb-2" itemProp="name">Hiệu quả</div>
              <p className="text-muted-foreground" itemProp="description">Tối ưu quy trình và nâng cao năng suất</p>
            </div>

            <div className="text-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <meta itemProp="position" content="2" />
              <div className="text-3xl font-bold text-primary mb-2" itemProp="name">Tiết kiệm</div>
              <p className="text-muted-foreground" itemProp="description">Giảm thiểu chi phí vận hành</p>
            </div>

            <div className="text-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <meta itemProp="position" content="3" />
              <div className="text-3xl font-bold text-primary mb-2" itemProp="name">Cạnh tranh</div>
              <p className="text-muted-foreground" itemProp="description">Tăng khả năng cạnh tranh trên thị trường</p>
            </div>
          </div>

          {/* Tuỳ chọn: khai báo thêm URL/sameAs nếu có */}
          {/* <meta itemProp="url" content="https://rotexai.com" /> */}
          {/* <link itemProp="sameAs" href="https://www.linkedin.com/company/rotexai" /> */}
          {/* <link itemProp="sameAs" href="https://twitter.com/rotexai" /> */}
        </div>
      </div>
    </section>
  );
};

