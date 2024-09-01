import { useState } from "react";
import group from "../assets/group.webp"

const Hero = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <section id="home" className="bg-white dark:bg-gray-900">
        <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
            <a href={import.meta.env.VITE_SITE_URL} className="flex flex-row items-center">
              <img className="w-auto h-10 lg:h-14" src="/favicon.png" alt="" />
              <span className="font-bold text-xl ml-2 dark:text-white">KnowTech</span>
            </a>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
                onClick={() => setIsActive((prev) => !prev)}
              >
                {!isActive ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    data="Cross Icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    data="Line Icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`${
              isActive ? "opacity-100" : "opacity-0 invisible"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-500 ease-in-out bg-white shadow-md lg:visible lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
            <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
              <a
                className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                href="/"
              >
                Home
              </a>
              <a
                className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                href="#services"
              >
                Services
              </a>
              <a
                className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                href="#portfolio"
              >
                Portfolio
              </a>
              {/* <a
                className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                href="#blogs"
              >
                Blogs
              </a> */}
              <a
                className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                href="#testimonials"
              >
                Testimonials
              </a>
              {/* <a
                className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                href="#pricing"
              >
                Pricing
              </a> */}
              <a
                className="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                href="#faqs"
              >
                FAQS
              </a>
            </div>
            <a
              className="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-300 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto"
              href="#contact"
            >
              Contact Us
            </a>
          </div>
        </nav>

        <div className="container flex flex-col-reverse px-6 py-5 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                Bring Your Vision to Life with Our Expertise
              </h1>

              <div className="mt-8 space-y-5">
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 lg:w-10 lg:h-10 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2">
                    <b className="font-bold">Custom Solutions:</b> Tailored web
                    and app development services to meet your unique business
                    needs.
                  </span>
                </p>

                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 lg:w-10 lg:h-10 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2">
                    <b className="font-bold">Expertise & Innovation:</b>{" "}
                    Leveraging latest technologies and trends to deliver
                    cutting-edge digital solutions.
                  </span>
                </p>

                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 lg:w-10 lg:h-10 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="mx-2">
                    <b className="font-bold">Partners in Success:</b>{" "}
                    Collaborative approach to drive your business growth and
                    achieve your goals.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full mt-8 bg-transparent rounded-md lg:max-w-sm">
              <a href="#contact">
                <button
                  type="button"
                  className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                >
                  Get started
                </button>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              src={group}
              alt="Group photo"
            />
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

const HeroComponent = withFunction(Hero);

export { HeroComponent };
