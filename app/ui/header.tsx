import Link from "next/link"

export default function NavBar() {
  return (
    <header>
      <Link href="/"> <p>Home<br />page</p> </Link>
      <Link href="/3D-models"> <p>3D<br />Models</p> </Link>
      <Link href="/To-Do"> <p>To do<br />list</p> </Link>
      <Link href="/react-test"> <p>"React"<br />Tests</p> </Link>
    </header>
    );
}