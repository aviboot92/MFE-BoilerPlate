import Link from 'next/link';
import { appConfig } from '@repo/config';

export default function Page() {
  return (
    <main>
      <div className='card'>
        <div className='badge'>Shell</div>
        <h1>{appConfig.appName}</h1>
        <p>{appConfig.appDescription}</p>
        <nav>
          {appConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
