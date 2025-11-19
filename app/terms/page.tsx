'use client'

import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-4 gradient-text">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: November 19, 2025</p>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using AInternals' website and services (the "Services"), you agree to be bound by these 
              Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">2. Description of Services</h2>
            <p>
              AInternals provides essential utilities and tools for AI developers, including but not limited to 
              debugging tools, monitoring services, and development utilities. We reserve the right to modify, 
              suspend, or discontinue any aspect of our Services at any time.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3.1 Registration</h3>
            <p>
              To access certain features, you may need to create an account. You agree to provide accurate, current, 
              and complete information during registration and to update such information as necessary.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities 
              that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the intellectual property rights of others</li>
              <li>Transmit any harmful code, viruses, or malicious software</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the Services for any illegal or unauthorized purpose</li>
              <li>Interfere with or disrupt the Services or servers</li>
              <li>Harvest or collect information about other users</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5.1 Our Rights</h3>
            <p>
              All content, features, and functionality of the Services, including but not limited to text, graphics, 
              logos, software, and documentation, are owned by AInternals or its licensors and are protected by 
              copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5.2 Your Rights</h3>
            <p>
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access and 
              use our Services for your personal or internal business purposes.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">5.3 User Content</h3>
            <p>
              You retain ownership of any content you submit to our Services. By submitting content, you grant us 
              a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content in 
              connection with providing the Services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">6. Payment and Subscriptions</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6.1 Fees</h3>
            <p>
              Certain features of our Services may require payment of fees. You agree to pay all applicable fees 
              as described at the time of purchase.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6.2 Billing</h3>
            <p>
              For subscription services, you authorize us to charge your payment method on a recurring basis. 
              You are responsible for maintaining valid payment information.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">6.3 Refunds</h3>
            <p>
              Refunds are provided at our sole discretion and in accordance with our refund policy, which may be 
              updated from time to time.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">7. Privacy</h2>
            <p>
              Your use of the Services is subject to our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">8. Disclaimers</h2>
            <p>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR 
              IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
              AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, AINTERNALS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED 
              DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless AInternals and its officers, directors, employees, 
              and agents from any claims, liabilities, damages, losses, and expenses arising out of or related to 
              your use of the Services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">11. Termination</h2>
            <p>
              We may terminate or suspend your access to the Services at any time, with or without cause or notice. 
              Upon termination, your right to use the Services will immediately cease. All provisions of these Terms 
              that by their nature should survive termination shall survive.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which 
              AInternals operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting 
              the new Terms on this page and updating the "Last updated" date. Your continued use of the Services 
              after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">14. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul className="list-none space-y-2 mt-4">
              <li>Email: legal@ainternals.com</li>
              <li>Website: www.ainternals.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
