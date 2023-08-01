import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav class="border-gray-200 dark:bg-gray-900 flex justify-center items-center">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" class="flex items-center">
          <svg
            class="h-8 mr-3"
            width="20"
            height="20"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <g clip-path="url(#clip0_238_1296)">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M100 0H0L100 100H0L100 200H200L100 100H200L100 0Z"
                fill="url(#paint0_linear_238_1296)"
              />{" "}
            </g>{" "}
            <defs>
              {" "}
              <linearGradient
                id="paint0_linear_238_1296"
                x1="20.5"
                y1="16"
                x2="100"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stop-color="#ACAAFF" />{" "}
                <stop offset="1" stop-color="#C0E8FF" />{" "}
              </linearGradient>{" "}
              <clipPath id="clip0_238_1296">
                {" "}
                <rect width="200" height="200" fill="white" />{" "}
              </clipPath>{" "}
            </defs>{" "}
          </svg>
          <p class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            movify
          </p>
        </Link>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default"></div>
      </div>
    </nav>
  );
};

export default Nav;
