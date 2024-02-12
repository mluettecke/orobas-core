import React from "react";
import { format } from "date-fns";

import { cn } from "@/utils";

import { Button } from "../Button";
import { Calendar } from "../Calendar";
import { Icon } from "../Icon";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";

type DatePickerProps = {
  value: Date | null | undefined;
  onChange: (value: Date | undefined) => void;
};

export function DatePicker(props: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !props.value && "text-muted-foreground",
          )}
        >
          <Icon name="radix-icons:calendar" className="mr-2 h-4 w-4" />
          {props.value ? format(props.value, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={props.value ? props.value : undefined}
          onSelect={props.onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
