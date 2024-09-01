import team from "../assets/team.webp";

const CTA = () => {
  return (
    <>
      <section
        id="cta"
        className="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center"
      >
        <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2">
            <div className="h-64 bg-cover lg:h-full">
              <img src={team} />
            </div>
          </div>

          <div className="max-w-xl mt-48 lg:mt-0 px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Build Your Unique <span className="text-blue-500">Idea</span>
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-300">
              Ready to transform your business with cutting-edge web and mobile
              solutions? Let's get started! Contact us today to schedule a
              consultation with our expert team. We'll work closely with you to
              understand your unique needs and goals, and provide personalized
              recommendations to drive success. Take the first step towards
              elevating your online presence and reaching new heights. Reach out
              to us now and let's build something amazing together!
            </p>

            <div className="inline-flex w-full mt-6 sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                Start Now
              </a>
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

const CTAComponent = withFunction(CTA);

export { CTAComponent };
