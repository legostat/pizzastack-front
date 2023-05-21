import { FC } from "react";
import { MenuItemLoading } from "@app/modules/components/menu-item-loading/menu-item-loading.component";

interface IMenuListLoading {
  items: number;
}

export const MenuListLoading: FC<IMenuListLoading> = ({ items }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {new Array(items).fill(1).map((value, idx) => (
        <MenuItemLoading key={`menu-loading-${idx}`} />
      ))}
    </div>
  );
};
