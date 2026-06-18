import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Techmak Technology Ltd. Privacy Policy — Learn how we collect, use, protect, and share your personal data in compliance with international privacy standards including GDPR, CCPA, and Bangladesh data protection laws.",
  openGraph: {
    title: "Privacy Policy - Techmak Technology Ltd.",
    description:
      "Our commitment to protecting your privacy and personal data under international law.",
    type: "website",
    images: [{ url: "https://techmakai.com/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://techmakai.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const effectiveDate = "June 6, 2026";
  const lastUpdated = "June 6, 2026";

  return (
    <main className="relative min-h-screen text-white pt-24 md:pt-28 pb-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-[#38c5e0]/[0.04] blur-[150px] -z-10" />
      <div className="pointer-events-none fixed bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#0ea5c9]/[0.03] blur-[120px] -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#78d4e8]/50 mb-3">
            Legal
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Privacy Policy
          </h1>
          <div className="flex items-center gap-4 text-[#8ab8c8]/60 text-sm">
            <span>Effective Date: {effectiveDate}</span>
            <span className="w-1 h-1 rounded-full bg-[#38c5e0]/40" />
            <span>Last Updated: {lastUpdated}</span>
          </div>
          <div className="mt-6 h-px bg-gradient-to-r from-[#38c5e0]/30 via-[#38c5e0]/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="space-y-12">

          {/* Introduction */}
          <Section title="1. Introduction">
            <p>
              Techmak Technology Ltd. (&quot;Techmak,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and safeguarding your personal data. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website <strong className="text-white">techmakai.com</strong> (the &quot;Website&quot;) or interact with our services.
            </p>
            <p>
              This policy is designed to comply with applicable international data protection regulations, including but not limited to the <strong className="text-white">General Data Protection Regulation (GDPR)</strong> of the European Union, the <strong className="text-white">California Consumer Privacy Act (CCPA)</strong>, the <strong className="text-white">Digital Security Act, 2018</strong> of Bangladesh, and other applicable privacy laws worldwide.
            </p>
            <p>
              By accessing or using our Website, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy. If you do not agree, please discontinue use of the Website immediately.
            </p>
          </Section>

          {/* Information We Collect */}
          <Section title="2. Information We Collect">
            <Subsection title="2.1 Personal Information You Provide">
              <p>When you voluntarily submit information through our contact forms, inquiries, or other interactions, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Full name</li>
                <li>Email address</li>
                <li>Company or organization name</li>
                <li>Phone number (if provided)</li>
                <li>Project details and inquiry descriptions</li>
                <li>Any other information you choose to share</li>
              </ul>
            </Subsection>

            <Subsection title="2.2 Automatically Collected Information">
              <p>When you visit our Website, certain information is collected automatically through cookies and similar technologies:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>IP address and approximate geographic location</li>
                <li>Browser type, version, and language preferences</li>
                <li>Device type, operating system, and screen resolution</li>
                <li>Pages visited, time spent on pages, and navigation patterns</li>
                <li>Referring URLs and search terms used to find our Website</li>
                <li>Date and time of access</li>
              </ul>
            </Subsection>

            <Subsection title="2.3 Information from Third Parties">
              <p>We may receive information about you from third-party services such as analytics providers, social media platforms, and business partners, solely for the purposes outlined in this policy.</p>
            </Subsection>
          </Section>

          {/* How We Use Your Information */}
          <Section title="3. How We Use Your Information">
            <p>We process your personal data only for legitimate business purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-white">Service Delivery:</strong> To respond to inquiries, process requests, and provide our technology and security solutions</li>
              <li><strong className="text-white">Communication:</strong> To send relevant information about our services, updates, and project-related correspondence</li>
              <li><strong className="text-white">Website Improvement:</strong> To analyze usage patterns, optimize user experience, and improve our Website performance</li>
              <li><strong className="text-white">Security:</strong> To detect, prevent, and address fraud, unauthorized access, and technical issues</li>
              <li><strong className="text-white">Legal Compliance:</strong> To comply with applicable laws, regulations, legal processes, or governmental requests</li>
              <li><strong className="text-white">Business Operations:</strong> For internal analytics, auditing, and record-keeping purposes</li>
            </ul>
          </Section>

          {/* Legal Basis for Processing (GDPR) */}
          <Section title="4. Legal Basis for Processing (GDPR)">
            <p>Under the General Data Protection Regulation, we process personal data based on the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-white">Consent:</strong> Where you have explicitly consented to the processing of your data (e.g., submitting a contact form)</li>
              <li><strong className="text-white">Contractual Necessity:</strong> Where processing is necessary for the performance of a contract or pre-contractual measures</li>
              <li><strong className="text-white">Legitimate Interest:</strong> Where processing is necessary for our legitimate business interests, provided they do not override your fundamental rights</li>
              <li><strong className="text-white">Legal Obligation:</strong> Where processing is required to comply with applicable legal requirements</li>
            </ul>
          </Section>

          {/* Data Sharing & Disclosure */}
          <Section title="5. Data Sharing & Disclosure">
            <p>
              We do <strong className="text-white">not</strong> sell, rent, or trade your personal information to third parties for marketing purposes. We may share your data only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-white">Service Providers:</strong> Trusted third-party vendors who assist us in operating our Website, conducting business, or providing services (subject to confidentiality agreements)</li>
              <li><strong className="text-white">Legal Requirements:</strong> When required by law, court order, subpoena, or government regulation</li>
              <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, reorganization, or sale of assets</li>
              <li><strong className="text-white">Protection of Rights:</strong> To protect the rights, property, or safety of Techmak, our users, or the public</li>
            </ul>
          </Section>

          {/* International Data Transfers */}
          <Section title="6. International Data Transfers">
            <p>
              As Techmak operates from Bangladesh and serves clients internationally, your personal data may be transferred to and processed in countries outside your country of residence. When we transfer data internationally, we ensure appropriate safeguards are in place, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Data processing agreements with all third-party processors</li>
              <li>Compliance with applicable cross-border data transfer regulations</li>
            </ul>
          </Section>

          {/* Data Security */}
          <Section title="7. Data Security">
            <p>We implement industry-standard technical and organizational measures to protect your personal data, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>SSL/TLS encryption for all data transmitted through our Website</li>
              <li>HTTP Strict Transport Security (HSTS) enforcement</li>
              <li>Content Security Policy (CSP) headers to prevent cross-site scripting</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access control mechanisms limiting data access to authorized personnel only</li>
              <li>Secure hosting infrastructure with firewall protection</li>
            </ul>
            <p className="mt-4">
              While we take all reasonable precautions, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.
            </p>
          </Section>

          {/* Data Retention */}
          <Section title="8. Data Retention">
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. When your data is no longer needed, we will securely delete or anonymize it.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Contact form submissions: retained for up to 24 months after last interaction</li>
              <li>Website analytics data: retained in anonymized form for up to 26 months</li>
              <li>Legal and compliance records: retained as required by applicable law</li>
            </ul>
          </Section>

          {/* Your Rights */}
          <Section title="9. Your Rights">
            <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>

            <Subsection title="9.1 Under GDPR (EU/EEA Residents)">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Right of Access:</strong> Request a copy of your personal data</li>
                <li><strong className="text-white">Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong className="text-white">Right to Erasure:</strong> Request deletion of your personal data (&quot;right to be forgotten&quot;)</li>
                <li><strong className="text-white">Right to Restrict Processing:</strong> Request limitation of processing</li>
                <li><strong className="text-white">Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong className="text-white">Right to Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong className="text-white">Right to Withdraw Consent:</strong> Withdraw consent at any time without affecting prior processing</li>
              </ul>
            </Subsection>

            <Subsection title="9.2 Under CCPA (California Residents)">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white">Right to Know:</strong> Request information about data collection, use, and sharing practices</li>
                <li><strong className="text-white">Right to Delete:</strong> Request deletion of personal information collected</li>
                <li><strong className="text-white">Right to Opt-Out:</strong> Opt out of the sale of personal information (note: we do not sell personal data)</li>
                <li><strong className="text-white">Right to Non-Discrimination:</strong> Not be discriminated against for exercising your privacy rights</li>
              </ul>
            </Subsection>

            <Subsection title="9.3 Exercising Your Rights">
              <p>
                To exercise any of these rights, please contact us at <strong className="text-[#9ff6ff]">techmakbd@gmail.com</strong> or <strong className="text-[#9ff6ff]">info@techmakbd.com</strong>. We will respond to verified requests within 30 days (or as required by applicable law).
              </p>
            </Subsection>
          </Section>

          {/* Cookies Policy */}
          <Section title="10. Cookies & Tracking Technologies">
            <p>Our Website may use cookies and similar tracking technologies to enhance your browsing experience. These include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-white">Essential Cookies:</strong> Required for basic Website functionality (session management, security)</li>
              <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors interact with our Website</li>
              <li><strong className="text-white">Performance Cookies:</strong> Monitor Website performance and loading times</li>
            </ul>
            <p className="mt-4">
              You can control cookie preferences through your browser settings. Disabling certain cookies may affect Website functionality.
            </p>
          </Section>

          {/* Copyright & Intellectual Property */}
          <Section title="11. Copyright & Intellectual Property Rights">
            <p>
              All content, materials, designs, graphics, text, images, logos, trademarks, software, and other intellectual property displayed on this Website are the exclusive property of <strong className="text-white">Techmak Technology Ltd.</strong> and are protected under applicable copyright and intellectual property laws, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-white">The Copyright Act, 2000</strong> of the People&apos;s Republic of Bangladesh</li>
              <li><strong className="text-white">The Berne Convention</strong> for the Protection of Literary and Artistic Works</li>
              <li><strong className="text-white">The WIPO Copyright Treaty (WCT)</strong></li>
              <li><strong className="text-white">The Digital Millennium Copyright Act (DMCA)</strong> of the United States</li>
              <li><strong className="text-white">EU Directive 2001/29/EC</strong> on the harmonization of certain aspects of copyright</li>
              <li><strong className="text-white">The TRIPS Agreement</strong> (Trade-Related Aspects of Intellectual Property Rights)</li>
            </ul>

            <Subsection title="11.1 Prohibited Actions">
              <p>Without prior written consent from Techmak Technology Ltd., you may <strong className="text-white">not</strong>:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Reproduce, copy, duplicate, or redistribute any content from this Website</li>
                <li>Modify, adapt, translate, or create derivative works based on our content</li>
                <li>Distribute, publish, transmit, or publicly display our proprietary materials</li>
                <li>Use our trademarks, logos, or brand identity for any unauthorized purpose</li>
                <li>Reverse-engineer, decompile, or disassemble any software or technology on this Website</li>
                <li>Use automated tools (scrapers, bots, crawlers) to extract content without authorization</li>
              </ul>
            </Subsection>

            <Subsection title="11.2 Copyright Infringement Notices">
              <p>
                If you believe that any content on our Website infringes your copyright, please submit a written notice to <strong className="text-[#9ff6ff]">techmakbd@gmail.com</strong> containing:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Identification of the copyrighted work claimed to be infringed</li>
                <li>Identification of the infringing material and its location on our Website</li>
                <li>Your contact information (name, address, email, phone number)</li>
                <li>A statement of good faith belief that the use is unauthorized</li>
                <li>A statement, under penalty of perjury, that the information is accurate and you are authorized to act on behalf of the copyright owner</li>
                <li>Your physical or electronic signature</li>
              </ul>
            </Subsection>

            <Subsection title="11.3 Enforcement">
              <p>
                Unauthorized use of any content on this Website may result in civil and/or criminal penalties under applicable copyright laws. Techmak Technology Ltd. reserves the right to pursue all available legal remedies against any person or entity that infringes our intellectual property rights.
              </p>
            </Subsection>
          </Section>

          {/* Children's Privacy */}
          <Section title="12. Children's Privacy">
            <p>
              Our Website and services are not directed at individuals under the age of 16 (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal data from children. If we become aware that we have inadvertently collected data from a child, we will take immediate steps to delete such information.
            </p>
          </Section>

          {/* Third-Party Links */}
          <Section title="13. Third-Party Links">
            <p>
              Our Website may contain links to external websites or services operated by third parties. We are not responsible for the privacy practices, content, or security of any third-party websites. We encourage you to review the privacy policies of any external sites you visit.
            </p>
          </Section>

          {/* Changes to This Policy */}
          <Section title="14. Changes to This Policy">
            <p>
              We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. Material changes will be communicated through a prominent notice on our Website. Your continued use of the Website after such changes constitutes acceptance of the revised policy.
            </p>
          </Section>

          {/* Governing Law */}
          <Section title="15. Governing Law">
            <p>
              This Privacy Policy shall be governed by and construed in accordance with the laws of the People&apos;s Republic of Bangladesh, without regard to its conflict of law provisions. For users located in the European Economic Area, applicable GDPR provisions shall take precedence where they provide greater data protection rights.
            </p>
          </Section>

          {/* Contact Us */}
          <Section title="16. Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <p className="font-semibold text-white mb-3">Techmak Technology Ltd.</p>
              <ul className="space-y-2 text-[#8ab8c8]">
                <li>Address: Flat-5A, Lift-5, House: 207, Road: 10, Mohakhali Dohs, Dhaka-1206, Bangladesh</li>
                <li>Email: <strong className="text-[#9ff6ff]">techmakbd@gmail.com</strong> | <strong className="text-[#9ff6ff]">info@techmakbd.com</strong></li>
                <li>Phone: <strong className="text-white">+880 9678221005</strong> | <strong className="text-white">+880 1711776464</strong></li>
              </ul>
            </div>
          </Section>

        </div>
      </div>
    </main>
  );
}

/* ── Reusable Section Components ── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold text-white mb-5 flex items-center gap-4">
        <span>{title}</span>
        <span className="flex-1 h-px bg-white/[0.06]" />
      </h2>
      <div className="space-y-4 text-[#8ab8c8] text-[15px] leading-[1.85] font-light">
        {children}
      </div>
    </section>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="text-base font-semibold text-white/90 mb-3">{title}</h3>
      <div className="space-y-3 text-[#8ab8c8] text-[15px] leading-[1.85] font-light">
        {children}
      </div>
    </div>
  );
}
