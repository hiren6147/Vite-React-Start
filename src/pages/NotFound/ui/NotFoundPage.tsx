import { useNavigate } from "react-router";

import NotFoundIcon from "@/shared/assets/icons/NotFound.svg?react";
import { routePaths } from "@/shared/config";
import { Button } from "@/shared/ui";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    if (window.history.length < 1) {
      navigate(routePaths.home);
      return;
    }
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-450 text-center">
        <NotFoundIcon className="fill-primary" />
        <h3 className="text-primary font-m font-bold">Not Found 404</h3>
        <p className="text-gray-400 font-medium mt-4 mb-12 text-base">
          This page does not exist.
        </p>
        <Button onClick={handleClickBack} variant="outline">
          Go Back
        </Button>
      </div>
    </div>
  );
};
export default NotFoundPage;
