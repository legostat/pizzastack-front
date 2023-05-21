import { FC } from "react";
import { Pizza } from "@app/modules/types/pizza";
import { MenuItem } from "@app/modules/components/menu-item/menu-item.component";

interface MenuListProps {
  items: Pizza[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {items.map(({ image, ...pizza }) => (
        <MenuItem {...pizza} imageId={image} key={`pizza-${pizza.id}`} />
      ))}
    </div>
  );
};
