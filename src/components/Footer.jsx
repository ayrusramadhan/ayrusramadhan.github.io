import { Link } from 'react-router-dom';
import { NAME, socials } from '../data.js';

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1280px] px-5 font-sans text-sm font-medium text-muted md:px-8">
      <div className="flex flex-col items-start gap-6 border-t border-line pb-10 pt-7 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:pb-12 sm:pt-8">
        <div className="grid gap-1.5">
          <Link to="/" className="flex items-center gap-2.5 text-[17px] font-extrabold text-ink">
            <i className="size-4 rounded-full bg-tang" />{NAME}
          </Link>
          <span className="pl-[26px]">© {new Date().getFullYear()} {NAME}. All rights reserved.</span>
        </div>
        <ul className="flex flex-wrap gap-2">
          {socials.map(([label, href]) => (
            <li key={label}>
              <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex min-h-11 items-center rounded-full border-2 border-ink px-5 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-ground">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
