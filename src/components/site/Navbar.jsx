"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, ShieldHalf } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { createClient } from "@/lib/supabase/client";

const links = [
  { label: "Home", href: "#top" },
  { label: "Domains", href: "#domains" },
  { label: "Lab Setup", href: "#lab-setup" },
  { label: "About", href: "#faq" },
];

function getInitials(user) {
  const fullName = user?.user_metadata?.full_name?.trim();

  if (fullName) {
    return fullName
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }

  return user?.email?.[0]?.toUpperCase() || "U";
}

function getAvatarUrl(user) {
  return user?.user_metadata?.avatar_url || user?.user_metadata?.picture || "";
}

function UserMenu({ user, onSignOut }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const avatarUrl = getAvatarUrl(user);

  return (
    <div
      className="relative"
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <button
        type="button"
        aria-label="Account menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((visible) => !visible)}
        className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-primary-deep text-xs font-semibold text-white shadow-soft ring-1 ring-ink-foreground/20 transition active:scale-95"
      >
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt=""
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          getInitials(user)
        )}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -4 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-11 z-50 w-60 overflow-hidden rounded-2xl border border-border bg-card p-2 text-foreground shadow-lift"
          >
            <p className="truncate px-3 py-2 text-xs text-muted-foreground">{user.email}</p>
            <button
              type="button"
              onClick={onSignOut}
              className="block w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              Sign out
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const isLoggedIn = Boolean(user);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function handleSignOut() {
    const supabase = createClient();

    await supabase.auth.signOut();
    setUser(null);
    setOpen(false);
    router.refresh();
  }

  return (
    <div className="sticky top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full bg-ink px-4 py-2.5 shadow-lift">
        <a href="#top" className="flex items-center gap-2 pl-1">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary">
            {/* Add black version of the logo */}
            <ShieldHalf className="h-4 w-4 text-ink" />
            {/* <Image src="/favicon.png" alt="Vantage" width={16} height={16} /> */}
          </span>
          <span className="text-sm font-semibold text-ink-foreground">Vantage</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* <a
            href="#domains"
            className="hidden rounded-full bg-card/10 px-4 py-2 text-[13px] font-medium text-ink-foreground/75 transition hover:bg-card/15 hover:text-ink-foreground active:scale-95 md:inline-flex"
          >
            Explore
          </a> */}
          {isLoggedIn ? (
            <UserMenu user={user} onSignOut={handleSignOut} />
          ) : (
            <>
              <a
                href="/login"
                className="hidden rounded-full border border-ink-foreground/20 px-4 py-2 text-[13px] font-medium text-ink-foreground/80 transition hover:border-ink-foreground/35 hover:text-ink-foreground active:scale-95 sm:inline-flex"
              >
                Sign in
              </a>
              <a
                href="/login?mode=signup"
                className="hidden rounded-full bg-card px-5 py-2 text-[13px] font-medium text-foreground transition hover:bg-card/90 active:scale-95 sm:inline-flex"
              >
                Get Started
              </a>
            </>
          )}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-lift md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm text-foreground hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#domains"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-full border border-border bg-card px-4 py-3 text-center text-sm font-medium text-foreground"
            >
              Explore
            </a>
            {isLoggedIn ? (
              <div className="mt-2 flex justify-end">
                <UserMenu user={user} onSignOut={handleSignOut} />
              </div>
            ) : (
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="block rounded-full border border-border bg-card px-4 py-3 text-center text-sm font-medium text-foreground"
                >
                  Sign in
                </a>
                <a
                  href="/login?mode=signup"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-ink px-4 py-3 text-center text-sm font-medium text-ink-foreground"
                >
                  Get Started
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
