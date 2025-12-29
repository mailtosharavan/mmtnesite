import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | Data Protection & Security",
    description:
        "Understand how Mindsmiratus Technologies protects your data. Learn about our usage of Google API, Meta Login, Maps, and Security services for user verification and mobile app hosting.",
    keywords: "privacy policy, data protection, gdpr, google auth, meta login, map api, security",
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
