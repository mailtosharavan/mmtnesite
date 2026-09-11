"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarCheck2,
  Check,
  ChevronDown,
  Headphones,
  Link2,
  Megaphone,
  MessageCircle,
  MessageSquareText,
  Play,
  Plus,
  Send,
  ShoppingCart,
  Sparkles,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import styles from "./landing.module.css";

type BillingPlan = "monthly" | "quarterly" | "yearly";

const WHATSAPP_NUMBER = "9625306474";

// WhatsApp function
const openWhatsApp = (message: string) => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank", "noopener,noreferrer");
};

const planCopy = {
  Basic: { monthly: "999", quarterly: "2,757", yearly: "9,590" },
  Growth: { monthly: "1,999", quarterly: "7,725", yearly: "26,870" },
  Pro: { monthly: "2,999", quarterly: "10,485", yearly: "36,470" },
  Enterprise: { monthly: "On Request", quarterly: "On Request", yearly: "On Request" },
} as const;

const featureSets = {
  Basic: {
    title: "Get automated quick-flows for price queries & giveaway campaigns",
    bullets: ["Live chat inbox", "Owner roles only", "Campaign management"],
    capacity: ["Unlimited messages", "Unlimited contacts", "15 custom fields", "15 custom tags"],
  },
  Growth: {
    title: "Everything in Basic, Plus",
    bullets: ["FAQ automations & chatbot flows", "Advanced campaigns", "Product catalogs", "Native payments", "Public APIs", "Agent roles"],
    capacity: ["Unlimited messages", "Unlimited contacts", "25 custom fields", "30 custom tags", "5 custom events", "4 team members"],
  },
  Pro: {
    title: "Everything in Growth, Plus",
    bullets: ["Advanced chatbot flows", "Chat auto assignment", "Advanced webhooks", "Analytics dashboard", "Team collaboration"],
    capacity: ["Unlimited messages", "Unlimited contacts", "30 custom fields", "45 custom tags", "7 custom events", "10 team members"],
  },
  Enterprise: {
    title: "Everything in Pro, Plus",
    bullets: ["Higher rate limits", "Faster campaign delivery", "Dedicated account manager", "Priority support", "SLA guarantee"],
    capacity: ["Unlimited everything", "Unlimited users", "Premium integrations", "Enterprise security"],
  },
} as const;

const services = [
  {
    icon: Bot,
    title: "AI Chatbot Automation",
    text: "Answer queries, qualify leads & support customers 24/7.",
    tone: "green",
    visual: "chat",
    video: "/whatsapp-automation/AI-Chatbot.mp4",
    whatsappMessage:
      "Hi, I am interested in AI Chatbot Automation for my business. I would like to know more about the features, setup process and pricing.",
  },

  {
    icon: Megaphone,
    title: "Bulk Messaging & Campaigns",
    text: "Send offers, updates and announcements at scale.",
    tone: "blue",
    visual: "campaign",
    video: "/whatsapp-automation/Bulk-Messaging.mp4",
    whatsappMessage:
      "Hi, I am interested in Bulk Messaging & Campaigns for my business. Please share the details, pricing and campaign setup process.",
  },

  {
    icon: Users,
    title: "Lead Capture & CRM",
    text: "Capture leads from ads, website or chats automatically.",
    tone: "purple",
    visual: "lead",
    video: "/whatsapp-automation/Lead-Capture.mp4",
    whatsappMessage:
      "Hi, I am interested in Lead Capture & CRM Automation. I would like to know how leads can be captured and connected with my CRM.",
  },

  {
    icon: CalendarCheck2,
    title: "Appointment & Booking",
    text: "Let customers book appointments directly on WhatsApp.",
    tone: "orange",
    visual: "booking",
    video: "/whatsapp-automation/Appointment-Booking.mp4",
    whatsappMessage:
      "Hi, I am interested in WhatsApp Appointment & Booking Automation. Please share how the booking workflow works for my business.",
  },

  {
    icon: ShoppingCart,
    title: "Order & Payment Automation",
    text: "Take orders, share payment links and confirm automatically.",
    tone: "pink",
    visual: "order",
    video: "/whatsapp-automation/Order-Payment.mp4",
    whatsappMessage:
      "Hi, I am interested in WhatsApp Order & Payment Automation. Please share the features, payment options and pricing.",
  },

  {
    icon: BarChart3,
    title: "Analytics & Reports",
    text: "Track leads, sales, conversations and campaign performance.",
    tone: "violet",
    visual: "analytics",
    video: "/whatsapp-automation/Analytics-Reports.mp4",
    whatsappMessage:
      "Hi, I am interested in WhatsApp Analytics & Reports. I would like to know what data, reports and performance tracking are available.",
  },
] as const;

