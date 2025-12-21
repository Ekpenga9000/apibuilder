import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
          <Logo path="/" />
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-orange-500 transition-colors">
              Back to Home
            </Link>
            <Link
              to="/login"
              className="text-white py-2 px-8 rounded-sm bg-orange-500 hover:bg-orange-600 transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600 text-lg">
            Last updated: December 20, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                APIBuildr ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our mock
                API builder platform.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please read this Privacy Policy carefully. By using our Service,
                you consent to the practices described in this policy. If you do
                not agree with this policy, please do not access or use our
                Service.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect several types of information to provide and improve
                our Service:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                2.1 Personal Information
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you register for an account, we may collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Name and email address</li>
                <li>Username and password</li>
                <li>Company name (optional)</li>
                <li>Profile information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                2.2 Usage Information
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We automatically collect information about how you use our
                Service:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>API endpoint usage and request data</li>
                <li>Features and pages accessed</li>
                <li>Time spent on the platform</li>
                <li>Error logs and performance data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                2.3 Technical Information
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collect technical data about your device and connection:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Referring URLs and navigation paths</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide, maintain, and improve our Service</li>
                <li>To create and manage your account</li>
                <li>
                  To communicate with you about updates, security alerts, and
                  support
                </li>
                <li>To analyze usage patterns and optimize performance</li>
                <li>To detect and prevent fraud and abuse</li>
                <li>To comply with legal obligations</li>
                <li>
                  To send marketing communications (with your consent, where
                  required)
                </li>
                <li>To personalize your experience on the platform</li>
              </ul>
            </div>

            {/* Data Sharing and Disclosure */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                4. Data Sharing and Disclosure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell your personal information. We may share your
                information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                4.1 Service Providers
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share your information with third-party service providers
                who perform services on our behalf, such as hosting, analytics,
                payment processing, and customer support.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                4.2 Legal Requirements
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may disclose your information if required by law or in
                response to valid requests by public authorities (e.g., a court
                or government agency).
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                4.3 Business Transfers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If we are involved in a merger, acquisition, or asset sale, your
                information may be transferred. We will provide notice before
                your information is transferred and becomes subject to a
                different privacy policy.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures
                to protect your information against unauthorized or unlawful
                processing, accidental loss, destruction, or damage. These
                include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                However, no method of transmission over the Internet or
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your information, we
                cannot guarantee its absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                6. Data Retention
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to
                provide you with our Service and as described in this Privacy
                Policy. We will also retain your information as necessary to
                comply with legal obligations, resolve disputes, and enforce our
                agreements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When you delete your account, we will delete or anonymize your
                personal information within a reasonable timeframe, unless we
                are required to retain it for legal purposes.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                7. Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have certain rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of the personal
                  information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Portability:</strong> Request a copy of your data in a
                  structured, machine-readable format
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing of your
                  personal information
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of
                  processing in certain circumstances
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@apibuildr.com"
                  className="text-orange-600 hover:text-orange-700">
                  privacy@apibuildr.com
                </a>
                . We will respond to your request within a reasonable timeframe.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                8. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track
                activity on our Service and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We use both session cookies (which expire when you close your
                browser) and persistent cookies (which remain on your device
                until deleted) for authentication, preferences, and analytics.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                9. Third-Party Links
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our Service may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                external sites. We encourage you to review the privacy policies
                of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                10. Children's Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our Service is not intended for individuals under the age of 13.
                We do not knowingly collect personal information from children
                under 13. If you are a parent or guardian and believe your child
                has provided us with personal information, please contact us so
                we can delete such information.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We encourage you to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                12. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:privacy@apibuildr.com"
                    className="text-orange-600 hover:text-orange-700">
                    privacy@apibuildr.com
                  </a>
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://apibuildr.com"
                    className="text-orange-600 hover:text-orange-700">
                    https://apibuildr.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your Privacy Matters
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We're committed to protecting your data. Start building with
            confidence.
          </p>
          <Link
            to="/register"
            className="inline-block bg-orange-600 text-white py-3 px-12 rounded-md hover:bg-orange-700 transition-colors shadow-lg">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
