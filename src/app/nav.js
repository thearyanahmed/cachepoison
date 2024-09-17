import Link from 'next/link'

export default function Nav() {
    return (
      <nav>
        <ul>
          <li>
            <Link href="/hello">Hello</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/world">World</Link>
          </li>
        </ul>
      </nav>
    );
}