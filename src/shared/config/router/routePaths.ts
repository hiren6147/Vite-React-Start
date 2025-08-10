export const AppRoutes = {
  HOME: "home",
  NOT_FOUND: "not_found",
} as const;

type AppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",

  // last
  [AppRoutes.NOT_FOUND]: "*",
};
