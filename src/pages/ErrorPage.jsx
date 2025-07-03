import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className=" flex flex-col items-center justify-center px-5 mx-auto">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              But don't worry, you can find plenty of other things on our
              homepage.
            </p>
            <a
              rel="noopener noreferrer"
              href="/"
              className="px-8 py-3 font-semibold rounded dark:bg-orange-400 dark:text-black"
            >
              Back to homepage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
