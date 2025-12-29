'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  MapPin,
  Globe,
  Smartphone,
  Key,
  ChevronDown,
  Info,
  Server,
  Database
} from 'lucide-react';

interface PolicySection {
  id: number;
  title: string;
  icon: React.ReactNode;
  content: string[];
  color: string;
}

const policySections: PolicySection[] = [
  {
    id: 1,
    title: 'Data Collection & Purpose',
    icon: <Database className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-500',
    content: [
      'We collect essential personal information (name, email, phone number) only when provided voluntarily through our contact forms or account registration.',
      'This data is used strictly for user verification, providing requested services, and maintaining your account security.',
      'We also collect technical data such as IP addresses and device information to optimize our mobile app hosting and web performance.',
    ],
  },
  {
    id: 2,
    title: 'Third-Party Authentication',
    icon: <Key className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    content: [
      'To provide seamless access, we integrate Google Authentication and Meta (Facebook) Login services.',
      'When you use these social logins, we only access public profile information and email addresses as permitted by those providers.',
      'We do not store your social media passwords. Data obtained is used solely for identity verification and account creation on our platform.',
    ],
  },
  {
    id: 3,
    title: 'Location & Map Services',
    icon: <MapPin className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-500',
    content: [
      'Our platform utilizes Google Maps API to provide location-based features and address verification.',
      'Location data is processed in real-time and is not stored permanently unless specifically required for your project deliverables.',
      'Your use of map features is also subject to Google’s Privacy Policy and Terms of Service.',
    ],
  },
  {
    id: 4,
    title: 'Security & Spam Protection',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    content: [
      'We implement CAPTCHA/hCaptcha services to prevent fraudulent activities and automated bot attacks.',
      'These services analyze hardware and software information to determine if a user is human.',
      'This verification is essential for maintaining the integrity of our contact forms and authentication systems.',
    ],
  },
  {
    id: 5,
    title: 'Data Protection & Security',
    icon: <Lock className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    content: [
      'Your data is protected using industry-standard SSL/TLS encryption during transit and advanced hashing at rest.',
      'Access to personal data is restricted to authorized personnel who require it to perform specific operational tasks.',
      'We regularly conduct security audits to ensure our mobile app hosting environment remains resilient against emerging threats.',
    ],
  },
  {
    id: 6,
    title: 'Mobile App & Hosting',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'from-rose-500 to-orange-500',
    content: [
      'Information collected through our mobile applications is used to synchronize your preferences across platforms.',
      'Our hosting infrastructure uses secure, high-performance servers to ensure data availability and rapid response times for all users.',
      'We do not sell, rent, or trade your personal data to third-party marketing agencies.',
    ],
  },
  {
    id: 7,
    title: 'Your Privacy Rights',
    icon: <UserCheck className="w-6 h-6" />,
    color: 'from-blue-600 to-cyan-600',
    content: [
      'You have the right to access, update, or request the deletion of your personal information at any time.',
      'Users can opt-out of promotional communications while still receiving essential service-related notifications.',
      'For any data requests or privacy concerns, you can reach out to our dedicated data protection team.',
    ],
  },
];

export default function PrivacyPolicyPage() {
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
            className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-screen filter blur-[100px]"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 -left-20 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[80px]"
            animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 right-1/4 w-72 h-72 bg-emerald-600/20 rounded-full mix-blend-screen filter blur-[90px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
              <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-40 rounded-full animate-pulse"></div>
              <div className="relative w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl">
                <Shield className="w-10 h-10 text-blue-400" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-300"
          >
            Privacy Policy
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Your trust is our most valuable asset. Learn how we protect your data across our web and mobile ecosystem.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium">Secured Data</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
              <Eye className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium">Transparent Usage</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
              <Globe className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content Sections */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {policySections.map((section) => (
              <motion.div
                key={section.id}
                variants={itemVariants}
                className={`group rounded-3xl border transition-all duration-500 ${expandedId === section.id
                    ? 'border-blue-200 bg-blue-50/30'
                    : 'border-slate-100 bg-white hover:border-slate-200 shadow-sm hover:shadow-md'
                  }`}
              >
                <button
                  onClick={() => setExpandedId(expandedId === section.id ? null : section.id)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${section.color} text-white shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300`}>
                      {section.icon}
                    </div>
                    <span className="text-2xl font-bold text-slate-900 tracking-tight">
                      {section.id}. {section.title}
                    </span>
                  </div>
                  <div className={`p-2 rounded-full transition-colors duration-300 ${expandedId === section.id ? 'bg-blue-100 text-blue-600' : 'bg-slate-50 text-slate-400'}`}>
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
                          <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 group-hover/para:scale-150 transition-transform" />
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

      {/* Info Cards Section */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Last Audit",
              value: "Dec 2024",
              icon: <Server className="w-5 h-5" />,
              desc: "Environment Security Check"
            },
            {
              title: "Transparency",
              value: "100%",
              icon: <Info className="w-5 h-5" />,
              desc: "No Hidden Data Usage"
            },
            {
              title: "Response Time",
              value: "24-48h",
              icon: <Globe className="w-5 h-5" />,
              desc: "Data Request Fulfillment"
            }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/60"
            >
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 mb-6">
                {stat.icon}
              </div>
              <p className="text-slate-500 font-semibold text-sm uppercase tracking-wider mb-2">{stat.title}</p>
              <h4 className="text-3xl font-black text-slate-900 mb-2">{stat.value}</h4>
              <p className="text-slate-500 font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Info */}
      <footer className="py-24 border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-1 mb-8 rounded-full bg-slate-100 border border-slate-200">
            <div className="flex items-center gap-3 px-6 py-2 bg-white rounded-full shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <p className="text-sm font-bold text-slate-700">Effective from December 2024</p>
            </div>
          </div>

          <h5 className="text-2xl font-bold text-slate-900 mb-4">Questions about your privacy?</h5>
          <p className="text-slate-500 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
            Our data protection officer is ready to assist you with any inquiries regarding your personal information.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:privacy@mindsmiratus.com"
              className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10"
            >
              Contact DPO
            </a>
            <button
              className="px-8 py-4 border-2 border-slate-200 text-slate-900 rounded-2xl font-bold hover:border-slate-900 transition-all"
            >
              Download PDF Version
            </button>
          </div>

          <p className="mt-16 text-slate-400 text-sm font-medium">
            © 2024 Mindsmiratus Technologies Pvt. Ltd. • All Data is Hosted on Secure Servers
          </p>
        </div>
      </footer>
    </div>
  );
}

