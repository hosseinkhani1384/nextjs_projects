"use client";
import React from "react";
import Myswap from "./Myswap";
import SplitText from "./SplitText";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Topnavbar() {
  const pathname = usePathname();
  const isAuthPage =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  return (
    <header className="w-full bg-base-100 py-3 px-5 md:px-20">
      <div className="navbar w-full">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-4 shadow-lg bg-base-100 rounded-2xl w-56 flex flex-col font-medium z-50 border border-base-300
                         transition-all duration-200 ease-out"
            >
              <li>
                <Link
                  href="/"
                  className="px-3 py-2 rounded-lg hover:bg-base-200 hover:text-primary transition cursor-target"
                >
                  Home
                </Link>
              </li>
              <li>
                <a className="px-3 py-2 rounded-lg hover:bg-base-200 hover:text-primary transition cursor-target">
                  Another Action
                </a>
              </li>
              <li>
                <a className="px-3 py-2 rounded-lg hover:bg-base-200 hover:text-primary transition cursor-target">
                  Dropdown Submenu
                </a>
              </li>
              <li className="border-b my-2"></li>
              <li>
                <a className="px-3 py-2 rounded-lg hover:bg-base-200 hover:text-primary transition cursor-target">
                  About
                </a>
              </li>
              <li>
                <a className="px-3 py-2 rounded-lg hover:bg-base-200 hover:text-primary transition cursor-target">
                  Blog
                </a>
              </li>
              <li>
                <a className="px-3 py-2 rounded-lg hover:bg-base-200 hover:text-primary transition cursor-target">
                  Contact
                </a>
              </li>
              {!isAuthPage && (
                <>
                  <li className="border-t my-2"></li>
                  <div className="flex justify-center items-center gap-2 mt-1">
                    <Link
                      href="/login"
                      className="px-3 py-2 rounded-lg bg-base-200 hover:bg-base-300 transition cursor-target text-center w-1/2" 
                    >
                      Log In
                    </Link>
                    <Link
                      href="/register"
                      className="px-3 py-2 rounded-lg bg-neutral text-neutral-content hover:brightness-110 transition cursor-target text-center w-1/2"
                    >
                      Sign Up
                    </Link>
                  </div>
                </>
              )}
            </ul>
          </div>

          <div className="lg:inline hidden">
            <SplitText
              text="Tailwind CSS"
              className="text-2xl font-semibold text-center"
              delay={100}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>

          <Myswap isshow={true} />
        </div>

        <div className="navbar-center hidden lg:flex gap-10">
          <div className="dropdown dropdown-center">
            <span tabIndex={0} className="text-xl cursor-target">
              Features
            </span>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/" className="cursor-target">Home</Link>
              </li>
              <li>
                <a className="cursor-target">Another Action</a>
              </li>
              <li>
                <a className="cursor-target">Dropdown Submenu</a>
              </li>
              <li>
                <a className="cursor-target">404 page</a>
              </li>
            </ul>
          </div>
          <span className="text-xl cursor-target">About</span>
          <span className="text-xl cursor-target">Blog</span>
          <span className="text-xl cursor-target">Contact</span>
        </div>

        <div className="navbar-end lg:flex gap-3">
          <div className="lg:hidden inline">
            <SplitText
              text="Tailwind CSS"
              className="text-2xl font-semibold text-center"
              delay={100}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>

          {!isAuthPage && (
            <>
              <Link className="btn hidden lg:flex cursor-target" href="/login">
                Log In
              </Link>
              <Link className="btn btn-neutral hidden lg:flex cursor-target" href="/register">
                Sign Up
              </Link>
            </>
          )}
          <Myswap isshow={false} />
        </div>
      </div>
    </header>
  );
}