const faqs = [
  {
    question: "What Determines the Cost of WhatsApp Business Messaging?",
    answer: "WhatsApp Business Platform messaging costs depend on the recipient country and the category of template message. Your total cost can include the platform subscription plus Meta's message delivery charges, making both components easy to track separately.",
  },
  {
    question: "What is WhatsApp's 24-Hour Messaging Rule?",
    answer: "When a customer messages your business, a 24-hour customer service window opens. During that window your team or automation can continue the conversation with normal replies; outside the window, approved template messages are generally required to initiate a new business conversation.",
  },
  {
    question: "How Do Free-Form Messages Work on WhatsApp?",
    answer: "Free-form messages are regular conversational replies such as support messages, agent responses and chatbot answers. They can be used while an active customer service window is open, helping businesses keep conversations natural and responsive.",
  },
  {
    question: "What Are WhatsApp Business Templates and Why Are They Needed?",
    answer: "Templates are pre-approved messages used to start or resume business-initiated conversations outside the active customer service window. They are commonly used for promotions, reminders, order updates and authentication flows.",
  },
  {
    question: "What's the Difference Between Marketing, Utility, and Authentication Messages?",
    answer: "Marketing messages promote products or offers, Utility messages communicate transactional or account-related updates, and Authentication messages help verify identity through OTPs and security codes.",
  },
  {
    question: "What Are the Message Charges?",
    answer: "The landing page uses the current plan comparison supplied for your business: Marketing ₹ 1.00, Utility ₹ 0.99, Authentication ₹ 0.115 and Service Unlimited Free, with Enterprise marketing pricing shown as Custom.",
  },
  {
    question: "Can I Integrate with My Existing CRM or Tools?",
    answer: "Yes. The solution can be connected with CRM and business tools through APIs, webhooks and supported integrations so leads, conversations and workflow events can move between systems.",
  },
  {
    question: "Is There a Free Trial Available?",
    answer: "Basic, Growth and Pro plans currently show a 14-day trial with no credit card required. Enterprise is handled through a custom engagement.",
  },
  {
    question: "Do You Provide Support After Setup?",
    answer: "Yes. Support is built into the plans, with higher-tier options adding priority support and a dedicated account manager for larger teams.",
  },
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.setProperty("--reveal-delay", `${delay}ms`);
        el.classList.add(styles.revealed);
        observer.unobserve(el);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -70px 0px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={`${styles.reveal} ${className}`}>{children}</div>;
}

