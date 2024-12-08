
import { Button } from "@/components/ui/button";
import { heroContent, staticData } from "@/constants/data";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-24 lg:pt-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-8 md:mb-0 md:w-1/2 md:pr-8">
            <h1 className="mb-6 text-3xl font-bold md:text-5xl">
              {heroContent.title}
            </h1>
            <p className="mb-8 text-lg text-gray-700 md:text-xl">
              {heroContent.subtitle}
            </p>
            <div className="mb-8">
              {heroContent.reasons.map((reason, index) => (
                <div key={index} className="mb-4 flex items-center">
                  <Check className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
            <Button
              size="lg"
              className="mb-6 w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 md:w-auto"
            >
              {staticData.get}
            </Button>
            <div className="flex items-center justify-start">
              <div className="mr-4 flex -space-x-2">
                {heroContent?.users.map((user, i) => (
                  <Image
                    key={i}
                    src={user}
                    alt={"User" + i}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-400"
                  />
                ))}
                {/* <span className="ml-2 text-sm font-semibold text-gray-700">
                  5000+ happy users
                </span> */}
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative overflow-hidden rounded-lg p-1">
              <div className="animate-gradient-x absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500"></div>
              <Image
                src={heroContent.image}
                alt="Product Image"
                width={800}
                height={800}
                className="relative rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
