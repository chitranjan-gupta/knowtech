import { useState } from "react";
import shikshaSetu from "../assets/shikshaSetu.png";
import shikshasetuapp from "../assets/shikshasetuapp.png";

const Portfolio = () => {
  const [milton, setMilton] = useState(false);
  return (
    <>
      <section id="portfolio" className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Latest Work
          </h2>
          <div className="w-full mt-2 flex items-center justify-center">
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-40 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>
          <div className="flex py-4 overflow-x-auto overflow-y-hidden justify-center dark:border-gray-700">
            <button
              className={`h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400 ${
                !milton ? "border-blue-400" : "border-gray-200"
              }`}
              onClick={() => setMilton(false)}
            >
              Web design
            </button>

            <button
              className={`h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400 ${
                milton ? "border-blue-400" : "border-gray-200"
              }`}
              onClick={() => setMilton(true)}
            >
              App design
            </button>
          </div>

          <section className="mt-0 lg:mt-12">
            <div className="space-y-8 flex flex-col">
              <div
                className={`flex flex-col-reverse lg:flex lg:flex-row lg:items-center ${
                  !milton
                    ? "visible translate-x-0"
                    : "-translate-x-full invisible w-0 h-0"
                } transition-transform duration-500 ease-in-out`}
              >
                <div className="lg:w-1/2 ">
                  <span className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                    Learning Management System
                  </span>
                  <a
                    href="https://lms-sand-mu.vercel.app/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    <h2 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                      ShikshaSetu
                    </h2>
                  </a>
                  <p className="tracking-wider text-gray-800 dark:text-white">
                    ShikshaSetu is an online learning management system. Built
                    using a tech stack including Laravel, Next.js, MySQL,
                    Stripe, Mux for seamless video streaming, and Uploadthing
                    for secure storage. With Next.js deployed on Vercel and
                    Laravel on Render, and MySQL hosted on Aiven. ShikshaSetu
                    streamlines course creation, student management, and payment
                    processing.
                  </p>
                </div>

                <div className="lg:w-1/2">
                  <img
                    className="object-contain w-full h-64 rounded-lg md:h-96"
                    src={shikshaSetu}
                    alt="shikshasetu"
                  />
                </div>
              </div>
              <div
                className={`flex flex-col-reverse lg:flex lg:flex-row lg:items-center ${
                  milton
                    ? "visible translate-x-0"
                    : "-translate-x-full invisible w-0 h-0"
                } transition-transform duration-500 ease-in-out`}
              >
                <div className="lg:w-1/2 ">
                  <span className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                    Learning Managment System
                  </span>
                  <a href="#" target="_blank" referrerPolicy="no-referrer">
                    <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                      ShikshaSetu App
                    </h2>
                  </a>
                  <p className="tracking-wider text-gray-800 dark:text-white">
                    ShikshaSetu App is Mobile App for Android And ios made using
                    React Native, NativeWind, Tailwindcss. This App Makes course
                    content, purchase easily available.
                  </p>
                </div>

                <div className="lg:w-1/2">
                  <img
                    className="object-contain w-full h-64 rounded-lg md:h-96"
                    src={shikshasetuapp}
                    alt="shikshasetuapp"
                  />
                </div>
              </div>
            </div>
          </section>
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

const PortfolioComponent = withFunction(Portfolio);

export { PortfolioComponent };
