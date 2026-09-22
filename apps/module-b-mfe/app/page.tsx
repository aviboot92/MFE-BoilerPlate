import Link from 'next/link';

export default function Page() {
  return (
    <main style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h1>Welcome to Module B</h1>
      <p>Demonstration route for the module B microfrontend.</p>
      <nav style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Link href='/'>Home</Link>
        <Link href='/dashboard'>Dashboard</Link>
        <Link href='/module-a'>Module A</Link>
      </nav>
    </main>
  );
}
