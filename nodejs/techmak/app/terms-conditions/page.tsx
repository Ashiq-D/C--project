import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Techmak Technology Ltd. Terms & Conditions — Rules governing the use of our website, services, intellectual property, and liability provisions under international law.",
  openGraph: {
    title: "Terms & Conditions - Techmak Technology Ltd.",
    description:
      "Terms governing the use of Techmak Technology's website and services.",
    type: "website",
    images: [{ url: "https://techmakai.com/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://techmakai.com/terms-conditions",
  },
};

export default function TermsConditionsPage() {
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
            Terms & Conditions
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

          {/* 1. Acceptance */}
          <Section title="1. Acceptance of Terms">
            <p>
              Welcome to the website of <strong className="text-white">Techmak Technology Ltd.</strong> (&quot;Techmak,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing, browsing, or using our website at <strong className="text-white">techmakai.com</strong> (the &quot;Website&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;), our Privacy Policy, and all applicable laws and regulations.
            </p>
            <p>
              If you do not agree with any part of these Terms, you must immediately discontinue use of the Website. These Terms constitute a legally binding agreement between you and Techmak Technology Ltd.
            </p>
          </Section>

          {/* 2. Definitions */}
          <Section title="2. Definitions">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">&quot;Website&quot;</strong> refers to techmakai.com and all its pages, subdomains, and associated digital properties.</li>
              <li><strong className="text-white">&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;</strong> refers to any person or entity accessing or using the Website.</li>
              <li><strong className="text-white">&quot;Services&quot;</strong> refers to the technology, security, surveillance, automation, and consulting solutions offered by Techmak.</li>
              <li><strong className="text-white">&quot;Content&quot;</strong> refers to all text, images, graphics, logos, videos, code, designs, and other materials published on the Website.</li>
            </ul>
          </Section>

          {/* 3. Eligibility */}
          <Section title="3. Eligibility">
            <p>
              By using this Website, you represent and warrant that you are at least 16 years of age (or the age of majority in your jurisdiction) and have the legal capacity to enter into binding agreements. If you are accessing the Website on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
            </p>
          </Section>

          {/* 4. Use of Website */}
          <Section title="4. Acceptable Use">
            <p>You agree to use the Website only for lawful purposes and in accordance with these Terms. You agree <strong className="text-white">not</strong> to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Use the Website in any way that violates any applicable local, national, or international law or regulation</li>
              <li>Attempt to gain unauthorized access to any part of the Website, server, or connected systems</li>
              <li>Introduce viruses, trojans, worms, malware, or other harmful or technologically destructive material</li>
              <li>Use automated systems (bots, scrapers, crawlers) to collect data without written authorization</li>
              <li>Impersonate or attempt to impersonate Techmak, a Techmak employee, or any other person or entity</li>
              <li>Interfere with or disrupt the Website or servers or networks connected to the Website</li>
              <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Website</li>
              <li>Use the Website to transmit unsolicited advertising, spam, or promotional materials</li>
              <li>Attempt to reverse-engineer, decompile, or disassemble any software or technology on the Website</li>
            </ul>
          </Section>

          {/* 5. Intellectual Property */}
          <Section title="5. Intellectual Property Rights">
            <p>
              All Content on this Website, including but not limited to text, graphics, logos, images, audio clips, video, data compilations, software, and the design, selection, and arrangement thereof, is the exclusive property of <strong className="text-white">Techmak Technology Ltd.</strong> or its licensors and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <Subsection title="5.1 Limited License">
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Website for personal, non-commercial, informational purposes only. This license does not include any right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Download, copy, or reproduce any Content (except for temporary caching by your browser)</li>
                <li>Modify, distribute, or create derivative works from any Content</li>
                <li>Use any data mining, robots, or similar data gathering tools</li>
                <li>Frame or mirror any portion of the Website</li>
              </ul>
            </Subsection>

            <Subsection title="5.2 Trademarks">
              <p>
                &quot;Techmak,&quot; &quot;Techmak Technology Ltd.,&quot; the Techmak logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Techmak Technology Ltd. You may not use such marks without our prior written permission. All other names, logos, and brands are the property of their respective owners.
              </p>
            </Subsection>
          </Section>

          {/* 6. Services & Products */}
          <Section title="6. Services & Product Information">
            <p>
              The information provided on this Website regarding our services, solutions, and capabilities is for general informational purposes only. While we strive to ensure accuracy:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Service descriptions, specifications, and features may be subject to change without notice</li>
              <li>Images and illustrations are representative and may differ from actual products or implementations</li>
              <li>Pricing, availability, and service terms are subject to separate agreements and contracts</li>
              <li>No information on the Website constitutes a binding offer or contract unless explicitly stated in a formal agreement</li>
            </ul>
          </Section>

          {/* 7. User Submissions */}
          <Section title="7. User Submissions & Communications">
            <p>
              Any information, feedback, inquiries, or other materials you submit through our contact forms or other communication channels:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Will be treated in accordance with our Privacy Policy</li>
              <li>Should not contain any confidential or proprietary information that you are not authorized to share</li>
              <li>Must not be unlawful, threatening, abusive, defamatory, obscene, or otherwise objectionable</li>
              <li>Grant Techmak a non-exclusive right to use the submission for responding to your inquiry and improving our services</li>
            </ul>
            <p className="mt-4">
              You are solely responsible for the accuracy and legality of any information you submit.
            </p>
          </Section>

          {/* 8. Disclaimer of Warranties */}
          <Section title="8. Disclaimer of Warranties">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <p className="uppercase font-semibold text-white text-sm mb-4">IMPORTANT NOTICE</p>
              <p>
                THE WEBSITE AND ALL CONTENT, MATERIALS, AND SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT</li>
                <li>WARRANTIES REGARDING THE ACCURACY, COMPLETENESS, RELIABILITY, OR AVAILABILITY OF THE WEBSITE</li>
                <li>WARRANTIES THAT THE WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS</li>
              </ul>
              <p className="mt-4">
                TECHMAK DOES NOT WARRANT THAT ANY INFORMATION ON THE WEBSITE IS ACCURATE, COMPLETE, OR CURRENT.
              </p>
            </div>
          </Section>

          {/* 9. Limitation of Liability */}
          <Section title="9. Limitation of Liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL TECHMAK TECHNOLOGY LTD., ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, OR AFFILIATES BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Any loss of profits, revenue, data, goodwill, or other intangible losses</li>
              <li>Damages resulting from unauthorized access to or alteration of your transmissions or data</li>
              <li>Damages resulting from any content obtained through the Website</li>
              <li>Any matter relating to the Website or these Terms</li>
            </ul>
            <p className="mt-4">
              This limitation applies regardless of the legal theory on which the claim is based (contract, tort, negligence, strict liability, or otherwise), even if Techmak has been advised of the possibility of such damages.
            </p>
          </Section>

          {/* 10. Indemnification */}
          <Section title="10. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless Techmak Technology Ltd. and its directors, officers, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorney&apos;s fees) arising from or related to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Your use of the Website</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any applicable law or the rights of any third party</li>
              <li>Any content or information you submit through the Website</li>
            </ul>
          </Section>

          {/* 11. Third-Party Links */}
          <Section title="11. Third-Party Links & Services">
            <p>
              The Website may contain links to third-party websites, services, or resources that are not owned or controlled by Techmak. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Techmak shall not be liable for any damage or loss caused by or in connection with the use of any third-party content, goods, or services.
            </p>
          </Section>

          {/* 12. Modifications */}
          <Section title="12. Modifications to Terms">
            <p>
              Techmak reserves the right to revise, amend, or update these Terms at any time at our sole discretion. Changes will be effective immediately upon posting the updated Terms on this page with a revised &quot;Last Updated&quot; date. Your continued use of the Website after any such changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.
            </p>
          </Section>

          {/* 13. Termination */}
          <Section title="13. Termination">
            <p>
              We may terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms. Upon termination, your right to use the Website will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </Section>

          {/* 14. Governing Law */}
          <Section title="14. Governing Law & Jurisdiction">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the <strong className="text-white">People&apos;s Republic of Bangladesh</strong>, without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms or the use of the Website shall be subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh.
            </p>
            <p className="mt-4">
              For users located in the European Union, nothing in these Terms shall limit any rights you may have under mandatory consumer protection laws in your country of residence.
            </p>
          </Section>

          {/* 15. Severability */}
          <Section title="15. Severability">
            <p>
              If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable, and the remaining provisions shall continue in full force and effect.
            </p>
          </Section>

          {/* 16. Waiver */}
          <Section title="16. Waiver">
            <p>
              No failure or delay by Techmak in exercising any right, power, or remedy under these Terms shall operate as a waiver thereof. No single or partial exercise of any right shall preclude further exercise of that or any other right.
            </p>
          </Section>

          {/* 17. Entire Agreement */}
          <Section title="17. Entire Agreement">
            <p>
              These Terms, together with the Privacy Policy, constitute the entire agreement between you and Techmak Technology Ltd. regarding your use of the Website and supersede all prior and contemporaneous agreements, proposals, and communications, whether oral or written.
            </p>
          </Section>

          {/* 18. Contact Information */}
          <Section title="18. Contact Information">
            <p>
              If you have any questions about these Terms and Conditions, please contact us:
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
