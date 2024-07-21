export const enum RouteEnum {
  event = "/event",
  swap = "/",
  contact = "/contact",
}
export type Route = {
  title: string;
  path: RouteEnum;
};

export const routes: Route[] = [
  {
    title: "Swap",
    path: RouteEnum.swap,
  },
  {
    title: "Events",
    path: RouteEnum.event,
  },
  {
    title: "Contact Us",
    path: RouteEnum.contact,
  },
];
