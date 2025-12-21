import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const TermsOfService = () => {
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
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
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
                Welcome to APIBuildr ("we," "our," or "us"). These Terms of
                Service ("Terms") govern your access to and use of our mock API
                builder platform, including our website, services, and
                applications (collectively, the "Service").
              </p>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using our Service, you agree to be bound by
                these Terms. If you disagree with any part of the Terms, you may
                not access the Service.
              </p>
            </div>

            {/* Accounts */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                2. Accounts
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you create an account with us, you must provide accurate,
                complete, and current information at all times. Failure to do so
                constitutes a breach of the Terms.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You are responsible for safeguarding the password that you use
                to access the Service and for any activities or actions under
                your password. You agree not to disclose your password to any
                third party.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You must notify us immediately upon becoming aware of any breach
                of security or unauthorized use of your account.
              </p>
            </div>

            {/* Acceptable Use */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                3. Acceptable Use
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree to use the Service only for lawful purposes and in
                accordance with these Terms. You agree not to use the Service:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  In any way that violates any applicable national or
                  international law or regulation
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or
                  promotional material without our prior written consent
                </li>
                <li>
                  To impersonate or attempt to impersonate the Company, a
                  Company employee, another user, or any other person or entity
                </li>
                <li>
                  To engage in any conduct that restricts or inhibits anyone's
                  use or enjoyment of the Service
                </li>
                <li>
                  To introduce viruses, trojans, worms, logic bombs, or other
                  material that is malicious or technologically harmful
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Service and its original content, features, and
                functionality are and will remain the exclusive property of
                APIBuildr and its licensors. The Service is protected by
                copyright, trademark, and other laws of both the United States
                and foreign countries.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our trademarks and trade dress may not be used in connection
                with any product or service without the prior written consent of
                APIBuildr.
              </p>
            </div>

            {/* User Content */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                5. User Content
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You retain all rights to any content you submit, post, or
                display on or through the Service ("User Content"). By
                submitting User Content, you grant us a worldwide,
                non-exclusive, royalty-free license to use, reproduce, and
                display such content in connection with providing the Service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You represent and warrant that you own or control all rights to
                your User Content and that such content does not violate these
                Terms or any applicable laws.
              </p>
            </div>

            {/* Service Availability */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                6. Service Availability
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We strive to provide a reliable Service, but we do not guarantee
                that the Service will be available at all times or that it will
                be uninterrupted or error-free.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue the
                Service (or any part thereof) at any time, with or without
                notice. We will not be liable to you or any third party for any
                modification, suspension, or discontinuation of the Service.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the maximum extent permitted by applicable law, in no event
                shall APIBuildr, its affiliates, agents, directors, employees,
                suppliers, or licensors be liable for any indirect, incidental,
                special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other
                intangible losses.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our total liability to you for any damages arising out of or
                related to these Terms or the Service shall not exceed the
                amount you have paid to us in the twelve (12) months immediately
                preceding the event giving rise to the liability.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                8. Termination
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may terminate or suspend your account immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if you breach the Terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Upon termination, your right to use the Service will immediately
                cease. If you wish to terminate your account, you may simply
                discontinue using the Service or contact us to request account
                deletion.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days' notice prior to any new
                terms taking effect.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By continuing to access or use our Service after those revisions
                become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                10. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:legal@apibuildr.com"
                    className="text-orange-600 hover:text-orange-700">
                    legal@apibuildr.com
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
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join thousands of developers building better software with
            APIBuildr.
          </p>
          <Link
            to="/register"
            className="inline-block bg-orange-600 text-white py-3 px-12 rounded-md hover:bg-orange-700 transition-colors shadow-lg">
            Create Your Account
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;
