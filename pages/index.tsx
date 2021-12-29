import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import './index.css';

export default function Home() {
  return (
    <div className="min-h-screen  flex-col flex justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-5 mt-10 flex flex-col justify-center items-center max-w-[800px]">
        <h1 className="text-7xl text-center">
          Welcome to{' '}
          <a href="https://nextjs.org" className="text-blue-600 hover:underline">
            Next.js!
          </a>
        </h1>

        <p className="description text-center text-2xl">
          Get started by editing{' '}
          <code className="bg-slate-100 px-1 py-1 rounded-md font-mono text-base font-semibold">
            pages/index.tsx
          </code>
        </p>
        <p>
          Go on to read{' '}
          <Link href="/posts/first-post">
            <a className="text-blue-600 hover:underline">first post!</a>
          </Link>
        </p>

        <div className="grid grid-cols-2 grid-rows-2 mt-10 gap-9 text-xl text-gray-700">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className="card">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className="h-28 w-full flex justify-center items-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          Powered by <Image src="/vercel.svg" alt="Vercel" className="h-4" />
        </a>
      </footer>
    </div>
  );
}
