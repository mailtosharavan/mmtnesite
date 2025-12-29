import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Refund Policy — Transparent & Fair Terms",
  description:
    "Understand our transparent refund and cancellation policy for digital services, custom software, and marketing solutions.",
  keywords: "refund policy, cancellation policy, terms and conditions",
};

export default function RefundPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
