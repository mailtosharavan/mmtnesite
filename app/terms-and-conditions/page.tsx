'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  Scale,
  FileText,
  Lock,
  AlertCircle,
  CheckCircle,
  Clock,
  Shield,
  Gavel,
  ShieldCheck,
  CreditCard,
  FileSignature,
  Globe
} from 'lucide-react';

interface TermsSection {
  id: number;
  number: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
  color: string;
}

const termsSections: TermsSection[] = [
  {
    id: 1,
    number: '01',
    title: 'Services Overview',
    icon: <FileSignature className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    content: [
      'We provide comprehensive IT consulting, custom software development, mobile app development, website design and development, digital marketing, cloud infrastructure solutions, and business automation services.',
      'Our services are tailored to meet the unique needs of businesses and individuals seeking digital transformation and technological advancement.',
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Use of Services',
    icon: <ShieldCheck className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    content: [
      'You agree to use our services only for lawful purposes and in strict accordance with all applicable local, national, and international laws and regulations.',
      'Prohibited activities include but are not limited to: unauthorized access, reverse engineering, attempted hacking, misuse of systems, intellectual property violation, and any form of malicious activity.',
      'Any violation of these terms may result in immediate suspension of services and legal action.',
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Payments & Billing',
    icon: <CreditCard className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    content: [
      'All projects and subscriptions are subject to agreed-upon pricing and payment schedules as outlined in your project proposal or service agreement.',
      'Invoices are issued according to the payment milestone schedule. Payments must be made to the account specified in the invoice.',
      'Delayed payments may result in suspension of services, project work halting, and accrual of late fees until dues are cleared.',
      'Refunds are subject to our Refund Policy and will not be provided for partially completed work.',
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Intellectual Property Rights',
    icon: <Gavel className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-500',
    content: [
      'All custom software, code, design mockups, digital materials, documentation, and intellectual property developed by Mindsmiratus Technologies remain our exclusive property until full payment is received.',
      'Upon full payment and project completion, ownership rights are transferred to the client as agreed in the project agreement.',
      'Client logos, branding, and content provided by the client remain the exclusive property of the client.',
      'Third-party licenses and open-source software are governed by their respective license agreements.',
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Confidentiality & NDA',
    icon: <Lock className="w-6 h-6" />,
    color: 'from-indigo-500 to-blue-500',
    content: [
      'Both Mindsmiratus Technologies and the client agree to maintain strict confidentiality of all business, technical, and proprietary information shared during the course of engagement.',
      'Confidential information includes but is not limited to: project details, source code, algorithms, business strategies, and technical specifications.',
      'This obligation continues for a period of 3 years following the end of the engagement, unless otherwise specified in a separate NDA.',
      'Exceptions include information required to be disclosed by law or court order, in which case the disclosing party will provide reasonable notice.',
    ],
  },
  {
    id: 6,
    number: '06',
    title: 'Limitation of Liability',
    icon: <AlertCircle className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    content: [
      'To the maximum extent permitted by law, Mindsmiratus Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages.',
      'This includes but is not limited to: loss of profits, business interruption, loss of data, or loss of business opportunity, even if advised of the possibility of such damages.',
      'Our total liability for any claim shall not exceed the amount paid by the client for the specific service that gave rise to the liability.',
      'Some jurisdictions do not allow limitation of liability, so this provision may not apply to you.',
    ],
  },
  {
    id: 7,
    number: '07',
    title: 'Termination of Services',
    icon: <CheckCircle className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    content: [
      'Mindsmiratus Technologies reserves the right to terminate or suspend access to services immediately if: client violates these terms, client engages in unlawful activity, client\'s account has unpaid dues for more than 30 days, or service continuity is compromised.',
      'The client may terminate services with 30 days written notice. Outstanding invoices must be paid in full.',
      'Upon termination, all access credentials will be revoked, and deliverables will be provided only upon full settlement of dues.',
    ],
  },
  {
    id: 8,
    number: '08',
    title: 'Governing Law',
    icon: <Scale className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    content: [
      'These Terms of Service are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.',
      'Any legal disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, Delhi, India.',
      'Both parties agree to first attempt to resolve disputes through good faith negotiation before pursuing legal action.',
      'If litigation becomes necessary, the prevailing party shall be entitled to recover reasonable attorney fees and court costs.',
    ],
  },
];

export default function TermsAndConditionsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Mesh Gradient */}
      <motion.div
        className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-20 -right-20 w-96 h-96 bg-indigo-600/30 rounded-full mix-blend-screen filter blur-[100px]"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 -left-20 w-80 h-80 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[80px]"
            animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-40 rounded-full animate-pulse"></div>
              <div className="relative w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl">
                <Scale className="w-10 h-10 text-indigo-300" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-slate-300"
          >
            Terms & Conditions
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Please read these terms carefully. They constitute a legally binding agreement between you and Mindsmiratus Technologies.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium">Legally Binding</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium">Updated Dec 2024</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Important Legal Notice */}
      <section className="py-16 px-4 -mt-12 relative z-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-amber-100 shadow-xl shadow-amber-900/5 flex gap-6"
          >
            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0">
              <AlertCircle className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Legal Notice</h3>
              <p className="text-slate-600 leading-relaxed">
                By accessing our services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, please discontinue use of our services immediately.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {termsSections.map((section) => (
              <motion.div
                key={section.id}
                variants={itemVariants}
                className={`group rounded-3xl border transition-all duration-500 ${expandedId === section.id
                    ? 'border-indigo-200 bg-indigo-50/30'
                    : 'border-slate-100 bg-white hover:border-slate-200 shadow-sm hover:shadow-md'
                  }`}
              >
                <button
                  onClick={() => setExpandedId(expandedId === section.id ? null : section.id)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${section.color} text-white shadow-lg shadow-indigo-500/10 group-hover:scale-110 transition-transform duration-300`}>
                      {section.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1 block">Section {section.number}</span>
                      <span className="text-2xl font-bold text-slate-900 tracking-tight">
                        {section.title}
                      </span>
                    </div>
                  </div>
                  <div className={`p-2 rounded-full transition-colors duration-300 ${expandedId === section.id ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-50 text-slate-400'}`}>
                    <ChevronDown className={`w-6 h-6 transition-transform duration-500 ${expandedId === section.id ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedId === section.id ? 'auto' : 0,
                    opacity: expandedId === section.id ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 pt-2">
                    <div className="pl-20 space-y-4">
                      {section.content.map((para, idx) => (
                        <div key={idx} className="flex gap-4 items-start group/para">
                          <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 group-hover/para:scale-150 transition-transform" />
                          <p className="text-lg text-slate-600 leading-relaxed font-medium">
                            {para}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center tracking-tight">Summary of Key Points</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Intellectual Property', desc: 'Ownership transfers only after full payment.', icon: <Gavel className="w-5 h-5" /> },
              { title: 'Payment Terms', desc: 'Milestone-based billing with late fee provisions.', icon: <CreditCard className="w-5 h-5" /> },
              { title: 'Confidentiality', desc: 'Strict 3-year NDA for all shared information.', icon: <Lock className="w-5 h-5" /> },
              { title: 'Jurisdiction', desc: 'Exclusive legal jurisdiction in New Delhi, India.', icon: <Globe className="w-5 h-5" /> },
            ].map((point, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/60"
              >
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                  {point.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{point.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="py-24 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-slate-400 mb-4">LAST REVISED: DECEMBER 29, 2024</p>
          <h5 className="text-2xl font-bold text-slate-900 mb-4">Need clarification on our terms?</h5>
          <p className="text-slate-500 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
            Our legal team is available to discuss any specific clauses or project-specific requirements.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:legal@mindsmiratus.com"
              className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/10"
            >
              Contact Legal Dept
            </a>
          </div>

          <p className="mt-16 text-slate-400 text-sm font-medium">
            © 2024 Mindsmiratus Technologies Pvt. Ltd. • All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
