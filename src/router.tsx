import { createRouter, createRootRoute, createRoute, Outlet, Link } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "@/components/Layout";
import { Route as aboutRoute } from "./routes/about";

const queryClient = new QueryClient();

function HomePage() {
  return (
    <Layout>
      <div className="bg-hero min-h-[80vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-gradient">
            Mantra Foundation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            An Institute for Differently Abled
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
            style={{ background: "var(--gradient-primary)" }}
          >
            Learn About Us
          </Link>
        </div>
      </div>
    </Layout>
  );
}

function BooksPage() {
  return (
    <Layout>
      <div className="bg-hero min-h-[80vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Books Library</h1>
          <p className="mt-4 text-lg text-muted-foreground">Coming Soon</p>
        </div>
      </div>
    </Layout>
  );
}

function ContactPage() {
  return (
    <Layout>
      <div className="bg-hero min-h-[80vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground">Coming Soon</p>
        </div>
      </div>
    </Layout>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  ),
});

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: "/", component: HomePage });
const booksRoute = createRoute({ getParentRoute: () => rootRoute, path: "/books", component: BooksPage });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: "/contact", component: ContactPage });

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, booksRoute, contactRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
