import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-5xl mx-auto py-16">
      <h1 className="text-4xl font-bold  text-center mb-8">
        Terms & Conditions
      </h1>

      <div className="space-y-6  text-lg leading-relaxed">
        <p>
          Welcome to{" "}
          <span className="text-xl font-bold">
            Be<span className="text-orange-400">A</span>Dev
          </span>
          . By accessing our platform, you agree to comply with and be bound by
          the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Use of Platform</h2>
        <p>
          Our platform is designed to help individuals learn web development.
          You agree to use the resources provided strictly for educational
          purposes. Unauthorized commercial use or redistribution is strictly
          prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Account Responsibility
        </h2>
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials. Any activity under your account is your
          responsibility.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          3. Intellectual Property
        </h2>
        <p>
          All course content, project materials, and resources provided on this
          platform are the property of{" "}
          <span className="text-xl font-bold">
            Be<span className="text-orange-400">A</span>Dev
          </span>
          . You may not copy, reproduce, or distribute materials without
          permission.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access if you
          violate any terms or engage in harmful activities within the platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          5. Changes to Terms
        </h2>
        <p>
          We may update these terms at any time. Continued use of the platform
          after updates constitutes your acceptance of the revised terms.
        </p>

        <p className="mt-8">
          If you do not agree with these terms, please refrain from using our
          platform.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
