"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { MessageSquareText, Users, BellRing, ChartColumn } from "lucide-react";
import styles from "./landing.module.css";

type BillingPlan = "monthly" | "quarterly" | "yearly";

const planCopy = {
  Basic: {
    monthly: "999",
    quarterly: "2,757",
    yearly: "9,590",
  },
  Growth: {
    monthly: "2,799",
    quarterly: "7,725",
    yearly: "26,870",
  },
  Pro: {
    monthly: "3,799",
    quarterly: "10,485",
    yearly: "36,470",
  },
  Enterprise: {
    monthly: "On Request",
    quarterly: "On Request",
    yearly: "On Request",
  },
} as const;

const featureSets = {
  Basic: {
    title: "Get automated quick-flows for price queries & giveaway campaigns",
    bullets: ["Live chat inbox", "Owner roles only", "Campaign management"],
    capacity: ["Unlimited messages", "Unlimited contacts", "15 custom fields", "15 custom tags"],
  },
  Growth: {
    title: "Everything in Basic, Plus",
    bullets: [
      "FAQ automations & chatbot flows",
      "Advanced campaigns",
      "Product catalogs",
      "Native payments",
      "Public APIs",
      "Agent roles",
    ],
    capacity: [
      "Unlimited messages",
      "Unlimited contacts",
      "25 custom fields",
      "30 custom tags",
      "5 custom events",
      "4 team members",
    ],
  },
  Pro: {
    title: "Everything in Growth, Plus",
    bullets: [
      "Advanced chatbot flows",
      "Chat auto assignment",
      "Advanced webhooks",
      "Analytics dashboard",
      "Team collaboration",
    ],
    capacity: [
      "Unlimited messages",
      "Unlimited contacts",
      "30 custom fields",
      "45 custom tags",
      "7 custom events",
      "10 team members",
    ],
  },
  Enterprise: {
    title: "Everything in Pro, Plus",
    bullets: [
      "Higher rate limits",
      "Faster campaign delivery",
      "Dedicated account manager",
      "Priority support",
      "SLA guarantee",
    ],
    capacity: [
      "Unlimited everything",
      "Unlimited users",
      "Premium integrations",
      "Enterprise security",
    ],
  },
} as const;

