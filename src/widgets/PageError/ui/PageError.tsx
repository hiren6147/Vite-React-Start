import PageErrorIcon from "@/shared/assets/icons/PageError.svg?react";

export const PageError = () => {
  const handleReloadClick = () => {
    location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-450 text-center">
        <PageErrorIcon className="fill-primary" />
        <h3 className="text-primary font-m font-bold">Page Error</h3>
        <p className="text-gray-400 font-medium mt-4 mb-12 text-base">
          Page Error
        </p>
        <button onClick={handleReloadClick}>Reload</button>
      </div>
    </div>
  );
};
