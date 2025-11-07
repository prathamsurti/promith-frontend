const Privacy = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: October 31, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to Promith. We respect your privacy and are committed to protecting your
                personal data. This privacy policy will inform you about how we look after your
                personal data and tell you about your privacy rights.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. Data We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect, use, store and transfer different kinds of personal data about you:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Identity Data: first name, last name, username</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Contact Data: email address, telephone numbers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Technical Data: IP address, browser type, device information</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. How We Use Your Data</h2>
              <p className="text-gray-600 leading-relaxed">
                We use your data to provide and improve our services, communicate with you,
                and ensure the security of our platform.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We have implemented appropriate security measures to prevent your personal data
                from being accidentally lost, used, or accessed in an unauthorized way.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to request access to your personal data, request correction or
                deletion, object to processing, and request transfer of your data.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this privacy policy, please contact us at{' '}
                <a href="mailto:privacy@promith.com" className="text-primary hover:underline">
                  privacy@promith.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
