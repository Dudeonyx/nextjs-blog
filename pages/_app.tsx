import '../styles/globals.css';

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: (x: any) => any;
  pageProps: Record<string, any>;
}) {
  return <Component {...pageProps} />;
}