const faqs = [
  {
    question: "What Determines the Cost of WhatsApp Business Messaging?",
    answer: [
      {
        type: "paragraph",
        text: "WhatsApp Business Platform pricing is based on the number of template messages successfully delivered to your customers. The cost is determined by two key factors: the recipient's country and the type of template message being sent, such as Marketing, Utility, Authentication, or Service messages."
      },
      {
        type: "paragraph",
        text: "For instance, if you send a Marketing template and a Utility template to a customer, both messages are billed separately according to Meta's pricing structure."
      },
      {
        type: "paragraph",
        text: "At Mindsmiratus Technologies, billing is divided into two clear components:"
      },
      {
        type: "list",
        items: [
          "Mindsmiratus Platform Subscription Charges",
          "Meta WhatsApp Message Delivery Charges"
        ]
      },
      {
        type: "paragraph",
        text: "This transparent pricing model ensures that you only pay Meta for the template messages that are actually delivered, while your platform subscription covers access to WhatsApp API, chatbot automation, integrations, and other business communication tools"
      },
      {
        type: "paragraph",
        text: "With this approach, businesses can easily track their messaging expenses and scale customer engagement without hidden costs."
      }
    ]
  },

  {
    question: "What is WhatsApp's 24-Hour Messaging Rule?",
    answer: [
      {
        type: "paragraph",
        text: "When a customer sends a message to your business on WhatsApp, a 24-hour conversation period begins automatically. If the customer sends another message during this period, the 24-hour timer starts again from the latest message."
      },
      {
        type: "paragraph",
        text: "During this active conversation window, businesses can interact naturally with customers by sending regular text replies, answering queries, providing support, and continuing discussions without needing to initiate a new paid conversation."
      },
      {
        type: "paragraph",
        text: "This feature allows businesses to deliver fast and seamless customer support while maintaining ongoing engagement. The 24-hour conversation period is designed to create a more responsive and user-friendly communication experience for both businesses and customers."
      },
    ],
  },

  {
    question: "How Do Free-Form Messages Work on WhatsApp?",
    answer: [
      {
        type: "paragraph",
        text: "Free-form messages are standard WhatsApp chat messages that can be sent without using pre-approved templates. These messages enable businesses to communicate with customers in a natural and conversational way."
      },
      {
        type: "paragraph",
        text: "They are commonly used for:"
      },
      {
        type: "list",
        items: [
          "Customer support and assistance",
          "Agent-to-customer conversations",
          "AI-powered chatbot responses",
          "Follow-up discussions and ongoing interactions"
        ]
      },
      {
        type: "paragraph",
        text: "As long as an active 24-hour conversation window is open, businesses can send these messages without incurring template messaging charges."
      },
      {
        type: "paragraph",
        text: "This flexibility helps support teams and automated chatbots deliver faster responses, resolve customer queries efficiently, and maintain seamless communication throughout the customer journey."
      },
    ]
  },

  {
    question: "What Are WhatsApp Business Templates and Why Are They Needed?",
    answer: [
      {
        type: "paragraph",
        text: "Pre-approved WhatsApp messages, often referred to as templates, are used when businesses need to reach customers outside an active conversation period. These messages allow businesses to initiate communication while maintaining compliance with WhatsApp's messaging policies."
      },
      {
        type: "paragraph",
        text: "Templates are typically used for:"
      },
      {
        type: "list",
        items: [
          "Starting a new conversation with a customer",
          "Sending updates after a period of inactivity",
          "Delivering promotional campaigns and offers",
          "Sharing appointment reminders, order updates, or OTPs"
        ]
      },
      {
        type: "paragraph",
        text: "Before a template can be used, it must be submitted for WhatsApp approval. Once approved, businesses can send it to large audiences efficiently and reliably."
      },
      {
        type: "paragraph",
        text: "Template messages are charged based on successful delivery and are grouped into categories such as Marketing, Utility, and Authentication, each serving a different business purpose."
      },
    ]
  },

  {
    question: "What’s the Difference Between Marketing, Utility, and Authentication Messages?",
    answer: [
      {
        type: "paragraph",
        text: "WhatsApp template messages are divided into different categories based on their purpose. Understanding these categories helps businesses choose the right message type and manage communication costs effectively"
      },
      {
        type: "paragraph",
        text: "Marketing Messages"
      },
      {
        type: "paragraph",
        text: "Marketing templates are designed to promote products, services, or special offers. Common use cases include:"
      },
      {
        type: "list",
        items: [
          "Promotional campaigns",
          "Discount and coupon announcements",
          "New product or service launches",
          "Customer re-engagement messages"
        ]
      },
      {
        type: "paragraph",
        text: "Since these messages are intended for outreach and promotion, they generally have higher messaging costs."
      },
      {
        type: "paragraph",
        text: "Utility Messages"
      },
      {
        type: "paragraph",
        text: "Utility templates are used to provide important updates related to a customer's activity or transaction. Examples include."
      },
      {
        type: "list",
        items: [
          "Order confirmations",
          "Delivery and shipping notifications",
          "Appointment reminders",
          "Billing and payment updates"
        ]
      },
      {
        type: "paragraph",
        text: "These messages enhance the customer experience by sharing timely and relevant information."
      },
      {
        type: "paragraph",
        text: "Authentication Messages"
      },
      {
        type: "paragraph",
        text: "Authentication templates help verify user identity and secure account access. They are commonly used for:"
      },
      {
        type: "list",
        items: [
          "One-time passwords (OTPs)",
          "Login verification codes",
          "Two-factor authentication (2FA)",
          "Security-related notifications"
        ]
      },
      {
        type: "paragraph",
        text: "These messages are specifically designed to support secure authentication and account protection processes."
      },
    ]
  },
];

