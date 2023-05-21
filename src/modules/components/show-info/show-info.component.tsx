import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import { ReactComponent as ExclamationIcon } from "@app/assets/icons/exclamation.svg";
import { ReactComponent as InformationCircleIcon } from "@app/assets/icons/information-circle.svg";

interface ShowInfoProps {
  type: "error" | "info";
}

export const ShowInfo: FC<ShowInfoProps & PropsWithChildren> = ({
  type,
  children,
}) => {
  const topBlockStyles = clsx("h-24 flex justify-center items-center", {
    "bg-red-500": type === "error",
    "bg-blue-500": type === "info",
  });

  return (
    <div className="flex justify-center">
      <div className="shadow-xl rounded-2xl overflow-hidden w-72 ">
        <div className={topBlockStyles}>
          {type === "error" ? (
            <ExclamationIcon className="flex-none h-16 text-white" />
          ) : (
            <InformationCircleIcon className="flex-none h-16 text-white" />
          )}
        </div>
        <div className="bg-white text-center py-8 px-4">{children}</div>
      </div>
    </div>
  );
};
