import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Cmakey Company Limited's Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  const lastUpdated = "25 March 2026";

  const sections = [
    {
      title: "1. Information We Collect",
      content: `We collect information you provide directly to us when you:
      • Fill out our contact form (name, email, phone number, message)
      • Communicate with us by email or phone
      • Subscribe to our newsletters or updates
      We may also collect non-personal technical data such as browser type, IP address, and pages visited via analytics tools (Google Analytics 4).`,
    },
    {
      title: "2. How We Use Your Information",
      content: `We use the information we collect to:
      • Respond to your inquiries and provide customer support
      • Send you relevant service information and updates (with your consent)
      • Improve our website and service offerings
      • Comply with legal obligations under Tanzanian law and TCRA guidelines
      We do not sell, trade, or transfer your personal data to third parties without your explicit consent, except as required by law.`,
    },
    {
      title: "3. Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse. Our website uses HTTPS/SSL encryption to secure all data transmitted between your browser and our servers.`,
    },
    {
      title: "4. Cookies",
      content: `Our website may use cookies and similar tracking technologies to enhance your browsing experience and gather analytics data. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of some parts of our website.`,
    },
    {
      title: "5. Third-Party Services",
      content: `We may use third-party services including:
      • Google Analytics 4 – for website usage analytics
      • Google Maps – for displaying location information
      • Email service providers – for sending inquiry notifications
      These services have their own Privacy Policies governing their data practices.`,
    },
    {
      title: "6. Your Rights",
      content: `You have the right to:
      • Access the personal information we hold about you
      • Request correction of inaccurate data
      • Request deletion of your personal data
      • Withdraw consent for marketing communications at any time
      To exercise any of these rights, please contact us at info@cmakey.com.`,
    },
    {
      title: "7. Data Retention",
      content: `We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable Tanzanian laws and regulations.`,
    },
    {
      title: "8. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. We encourage you to review this policy periodically.`,
    },
    {
      title: "9. Contact Us",
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:

      Cmakey Company Limited
      P.O. Box 70307, Dar es Salaam, Tanzania
      Email: info@cmakey.com
      Phone: +255 658 173 232 / +255 714 562 710`,
    },
  ];

  return (
    <>
      <section className="relative pt-32 pb-16 bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-white/60">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Summary:</strong> Cmakey Company Limited ("we", "us",
              "our") is committed to protecting your privacy. This policy
              explains how we collect, use, and safeguard your personal
              information when you visit our website or contact us. By using our
              website, you agree to the practices described in this policy.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((sec) => (
              <div key={sec.title}>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  {sec.title}
                </h2>
                <div className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                  {sec.content}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 Cmakey Company Limited. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
