"use client";
import { useState } from "react";

const members = [
  {
    name: "Mrs. Kim Vu",
    alias: "(Kim Vu)",
    role: "Customer Experience & Learning Transformation Expert",
    image: "/assets/img/team/user2.png",
    gradient: "from-secondary/70",
    bio: [
      "Ms. Kim Vu has over 18 years of experience in Human Development and Customer Experience, including more than 10 years in leadership roles at corporations such as Sacombank, TTC Group, Pizza 4P's, Hoan My, ALDO Vietnam, and Art de Vivre Academy.",
      "With over 18 years dedicated to the art of service and people development, Ms. Kim Vu believes that \"every touchpoint is an opportunity to connect with the customer's emotions.\"",
      "She is known for designing service experience journeys (Customer Journey) and building customer-centric cultures (Service Culture), helping businesses turn service into experience, and experience into value.",
      "She excels at designing service experience journeys and building customer-centric cultures, turning service into emotionally resonant experiences.",
    ],
    cert: "MBA – University of Bolton (UK); Bachelor of English Language Education; Instructional Design Certificate; Points of You Practitioner; Mental Health First Aid Certified...",
    facebook: "#",
    linkedin: "#",
  },
  {
    name: "Mr. Viktor H. Ng",
    alias: "(Quang Nguyen)",
    role: "Training & E-learning Expert",
    image: "/assets/img/team/user1.png",
    gradient: "from-primary/70",
    bio: [
      "With over 13 years of experience in human development, Mr. Viktor H. Ng has directly consulted on and implemented E-learning, LMS, PMS, and OKR systems for many businesses across Vietnam.",
      "He led the project team building an internal AI ChatBot for a company that leads Vietnam's Digital Reward market, was a member of the SAP-ERP digital transformation project board, collaborated with KPMG on a digital transformation project for a top dairy company with thousands of employees, and operated the Performance Management System (PMS) at a leading HR consulting firm in Vietnam — helping standardize and digitize training and performance evaluation processes.",
      "Formerly a member of the SAP-ERP digital transformation project board in partnership with KPMG, he also led the internal AI ChatBot project for corporations with thousands of employees.",
    ],
    cert: "Certified OKR (C-OKRP™) accredited by ICF & HRCI, Certified Project Management Professional (PMP)® (Google), Train the Trainer (Dale Carnegie), Instructional Design, Competency Modeling, E-learning Design....",
    facebook: "#",
    linkedin: "#",
  },

  // {
  //   name: "Mr. Minh Tran",
  //   alias: "(Minh Tran)",
  //   role: "Director of Technology & LMS Systems",
  //   image: "/assets/img/team/user1.png",
  //   gradient: "from-[#0A4A87]/70",
  //   bio: [
  //     "Over 10 years of experience deploying learning technology platforms (LMS/LXP) for businesses ranging from 200 to 5,000+ employees. Previously led technical teams at FPT Software and VNG Corporation.",
  //     "Expert in SCORM, xAPI, and AI-personalized learning paths — helping businesses accurately measure training effectiveness and optimize ROI on every course.",
  //   ],
  //   cert: "AWS Certified Solutions Architect; Google Cloud Professional; Moodle Certified Integrator; Agile Scrum Master.",
  //   facebook: "#",
  //   linkedin: "#",
  // },
  // {
  //   name: "Mrs. Lan Phuong",
  //   alias: "(Lan Phuong)",
  //   role: "Head of Content Design & Instructional Design",
  //   image: "/assets/img/team/user2.png",
  //   gradient: "from-accent/70",
  //   bio: [
  //     "Instructional Design expert with over 9 years of experience building training programs for F&B, Retail, and Financial Services corporations.",
  //     "Produced 500+ interactive video E-learning modules with gamification and microlearning — helping learners achieve course completion rates of up to 85%.",
  //   ],
  //   cert: "Certified Instructional Designer (ATD); Adobe Captivate Expert; Articulate Storyline 360; TESOL Certificate.",
  //   facebook: "#",
  //   linkedin: "#",
  // },
  // {
  //   name: "Mr. Duc Anh",
  //   alias: "(Duc Anh)",
  //   role: "Strategic Consulting & Business Development Expert",
  //   image: "/assets/img/team/user1.png",
  //   gradient: "from-primary/60",
  //   bio: [
  //     "Over 15 years in strategic HR consulting and organizational development. Has partnered with 80+ Vietnamese SME businesses to build structured training digitization roadmaps.",
  //     "Expert in building OKR and KPI systems linked to training outcomes, helping leaders make decisions based on real workforce capability data.",
  //   ],
  //   cert: "Certified Business Coach (ICF); Strategic HR Management (SHRM-SCP); OKR Professional Coach; Design Thinking Facilitator.",
  //   facebook: "#",
  //   linkedin: "#",
  // },
];

