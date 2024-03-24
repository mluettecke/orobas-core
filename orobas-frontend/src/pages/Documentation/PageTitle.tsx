import React from "react";

type PageTitleProps = {
  title: string;
  subtitle: string;
};

export function PageTitle(props: PageTitleProps) {
  return (
    <div className="space-y-2">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        {props.title}
      </h1>
      <p className="text-text-secondary text-lg">{props.subtitle}</p>
    </div>
  );
}
