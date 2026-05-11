import Link from "next/link";

export default function Nav() {
  return (
    <nav className="mt-4">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
