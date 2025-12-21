import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

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
      <section className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Have questions, feedback, or need support? We're here to help. Reach
            out to us and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📧</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Email Us
            </h3>
            <p className="text-gray-600 mb-3">
              For general inquiries and support
            </p>
            <a
              href="mailto:hello@apibuildr.com"
              className="text-orange-600 hover:text-orange-700 font-medium">
              hello@apibuildr.com
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💬</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Support
            </h3>
            <p className="text-gray-600 mb-3">
              Technical support and bug reports
            </p>
            <a
              href="mailto:support@apibuildr.com"
              className="text-orange-600 hover:text-orange-700 font-medium">
              support@apibuildr.com
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Sales</h3>
            <p className="text-gray-600 mb-3">
              Enterprise and custom solutions
            </p>
            <a
              href="mailto:sales@apibuildr.com"
              className="text-orange-600 hover:text-orange-700 font-medium">
              sales@apibuildr.com
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                  <option value="bug">Bug Report</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Why Contact Us?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Quick Response Time
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We typically respond within 24 hours on business days
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Expert Support
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Our team has deep technical knowledge to help with any
                      issue
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl mt-1">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Your Feedback Matters
                    </h4>
                    <p className="text-gray-600 text-sm">
                      We actively incorporate user feedback into product
                      improvements
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Other Ways to Reach Us
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    📚 Documentation
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Find answers to common questions in our comprehensive docs
                  </p>
                  <Link
                    to="/documentation"
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                    View Documentation →
                  </Link>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    🌐 Community
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Join our community to connect with other developers
                  </p>
                  <Link
                    to="/community"
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                    Join Community →
                  </Link>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    ❓ Help Center
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Browse FAQs and troubleshooting guides
                  </p>
                  <Link
                    to="/help"
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                    Visit Help Center →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                How quickly will I receive a response?
              </h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24 hours during
                business days. Urgent technical issues are prioritized.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Do you offer enterprise support?
              </h3>
              <p className="text-gray-600">
                Yes! Contact our sales team to learn about dedicated support
                options, SLAs, and custom solutions for enterprise customers.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Can I schedule a demo?
              </h3>
              <p className="text-gray-600">
                Absolutely! Use the contact form above with "General Inquiry" as
                the subject and mention you'd like to schedule a demo.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Where can I report security issues?
              </h3>
              <p className="text-gray-600">
                Please email security concerns directly to{" "}
                <a
                  href="mailto:security@apibuildr.com"
                  className="text-orange-600 hover:text-orange-700">
                  security@apibuildr.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Don't wait—start building your mock APIs today and accelerate your
            development workflow.
          </p>
          <Link
            to="/register"
            className="inline-block bg-orange-600 text-white py-3 px-12 rounded-md hover:bg-orange-700 transition-colors shadow-lg">
            Create Free Account
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
