'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle, Clock, DollarSign, FileCheck, Phone, Mail, Shield } from 'lucide-react';

interface PolicySection {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string;
  color: string;
}

const policySections: PolicySection[] = [
  {
    id: 1,
    title: 'Project Initiation',
    icon: <FileCheck className="w-6 h-6" />,
    description: 'Refund eligibility for project start phase',
    details: 'Once a project has been initiated and the first milestone or payment has been received, refunds are not applicable for completed phases of work. However, if no work has been started and the client wishes to cancel within 7 business days of payment, a partial refund (up to 80%) may be considered.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Service Subscriptions',
    icon: <Clock className="w-6 h-6" />,
    description: 'Policy for ongoing subscription services',
    details: 'For ongoing or subscription-based services (such as hosting, marketing, or maintenance plans), cancellations will take effect at the end of the current billing cycle. Refunds will not be provided for partial months or unused periods.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Non-Refundable Services',
    icon: <DollarSign className="w-6 h-6" />,
    description: 'Services that cannot be refunded',
    details: 'Domain name registrations and renewals, Third-party licensing fees or integrations, Paid advertisements or digital media spends, and Completed design, development, or consultation deliverables are non-refundable.',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'Refund Process',
    icon: <DollarSign className="w-6 h-6" />,
    description: 'How and when you receive your refund',
    details: 'Any eligible refunds will be processed to the original payment source within 7–14 business days after approval. Requests must be submitted in writing to billing@mindsmiratus.com with proof of payment and project reference details.',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function RefundPolicy() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Hero Section */}
      <motion.div
        className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-blue-300" />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white"
          >
            Refund & Cancellation Policy
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            We believe in transparency and fairness. Our refund policy is designed to protect both our clients and our commitment to delivering exceptional digital solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
              <p className="text-sm text-blue-100">✓ Transparent Terms</p>
            </div>
            <div className="px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
              <p className="text-sm text-blue-100">✓ Fair & Balanced</p>
            </div>
            <div className="px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
              <p className="text-sm text-blue-100">✓ Customer Focused</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Introduction */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Commitment</h2>
              <p className="text-slate-700 leading-relaxed">
                At <strong>Mindsmiratus Technologies Pvt. Ltd.</strong>, we strive to deliver exceptional results through our web, mobile, and digital services. Since our work involves time, effort, and intellectual creativity, we maintain a transparent and fair refund policy that respects both parties' investments.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Policy Sections */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Policy Details</h2>

        <div className="space-y-4">
          {policySections.map((section) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100"
            >
              <button
                onClick={() => setExpandedId(expandedId === section.id ? null : section.id)}
                className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${section.color} text-white`}>
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{section.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{section.description}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedId === section.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-slate-600" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedId === section.id ? 'auto' : 0,
                  opacity: expandedId === section.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-8 py-6 bg-gradient-to-br from-slate-50 to-white border-t border-slate-100">
                  <p className="text-slate-700 leading-relaxed">{section.details}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Email */}
          <motion.a
            href="mailto:billing@mindsmiratus.com"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-slate-100 group"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Refund Requests</h3>
            <p className="text-slate-600 mb-4">Submit refund requests with proof of payment</p>
            <p className="text-blue-600 font-semibold hover:underline">billing@mindsmiratus.com</p>
          </motion.a>

          {/* Support */}
          <motion.a
            href="mailto:support@mindsmiratus.com"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-slate-100 group"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Support Inquiries</h3>
            <p className="text-slate-600 mb-4">Questions about this policy?</p>
            <p className="text-blue-600 font-semibold hover:underline">support@mindsmiratus.com</p>
          </motion.a>
        </div>
      </motion.div>

      {/* Footer Info */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm text-slate-600 mb-2">
          Last updated: <span className="font-semibold">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </p>
        <p className="text-xs text-slate-500">
          © 2024 Mindsmiratus Technologies Pvt. Ltd. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}
