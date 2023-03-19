import pizzaMenu from "@app/mocks/pizza.json";
import { MenuItem } from "@app/modules/components/menu-item/menu-item.component";

export const MenuList = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {pizzaMenu.map(({ image, ...pizza }) => (
        <MenuItem {...pizza} imagePath={`assets/pizza/${image}`} />
      ))}
    </div>
  );
};
