
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { tiers, staticData } from "@/constants/data";

export default function Pricing1() {
  const [isAnnual, setIsAnnual] = useState(false);
  const dollar = "$";
  const grad = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-2 text-center text-3xl font-bold">{staticData.plan}</h2>
      <p className="mb-8 text-center text-gray-600">{staticData.plan_sub}</p>
      <div className="mb-8 flex items-center justify-center">
        <span className="mr-2">{staticData.monthly}</span>
        <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
        <span className="ml-2">{staticData.annual}</span>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {tiers.map((tier, index) => (
          <Card
            key={tier.name}
            className={
              "relative overflow-hidden " +
              (tier.popular ? "border-2 border-primary" : "")
            }
          >
            <div
              className={
                "absolute inset-0 bg-gradient-to-br opacity-10 " + grad[index]
              }
            ></div>
            {tier.popular && (
              <Badge className="absolute right-4 top-4" variant="secondary">
                {staticData.popular}
              </Badge>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-4xl font-bold">
                {dollar + (isAnnual ? tier.annualPrice : tier.monthlyPrice)}
                <span className="text-sm font-normal">
                  {" /" +
                    (isAnnual ? staticData.year : staticData.month)}
                </span>
              </p>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={
                  "w-full " +
                  (tier.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "")
                }
              >
                {staticData.get}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
