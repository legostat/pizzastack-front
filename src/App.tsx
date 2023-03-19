import { Fragment } from "react";
import { Header } from "@app/common/components/header/header.component";
import { Footer } from "@app/common/components/footer/footer.component";
import { MenuList } from "@app/modules/components/menu-list/menu-list.component";

import pizzaMenu from "@app/mocks/pizza.json";

export const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="mx-8 md:mx-12 mb-24">
        <MenuList items={pizzaMenu} />
      </div>
      <Footer />
    </Fragment>
  );
};
