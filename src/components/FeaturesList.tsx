"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface FeaturesListProps {
  features: Feature[];
}

export default function FeaturesList({ features }: FeaturesListProps) {
  return (
    <>
      <div className="space-y-6">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={64}
                height={64}
              />
            </div>
            <div>
              <h3 className="font-medium">
                {feature.id}. {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
