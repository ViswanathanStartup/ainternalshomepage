'use client'

import Link from 'next/link'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-4 gradient-text">Cookie Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: November 19, 2025</p>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit 
              a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
            <p>
              AInternals uses cookies to improve your experience on our website, understand how you use our Services, 
              and provide personalized content. We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To enable certain functions of the website</li>
              <li>To provide analytics and track website usage</li>
              <li>To store your preferences and settings</li>
              <li>To deliver personalized content and advertisements</li>
              <li>To improve website security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable basic functions like 
              page navigation and access to secure areas of the website. The website cannot function properly without 
              these cookies.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Duration:</strong> Session or Persistent</li>
              <li><strong>Purpose:</strong> Authentication, security, and basic functionality</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3.2 Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website by collecting and reporting 
              information anonymously. This helps us improve our website's functionality and user experience.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Duration:</strong> Up to 2 years</li>
              <li><strong>Purpose:</strong> Website analytics and performance monitoring</li>
              <li><strong>Examples:</strong> Google Analytics, Mixpanel</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3.3 Functional Cookies</h3>
            <p>
              These cookies enable enhanced functionality and personalization, such as remembering your preferences 
              and choices. They may be set by us or by third-party providers.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Duration:</strong> Up to 1 year</li>
              <li><strong>Purpose:</strong> User preferences, language settings, and customization</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3.4 Targeting/Advertising Cookies</h3>
            <p>
              These cookies are used to deliver advertisements that are relevant to you and your interests. They also 
              help us measure the effectiveness of advertising campaigns.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Duration:</strong> Up to 2 years</li>
              <li><strong>Purpose:</strong> Targeted advertising and marketing</li>
              <li><strong>Examples:</strong> Google Ads, Facebook Pixel</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">4. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may use third-party cookies to report usage statistics, deliver 
              advertisements, and provide other services. These third parties may use cookies to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Track your browsing activity across different websites</li>
              <li>Build a profile of your interests</li>
              <li>Show you relevant advertisements on other websites</li>
            </ul>
            <p className="mt-4">
              Third-party cookies are subject to the respective third party's privacy policies. We do not control 
              these cookies and recommend reviewing the third-party privacy policies for more information.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">5. Managing Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences 
              through your browser settings:
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5.1 Browser Settings</h3>
            <p>Most web browsers allow you to control cookies through their settings. You can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5.2 Browser Links</h3>
            <p>For instructions on managing cookies in popular browsers:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chrome: Settings → Privacy and security → Cookies</li>
              <li>Firefox: Options → Privacy & Security → Cookies</li>
              <li>Safari: Preferences → Privacy → Cookies</li>
              <li>Edge: Settings → Cookies and site permissions</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5.3 Impact of Disabling Cookies</h3>
            <p>
              Please note that if you choose to block or delete cookies, some features of our website may not function 
              properly or may be unavailable. Certain services may require cookies to work correctly.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">6. Cookie Duration</h2>
            <p>Cookies can be either session cookies or persistent cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser. 
                They allow us to link your actions during a browsing session.
              </li>
              <li>
                <strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete 
                them. They help us remember your preferences and actions across multiple browsing sessions.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">7. Do Not Track Signals</h2>
            <p>
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to 
              have your online activity tracked. We currently do not respond to DNT signals, as there is no industry 
              standard for how to respond to them.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">8. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, 
              operational, or regulatory reasons. We will notify you of any material changes by posting the new 
              Cookie Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">9. Your Consent</h2>
            <p>
              By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. 
              If you do not agree to our use of cookies, you should disable cookies in your browser settings or 
              refrain from using our website.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us:</p>
            <ul className="list-none space-y-2 mt-4">
              <li>Email: privacy@ainternals.com</li>
              <li>Website: www.ainternals.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
