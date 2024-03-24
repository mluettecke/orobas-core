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
import { ThemeOverview } from "./Theme/Theme";
import { ToastDocumentation } from "./Toast";
import { ToggleDocumentation } from "./Toggle";
import { ToggleGroupDocumentation } from "./ToggleGroup";
import { TooltipDocumentation } from "./Tooltip";

export const documentationRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/documentation",
  component: Documentation,
});

export const themeOverviewRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "/theme",
  component: ThemeOverview,
});

export const primitivesRoute = new Route({
  getParentRoute: () => documentationRoute,
  path: "/primitives",
  component: Documentation,
});

export const buttonsRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "button",
  component: Buttons,
});

export const alertsRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "alert",
  component: Alerts,
});

export const alertDialogsRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "alert-dialog",
  component: AlertDialogs,
});

export const avatarsRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "avatar",
  component: Avatars,
});

export const accordionssRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "accordion",
  component: Accordions,
});

export const aspectRatioRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "aspect-ratio",
  component: AspectRatioDocumentation,
});

export const badgesRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "badge",
  component: Badges,
});

export const calendarRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "calendar",
  component: CalendarDocumentation,
});

export const cardRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "card",
  component: CardDocumentation,
});

export const carouselRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "carousel",
  component: CarouselDocumentation,
});

export const checkboxRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "checkbox",
  component: CheckboxDocumentation,
});

export const collapsibleRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "collapsible",
  component: CollapsibleDocumentation,
});

export const commandRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "command",
  component: CommandDocumentation,
});

export const contextMenuRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "context-menu",
  component: ContextMenuDocumentation,
});

export const dialogRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "dialog",
  component: DialogDocumentation,
});

export const datePickerRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "datepicker",
  component: DatePickerDocumentation,
});

export const dropdownRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "dropdown",
  component: DropdownDocumentation,
});

export const hoverCardRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "hover-card",
  component: HoverCardDocumentation,
});

export const inputRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "input",
  component: InputDocumentation,
});

export const labelRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "label",
  component: LabelDocumentation,
});

export const menubarRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "menubar",
  component: MenubarDocumentation,
});

export const navigationMenuRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "navigation-menu",
  component: NavigationMenuDocumentation,
});

export const paginationRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "pagination",
  component: PaginationDocumentation,
});

export const popoverRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "popover",
  component: PopoverDocumentation,
});

export const progressRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "progress",
  component: ProgressDocumentation,
});

export const radioGroupRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "radio-group",
  component: RadioGroupDocumentation,
});

export const resizableRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "resizable",
  component: ResizableDocumentation,
});

export const scrollAreaRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "scroll-area",
  component: ScrollAreaDocumentation,
});

export const selectRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "select",
  component: SelectDocumentation,
});

export const separatorRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "separator",
  component: SeparatorDocumentation,
});

export const sheetRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "sheet",
  component: SheetDocumentation,
});

export const skeletonRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "skeleton",
  component: SkeletonDocumentation,
});

export const sliderRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "slider",
  component: SliderDocumentation,
});

export const sonnerRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "sonner",
  component: SonnerDocumentation,
});

export const switchRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "switch",
  component: SwitchDocumentation,
});

export const tableRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "table",
  component: TableDocumentation,
});

export const tabsRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "tabs",
  component: TabsDocumentation,
});

export const textareaRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "textarea",
  component: TextareaDocumentation,
});

export const toastRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "toast",
  component: ToastDocumentation,
});

export const toggleRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "toggle",
  component: ToggleDocumentation,
});

export const toggleGroupRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "toggle-group",
  component: ToggleGroupDocumentation,
});

export const tooltipRoute = new Route({
  getParentRoute: () => primitivesRoute,
  path: "tooltip",
  component: TooltipDocumentation,
});

primitivesRoute.addChildren([
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

documentationRoute.addChildren([themeOverviewRoute, primitivesRoute]);
