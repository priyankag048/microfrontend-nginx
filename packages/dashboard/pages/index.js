import Link from 'next/link';

function Home() {
  return (
    <ul>
      <li>
        <Link href="/employees">
          <a>Employees</a>
        </Link>
      </li>
      <li>
        <Link href="/departments">
          <a>Departments</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home
