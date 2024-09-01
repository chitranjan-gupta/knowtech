const FAQS = () => {
  return (
    <>
      <section id="faqs" className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
            FAQ's
          </h2>
          <div className="mt-0">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700" />

          <div>
            <div>
              <button className="flex items-center focus:outline-none">
                {/* <svg
                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  ></path>
                </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <h2 className="mx-4 text-xl text-gray-700 dark:text-white">
                  What services do you offer ?
                </h2>
              </button>

              <div className="flex mt-8 md:mx-10">
                <span className="border border-blue-500"></span>

                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                  We offer web development, app development, graphic design, and
                  digital marketing services.
                </p>
              </div>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <div>
              <button className="flex items-center focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <h2 className="mx-4 text-xl text-gray-700 dark:text-white">
                  How long does a typical project take ?
                </h2>
              </button>
              <div className="flex mt-8 md:mx-10">
                <span className="border border-blue-500"></span>

                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                  Project duration varies depending on complexity, but we
                  provide timelines and milestones for each project.
                </p>
              </div>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <div>
              <button className="flex items-center focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <h2 className="mx-4 text-xl text-gray-700 dark:text-white">
                  Do you provide maintenance and support services ?
                </h2>
              </button>
              <div className="flex mt-8 md:mx-10">
                <span className="border border-blue-500"></span>

                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                  Yes, we offer ongoing maintenance, updates, and support to
                  ensure your solution continues to meet your needs.
                </p>
              </div>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <div>
              <button className="flex items-center focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <h2 className="mx-4 text-xl text-gray-700 dark:text-white">
                  What technologies do you specialize in ?
                </h2>
              </button>
              <div className="flex mt-8 md:mx-10">
                <span className="border border-blue-500"></span>

                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                  We specialize in list your technologies, e.g., React,
                  Wordpress, Node.js, iOS, Android.
                </p>
              </div>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <div>
              <button className="flex items-center focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <h2 className="mx-4 text-xl text-gray-700 dark:text-white">
                  Can I get a custom quote for my project ?
                </h2>
              </button>
              <div className="flex mt-8 md:mx-10">
                <span className="border border-blue-500"></span>

                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                  Yes, please contact us with your project details, and we'll
                  provide a personalized quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function withFunction(WrappedComponent) {
  return function EnhancedComponent({ ...props }) {
    return <WrappedComponent {...props} />;
  };
}

const FAQSComponent = withFunction(FAQS);

export { FAQSComponent };
