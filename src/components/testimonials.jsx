const Testimonials = () => {
  return (
    <>
      <section id="testimonials" className="bg-white dark:bg-gray-900">
        <div className="max-w-6xl px-6 py-10 mx-auto">
          <h2 className="text-3xl font-medium text-gray-800 dark:text-white">Testimonials</h2>
          
          <div className="mt-0">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

            <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              <img
                className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                src=""
                alt="client photo"
              />

              <div className="mt-2 md:mx-6">
                <div>
                  <p className="text-xl font-medium tracking-tight text-white">
                    Ema Watson
                  </p>
                  <p className="text-blue-200 ">Marketing Manager at Stech</p>
                </div>

                <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                  {" "}
                  “We were blown away by the team's expertise and dedication to
                  delivering a top-notch web application. Their collaborative
                  approach, attention to detail, and commitment to meeting our
                  deadlines made the entire process seamless. The final product
                  exceeded our expectations, and we've seen a significant
                  increase in engagement and conversions.”.
                </p>

                <div className="flex items-center justify-between mt-6 md:justify-start">
                  <button
                    title="left arrow"
                    className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    title="right arrow"
                    className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </main>
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

const TestimonialsComponent = withFunction(Testimonials);

export { TestimonialsComponent };
