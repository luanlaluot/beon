export default function TaxBusiness() {
  return (
    <section
      className="py-24 bg-gradient-to-br from-primary via-[#0A4A87] to-foreground text-on-primary relative overflow-hidden"
      id="solutions"
    >
      {/* Decorative Blocks */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 -skew-x-12 transform origin-top translate-x-20 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-6"
          >
            Turning Potential Into{" "}
            <span className="text-blue-300">Performance</span>.
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-base text-white/80 leading-relaxed"
          >
            {`Strategies are replicable and technology is purchasable, but your people and culture are your only truly sustainable competitive advantages`}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Corporate Training",
              subtitle: "Đào tạo doanh nghiệp In-house",
              desc: `<p>
    <span >At BEON, we go beyond standard training; we partner with businesses to decode complex HR challenges through our specialized programs:</span>
</p>
<ul style="list-style-type: disc; padding-left: 20px;">
    <li>
        <span class="text-white font-semibold">Excellence Customer Service:</span> Transforming every customer experience into a strategic touchpoint for revenue growth.
    </li>
    <li>
        <span class="text-white font-semibold">Practical Management Skills:</span> Converting leadership mindset into measurable business results.</span>
    </li>
    <li>
        <span class="text-white font-semibold">Effective Communication Artistry:</span> Building lasting engagement and optimizing internal performance.</span>
    </li>
</ul>`,
              icon: "fa-solid fa-map-location-dot",
            },
            {
              title: "Service Mastery Coaching",
              subtitle: "Huấn luyện & Phát triển năng lực",
              desc: "Unlock your team's true potential with BEON's professional coaching and mentoring programs. Designed specifically for leaders and personnel in F&B, retail, and services, our 1-on-1 and group journeys are crafted to sharpen mindsets, leverage personal strengths, and tackle professional hurdles head-on. Empower your business to achieve peak performance and elevate your organization’s capabilities",
              icon: "fa-solid fa-laptop-code",
            },
            {
              title: "Learning Media As a Service",
              subtitle: "Phòng thiết kế E-learning thuê ngoài",
              desc: "BEON Academy serves as your outsourced in-house content design department, offering end-to-end solutions including learning scriptwriting, graphic design, video production, 2D/3D animation, and LMS integration. This solution helps businesses reduce training operational costs by up to 70% while ensuring high-quality output and timely deployment",
              icon: "fa-solid fa-photo-film",
            },
            {
              title: "E-Learning Solution",
              subtitle: "Giải pháp học tập trực tuyến cho SME",
              desc: `"Streamlined, effective, and economical—'E-learning for SME' is your complete solution for digital training transformation. We help you move beyond legacy models toward a flexible learning ecosystem that ensures quick implementation and provides actionable insights into your team’s professional development`,
              icon: "fa-solid fa-chalkboard-user",
            },
          ].map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration={800 + index * 100}
              className="cursor-pointer group p-8 rounded-3xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center gap-5 mb-5">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-2xl text-white`} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-semibold leading-tight">
                    {feature.title}
                  </h3>
                  {/* <p className="text-xs font-bold tracking-widest uppercase text-blue-300 mt-1">
                    {feature.subtitle}
                  </p> */}
                </div>
              </div>
              <div
                className="text-base text-white/80 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: feature.desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
