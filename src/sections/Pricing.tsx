"use client";
import Link from "next/link";
import { useState } from "react";

export default function Pricing() {
  const [isToggled, setToggled] = useState(false);

  const plans = isToggled
    ? [
        {
          title: "Basic",
          description:
            "Create interactive forms that connect to your workflow.",
          price: "$29/mo",
          billing: "Billed Yearly",
          highlight: true,
          planText: "Everything you get with Basic",
        },
        {
          title: "Plus",
          description: "Make your forms more beautiful and on-brand analyze.",
          price: "$199/mo",
          billing: "Billed Yearly",
          highlight: false,
          planText: "Everything in Basic, Plus",
        },
        {
          title: "Business",
          description: "Make your forms more beautiful and on-brand analyze.",
          price: "$399/mo",
          billing: "Billed Yearly",
          highlight: false,
          planText: "Everything in Plus, Business",
        },
      ]
    : [
        {
          title: "Basic",
          description:
            "Create interactive forms that connect to your workflow.",
          price: "$19/mo",
          billing: "Billed Monthly",
          highlight: false,
          planText: "Everything you get with Basic",
        },
        {
          title: "Plus",
          description: "Make your forms more beautiful and on-brand analyze.",
          price: "$49/mo",
          billing: "Billed Monthly",
          highlight: true,
          planText: "Everything in Basic, Plus",
        },
        {
          title: "Business",
          description: "Make your forms more beautiful and on-brand analyze.",
          price: "$99/mo",
          billing: "Billed Monthly",
          highlight: false,
          planText: "Everything in Plus, Business",
        },
      ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="space-y-4">
            <div
              data-aos="fade-up"
              data-aos-duration={600}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600"
            >
              <img
                src="/assets/img/icons/hands.svg"
                alt=""
                className="h-5 w-5"
              />
              We Are Here For Your Tax Relief.
            </div>
            <h2
              data-aos="fade-up"
              data-aos-duration={800}
              className="text-3xl sm:text-4xl font-bold text-slate-900"
            >
              <span className="text-orange-600">We</span> offer best cost
              effective tax consultation solution.
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration={1000}
            className="inline-flex flex-col items-center justify-center gap-3 rounded-full bg-white p-1 shadow-sm sm:flex-row"
          >
            <button
              type="button"
              onClick={() => setToggled(false)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                !isToggled
                  ? "bg-orange-500 text-white"
                  : "bg-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setToggled(true)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                isToggled
                  ? "bg-orange-500 text-white"
                  : "bg-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs font-medium text-slate-500">
                (20% Save)
              </span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration={800 + index * 200}
              className={`rounded-[2rem] border p-8 shadow-sm transition ${
                plan.highlight
                  ? "border-orange-300 bg-orange-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                  {plan.title}
                </p>
                <h5 className="text-base font-medium text-slate-700">
                  {plan.description}
                </h5>
                <div className="space-y-1">
                  <h3 className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </h3>
                  <p className="text-sm text-slate-500">{plan.billing}</p>
                </div>
                <div className="space-y-4">
                  <Link
                    href="#"
                    className={`inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white transition ${
                      plan.highlight
                        ? "bg-orange-600 hover:bg-orange-700"
                        : "bg-slate-900 hover:bg-slate-800"
                    }`}
                  >
                    Get a Free Consultation
                  </Link>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {plan.planText}
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {[
                      "Advanced Segmentation",
                      "Comparative Reporting",
                      "Unlimited Seats Role Access",
                      "Multivaritive Testing",
                      "Dynamic Content",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-100">
                          <img
                            src="/assets/img/icons/double-check2.png"
                            alt=""
                            className="h-4 w-4"
                          />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
