import clsx from "clsx";
import Link from "next/link";
import React from "react";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2" | "h3";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: "text-3xl/tight font-extrabold sm:text-4xl/normal",
    h2: "text-2xl/tight font-extrabold sm:text-3xl/normal",
    h3: "text-1xl/tight font-extrabold sm:text-2xl/normal",
  };

  const commonClasses = "font-extrabold";

  return (
    <Tag className={clsx(commonClasses, headingClassesMap[Tag])}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
