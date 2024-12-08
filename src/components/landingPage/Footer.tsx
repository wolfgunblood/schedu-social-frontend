
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { footerContent, staticData } from "@/constants/data";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200">
      <MaxWidthWrapper className="flex flex-col max-w-7xl  items-center justify-center py-10 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-[16rem] flex-col items-center justify-center space-y-4 md:items-start md:justify-normal">
          <Link href="/" className="z-40 flex items-center text-lg font-bold">
            {footerContent.logoText}
          </Link>

          <p className="text-center font-medium text-gray-700 md:text-left md:text-[0.875rem]">
            {footerContent.description}
          </p>

          <small className="mb-2 block select-none text-gray-700">
            {footerContent.appName} &copy; {currentYear} - {staticData.rights}
          </small>
        </div>

        <div className="mt-10 flex flex-col gap-10 md:mt-0 md:flex-row md:gap-24">
          <div className="flex flex-col items-center px-4 md:items-start">
            <h3 className="mb-2 font-semibold text-gray-400">
              {staticData.links}
            </h3>
            <ul className="space-y-2 text-center text-sm text-gray-600 md:text-left">
              <li className="hover:underline hover:underline-offset-1">
                <a href="#">{staticData.support}</a>
              </li>
              <li className="hover:underline hover:underline-offset-1">
                <Link href="#faq">{staticData.faq_short}</Link>
              </li>
              <li className="hover:underline hover:underline-offset-1">
                <Link href="#pricing" target="_blank" rel="noopener noreferrer">
                  {staticData.pricing}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center px-4 md:items-start">
            <h3 className="mb-2 font-semibold text-gray-400">
              {staticData.legal}
            </h3>
            <ul className="space-y-2 text-center text-sm text-gray-600 md:text-left">
              <li className="hover:underline hover:underline-offset-1">
                <Link href="/privacy-policy">{staticData.privacy_policy}</Link>
              </li>
              <li className="hover:underline hover:underline-offset-1">
                <Link href="/tos">{staticData.tos}</Link>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}

export default Footer;
