export default function Contact() {
  return (
    <section className="py-24 bg-foreground relative overflow-hidden" id="contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[80%] bg-accent/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Left Image / Branding */}
          <div
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent z-10 mix-blend-multiply"></div>
            <img
              src="/assets/img/contact/contact-3.jpg"
              alt="Liên hệ Beon"
              className="w-full h-full object-cover min-h-[500px]"
            />
            
            <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Đội ngũ Beon luôn sẵn sàng</h3>
              <p className="text-white/80">Hỗ trợ 24/7 để giải đáp mọi thắc mắc về lộ trình chuyển đổi số của bạn.</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl border border-border">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                Sẵn Sàng Hợp Tác?
              </div>
              <h2
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-3xl sm:text-5xl font-display font-bold text-foreground leading-tight tracking-tight"
              >
                Bắt đầu xây dựng đội ngũ <span className="text-primary">vững mạnh</span>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-base leading-relaxed text-foreground/70 max-w-lg"
              >
                Đừng để rào cản đào tạo kìm hãm sự phát triển của doanh nghiệp bạn. Để lại thông tin, đội ngũ chuyên gia của Beon sẽ liên hệ tư vấn lộ trình E-learning hoàn toàn miễn phí.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div
                className="bg-white p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow group"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-2">Gọi ngay</h3>
                <p className="text-base text-foreground/70 leading-relaxed font-medium">091.234.5678</p>
              </div>

              <div
                className="bg-white p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow group"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-2">Email cho chúng tôi</h3>
                <p className="text-base text-foreground/70 leading-relaxed font-medium">hello@beon.vn</p>
              </div>
            </div>
            
            <form action="#" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Họ và Tên</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Nhập tên của bạn"
                    className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Khách Hàng</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Địa chỉ email"
                    className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">Bạn quan tâm đến dịch vụ nào?</label>
                <select id="service" className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all appearance-none cursor-pointer">
                  <option value="">Chọn dịch vụ quan tâm...</option>
                  <option value="elearning">Chuyển đổi E-learning</option>
                  <option value="training">Đào tạo Dịch vụ Khách hàng</option>
                  <option value="consulting">Tư vấn Doanh nghiệp</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Lời nhắn của bạn</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  placeholder="Mô tả ngắn gọn nhu cầu của bạn..."
                  className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-primary px-6 py-4 text-base text-white font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:-translate-y-1"
              >
                Nhận tư vấn ngay
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
