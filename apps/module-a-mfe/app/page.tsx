import Link from 'next/link';

export default function Page() {
  return (
    <main style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h1>Welcome to Module A</h1>
      <p>Demonstration route for the module A microfrontend.</p>
      <nav style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Link href='/'>Home</Link>
        <Link href='/dashboard'>Dashboard</Link>
        <Link href='/module-b'>Module B</Link>
      </nav>
    </main>
  );
}
