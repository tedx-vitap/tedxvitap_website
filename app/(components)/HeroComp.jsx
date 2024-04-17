"use client";
import React from "react";
import { useSpring, animated } from "react-spring";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 500,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function HeroComp() {
  return (
    <div>
      <div className="z-20 top-0 flex max-w-full justify-center pt-28">
        <div className=" pb-6 sm:pb-8 lg:pb-12 max-w-screen-lg">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <section className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
              <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
                <p className="mb-4 font-semibold text-red-500 md:mb-6 md:text-lg xl:text-xl">
                  Join us this April 27th
                </p>

                <h1 className="mb-8 text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                  The Art of Failing Forward
                </h1>

                <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                  <a
                    href="https://vtop1.vitap.ac.in/TEDX/Conferenceinitial"
                    target="_blank"
                    class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
                  >
                    <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-red-600 via-red-700 to-orange-700 group-hover:opacity-100"></span>
                    {/* <!-- Top glass gradient --> */}
                    <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                    {/* <!-- Bottom gradient --> */}
                    <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                    {/* <!-- Left gradient --> */}
                    <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                    {/* <!-- Right gradient --> */}
                    <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                    <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                    <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                    <span class="relative flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="ml-2">Book Now!</span>
                    </span>
                  </a>

                  <a
                    href="https://shop.tedxvitap.com/"
                    target="_blank"
                    class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
                  >
                    <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-green-600 via-teal-700 to-blue-700 group-hover:opacity-100"></span>
                    {/* <!-- Top glass gradient --> */}
                    <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                    {/* <!-- Bottom gradient --> */}
                    <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                    {/* <!-- Left gradient --> */}
                    <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                    {/* <!-- Right gradient --> */}
                    <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                    <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                    <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                    <span class="relative flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span class="ml-2">Checkout Merch</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-96 xl:w-5/12">
                <img
                  src="https://images.unsplash.com/photo-1506755594592-349d12a7c52a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3Jvd2QlMjBvZiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                  loading="lazy"
                  alt="Photo by Fakurian Design"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </section>

            <section className="flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8">
              <div className="-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x">
                <div className="px-6 md:px-8">
                  <span className="block text-center text-lg font-bold text-red-500 md:text-left md:text-xl">
                    100
                  </span>
                  <span className="block text-center text-sm font-semibold text-gray-200 md:text-left md:text-base">
                    Seats
                  </span>
                </div>

                <div className="px-6 md:px-8">
                  <span className="block text-center text-lg font-bold text-red-500 md:text-left md:text-xl">
                    6
                  </span>
                  <span className="block text-center text-sm font-semibold text-gray-200 md:text-left md:text-base">
                    Speakers
                  </span>
                </div>

                <div className="px-6 md:px-8">
                  <span className="block text-center text-lg font-bold text-red-500 md:text-left md:text-xl">
                    3+
                  </span>
                  <span className="block text-center text-sm font-semibold text-gray-200 md:text-left md:text-base">
                    Performances
                  </span>
                </div>

                <div className="px-6 md:px-8">
                  <span className="block text-center text-lg font-bold text-red-500 md:text-left md:text-xl">
                    1000+
                  </span>
                  <span className="block text-center text-sm font-semibold text-gray-200 md:text-left md:text-base">
                    Interactions
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 lg:justify-start">
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
                  Social
                </span>
                <span className="h-px w-12 bg-gray-200"></span>

                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/tedx.vitap/"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="https://twitter.com/tedxvitap"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>

                  <a
                    href="https://in.linkedin.com/in/tedx-vitap-56784626a"
                    target="_blank"
                    className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroComp;
