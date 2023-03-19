import { MenuItem } from "@app/modules/components/menu-item/menu-item.component";
import { Pizza } from "@app/modules/types/pizza";
import { FC } from "react";

interface MenuListProps {
  items: Pizza[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {items.map(({ image, ...pizza }) => (
        <MenuItem
          {...pizza}
          imagePath={`assets/pizza/${image}`}
          key={`pizza-${pizza.id}`}
        />
      ))}
    </div>
  );
};
