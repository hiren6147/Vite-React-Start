import type { RouteProps } from "react-router";

import { HomePage } from "@/pages/Home";
import { NotFoundPage } from "@/pages/NotFound";

import { AppRoutes, routePaths } from "@/shared/config";

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
