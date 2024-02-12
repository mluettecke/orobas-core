import React from "react";

import { Slider } from "orobas-utils";

import { PageTitle } from "../PageTitle";

export function SliderDocumentation() {
  return (
    <>
      <PageTitle
        title="Slider"
        subtitle="A two-state button that can be either on or off."
      />
      <div className="flex min-h-[350px] w-full justify-center p-10 items-center">
        <Slider defaultValue={[50]} max={100} step={1} className={"w-[60%]"} />
      </div>
    </>
  );
}
