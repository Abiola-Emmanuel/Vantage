"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle2, Eye, EyeOff, Loader2, Mail, ShieldHalf, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { Blob } from "@/components/site/ui.jsx";
import { createClient } from "@/lib/supabase/client";

function GoogleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38Z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.14c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18A10.95 10.95 0 0 1 12 6.07c.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.14c0 .31.21.67.79.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function AuthLayout({ children }) {
  return (
    <main className="min-h-screen bg-background md:grid md:grid-cols-[minmax(0,1fr)_minmax(420px,0.82fr)]">
      <aside className="relative hidden min-h-screen overflow-hidden bg-[linear-gradient(135deg,#2BB6A3_0%,#4ADEC8_100%)] px-10 py-10 text-ink md:flex md:flex-col md:justify-between lg:px-14">
        <Blob className="-left-36 top-12 h-[380px] w-[380px] opacity-50" />
        <Blob className="bottom-0 right-0 h-[520px] w-[520px] translate-x-1/3 translate-y-1/4 opacity-45" />

        <Link href="/" className="relative z-10 inline-flex items-center gap-2 self-start">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-ink-foreground shadow-soft">
            <ShieldHalf className="h-5 w-5" />
          </span>
          <span className="text-base font-semibold">Vantage</span>
        </Link>

        <div className="relative z-10 max-w-xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-ink/60">
            Security lab
          </p>
          <h1 className="mt-4 max-w-lg text-5xl font-semibold leading-[1.03] text-ink lg:text-6xl">
            Your reference for offensive &amp; defensive security
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-ink/70">
            Build practical muscle memory with field notes across recon, malware analysis,
            forensics, and social engineering.
          </p>
        </div>

        <div className="relative z-10 rounded-2xl border border-white/30 bg-white/35 p-5 shadow-lift backdrop-blur-md">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-ink-foreground">
                <Terminal className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold">Quick Reference</p>
                <p className="text-xs text-ink/60">Lab verified notes</p>
              </div>
            </div>
            <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-ink/70">
              Live library
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["40+", "tools documented"],
              ["4", "domains covered"],
              ["100%", "hands-on tested"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl bg-white/45 p-4">
                <p className="text-2xl font-semibold text-ink">{value}</p>
                <p className="mt-1 text-xs text-ink/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <section className="flex min-h-screen items-center justify-center bg-background px-4 py-10 sm:px-6 md:px-10">
        <div className="w-full max-w-[430px]">{children}</div>
      </section>
    </main>
  );
}

function getEmailRedirectTo() {
  if (typeof window === "undefined") {
    return undefined;
  }

  return `${window.location.origin}/auth/callback`;
}

function createSessionClient() {
  return createClient({
    auth: {
      storage: window.sessionStorage,
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
}

function getModeFromSearch() {
  if (typeof window === "undefined") {
    return "sign-in";
  }

  const mode = new URLSearchParams(window.location.search).get("mode");
  return mode === "signup" || mode === "sign-up" ? "sign-up" : "sign-in";
}

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState("sign-in");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [oauthProvider, setOauthProvider] = useState(null);
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const isSignUp = mode === "sign-up";

  useEffect(() => {
    setMode(getModeFromSearch());
  }, []);

  function resetFeedback() {
    setError("");
    setMessage("");
  }

  function switchMode(nextMode) {
    setMode(nextMode);
    setConfirmationEmail("");
    resetFeedback();
  }

  async function handleOAuthSignIn(provider) {
    resetFeedback();
    setOauthProvider(provider);

    const supabase = createClient();
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: getEmailRedirectTo(),
      },
    });

    if (oauthError) {
      setError(oauthError.message);
      setOauthProvider(null);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    resetFeedback();
    setIsSubmitting(true);

    const supabase = rememberMe || isSignUp ? createClient() : createSessionClient();

    const { error: authError } = isSignUp
      ? await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
            emailRedirectTo: getEmailRedirectTo(),
          },
        })
      : await supabase.auth.signInWithPassword({
          email,
          password,
        });

    setIsSubmitting(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    if (isSignUp) {
      setConfirmationEmail(email);
      setPassword("");
      return;
    }

    router.push("/");
    router.refresh();
  }

  async function handleResendConfirmation() {
    resetFeedback();
    setIsResending(true);

    const supabase = createClient();
    const { error: resendError } = await supabase.auth.resend({
      type: "signup",
      email: confirmationEmail,
      options: {
        emailRedirectTo: getEmailRedirectTo(),
      },
    });

    setIsResending(false);

    if (resendError) {
      setError(resendError.message);
      return;
    }

    setMessage("Confirmation email sent again.");
  }

  if (confirmationEmail) {
    return (
      <AuthLayout>
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-ink">
            <Mail className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Almost there</p>
            <h1 className="text-2xl font-semibold text-foreground">Check your email</h1>
          </div>
        </div>

        <p className="text-sm leading-6 text-muted-foreground">
          Check your inbox at{" "}
          <span className="font-medium text-foreground">{confirmationEmail}</span> and click the
          confirmation link to activate your account.
        </p>

        {error && (
          <p className="mt-4 rounded-lg border border-destructive/20 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {error}
          </p>
        )}
        {message && (
          <p className="mt-4 flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-sm text-foreground">
            <CheckCircle2 className="h-4 w-4 text-primary-deep" />
            {message}
          </p>
        )}

        <button
          type="button"
          onClick={handleResendConfirmation}
          disabled={isResending}
          className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-ink-foreground transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isResending && <Loader2 className="h-4 w-4 animate-spin" />}
          Resend confirmation email
        </button>

        <button
          type="button"
          onClick={() => switchMode("sign-in")}
          className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground transition hover:border-primary/50"
        >
          Back to sign in
        </button>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <Link href="/" className="mb-8 inline-flex items-center gap-2 md:hidden">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-ink">
          <ShieldHalf className="h-4 w-4" />
        </span>
        <span className="text-sm font-semibold text-foreground">Vantage</span>
      </Link>

      <div className="mb-6">
        <p className="text-sm font-medium text-muted-foreground">
          {isSignUp ? "Create your account" : "Welcome back"}
        </p>
        <h1 className="text-3xl font-semibold text-foreground">
          {isSignUp ? "Sign up" : "Sign in"}
        </h1>
      </div>

      <div className="relative mb-6 grid grid-cols-2 overflow-hidden rounded-full border border-border bg-secondary p-1">
        <motion.span
          aria-hidden="true"
          animate={{ x: isSignUp ? "100%" : "0%" }}
          transition={{ type: "spring", stiffness: 420, damping: 36 }}
          className="absolute left-1 top-1 h-9 w-[calc(50%-0.25rem)] rounded-full bg-card shadow-soft"
        />
        <button
          type="button"
          onClick={() => switchMode("sign-in")}
          className={`relative z-10 h-9 rounded-full text-sm font-medium transition ${
            !isSignUp ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Sign in
        </button>
        <button
          type="button"
          onClick={() => switchMode("sign-up")}
          className={`relative z-10 h-9 rounded-full text-sm font-medium transition ${
            isSignUp ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          Sign up
        </button>
      </div>

      <div className="space-y-3">
        <button
          type="button"
          onClick={() => handleOAuthSignIn("google")}
          disabled={Boolean(oauthProvider) || isSubmitting}
          className="inline-flex h-11 w-full items-center justify-center gap-3 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground transition hover:border-primary/50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {oauthProvider === "google" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <GoogleIcon />
          )}
          Continue with Google
        </button>
        <button
          type="button"
          onClick={() => handleOAuthSignIn("github")}
          disabled={Boolean(oauthProvider) || isSubmitting}
          className="inline-flex h-11 w-full items-center justify-center gap-3 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground transition hover:border-primary/50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {oauthProvider === "github" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <GitHubIcon />
          )}
          Continue with GitHub
        </button>
      </div>

      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          or continue with email
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignUp && (
          <label className="block">
            <span className="text-sm font-medium text-foreground">Full name</span>
            <input
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              autoComplete="name"
              placeholder="Ada Lovelace"
              required
              className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
        )}

        <label className="block">
          <span className="text-sm font-medium text-foreground">Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            placeholder="you@example.com"
            required
            className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-foreground">Password</span>
          <div className="relative mt-2">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete={isSignUp ? "new-password" : "current-password"}
              placeholder={isSignUp ? "Create a secure password" : "Enter your password"}
              required
              className="h-11 w-full rounded-lg border border-input bg-background px-3 pr-11 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </label>

        {!isSignUp && (
          <label className="flex items-center gap-3 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
              className="h-4 w-4 rounded border-input accent-primary"
            />
            Remember me
          </label>
        )}

        {error && (
          <p className="rounded-lg border border-destructive/20 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting || Boolean(oauthProvider)}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-ink-foreground transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
          {isSignUp ? "Create account" : "Sign in"}
        </button>
      </form>
    </AuthLayout>
  );
}
