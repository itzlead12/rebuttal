"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "icon" | "wordmark";
  size?: "sm" | "md" | "lg" | "xl";
  inverted?: boolean;
  className?: string;
  useImage?: boolean;
}

export function RebuttalIcon({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden shrink-0 transition-transform duration-200 group-hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/favicon.svg"
        alt="Rebuttal"
        width={size}
        height={size}
        className="w-full h-full object-contain rounded-lg"
        priority
        unoptimized
      />
    </div>
  );
}

export function Logo({
  variant = "full",
  size = "md",
  inverted = false,
  className = "",
  useImage = false,
}: LogoProps) {
  const sizeMap = {
    sm: { icon: 28, text: "text-lg", imgH: 28, imgW: 110 },
    md: { icon: 34, text: "text-xl", imgH: 34, imgW: 140 },
    lg: { icon: 42, text: "text-2xl", imgH: 42, imgW: 170 },
    xl: { icon: 52, text: "text-3xl", imgH: 52, imgW: 210 },
  };

  const currentSize = sizeMap[size];

  // If icon-only
  if (variant === "icon") {
    return (
      <Link
        href="/"
        className={`inline-flex items-center group select-none ${className}`}
        aria-label="Rebuttal Icon"
      >
        <RebuttalIcon size={currentSize.icon} />
      </Link>
    );
  }

  // If wordmark-only
  if (variant === "wordmark") {
    return (
      <Link
        href="/"
        className={`inline-flex items-center select-none group font-heading ${className}`}
        aria-label="Rebuttal"
      >
        <span
          className={`font-bold tracking-tight ${currentSize.text} ${
            inverted ? "text-white" : "text-[#0F1020] dark:text-white"
          }`}
        >
          Rebuttal
        </span>
      </Link>
    );
  }

  // If explicit image requested
  if (useImage) {
    return (
      <Link
        href="/"
        className={`inline-flex items-center select-none group ${className}`}
        aria-label="Rebuttal"
      >
        <Image
          src="/logo.png"
          alt="Rebuttal"
          width={currentSize.imgW}
          height={currentSize.imgH}
          className="h-auto max-h-9 w-auto object-contain"
          priority
          unoptimized
        />
      </Link>
    );
  }

  // Default: Favicon icon + crisp "Rebuttal" wordmark (Cleanest SaaS look!)
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 select-none group font-heading ${className}`}
      aria-label="Rebuttal"
    >
      <RebuttalIcon size={currentSize.icon} />
      <span
        className={`font-bold tracking-tight ${currentSize.text} ${
          inverted ? "text-white" : "text-[#0F1020] dark:text-white"
        }`}
      >
        Rebuttal
      </span>
    </Link>
  );
}
