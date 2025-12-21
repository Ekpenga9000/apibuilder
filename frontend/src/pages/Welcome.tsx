import { LiaProjectDiagramSolid } from "react-icons/lia";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <main className="p-4 relative px-[18rem]">
      <nav className="flex justify-between items-center w-full mb-[15rem] pt-5">
        <Logo path="/" />
        <ul className="flex items-center gap-6 text-gray-600 text-lg">
          <li>
            <Link to="/examples">Examples</Link>
          </li>
          <li>
            <Link to="/documentation">Documentation</Link>
          </li>
        </ul>
        <Link
          to="/login"
          className="shadow-sm text-white py-2 px-16 rounded-sm bg-orange-500 hover:bg-orange-600 transition-colors">
          Sign In
        </Link>
      </nav>
      <div className="text-[45rem] absolute right-0 top-[-8rem] z-[-1] h-[50rem] w-[50rem] bg-gray-100 rounded-full pointer-events-none"></div>
      <section className="flex items-center justify-center flex-col text-center max-w-3xl mx-auto mb-[15rem]">
        <div>
          <h1 className="text-5xl font-bold mb-4 flex items-center gap-4 text-gray-800 mb-8">
            Design, Build, and Test APIs Without Writing Backend Code
          </h1>
          <p className="text-gray-600 text-2xl font-light mb-8">
            Your frontend shouldn’t wait for the backend. Our Mock API Builder
            lets developers create realistic APIs, enabling faster frontend
            development, reliable testing, and clearer system design from day
            one.
          </p>
          <Link
            to="/register"
            className="bg-orange-600 text-white py-3 px-16 rounded-md hover:bg-orange-500 transition-colors">
            Get Started
          </Link>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-8 rounded-lg shadow-md mb-32">
        <div className="flex items-center justify-center gap-4 mb-6">
          <LiaProjectDiagramSolid className="text-orange-600 text-4xl" />
          <h2 className="text-3xl font-semibold text-gray-800">
            Why Developers Use Mock API Builder?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              ⚡ Develop Frontends Without Waiting
            </h3>
            <p className="text-gray-600">
              Create RESTful endpoints with realistic responses so frontend work
              can continue independently of backend progress.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              🧪 Reliable Testing & QA
            </h3>
            <p className="text-gray-600">
              Use realistic mock APIs to simulate success cases, errors, delays,
              and edge conditions before real APIs are available..
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              🚀 Faster MVPs & Prototypes
            </h3>
            <p className="text-gray-600">
              Turn ideas into working demos quickly without investing time in
              full backend infrastructure.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-32">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
          How It Works
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[2.5rem] top-[3rem] bottom-[3rem] w-[2px] bg-gradient-to-b from-orange-300 to-orange-500 hidden md:block"></div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6 items-start relative">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10">
                1
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Create a Backend Project
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Start by creating a new backend project in Mock API Builder.
                  This project will house all your mock APIs and server
                  configurations.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start relative">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10">
                2
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Add Servers to Your Project
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Add one or more backend servers to your project. Each server
                  can represent a different environment or microservice.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start relative">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10">
                3
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Define and Manage Mock APIs
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  For each server, define RESTful APIs by specifying endpoints,
                  methods, and realistic response data. You can easily edit and
                  manage these APIs through our intuitive interface.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start relative">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10">
                4
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Integrate with Your Frontend
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Use the provided base URL and endpoints to connect your
                  frontend applications to the mock APIs. This allows you to
                  develop and test your frontend independently of the backend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-32">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-16 px-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Built for Modern Development
          </h2>
          <p className="mb-12 text-lg text-center max-w-3xl mx-auto text-gray-600">
            Whether you're a solo developer or part of a large team, Mock API
            Builder is designed to fit seamlessly into your workflow, helping
            you ship better software, faster.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-orange-500 text-center">
              <div className="text-3xl mb-3">👨‍💻</div>
              <h4 className="font-semibold text-gray-800">
                Frontend Developers
              </h4>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-orange-500 text-center">
              <div className="text-3xl mb-3">🔧</div>
              <h4 className="font-semibold text-gray-800">
                Full-stack Developers
              </h4>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-orange-500 text-center">
              <div className="text-3xl mb-3">⚙️</div>
              <h4 className="font-semibold text-gray-800">Product Engineers</h4>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-orange-500 text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-semibold text-gray-800">Startup Founders</h4>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-orange-500 text-center">
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="font-semibold text-gray-800">
                Technical Designers
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-32">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
          When to Use It
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                🎯
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Frontend Development Before Backend Readiness
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Don't let backend delays slow you down. Start building and
                  testing your UI with realistic API responses.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                💡
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  MVP and Proof-of-Concept Builds
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Validate your ideas quickly without investing in full backend
                  infrastructure. Perfect for rapid prototyping.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                ✅
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  API Contract Validation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Define and test API contracts early. Ensure frontend and
                  backend teams are aligned before implementation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                📐
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Architecture Planning and System Design
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Experiment with different API structures and data models
                  before committing to backend architecture.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange-500 hover:shadow-lg transition-shadow md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                🎬
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Demos, Testing, and Onboarding
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Create controlled environments for demos, automated testing,
                  and team onboarding without depending on production APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-32">
        <div className="bg-gray-100 text-gray-800 py-12 px-8 rounded-lg text-center shadow-md">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Accelerate Your Development?
          </h2>
          <p className="mb-8 text-lg">
            Design your APIs first. Build your frontend with confidence. Ship
            faster with a backend that exists exactly when you need it.
          </p>
          <Link
            to="/register"
            className="bg-orange-600 text-white py-3 px-16 rounded-md hover:bg-orange-700 transition-colors shadow-lg">
            Get Started Now
          </Link>
        </div>
      </section>
      <footer className="bg-gray-800 text-white pt-16 pb-8 px-8 mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <Logo path="/" />
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                Design, build, and test APIs without writing backend code.
                Accelerate your development workflow.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/examples"
                    className="text-gray-400 hover:text-orange-500 transition-colors">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link
                    to="/documentation"
                    className="text-gray-400 hover:text-orange-500 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-gray-400 hover:text-orange-500 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features"
                    className="text-gray-400 hover:text-orange-500 transition-colors">
                    Features
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-orange-500 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 hover:text-orange-500 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-orange-500 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-gray-400 hover:text-orange-500 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/help"
                    className="text-gray-400 hover:text-orange-500 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/community"
                    className="text-gray-400 hover:text-orange-500 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-400 hover:text-orange-500 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-400 hover:text-orange-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} APIBuildr. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/login"
                className="text-gray-400 hover:text-orange-500 transition-colors">
                Sign In
              </Link>
              <Link
                to="/register"
                className="text-gray-400 hover:text-orange-500 transition-colors">
                Register
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Welcome;
