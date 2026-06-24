"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setShowSuccessModal(true);
        setStatus({ type: null, message: "" });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({
          type: "error",
          message: result.error || "Something went wrong, please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Unable to connect to the server. Please check your network.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-24 bg-foreground relative overflow-hidden"
      id="contact"
    >
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
              alt="Contact Beon"
              className="w-full h-full object-cover min-h-[500px]"
            />

            <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                The Beon team is always ready
              </h3>
              <p className="text-white/80">
                To assist in answering all your questions about your digital
                transformation roadmap.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl border border-border">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center  px-5 py-2 rounded-full bg-primary text-white font-semibold text-sm">
                  Ready to Collaborate?
                </div>
                <h2
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="text-3xl sm:text-5xl font-display font-bold text-foreground leading-tight tracking-tight"
                >
                  Start building a{" "}
                  <span className="text-primary"> strong team.</span>
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="text-base leading-relaxed text-foreground/70 max-w-lg"
                >
                  Don't let training obstacles hinder your business growth.
                  Leave your information, and Beon's team of experts will
                  contact you for a completely free E-learning roadmap
                  consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl text-sm border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Phone number"
                      className="w-full rounded-xl text-sm border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Customer Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email address"
                    className="w-full rounded-xl text-sm border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Which service are you interested in?
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full rounded-xl text-sm border border-border bg-muted/50 px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option value="elearning">E-learning Transformation</option>
                    <option value="training">Customer Service Training</option>
                    <option value="consulting">Corporate Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Briefly describe your requirements..."
                    className="w-full text-sm rounded-xl border border-border bg-muted/50 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                  />
                </div>

                {status.type === "error" && (
                  <div className="p-4 rounded-xl text-sm font-medium bg-red-50 text-red-700 border border-red-200">
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-primary px-6 py-4 text-base text-white font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Get Consultation Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          ></div>
          <div className="relative bg-white rounded-[2rem] p-8 md:p-12 max-w-md w-full shadow-2xl text-center transform scale-100 opacity-100 transition-all duration-300">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Thank you for your interest!
            </h3>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Your information has been submitted successfully. BEON's team of
              experts will get in touch with you as soon as possible.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full rounded-xl bg-primary px-6 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-1"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
