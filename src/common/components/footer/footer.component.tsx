import { FooterLink } from "../footer-link/footer-link.component";

export const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="pt-12 pb-8 px-12">
        <h3 className="uppercase mb-4 text-zinc-500 text-xs font-bold">
          Контакти
        </h3>
        <ul className="">
          <FooterLink href="tel:+380441234567">044 123 45 67</FooterLink>
          <FooterLink href="mailto:info@pizzastack.app">
            info@pizzastack.app
          </FooterLink>
        </ul>
      </div>
      <hr className="bg-zinc-500" />
      <div className="py-8 px-12">
        <a className="text-xl font-semibold text-white" href="/">
          🍕 PizzaStack
        </a>
      </div>
    </footer>
  );
};
