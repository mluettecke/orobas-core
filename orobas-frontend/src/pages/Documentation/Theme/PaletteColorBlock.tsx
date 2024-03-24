import React from "react";

type PaletteColorBlock = {
  title: string;
  color: string;
};

export function PaletteColorBlock(props: PaletteColorBlock) {
  return (
    <div className="flex">
      <div
        className="mr-2 h-[48px] w-[48px] border"
        style={{ backgroundColor: `hsl(${props.color})` }}
      />
      <div className="space-y-1">
        <p className="text-sm">{props.title}</p>
        <p className="text-xs text-text-secondary">{props.color}</p>
      </div>
    </div>
  );
}
