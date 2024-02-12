import React from "react";

import { Progress } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
}

export function ProgressDocumentation() {
  return (
    <>
      <PageTitle
        title="Progress"
        subtitle="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <ProgressDemo />
      </div>
    </>
  );
}
