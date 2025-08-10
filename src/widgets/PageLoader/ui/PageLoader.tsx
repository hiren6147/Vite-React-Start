import { Spinner } from "@/shared/ui";

export const PageLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Spinner />
      <h3 className="text-primary font-m font-bold">Loading...</h3>
    </div>
  );
};