export default function Team() {
  const [active, setActive] = useState(0);
  const member = members[active];

  const prev = () =>
    setActive((a) => (a - 1 + members.length) % members.length);
  const next = () => setActive((a) => (a + 1) % members.length);

  return (
    <section className="py-24 relative overflow-hidden" id="team">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-primary text-white font-bold text-sm mb-4">
            Expert Team
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground tracking-tight">
            The people <span className="text-primary">behind Beon</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white aspect-[4/5] max-w-md mx-auto">
                <img
                  key={active}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${member.gradient} to-transparent`}
                />

                {/* Name overlay on image */}
                {/* <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-1">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(members.length).padStart(2, "0")}
                  </p>
                  <h3 className="text-3xl font-display font-bold leading-tight">
                    {member.name}
                  </h3>
                  {member.alias && (
                    <p className="text-white/70 text-sm mt-1">{member.alias}</p>
                  )}
                </div> */}
              </div>

              {/* BG decorative */}
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl bg-accent/20 z-0 rotate-3 group-hover:rotate-6 transition-transform duration-500 max-w-md mx-auto" />
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight tracking-tight">
                  {member.name}
                  {member.alias && (
                    <span className="block text-xl mt-2 text-foreground/50 font-normal">
                      {member.alias}
                    </span>
                  )}
                </h2>
                <p className="text-lg font-semibold text-primary">
                  {member.role}
                </p>
              </div>

              <div className="space-y-4 border-l-2 border-primary/30 pl-6">
                {member.bio.map((line, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-foreground/80"
                  >
                    {line}
                  </p>
                ))}
                <p className="text-sm leading-relaxed text-foreground/60">
                  <strong>Certifications / Education:</strong> {member.cert}
                </p>
              </div>

              {/* Social + Nav */}
              <div className="flex items-center justify-between pt-4">
                {/* Social */}
                <div className="flex items-center gap-3">
                  <a
                    href={member.facebook}
                    className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-[#1877F2]/30 transition-all duration-300"
                  >
                    <i className="fa-brands fa-facebook-f text-base" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-[#0A66C2]/30 transition-all duration-300"
                  >
                    <i className="fa-brands fa-linkedin-in text-base" />
                  </a>
                </div>

                {/* Arrow Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                    aria-label="Previous"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                    aria-label="Next"
                  >
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
                  </button>
                </div>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {members.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-8 bg-primary"
                        : "w-2 bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Team member ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        {members.length > 1 && (
          <div className="mt-16 flex gap-4 justify-center overflow-x-auto pb-2">
            {members.map((m, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 flex flex-col items-center gap-2 group transition-all duration-300 ${
                  i === active ? "opacity-100" : "opacity-50 hover:opacity-80"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                    i === active
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-border"
                  }`}
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-semibold text-foreground/60 group-hover:text-primary transition-colors max-w-[80px] text-center leading-tight">
                  {m.name.replace(/^(Mr\.|Mrs\.) /, "")}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
