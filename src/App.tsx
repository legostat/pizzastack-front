import { Header } from "@app/common/components/header/header.component";
import { Footer } from "@app/common/components/footer/footer.component";

import { MenuPage } from "@app/modules/pages/menu/menu.page";

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mx-8 md:mx-12 mb-24 flex-1">
        <MenuPage />
      </div>
      <Footer />
    </div>
  );
};
