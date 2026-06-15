export default function Contact() {
  return (
    <section className="py-20 bg-[linear-gradient(270deg,_#007CD8_0%,_#1865AE_36.54%,_#403F68_97.12%,_#3B3A60_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div
            className="relative rounded-[2rem] overflow-hidden shadow-2xl"
            data-aos="zoom-out"
            data-aos-duration={800}
          >
            <img
              src="/assets/img/contact/contact-3.jpg"
              alt="Contact"
              className="w-full h-auto"
            />
            <div className="absolute top-6 left-6">
              <img
                src="/assets/img/shapes/shape-3.png"
                alt=""
                className="h-14 w-auto"
              />
            </div>
            <div className="absolute top-6 right-6">
              <img
                src="/assets/img/shapes/shape-3.png"
                alt=""
                className="h-14 w-auto"
              />
            </div>
            <div className="absolute bottom-6 left-6">
              <img
                src="/assets/img/shapes/shape-3.png"
                alt=""
                className="h-14 w-auto"
              />
            </div>
            <div className="absolute bottom-6 right-6">
              <img
                src="/assets/img/shapes/shape-4.png"
                alt=""
                className="h-16 w-auto"
              />
            </div>
          </div>
          <div>
            <div className="space-y-6">
              <div>
                <span
                  data-aos="fade-left"
                  data-aos-duration={400}
                  className="text-sm uppercase tracking-[0.3em] text-orange-500"
                >
                  Free Consultation
                </span>
                <h2
                  data-aos="fade-left"
                  data-aos-duration={600}
                  className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900"
                >
                  Contact us now for a free consultation
                </h2>
                <p
                  data-aos="fade-left"
                  data-aos-duration={800}
                  className="mt-4 text-slate-600 leading-8"
                >
                  Consultia can handle tech advisory help decide upon the
                  project rationale. Leave your contacts below and we’ll get
                  back to you within 24 hours.
                </p>
              </div>
              <form action="#" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div data-aos="fade-up" data-aos-duration={400}>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                  <div data-aos="fade-up" data-aos-duration={600}>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-duration={800}>
                  <select className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200">
                    <option>Are you a new client?</option>
                    <option value={1}>Some option</option>
                    <option value={2}>Another option</option>
                    <option value={4}>Potato</option>
                  </select>
                </div>
                <div data-aos="fade-up" data-aos-duration={1000}>
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder="How can we help you?"
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
                <div data-aos="fade-up" data-aos-duration={1200}>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition duration-300"
                  >
                    Make an Appointment
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
