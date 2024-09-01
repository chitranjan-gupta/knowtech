import tablet from "../assets/tablet.webp";
import computer from "../assets/computer.webp";
import brain from "../assets/brain.webp";
import mobile from "../assets/mobile.webp";

const Services = () => {
  return (
    <>
      <section id="services" className="bg-white dark:bg-gray-900">
        <div className="container px-6 lg:px-0 py-10 mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            explore our <br /> awesome services
          </h2>

          <div className="mt-0">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex">
            <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-around lg:w-1/3">
              <img
                className="w-[20rem] h-[20rem] flex-shrink-0 object-cover xl:w-[10rem] xl:h-[10rem] rounded-full"
                src={tablet}
                alt="Tablet"
              />
              <img
                className="w-[20rem] h-[20rem] flex-shrink-0 object-cover xl:w-[10rem] xl:h-[10rem] rounded-full"
                src={mobile}
                alt="Computer"
              />
            </div>
            <div className="grid w-full grid-cols-1 gap-8 lg:w-2/3 xl:gap-16 md:grid-cols-1">
              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                  >
                    <path d="M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 019.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 015.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 00-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z" />
                  </svg>
                </span>

                <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Web Development
                </h2>

                <p className="text-gray-500 dark:text-gray-300">
                  Our web development services are designed to help you
                  establish a strong online presence and drive business growth.
                  We craft custom websites that are visually stunning,
                  user-friendly, and optimized for search engines. With
                  expertise in front-end and back-end development, we build
                  fast, interactive, and engaging websites that meet your unique
                  needs.
                </p>
                <a
                  href="#"
                  className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  <span className="mx-1">read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                  >
                    <path d="M11 1a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V2a1 1 0 011-1h6zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z" />
                    <path d="M8 14a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                </span>

                <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  App Development
                </h2>

                <p className="text-gray-500 dark:text-gray-300">
                  Our app development services empower you to tap into the vast
                  potential of mobile devices and revolutionize the way you
                  connect with your audience. We design and develop intuitive,
                  engaging, and user-friendly mobile apps for Android and iOS
                  platforms, tailored to meet your specific business needs.
                </p>
                <a
                  href="#"
                  className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  <span className="mx-1">read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-around lg:w-1/3">
              <img
                className="w-[20rem] h-[20rem] flex-shrink-0 object-cover xl:w-[10rem] xl:h-[10rem] rounded-full"
                src={brain}
                alt="Tablet"
              />
              <img
                className="w-[20rem] h-[20rem] flex-shrink-0 object-cover xl:w-[10rem] xl:h-[10rem] rounded-full"
                src={computer}
                alt="Computer"
              />
            </div>
            <div className="grid w-full mt-8 grid-cols-1 gap-8 lg:mt-0 lg:w-2/3 xl:gap-16 md:grid-cols-1">
              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                  >
                    <path d="M15.825.12a.5.5 0 01.132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 01-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 01-3.078.132 3.659 3.659 0 01-.562-.135 1.382 1.382 0 01-.466-.247.714.714 0 01-.204-.288.622.622 0 01.004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 01.596.04zM4.705 11.912a1.23 1.23 0 00-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 01-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 00.126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 001.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04l.007-.005a.031.031 0 01-.007.004zm3.582-3.043l.002.001h-.002z" />
                  </svg>
                </span>

                <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Graphics Design
                </h2>

                <p className="text-gray-500 dark:text-gray-300">
                  Our graphic design services bring your brand to life with
                  visually stunning and effective visual communications. We
                  craft compelling designs that capture your audience's
                  attention, convey your message, and elevate your brand
                  identity.From logos and brochures to infographics and website
                  graphics, our creative team uses their expertise in color
                  theory, typography, and composition.
                </p>
                <a
                  href="#"
                  className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  <span className="mx-1">read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                  >
                    <path d="M13 2.5a1.5 1.5 0 013 0v11a1.5 1.5 0 01-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 015.51 15.1h-.548a1 1 0 01-.916-.599l-1.85-3.49a68.14 68.14 0 00-.202-.003A2.014 2.014 0 010 9V7a2.02 2.02 0 011.992-2.013 74.663 74.663 0 002.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 001 0v-11a.5.5 0 00-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 01-1.992.052A1.02 1.02 0 001 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 014 10.065zm-.657.975l1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 00-1.722-.082z" />
                  </svg>
                </span>

                <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                  Digital Marketing
                </h2>

                <p className="text-gray-500 dark:text-gray-300">
                  Our digital marketing services help you navigate the
                  ever-evolving online landscape and reach your target audience
                  with precision and impact. We craft customized strategies that
                  combine search engine optimization (SEO), pay-per-click
                  advertising (PPC), social media marketing, email marketing and
                  content marketing to drive traffic, generate leads, and boost
                  conversions.
                </p>
                <a
                  href="#"
                  className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  <span className="mx-1">read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
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

const ServicesComponent = withFunction(Services);

export { ServicesComponent };
