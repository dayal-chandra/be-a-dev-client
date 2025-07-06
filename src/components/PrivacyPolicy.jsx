import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Your privacy is important to us. This Privacy Policy explains how{" "}
          <span className="text-xl font-bold">
            Be<span className="text-orange-400">A</span>Dev
          </span>{" "}
          collects, uses, and protects your information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Information Collection
        </h2>
        <p>
          We collect basic information such as your name, email address, and any
          other details you provide during registration or use of our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Use of Information
        </h2>
        <p>
          The information we collect is used to enhance your experience, provide
          educational content, communicate updates, and improve our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Protection</h2>
        <p>
          We implement standard security measures to protect your personal data.
          However, no method of online transmission is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Third-Party Services
        </h2>
        <p>
          We do not sell or share your personal information with third parties,
          except as required by law or to provide essential services on our
          platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies</h2>
        <p>
          We may use cookies to personalize your experience and analyze website
          usage. You can control cookie preferences in your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          6. Changes to Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We encourage you
          to review this page periodically to stay informed.
        </p>

        <p className="mt-8">
          By using{" "}
          <span className="text-xl font-bold">
            Be<span className="text-orange-400">A</span>Dev
          </span>
          , you agree to this Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
