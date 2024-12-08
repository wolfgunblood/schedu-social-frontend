
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ArrowRight, Menu } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { navbar, staticData } from "@/constants/data";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Uncomment this to use stack - auth
// import { UserButton, useUser } from "@stackframe/stack";

function Navbar() {
  //Use stack auth for seamless authentication
  //Uncomment below to use stack auth
  // const user = useUser();

  const user = null; //Remove this

  const navLinks = [
    { href: "#pricing", label: staticData.pricing },
    { href: "#demo", label: staticData.demo },
    { href: "#faq", label: staticData.faq_short },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-16 w-full border-b border-gray-200 backdrop-blur-sm transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-center gap-14">
            <Link href="/" className="z-40 flex text-lg font-bold">
              <span>{navbar.name}</span>
            </Link>

            <div className="hidden items-center justify-center gap-8 md:flex lg:gap-14">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-semibold hover:underline hover:underline-offset-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* mobile */}
          <span className="flex md:hidden">
            {isClient && (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="px-2">
                  <Menu
                    className="flex h-5 w-5 md:hidden"
                    onClick={() => setIsOpen(true)}
                  >
                    <span className="sr-only">Menu Icon</span>
                  </Menu>
                </SheetTrigger>

                <SheetContent side={"right"}>
                  <SheetHeader>
                    <SheetTitle className="text-xl font-bold">
                      <div className="flex items-center gap-2 lg:flex-1">
                        <Link href="/" className="z-40 flex text-lg font-bold">
                          <span>{navbar.name}</span>
                        </Link>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="mt-4 flex flex-col items-center justify-center gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="font-semibold hover:underline hover:underline-offset-1"
                      >
                        {link.label}
                      </Link>
                    ))}
                    {!user && (
                      <>
                        <Link
                          href="/handler/signin"
                          className={cn(
                            buttonVariants({ size: "sm", variant: "ghost" }),
                            "group flex items-center justify-center px-4",
                          )}
                        >
                          <span>{staticData.sign_in}</span>
                        </Link>
                        <Link
                          href="/handler/signup"
                          className={cn(
                            buttonVariants({ size: "sm" }),
                            "group flex items-center justify-center px-4",
                          )}
                        >
                          <span>{staticData.sign_up}</span>
                          <ArrowRight className="ml-1.5 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </>
                    )}
                    {/* Uncomment this to use stack auth */}
                    {/* {user && <UserButton />} */}
                  </nav>
                </SheetContent>
              </Sheet>
            )}
          </span>

          <div className="hidden items-center gap-2 space-x-1.5 md:flex">
            {!user && (
              <>
                <Link
                  href="/handler/signin"
                  className={cn(
                    buttonVariants({ size: "sm", variant: "ghost" }),
                    "group flex items-center justify-center px-4",
                  )}
                >
                  <span>{staticData.sign_in}</span>
                </Link>
                <Link
                  href="/handler/signup"
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "group flex items-center justify-center px-4",
                  )}
                >
                  <span>{staticData.sign_up}</span>
                  <ArrowRight className="ml-1.5 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </>
            )}
            {/* Uncomment this to use stack auth */}
            {/* {user && <UserButton />} */}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
