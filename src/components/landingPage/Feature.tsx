
"use client";

import { features, theme } from "@/constants/data";
import React, { useState } from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
  image: string;
}

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
}

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState<number>(0); // Initialize to first feature index

  const feature = features.features[selectedFeature]; // Get the selected feature object

  return (
    <section className="p-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-3xl font-bold sm:text-5xl">
          {features.title}
        </h2>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="space-y-4 lg:w-1/2">
            {features.features.map((featureItem, index) => (
              <FeatureItem
                key={index}
                icon={featureItem.icon}
                title={featureItem.title}
                description={featureItem.description}
                isSelected={selectedFeature === index}
                onSelect={() => setSelectedFeature(index)}
              />
            ))}
          </div>
          <div className="lg:w-1/2">
            {feature?.image ? (
              <img
                src={feature.image}
                alt={feature.title + " feature"}
                className="h-auto w-full rounded-lg object-cover shadow-md"
              />
            ) : (
              <p className="text-center text-gray-500">
                Select a feature to see details
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  icon,
  title,
  description,
  isSelected,
  onSelect,
}: FeatureItemProps) {
  let classes = "cursor-pointer rounded-lg p-4 transition-all duration-300 ";
  if (isSelected) {
    classes += "scale-105 shadow-lg " + theme.foreground;
  } else {
    classes += "hover:shadow";
  }

  return (
    <div className={classes} onClick={onSelect}>
      <h3
        className={
          "mb-2 text-xl font-semibold " + (isSelected ? "text-blue-600" : "")
        }
      >
        {icon} {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
