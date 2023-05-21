import { useGetMenuQuery } from "@app/core/types";
import { MenuListLoading } from "@app/modules/components/menu-list-loading/menu-list-loading.component";
import { MenuList } from "@app/modules/components/menu-list/menu-list.component";
import { ShowInfo } from "@app/modules/components/show-info/show-info.component";

export const MenuPage = () => {
  const { data, loading, error } = useGetMenuQuery();

  if (error) {
    return (
      <ShowInfo type="error">
        <h2 className="font-bold text-xl mb-2">Упс...Сталася помилка.</h2>
        <p className="font-medium">Спробуйте пізніше.</p>
      </ShowInfo>
    );
  }

  if (loading && !data) {
    return <MenuListLoading items={9} />;
  }

  if (!data) {
    return (
      <ShowInfo type="info">
        <p className="font-medium">На жаль, меню пусте 😿</p>
      </ShowInfo>
    );
  }

  return <MenuList items={data.menu} />;
};
