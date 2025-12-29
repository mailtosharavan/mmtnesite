import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms & Conditions — Legally Binding Agreement",
  description:
    "Read our comprehensive terms and conditions governing the use of Mindsmiratus Technologies' IT, app development, and digital services.",
  keywords: "terms of service, terms and conditions, legal agreement, service terms",
};

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
