import { FC, PropsWithChildren } from "react";

interface FooterLinkProps {
  href: string;
}

export const FooterLink: FC<FooterLinkProps & PropsWithChildren> = ({
  href,
  children,
}) => {
  return (
    <li className="mb-2 text-gray-400 text-xs font-bold hover:text-gray-300">
      <a href={href}>{children}</a>
    </li>
  );
};
