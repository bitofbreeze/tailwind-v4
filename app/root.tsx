import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

// Begin Issue 1: vite url imports break whereas they worked in alpha.15
// Uncaught SyntaxError: The requested module '/app/root.css?url' does not provide an export named 'default' (at root.tsx:10:8)
// Switch the commented and uncommented line below to get to Issue 2
import cssUrl from "./root.css?url";
export const links: LinksFunction = () => [
  {rel: 'stylesheet', href: cssUrl}
];
// import './root.css';
// End Issue 1

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
