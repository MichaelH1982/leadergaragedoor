import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Leader Garage Door Services",
  description:
    "Learn how Leader Garage Door Services collects, uses, and protects your personal information.",
  alternates: {
    canonical: "https://leadergaragedoor.biz/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 sm:py-16 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">Effective Date: July 1, 2025</p>

        <div className="mt-8 space-y-8 text-slate-700 leading-relaxed">
          <p>
            Leader Garage Door Services (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
            &ldquo;our,&rdquo; or &ldquo;us&rdquo;) values your privacy and is committed
            to protecting the personal information you provide through our website.
          </p>
          <p>
            This Privacy Policy explains what information we collect, how we use it,
            and the steps we take to protect it.
          </p>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Information We Collect
            </h2>
            <p className="mb-3">
              When you visit our website or contact us through our online forms, we may
              collect information including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Service address</li>
              <li>Information related to your garage door service request</li>
              <li>
                Any information you voluntarily provide through contact forms, emails,
                or phone calls
              </li>
            </ul>
            <p className="mt-3 mb-3">
              We may also automatically collect limited technical information such as:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Website usage and traffic data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              How We Use Your Information
            </h2>
            <p className="mb-3">
              We use the information we collect solely for business purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Scheduling service appointments</li>
              <li>Providing estimates and service information</li>
              <li>Communicating with customers regarding appointments and services</li>
              <li>Processing payments when applicable</li>
              <li>Improving our website and customer experience</li>
              <li>Maintaining business records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Information Sharing
            </h2>
            <p className="mb-3">
              Leader Garage Door Services does not sell, rent, trade, distribute, or
              share customer information with third parties for marketing purposes.
            </p>
            <p className="mb-3">
              Information collected through our website is used exclusively by Leader
              Garage Door Services and our scheduling and customer management platform,
              Housecall Pro, which assists us in managing appointments, customer
              communications, invoicing, and related business operations.
            </p>
            <p className="mb-3">
              Other than Housecall Pro and service providers necessary to operate our
              business, we do not share customer information unless:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Required by law;</li>
              <li>Necessary to protect our legal rights; or</li>
              <li>Authorized by the customer.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Housecall Pro</h2>
            <p className="mb-3">
              To efficiently manage service requests, customer communications,
              scheduling, and invoicing, we utilize Housecall Pro. Information submitted
              through our website may be entered into or processed through Housecall Pro
              for the purpose of providing requested services.
            </p>
            <p>
              Housecall Pro maintains its own privacy and security practices regarding
              data processed through its platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Cookies and Website Analytics
            </h2>
            <p className="mb-3">
              Our website may use cookies or similar technologies to improve website
              functionality and analyze website performance.
            </p>
            <p className="mb-3">
              Cookies help us understand how visitors interact with our website and
              allow us to improve the user experience.
            </p>
            <p>
              You may adjust your browser settings to disable cookies; however, some
              website features may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Data Security</h2>
            <p className="mb-3">
              We take reasonable administrative, technical, and physical measures to
              protect the personal information we collect from unauthorized access,
              disclosure, alteration, or destruction.
            </p>
            <p>
              While we strive to protect your information, no method of internet
              transmission or electronic storage can be guaranteed to be completely
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Your Privacy Rights
            </h2>
            <p className="mb-3">You may contact us at any time to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Request access to personal information we have collected about you;</li>
              <li>Request correction of inaccurate information; or</li>
              <li>Request deletion of personal information where legally permitted.</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              
               <a href="mailto:service@leadergaragedoor.biz" className="text-blue-600 hover:text-blue-700 underline">service@leadergaragedoor.biz</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Children&rsquo;s Privacy
            </h2>
            <p>
              Our website and services are not directed toward children under the age of
              13. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Changes to This Privacy Policy
            </h2>
            <p>
              We reserve the right to modify this Privacy Policy at any time. Any
              updates will be posted on this page with an updated Effective Date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}