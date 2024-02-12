import { Route } from "@tanstack/react-router";

import { rootRoute } from "@/routes";

import { Accordions } from "./Accordions";
import { Alerts } from "./Alert";
import { AlertDialogs } from "./AlertDialogs";
import { AspectRatioDocumentation } from "./AspectRatio";
import { Avatars } from "./Avatars";
import { Badges } from "./Badges";
import { Buttons } from "./Buttons";
import { CalendarDocumentation } from "./Calendar";
import { CardDocumentation } from "./Card";
import { CarouselDocumentation } from "./Carousel";
import { CheckboxDocumentation } from "./Checkbox";
import { CollapsibleDocumentation } from "./Collapsible";
import { CommandDocumentation } from "./Command";
import { ContextMenuDocumentation } from "./ContextMenu";
import { DatePickerDocumentation } from "./DatePicker";
import { DialogDocumentation } from "./Dialog";
import { Documentation } from "./Documentation";
import { DropdownDocumentation } from "./Dropdown";
import { HoverCardDocumentation } from "./HoverCard";
import { InputDocumentation } from "./Input";
import { LabelDocumentation } from "./Label";
import { MenubarDocumentation } from "./Menubar";
import { NavigationMenuDocumentation } from "./NavigationMenu";
import { PaginationDocumentation } from "./Pagination";
import { PopoverDocumentation } from "./Popover";
import { ProgressDocumentation } from "./Progress";
import { RadioGroupDocumentation } from "./RadioGroup";
import { ResizableDocumentation } from "./Resizable";
import { ScrollAreaDocumentation } from "./ScrollArea";
import { SelectDocumentation } from "./Select";
import { SeparatorDocumentation } from "./Separator";
import { SheetDocumentation } from "./Sheet";
import { SkeletonDocumentation } from "./Skeleton";
import { SliderDocumentation } from "./Slider";
import { SonnerDocumentation } from "./Sonner";
import { SwitchDocumentation } from "./Switch";
import { TableDocumentation } from "./Table";
import { TabsDocumentation } from "./Tabs/TabsDocumentation";
import { TextareaDocumentation } from "./Textarea";
import { ToastDocumentation } from "./Toast";
import { ToggleDocumentation } from "./Toggle";
import { ToggleGroupDocumentation } from "./ToggleGroup";
import { TooltipDocumentation } from "./Tooltip";

export const documentationRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/documentation",
  component: Documentation,
});

export const buttonsRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "button",
  component: Buttons,
});

export const alertsRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "alert",
  component: Alerts,
});

export const alertDialogsRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "alert-dialog",
  component: AlertDialogs,
});

export const avatarsRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "avatar",
  component: Avatars,
});

export const accordionssRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "accordion",
  component: Accordions,
});

export const aspectRatioRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "aspect-ratio",
  component: AspectRatioDocumentation,
});

export const badgesRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "badge",
  component: Badges,
});

export const calendarRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "calendar",
  component: CalendarDocumentation,
});

export const cardRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "card",
  component: CardDocumentation,
});

export const carouselRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "carousel",
  component: CarouselDocumentation,
});

export const checkboxRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "checkbox",
  component: CheckboxDocumentation,
});

export const collapsibleRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "collapsible",
  component: CollapsibleDocumentation,
});

export const commandRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "command",
  component: CommandDocumentation,
});

export const contextMenuRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "context-menu",
  component: ContextMenuDocumentation,
});

export const dialogRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "dialog",
  component: DialogDocumentation,
});

export const datePickerRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "datepicker",
  component: DatePickerDocumentation,
});

export const dropdownRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "dropdown",
  component: DropdownDocumentation,
});

export const hoverCardRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "hover-card",
  component: HoverCardDocumentation,
});

export const inputRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "input",
  component: InputDocumentation,
});

export const labelRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "label",
  component: LabelDocumentation,
});

export const menubarRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "menubar",
  component: MenubarDocumentation,
});

export const navigationMenuRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "navigation-menu",
  component: NavigationMenuDocumentation,
});

export const paginationRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "pagination",
  component: PaginationDocumentation,
});

export const popoverRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "popover",
  component: PopoverDocumentation,
});

export const progressRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "progress",
  component: ProgressDocumentation,
});

export const radioGroupRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "radio-group",
  component: RadioGroupDocumentation,
});

export const resizableRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "resizable",
  component: ResizableDocumentation,
});

export const scrollAreaRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "scroll-area",
  component: ScrollAreaDocumentation,
});

export const selectRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "select",
  component: SelectDocumentation,
});

export const separatorRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "separator",
  component: SeparatorDocumentation,
});

export const sheetRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "sheet",
  component: SheetDocumentation,
});

export const skeletonRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "skeleton",
  component: SkeletonDocumentation,
});

export const sliderRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "slider",
  component: SliderDocumentation,
});

export const sonnerRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "sonner",
  component: SonnerDocumentation,
});

export const switchRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "switch",
  component: SwitchDocumentation,
});

export const tableRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "table",
  component: TableDocumentation,
});

export const tabsRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "tabs",
  component: TabsDocumentation,
});

export const textareaRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "textarea",
  component: TextareaDocumentation,
});

export const toastRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "toast",
  component: ToastDocumentation,
});

export const toggleRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "toggle",
  component: ToggleDocumentation,
});

export const toggleGroupRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "toggle-group",
  component: ToggleGroupDocumentation,
});

export const tooltipRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "tooltip",
  component: TooltipDocumentation,
});

documentationRoute.addChildren([
  aspectRatioRoute,
  accordionssRoute,
  alertsRoute,
  alertDialogsRoute,
  avatarsRoute,
  badgesRoute,
  buttonsRoute,
  calendarRoute,
  cardRoute,
  carouselRoute,
  checkboxRoute,
  collapsibleRoute,
  commandRoute,
  contextMenuRoute,
  datePickerRoute,
  dialogRoute,
  dropdownRoute,
  hoverCardRoute,
  inputRoute,
  labelRoute,
  menubarRoute,
  navigationMenuRoute,
  paginationRoute,
  popoverRoute,
  progressRoute,
  radioGroupRoute,
  resizableRoute,
  scrollAreaRoute,
  selectRoute,
  separatorRoute,
  sheetRoute,
  skeletonRoute,
  sliderRoute,
  sonnerRoute,
  switchRoute,
  tableRoute,
  tabsRoute,
  textareaRoute,
  toastRoute,
  toggleRoute,
  toggleGroupRoute,
  tooltipRoute,
]);
