import { useEffect, useState } from 'react';
import { SPOTIFY_PLAYLIST_ID as ID } from '../data.js';

// Floats bottom-right. Sticky inside <main>, so it settles above the footer instead of covering it.
// It lives in App (outside the routes), so the music keeps playing between pages.
export default function MusicPlayer() {
  const [open, setOpen] = useState(false);
  const [built, setBuilt] = useState(false); // embed loads only after the first open
  const [mini, setMini] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1600);
    const onScroll = () => setMini(scrollY > 160);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('keydown', onKey);
    return () => { clearTimeout(t); removeEventListener('scroll', onScroll); removeEventListener('keydown', onKey); };
  }, []);

  const toggle = (v) => { setOpen(v); if (v) setBuilt(true); };
  const small = mini && !open;

  return (
    <div className="sticky bottom-0 z-[7] h-0">
      <div className={`absolute right-0 bottom-[calc(16px+env(safe-area-inset-bottom,0px))] flex justify-end transition-all duration-700 ${ready ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'}`}>
        <button type="button" aria-expanded={open} aria-controls="player" onClick={() => toggle(!open)}
          className="group flex h-14 items-center rounded-full bg-ink pl-2.5 font-sans text-base font-semibold text-ground shadow-[0_12px_28px_rgba(18,17,43,.28)] transition-all duration-300 hover:scale-105"
          style={{ paddingRight: small ? 10 : 20 }}>
          <i aria-hidden className="size-9 shrink-0 rounded-full shadow-[inset_0_0_0_5px_rgba(18,17,43,.18)] group-hover:animate-spin"
            style={{ background: 'radial-gradient(circle,#12112B 0 12%,#FF6B2C 13% 100%)' }} />
          <span className={`overflow-hidden whitespace-nowrap transition-all duration-500 ${small ? 'ml-0 max-w-0 opacity-0' : 'ml-2.5 max-w-36 opacity-100'}`}>My playlist</span>
        </button>

        <section id="player" aria-label="Spotify playlist player"
          className={`absolute right-0 bottom-[calc(100%+12px)] w-[min(376px,calc(100vw-40px))] origin-bottom-right rounded-[20px] bg-surface p-4 shadow-[0_24px_48px_rgba(18,17,43,.28)] ${open ? 'visible translate-y-0 scale-100 opacity-100' : 'invisible translate-y-3 scale-90 opacity-0'}`}
          style={{ transitionProperty: 'transform,opacity,visibility', transitionDuration: '.45s,.3s,0s', transitionDelay: open ? '0s' : '0s,0s,.45s' }}>
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <strong className="block font-sans text-xl font-extrabold leading-[1.1] tracking-[-.02em]">My playlist</strong>
              <span className="font-sans text-[13px] font-medium text-muted">What I design to</span>
            </div>
            <button type="button" aria-label="Close playlist" onClick={() => toggle(false)}
              className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-ground">
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" /></svg>
            </button>
          </div>
          <div className="min-h-[152px] overflow-hidden rounded-xl">
            {built && (
              <iframe title="Spotify playlist player" loading="lazy" className="block w-full rounded-xl border-0"
                src={`https://open.spotify.com/embed/playlist/${ID}?utm_source=generator&theme=0`}
                height={window.innerWidth < 600 ? 152 : 352}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
            )}
          </div>
          <a href={`https://open.spotify.com/playlist/${ID}`} target="_blank" rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-11 items-center rounded-full border-2 border-ink px-[18px] font-sans text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-ground">
            Open in Spotify
          </a>
        </section>
      </div>
    </div>
  );
}
