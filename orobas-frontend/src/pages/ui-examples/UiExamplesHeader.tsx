import React from "react";

type UIExamplesHeaderProps = {
  title: string;
  subtitle: string;
};

function UIExamplesHeader(props: UIExamplesHeaderProps) {
  const { title, subtitle } = props;
  return (
    <div className="space-y2 mt-5">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{title}</h1>
      <p className="text-lg text-muted-foreground">
        <span>{subtitle}</span>
      </p>
    </div>
  );
}

export default UIExamplesHeader;
