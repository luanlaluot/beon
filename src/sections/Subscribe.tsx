export default function Subscribe() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
                <img
                  src="/assets/img/icons/hands.svg"
                  alt=""
                  className="h-5 w-5"
                />
                We Are Here For Your Tax Relief.
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
                Join Us today and let us help{" "}
                <span className="text-orange-400">you</span> to grow your
                business.
              </h2>
            </div>
          </div>

          <div>
            <form
              action="#"
              className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur-sm"
            >
              <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-slate-300 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/30"
                />
                <button
                  type="submit"
                  name="button"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Subscribe Now
                  <img
                    src="/assets/img/icons/arrow-up-right-black.svg"
                    alt=""
                    className="ml-3 h-4 w-4"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
