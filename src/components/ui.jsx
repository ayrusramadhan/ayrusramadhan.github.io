import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';

export function Button({ to, href, variant = 'solid', children, ...rest }) {
  const cls = `inline-flex h-14 items-center rounded-full border-2 px-7 font-sans text-[17px] font-semibold transition-colors ${
    variant === 'solid'
      ? 'border-transparent bg-cobalt text-white hover:bg-tang hover:text-ink'
      : 'border-ink text-ink hover:bg-ink hover:text-ground'
  }`;
  return to
    ? <Link to={to} className={cls} {...rest}>{children}</Link>
    : <a href={href} className={cls} {...rest}>{children}</a>;
}

export function Section({ title, children }) {
  return (
    <section className="mt-[72px] md:mt-[120px]">
      {title && (
        <Reveal as="h2" className="mb-10 font-sans text-[clamp(40px,7vw,96px)] font-extrabold leading-[.98] tracking-[-.04em]">
          {title}
        </Reveal>
      )}
      {children}
    </section>
  );
}

export const pageTitle = 'mb-12 font-sans text-[clamp(48px,9vw,128px)] font-extrabold leading-[.95] tracking-[-.045em]';
