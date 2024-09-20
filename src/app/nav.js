import Link from 'next/link'

export default function Nav() {
    return (
      <nav>
        <ul>
          <li>
            <Link href="/hello">Hello <span className="diff-rand"> different random: {Math.random()}</span></Link>
          </li>
          <li>
            <Link href="/">Home <span  className="diff-rand"> different random: {Math.random()}</span></Link>
          </li>
          <li>
            <Link href="/world">World <span  className="diff-rand"> different random: {Math.random()}</span> </Link>
          </li>
        </ul>
      </nav>
    );
}
