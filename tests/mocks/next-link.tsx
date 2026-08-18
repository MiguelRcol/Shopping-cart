import { forwardRef, type AnchorHTMLAttributes } from "react";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string | { pathname?: string };
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, children, ...props },
  ref,
) {
  const resolvedHref =
    typeof href === "string" ? href : (href.pathname ?? "/");
  return (
    <a href={resolvedHref} ref={ref} {...props}>
      {children}
    </a>
  );
});

export default Link;
