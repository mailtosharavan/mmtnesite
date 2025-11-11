import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Mindsmiratus Technologies Pvt. Ltd. | Web, Mobile & IT Solutions Partner",
  description:
    "Reach out to Mindsmiratus Technologies Pvt. Ltd., your trusted IT solutions partner for web development, mobile app design, digital transformation, and cloud strategy. Let’s start building your success story.",
  openGraph: {
    title: "Contact Mindsmiratus Technologies Pvt. Ltd. — Digital Transformation & App Development Experts",
    description:
      "Get in touch with Mindsmiratus Technologies for scalable web development, enterprise applications, cloud integration, and digital growth solutions.",
    url: "https://yourdomain.com/contact-mindsmiratus-technologies",
    siteName: "Mindsmiratus Technologies Pvt. Ltd.",
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
      <section className="container mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Contact <span className="text-indigo-600">Mindsmiratus Technologies Pvt. Ltd.</span>
        </h1>
        <p className="text-lg text-slate-600">
          Let's collaborate to create impactful digital solutions that empower your business.
        </p>
      </section>

      <ContactForm />

      <section className="mt-16 text-center text-slate-600 text-sm leading-relaxed px-6">
        <p>
          Mindsmiratus Technologies Pvt. Ltd. specializes in web development, mobile app design,
          cloud infrastructure, CRM and ERP solutions, and enterprise digital transformation.
        </p>
      </section>
    </main>
  );
}
