import React from "react";

const Features = () => {
  return (
    <div className="pt-20">
      <h1 className="text-3xl text-center font-bold mb-3">Features</h1>
      <p className="text-center pb-4">
        Explore all features and Master the fundamental of Web Development with
        BeAdev.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border border-orange-400 rounded-2xl p-5">
          <div>hello</div>
          <div>
            <h1>Learn Everyday</h1>
            <p>Learn, Practice and stay with the flow to achieve your goal</p>
          </div>
        </div>
        <div className="border border-orange-400 rounded-2xl p-5">
          <div>vai</div>
          <div>
            <h1>Track your progress</h1>
            <p>Monitor your progress and stay motivated.</p>
          </div>
        </div>
        <div className="border border-orange-400 rounded-2xl p-5">
          <div>ki khobor</div>
          <div>
            <h1>Test your knowledge</h1>
            <p>Take guesses to evaluate your understanding of material</p>
          </div>
        </div>
        <div className="border border-orange-400 rounded-2xl p-5">
          <div>gajkd</div>
          <div>
            <h1>Get a Certificate</h1>
            <p>
              After completing the course we will reward you with the best
              Endorsement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
