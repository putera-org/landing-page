import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 px-6 primary-gradient">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
          Sẵn sàng để chuyển đổi doanh nghiệp của bạn?
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 opacity-90 font-light">
          Cùng RotexAI khai phá hiệu quả vượt trội bằng công nghệ số
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 border-white text-lg font-semibold px-8 py-4 h-auto rounded-xl hover:scale-105 transition-all duration-300 group"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Đặt lịch demo
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            className="text-white hover:bg-white/20 border border-white/30 text-lg font-semibold px-8 py-4 h-auto rounded-xl hover:scale-105 transition-all duration-300 group"
          >
            Liên hệ ngay
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};