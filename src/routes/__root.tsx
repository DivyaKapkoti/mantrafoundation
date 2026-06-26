import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Layout } from "../components/Layout";

function NotFoundComponent() {
  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center bg-hero px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-7xl font-bold text-gradient">404</h1>
          <h2 className="mt-4 font-display text-2xl font-semibold">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-105"
            style={{ background: "var(--gradient-primary)" }}
          >
            Go home
          </Link>
        </div>
      </div>
    </Layout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-hero px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft"
            style={{ background: "var(--gradient-primary)" }}
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mantra Foundation – An Institute for Differently Abled" },
      { name: "description", content: "Mantra Foundation, Rajkot – an educational trust and institute for differently abled learners, publishing inclusive books and learning resources." },
      { name: "author", content: "Mantra Foundation" },
      { property: "og:title", content: "Mantra Foundation – An Institute for Differently Abled" },
      { property: "og:description", content: "Mantra Foundation, Rajkot – an educational trust and institute for differently abled learners, publishing inclusive books and learning resources." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Mantra Foundation – An Institute for Differently Abled" },
      { name: "twitter:description", content: "Mantra Foundation, Rajkot – an educational trust and institute for differently abled learners, publishing inclusive books and learning resources." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/879b6afe-e26f-4c4e-a3d2-a58e7d483723/id-preview-2b1d73a6--964b3939-963e-4f8f-bd50-b47f254543cf.lovable.app-1782508494087.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/879b6afe-e26f-4c4e-a3d2-a58e7d483723/id-preview-2b1d73a6--964b3939-963e-4f8f-bd50-b47f254543cf.lovable.app-1782508494087.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
