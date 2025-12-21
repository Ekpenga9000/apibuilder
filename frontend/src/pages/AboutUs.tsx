import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const AboutUs = () => {
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
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About APIBuildr</h1>
          <p className="text-xl text-orange-100 leading-relaxed">
            Empowering developers to build better software, faster.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            At APIBuildr, we believe that frontend development shouldn't be
            blocked by backend delays. Our mission is to empower developers with
            tools that enable parallel development, rapid prototyping, and
            seamless API testing—all without writing a single line of backend
            code.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              APIBuildr was born from a common frustration: waiting for backend
              APIs to be ready before frontend development could begin. As
              developers ourselves, we experienced countless project delays and
              bottlenecks caused by API dependencies.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              In 2024, we set out to solve this problem. We built a platform
              that allows developers to define, mock, and test APIs instantly—no
              backend infrastructure required. What started as a simple tool for
              our own projects has grown into a platform trusted by thousands of
              developers worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, APIBuildr continues to evolve, driven by feedback from our
              community and our commitment to making API development accessible
              to everyone.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg p-12 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-2xl font-bold text-orange-800">
                Trusted by 10,000+ Developers
              </p>
              <p className="text-orange-700 mt-2">Across 50+ Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 my-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We constantly push boundaries to create tools that solve real
                developer problems and improve workflows.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Community
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our users are at the heart of everything we do. We build for
                developers, by developers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Simplicity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Complex tools slow you down. We believe powerful functionality
                should be simple to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="max-w-6xl mx-auto px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          What We Do
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              🎯 Mock API Creation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Create realistic RESTful API endpoints with custom responses in
              minutes. No coding required, just define your data structure and
              you're ready to go.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              🔧 Environment Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Set up multiple server environments for development, staging, and
              testing. Switch between them seamlessly without changing your
              frontend code.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              📊 API Documentation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Automatically generate clear, comprehensive documentation for all
              your mock APIs. Share with your team to keep everyone aligned.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              🚀 Instant Deployment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your mock APIs are instantly available via HTTPS. No deployment
              hassles, no infrastructure management—just create and use.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 my-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Built by Developers</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Our team consists of experienced software engineers, designers, and
            product managers who understand the challenges of modern software
            development. We've worked at startups and Fortune 500 companies, and
            we've built this platform with the same care we'd want in our own
            development workflows.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-600 text-white py-3 px-12 rounded-md hover:bg-orange-700 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="bg-orange-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Join the APIBuildr Community
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Thousands of developers are already building faster with APIBuildr.
            Whether you're a solo developer working on a side project or part of
            a large engineering team, we have the tools you need to accelerate
            your development.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/register"
              className="bg-orange-600 text-white py-3 px-12 rounded-md hover:bg-orange-700 transition-colors shadow-lg">
              Get Started Free
            </Link>
            <Link
              to="/documentation"
              className="bg-white text-orange-600 border-2 border-orange-600 py-3 px-12 rounded-md hover:bg-orange-50 transition-colors">
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-8 py-8 mb-16">
        <div className="bg-white rounded-lg shadow-md p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-3">📧</div>
              <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
              <a
                href="mailto:hello@apibuildr.com"
                className="text-orange-600 hover:text-orange-700">
                hello@apibuildr.com
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-semibold text-gray-800 mb-2">Support</h4>
              <a
                href="mailto:support@apibuildr.com"
                className="text-orange-600 hover:text-orange-700">
                support@apibuildr.com
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="font-semibold text-gray-800 mb-2">Community</h4>
              <a
                href="/community"
                className="text-orange-600 hover:text-orange-700">
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