export default function LandingPageClient() {
  const [billingPlan, setBillingPlan] = useState<BillingPlan>("monthly");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [status, setStatus] = useState<{
    kind: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    kind: "idle",
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    message: "",
    website: "",
  });

  const inboxFlowPoints = [
    {
      title: "Lead capture",
      description: "Ads se aane wali enquiries seedha WhatsApp pe aati hain.",
    },
    {
      title: "Auto reply",
      description: "Turant message jata hai, so no lead waits unanswered.",
    },
    {
      title: "Team inbox",
      description: "Ek shared inbox me team milkar reply karti hai.",
    },
    {
      title: "Follow-up flow",
      description: "Nudges aur reminders se lead cold nahi hoti.",
    },
    {
      title: "Opportunity tracking",
      description: "Har enquiry ka status clear dikhta hai.",
    },
    {
      title: "Better conversions",
      description: "Fast response se deal close karna easy hota hai.",
    },
  ] as const;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ kind: "loading", message: "Submitting your request..." });

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: [
        `Business: ${formData.business || "Not provided"}`,
        `Billing interest: ${billingPlan}`,
        formData.message || "No additional message",
      ].join("\n"),
      website: formData.website,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to submit the form right now.");
      }

      setFormData({
        name: "",
        business: "",
        phone: "",
        email: "",
        message: "",
        website: "",
      });
      setStatus({
        kind: "success",
        message: "Thanks! Our team will reach out shortly.",
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setStatus({
        kind: "error",
        message,
      });
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topBarContent}>
            <div>
              <span className={styles.offerBadge}>SPECIAL OFFER</span>
              <span className={styles.topBarText}>Free for 6 months for first 20 Small SMEs</span>
            </div>
            <a href="tel:+919625306474" className={styles.topBarPhone}>
              +91 9625306474
            </a>
          </div>
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroDecor} aria-hidden>
          <span className={styles.heroOrbLarge} />
          <span className={styles.heroOrbMedium} />
          <span className={styles.heroOrbSmall} />
          <span className={styles.heroAutomationRing} />
          <span className={styles.heroFlowLine} />
          <span className={styles.heroFlowLineTwo} />
          <span className={styles.heroNodeOne} />
          <span className={styles.heroNodeTwo} />
          <span className={styles.heroNodeThree} />
          <span className={styles.heroCardShapeOne} />
          <span className={styles.heroCardShapeTwo} />
        </div>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.heroEyebrow}>Premium WhatsApp Business API Pricing</span>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleLine}>Engage Seamlessly With</span>
                <span className={styles.heroTitleLine}>WhatsApp Automation</span>
              </h1>
              <p className={styles.heroLead}>
                Bring customers from your ads directly to WhatsApp and automate conversations at scale, so you connect with multiple leads without missing a single opportunity.
              </p>

              <div className={styles.heroProofRow}>
                <div className={styles.heroProofItem}>
                  <div className={styles.heroProofHeader}>
                    <span className={styles.heroProofIcon}><MessageSquareText size={18} strokeWidth={2.2} /></span>
                    <div>
                      <strong>Auto Reply</strong>
                      <span>Instant responses to new enquiries, day or night, so no lead sits unanswered.</span>
                    </div>
                  </div>
                </div>
                <div className={styles.heroProofItem}>
                  <div className={styles.heroProofHeader}>
                    <span className={styles.heroProofIcon}><BellRing size={18} strokeWidth={2.2} /></span>
                    <div>
                      <strong>Follow-ups</strong>
                      <span>Never miss a follow-up — smart reminders nudge your team before a lead goes cold.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.heroProofRow}>
                <div className={styles.heroProofItem}>
                  <div className={styles.heroProofHeader}>
                    <span className={styles.heroProofIcon}><Users size={18} strokeWidth={2.2} /></span>
                    <div>
                      <strong>Team Inbox</strong>
                      <span>Assign chats, leave notes, and reply together from one shared inbox — no crossed wires.</span>
                    </div>
                  </div>
                </div>
                <div className={styles.heroProofItem}>
                  <div className={styles.heroProofHeader}>
                    <span className={styles.heroProofIcon}><ChartColumn size={18} strokeWidth={2.2} /></span>
                    <div>
                      <strong>Lead Tracking</strong>
                      <span>Track every enquiry and monitor where each opportunity stands, at a glance.</span>
                    </div>
                  </div>
                </div>
              </div>


              <div className={styles.heroActions}>
                <Link href="#pricing" className={styles.primaryAction}>
                  View Pricing
                </Link>
                <Link href="/contact-mindsmiratus-technologies" className={styles.secondaryAction}>
                  Talk to Sales
                </Link>
              </div>

            </div>

            <div className={styles.formShell}>
              <div className={styles.formAccent} aria-hidden />
              <div className={styles.formCard}>
                <div className={styles.formCardHeader}>
                  <span className={styles.formBadge}>Instant Quote</span>
                  <h2>Request a Premium Consultation</h2>
                  <p>Share your business details and our team will reply with the best fit plan.</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGrid}>
                    <label className={styles.field}>
                      <span>Name</span>
                      <input
                        value={formData.name}
                        onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                        type="text"
                        placeholder="Your name"
                        required
                      />
                    </label>
                    <label className={styles.field}>
                      <span>Business</span>
                      <input
                        value={formData.business}
                        onChange={(event) => setFormData((prev) => ({ ...prev, business: event.target.value }))}
                        type="text"
                        placeholder="Company name"
                      />
                    </label>
                    <label className={styles.field}>
                      <span>Phone</span>
                      <input
                        value={formData.phone}
                        onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                        type="tel"
                        placeholder="Mobile number"
                        required
                      />
                    </label>
                    <label className={styles.field}>
                      <span>Email</span>
                      <input
                        value={formData.email}
                        onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                        type="email"
                        placeholder="you@company.com"
                        required
                      />
                    </label>
                  </div>

                  <label className={styles.field}>
                    <span>How can we help?</span>
                    <textarea
                      value={formData.message}
                      onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                      placeholder="Tell us about your campaign, volume, or automation needs"
                      rows={4}
                    />
                  </label>

                  <input
                    type="text"
                    className={styles.honeypot}
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(event) => setFormData((prev) => ({ ...prev, website: event.target.value }))}
                  />

                  <button type="submit" className={styles.submitButton} disabled={status.kind === "loading"}>
                    {status.kind === "loading" ? "Submitting..." : "Get My Proposal"}
                  </button>

                  {status.kind !== "idle" && (
                    <p
                      className={`${styles.formStatus} ${status.kind === "success"
                        ? styles.formStatusSuccess
                        : status.kind === "error"
                          ? styles.formStatusError
                          : ""
                        }`}
                    >
                      {status.message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.inboxSection} id="features">
        <div className={styles.container}>
          <div className={styles.inboxPanel}>
            <div className={styles.inboxTop}>
              <div className={styles.inboxFlow} aria-hidden>
                <div className={styles.inboxFlowColumn}>
                  {inboxFlowPoints.slice(0, 3).map((item, idx) => (
                    <div key={item.title} className={styles.inboxFlowCard}>
                      <span className={styles.inboxFlowIndex}>0{idx + 1}</span>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.phoneMockup} aria-hidden>
                  <div className={styles.phoneFrame}>
                    <span className={styles.phoneNotch} />
                    <span className={styles.phoneCamera} />
                    <span className={styles.phoneSpeaker} />
                    <div className={styles.phoneScreen}>
                      <div className={styles.chatHead}>
                        <span className={styles.chatAvatar}>
                          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                              d="M4 20V4l8 8 8-8v16"
                              stroke="currentColor"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <div className={styles.chatHeadText}>
                          <strong>Mindsmiratus</strong>
                          <span>● Online</span>
                        </div>
                      </div>

                      <div className={styles.chatBody}>
                        <div className={`${styles.chatBubble} ${styles.chatBubbleIn}`} style={{ animationDelay: "0.2s" }}>
                          Hi! I'm interested in your services.
                          <span className={styles.chatTime}>10:30 AM</span>
                        </div>
                        <div className={styles.chatTyping} style={{ animationDelay: "0.9s" }}>
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className={`${styles.chatBubble} ${styles.chatBubbleOut}`} style={{ animationDelay: "1.9s" }}>
                          Hi! Thanks for reaching out. How can we help you today?
                          <span className={styles.chatTime}>10:31 AM ✓✓</span>
                        </div>
                        <div className={`${styles.chatBubble} ${styles.chatBubbleIn}`} style={{ animationDelay: "2.6s" }}>
                          I want to know more about pricing.
                          <span className={styles.chatTime}>10:32 AM</span>
                        </div>
                        <div className={styles.chatTyping} style={{ animationDelay: "3.3s" }}>
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className={`${styles.chatBubble} ${styles.chatBubbleOut}`} style={{ animationDelay: "4.3s" }}>
                          Sure! Our team will share all the details with you.
                          <span className={styles.chatTime}>10:32 AM ✓✓</span>
                        </div>
                      </div>

                      <div className={styles.chatInput}>
                        <div className={styles.chatPill}>Type a message</div>
                        <div className={styles.chatMic}>
                          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                              d="M12 15a3 3 0 0 0 3-3V7a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3z"
                              stroke="currentColor"
                              strokeWidth="1.8"
                            />
                            <path
                              d="M19 11a7 7 0 0 1-14 0M12 18v3"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <span className={styles.phoneSideButtonTop} />
                    <span className={styles.phoneSideButtonBottom} />
                  </div>
                </div>

                <div className={styles.inboxFlowColumn}>
                  {inboxFlowPoints.slice(3).map((item, idx) => (
                    <div key={item.title} className={styles.inboxFlowCard}>
                      <span className={styles.inboxFlowIndex}>0{idx + 4}</span>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.pricingSection} id="pricing">
        <div className={styles.container}>
          <div className={styles.toggleArea}>
            <div className={styles.toggleBox}>
              {(["monthly", "quarterly", "yearly"] as const).map((plan) => (
                <button
                  key={plan}
                  type="button"
                  className={`${styles.toggleBtn} ${billingPlan === plan ? styles.activeToggle : ""}`}
                  onClick={() => setBillingPlan(plan)}
                >
                  {plan === "monthly" ? "Monthly" : plan === "quarterly" ? "Quarterly - 8%" : "Yearly - 20%"}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.pricingWrapper}>
            <div className={styles.pricingGrid}>
              {(["Basic", "Growth", "Pro", "Enterprise"] as const).map((planName) => {
                const isPopular = planName === "Growth";
                return (
                  <article
                    key={planName}
                    className={`${styles.planBox} ${isPopular ? styles.planRelative : ""}`}
                  >
                    {isPopular && <div className={styles.badgePopular}>Most Popular</div>}
                    <div className={styles.planHeader}>
                      <div className={styles.planTitle}>{planName}</div>
                      <div className={styles.planPrice}>
                        <span className={styles.currency}>&#8377;</span>
                        {planCopy[planName][billingPlan]}
                        <small>{planName === "Enterprise" ? "Custom engagement" : "/mo (+taxes)"}</small>
                      </div>
                      <button
                        type="button"
                        className={`${styles.planBtn} ${planName === "Basic"
                          ? styles.grayBtn
                          : planName === "Growth"
                            ? styles.greenBtn
                            : planName === "Pro"
                              ? styles.blueBtn
                              : styles.blackBtn
                          }`}
                      >
                        {planName === "Enterprise" ? "Get In Touch" : "Try 14-Day Trial"}
                      </button>
                      {planName !== "Enterprise" && <div className={styles.note}>No credit card required</div>}
                    </div>

                    <div className={styles.featureBox}>
                      <div className={styles.sectionTitle}>Per Template Message Charges</div>
                      <ul className={styles.tableList}>
                        <li>
                          <span>Marketing</span>
                          <span>{planName === "Enterprise" ? "Custom" : <><span className={styles.currency}>&#8377;</span>0.863</>}</span>
                        </li>
                        <li>
                          <span>Utility</span>
                          <span>
                            <span className={styles.currency}>&#8377;</span>0.115
                          </span>
                        </li>
                        <li>
                          <span>Authentication</span>
                          <span>
                            <span className={styles.currency}>&#8377;</span>0.115
                          </span>
                        </li>
                        <li>
                          <span>Service</span>
                          <span>Unlimited Free</span>
                        </li>
                      </ul>
                    </div>

                    <div className={styles.featureBox}>
                      <h6 className={styles.featureHeading}>{featureSets[planName].title}</h6>
                      <ul className={styles.featureList}>
                        {featureSets[planName].bullets.map((item) => (
                          <li key={item}>
                            <span className={`${styles.icon} ${isPopular || planName === "Pro" ? styles.green : planName === "Basic" ? "" : styles.blue}`}>
                              &#10003;
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`${styles.featureBox} ${styles.featureBoxLast}`}>
                      <ul className={styles.featureList}>
                        {featureSets[planName].capacity.map((item) => (
                          <li key={item}>
                            <span className={`${styles.icon} ${isPopular || planName === "Pro" ? styles.green : planName === "Basic" ? "" : styles.blue}`}>
                              &#10003;
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.accordionSection}>
        <div className={styles.container}>
          <div className={styles.helpBox}>
            <div className={styles.helpCopy}>
              <span className={styles.helpEyebrow}>Need Help Choosing?</span>
              <h3>Quick walkthrough of pricing and the best fit for your business.</h3>
            </div>
            <div className={styles.helpActions}>
              <a href="/contact-mindsmiratus-technologies" className={styles.helpBtn}>
                Book Demo
              </a>
              <a href="/contact-mindsmiratus-technologies" className={styles.helpBtn}>
                Talk to Sales
              </a>
            </div>
          </div>

          <div className={styles.faqBox}>
            <div className={styles.faqHeader}>
              <span className={styles.faqEyebrow}>FAQ</span>

              <h2 className={styles.faqTitle}>
                WhatsApp Pricing Explained
              </h2>

              <p className={styles.faqLead}>
                A quick breakdown of how pricing, templates, and free conversations work.
              </p>
            </div>

            <div className={styles.accordion}>
              {faqs.map((faq, idx) => (
                <div
                  key={faq.question}
                  className={`${styles.accordionItem} ${activeFaq === idx ? styles.accordionItemOpen : ""
                    }`}
                >
                  <button
                    type="button"
                    className={styles.accordionButton}
                    onClick={() =>
                      setActiveFaq(activeFaq === idx ? null : idx)
                    }
                    aria-expanded={activeFaq === idx}
                  >
                    <span>{faq.question}</span>

                    <span className={styles.accordionChevron}>
                      +
                    </span>
                  </button>

                  <div
                    className={`${styles.accordionPanel} ${activeFaq === idx
                      ? styles.accordionPanelOpen
                      : ""
                      }`}
                  >
                    <div className={styles.accordionBody}>

                      {Array.isArray(faq.answer) ? (
                        faq.answer.map((block, index) => {

                          if (block.type === "paragraph") {
                            return (
                              <p key={index}>
                                {block.text}
                              </p>
                            );
                          }

                          if (block.type === "list") {
                            return (
                              <ul key={index}>
                                {block.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            );
                          }

                          return null;
                        })
                      ) : (
                        <p>{faq.answer}</p>
                      )}

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