function ServiceVisual({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  return (
    <div className={styles.videoPreview}>
      <video
        className={styles.previewVideo}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={`${title} workflow preview`}
      />
    </div>
  );
}

export default function LandingPageClient() {
  const [billingPlan, setBillingPlan] = useState<BillingPlan>("monthly");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{ title: string; src: string } | null>(null);
  const [status, setStatus] = useState<{ kind: "idle" | "loading" | "success" | "error"; message: string }>({ kind: "idle", message: "" });
  const [formData, setFormData] = useState({ name: "", business: "", phone: "", email: "", message: "", website: "" });

  useEffect(() => {
    if (!activeVideo) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveVideo(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideo]);


  return (
    <main className={styles.page}>

      <section className={styles.hero} id="home">
        <div className={styles.heroGlowOne} /><div className={styles.heroGlowTwo} /><div className={styles.heroGridPattern} />
        <div className={styles.container + " " + styles.heroGrid}>
          <Reveal className={styles.heroCopy}>
            <span className={styles.eyebrow}><Check size={14} /> Official WhatsApp Business API Partner</span>
            <h1>Too Many Messages<br /> <mark> Not Enough Time?</mark> <span className={styles.growthArrow}>↗</span></h1>
            <p className={styles.heroSubtitle}><i>Automate Your WhatsApp and Support Sales.</i> <br></br>
              <span style={{ fontSize: '17px' }}>Complete WhatsApp Automation & Business API Solution for Your Business</span> </p>

            <div className={styles.heroBenefits}><span><Check size={15} /> More Leads</span><span><Check size={15} /> Happier Customers</span><span><Check size={15} /> Higher Sales</span></div>
            <div className={styles.heroActions}>
              <a href="https://wa.me/9625306474?text=Hi%2C%20I%20want%20a%20free%20demo%20of%20WhatsApp%20Automation." className={styles.primaryBtn}><MessageCircle size={19} /> Get Free Demo Now <ArrowRight size={17} /></a><a href="#how-it-works" className={styles.outlineBtn}><Play size={16} fill="currentColor" /> Watch How It Works</a>
            </div>
            <div className={styles.heroTrust}><span><Zap size={15} /> No Setup Hassle</span><span><Headphones size={15} /> Dedicated Support</span><span><BarChart3 size={15} /> Scalable for All Businesses</span></div>
          </Reveal>

          <Reveal className={styles.heroVisual} delay={120}>
            <div className={styles.phoneAura} /><div className={styles.phoneConnector} />
            <div className={styles.phone}>
              <div className={styles.phoneNotch}><i /><i /></div>
              <div className={styles.phoneScreen}>
                <video className={styles.heroChatVideo} src="/whatsapp-automation/hero-video2.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="Live WhatsApp AI chatbot demo" />
                <div className={styles.phoneVideoOverlay}><span><i className={styles.liveDot} /> LIVE CHATBOT DEMO</span><small>AI assistant • 24/7 automation</small></div>
              </div>
            </div>
            <div className={styles.automationLabel}>Automate<br />Engage<br /><b>Grow</b><span>↘</span></div>
            <div className={styles.heroFeatureStack}>
              {[{ i: MessageSquareText, t: "Instant Auto Reply", s: "24/7" }, { i: Sparkles, t: "Generate & Nurture", s: "Leads Automatically" }, { i: Send, t: "Send Bulk Messages", s: "Offers, Updates, Alerts" }, { i: Bot, t: "Chatbot & AI Assistant", s: "Always Available" }, { i: Link2, t: "Integrate with CRM", s: "& Your Tools" }, { i: BarChart3, t: "Detailed Analytics", s: "& Reports" }].map(({ i: Icon, t, s }, idx) => <div key={t} style={{ animationDelay: `${idx * 120}ms` }}><Icon size={18} /><span><b>{t}</b><small>{s}</small></span></div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.section + " " + styles.servicesSection} id="how-it-works">
        <div className={styles.container}>
          <Reveal className={styles.sectionHeading}><span className={styles.eyebrow}><Workflow size={14} /> OUR SERVICES</span><h2>Complete <mark>WhatsApp Automation</mark> Solutions</h2><p>Explore powerful solutions with real workflows. Click any video to see how it works.</p>
          </Reveal>

          <div className={styles.serviceGrid}>
  {services.map((service, index) => {
    const Icon = service.icon;

    return (
      <Reveal
        key={service.title}
        delay={index * 70}
      >
        <article className={styles.serviceCard}>

          {/* TITLE */}
          <div className={styles.serviceTitle}>
            <span
              className={`${styles.serviceIcon} ${styles[service.tone]}`}
            >
              <Icon size={20} />
            </span>

            <h3>{service.title}</h3>
          </div>


          {/* VIDEO */}
          <div className={styles.serviceVisual}>

            <ServiceVisual
              src={service.video}
              title={service.title}
            />

            {/* <button
              className={styles.videoPlay}
              aria-label={`Play ${service.title} workflow`}
              onClick={() =>
                setActiveVideo({
                  title: service.title,
                  src: service.video,
                })
              }
            >
              <Play
                size={20}
                fill="currentColor"
              />
            </button> */}

          </div>


          {/* DESCRIPTION */}
          <p>{service.text}</p>


          {/* ACTIONS */}
          <div className={styles.serviceActions}>

            <button
              className={styles.workflowBtn}
              onClick={() =>
                setActiveVideo({
                  title: service.title,
                  src: service.video,
                })
              }
            >
              <Play
                size={13}
                fill="currentColor"
              />
              Watch Workflow
            </button>


            <button
              className={styles.whatsappBtn}
              onClick={() =>
                openWhatsApp(service.whatsappMessage)
              }
            >
              <MessageCircle size={16} />
              WhatsApp
            </button>

          </div>

        </article>
      </Reveal>
    );
  })}
</div>
        </div>
      </section>

      <section className={styles.section + " " + styles.howSection} ><div className={styles.container}><Reveal className={styles.sectionHeading}><span className={styles.eyebrow}><Zap size={14} /> HOW IT WORKS</span><h2>Get Started in <mark>3 Simple Steps</mark></h2><p>From setup to automation — it’s fast, simple and effective.</p></Reveal><div className={styles.steps}>{[{ n: "1", icon: Link2, title: "Connect Your WhatsApp Business API", text: "We’ll help you set it up — no technical skills needed." }, { n: "2", icon: Workflow, title: "Set Up Automation", text: "Create automated workflows, messages and chatbots as per your business needs." }, { n: "3", icon: BarChart3, title: "Start Engaging & Growing", text: "Handle queries, generate leads and boost sales — automatically." }].map((step, index) => { const Icon = step.icon; return <Reveal key={step.n} delay={index * 100} className={styles.stepWrap}><article className={styles.step}><span className={styles.stepNumber}>{step.n}</span><span className={styles.stepIcon}><Icon size={26} /></span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>{index < 2 && <ArrowRight className={styles.stepArrow} />}</Reveal> })}</div></div></section>

      <section className={styles.section + " " + styles.pricingSection} id="pricing"><div className={styles.container}><Reveal className={styles.pricingIntro}><div><span className={styles.eyebrow}><Sparkles size={14} /> PRICING PLANS</span><h2>Simple, Transparent <mark>Pricing</mark></h2><p>Choose the plan that fits your business. Upgrade anytime.</p></div><div className={styles.billingToggle}>{(["monthly", "quarterly", "yearly"] as const).map(plan => <button key={plan} onClick={() => setBillingPlan(plan)} className={billingPlan === plan ? styles.activeBilling : ""}>{plan === "monthly" ? "Monthly" : plan === "quarterly" ? "Quarterly - 8%" : "Yearly - 20%"}</button>)}</div></Reveal><div className={styles.pricingGrid}>{(["Basic", "Growth", "Pro", "Enterprise"] as const).map((planName, index) => { const popular = planName === "Growth"; return <Reveal key={planName} delay={index * 90}><article className={`${styles.planCard} ${popular ? styles.popularPlan : ""}`}>{popular && <span className={styles.popularBadge}>Most Popular</span>}<div className={styles.planTop}><div className={styles.planName}><span>{planName === "Growth" ? <Sparkles size={16} /> : planName === "Pro" ? <BarChart3 size={16} /> : <Workflow size={16} />}</span>{planName}</div><div className={styles.planPrice}><span>₹ </span>{planCopy[planName][billingPlan]}<small>{planName === "Enterprise" ? "Custom engagement" : "/mo (+taxes)"}</small></div><button className={`${styles.planButton} ${planName === "Growth" ? styles.planGreen : planName === "Pro" ? styles.planBlue : planName === "Enterprise" ? styles.planDark : ""}`}>{planName === "Enterprise" ? "Get In Touch" : "Try 14-Day Trial"}</button>{planName !== "Enterprise" && <small className={styles.noCard}>No credit card required</small>}</div><div className={styles.planBlock}><h4>Per Template Message Charges</h4><ul className={styles.chargeList}><li><span>Marketing</span><b>{planName === "Enterprise" ? "Custom" : "₹ 1.00"}</b></li><li><span>Utility</span><b>₹ 0.99</b></li><li><span>Authentication</span><b>₹ 0.115</b></li><li><span>Service</span><b>Unlimited Free</b></li></ul></div><div className={styles.planBlock}><h4>{featureSets[planName].title}</h4><ul className={styles.checkList}>{featureSets[planName].bullets.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul></div><div className={styles.planBlock + " " + styles.lastPlanBlock}><ul className={styles.checkList}>{featureSets[planName].capacity.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul></div></article></Reveal> })}</div></div></section>

      <section className={styles.section + " " + styles.faqSection} id="faq"><div className={styles.container}><Reveal className={styles.faqIntro}><span className={styles.eyebrow}><MessageSquareText size={14} /> FREQUENTLY ASKED QUESTIONS</span><h2>Got Questions?<br /><mark>We’ve Got Answers.</mark></h2><p>Find quick answers to common questions about our WhatsApp Automation & Business API services.</p>
      </Reveal><div className={styles.faqGrid}><div>{faqs.slice(0, 5).map((faq, index) => <FaqItem key={faq.question} faq={faq} index={index} activeFaq={activeFaq} setActiveFaq={setActiveFaq} />)}</div><div>{faqs.slice(5).map((faq, index) => <FaqItem key={faq.question} faq={faq} index={index + 5} activeFaq={activeFaq} setActiveFaq={setActiveFaq} />)}</div></div></div></section>


      {activeVideo && <div className={styles.videoModalBackdrop} role="dialog" aria-modal="true" aria-label={`${activeVideo.title} workflow video`} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveVideo(null); }}>
        <div className={styles.videoModal}>
          <div className={styles.videoModalHeader}><div><span>WORKFLOW DEMO</span><h3>{activeVideo.title}</h3></div><button className={styles.videoClose} onClick={() => setActiveVideo(null)} aria-label="Close video"><X size={22} /></button></div>
          <div className={styles.videoModalFrame}><video src={activeVideo.src} controls autoPlay playsInline preload="metadata" /></div>
        </div>
      </div>}

    </main>
  );
}

function FaqItem({ faq, index, activeFaq, setActiveFaq }: { faq: (typeof faqs)[number]; index: number; activeFaq: number | null; setActiveFaq: (v: number | null) => void }) {
  const open = activeFaq === index;
  return <Reveal delay={(index % 5) * 40}><article className={`${styles.faqItem} ${open ? styles.faqOpen : ""}`}><button onClick={() => setActiveFaq(open ? null : index)} aria-expanded={open}><span>{index + 1}. {faq.question}</span>{open ? <ChevronDown size={17} /> : <Plus size={17} />}</button><div className={styles.faqAnswer}><p>{faq.answer}</p></div></article></Reveal>;
}
