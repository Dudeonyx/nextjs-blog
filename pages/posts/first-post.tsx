import Link from 'next/link';

export default function FirstPost() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">First Post</h1>;
      <p>
        Go back to{' '}
        <Link href="/">
          <a className="text-blue-600 hover:underline">homepage</a>
        </Link>
      </p>
    </div>
  );
}
