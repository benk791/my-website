import Link from "next/link";

export default function NavBar() {
  return (
    <header className="leading-none">
      <div className="grid grid-cols-6 md:grid-cols-12">
        <Link href="/">
          <p>
            Home
            <br />
            page
          </p>
        </Link>
        <Link href="/3D-models">
          <p>
            3D
            <br />
            Models
          </p>
        </Link>
        <Link href="/recipe-book">
          <p>
            Recipe
            <br />
            Book
          </p>
        </Link>
        <Link href="/To-Do">
          <p>
            To do
            <br />
            list
          </p>
        </Link>
        {/*
        <Link href="/react-test">
          <p>
            "React"
            <br />
            Tests
          </p>
        </Link>
        */}
        <Link href="/style-guide">
          <p>
            Style
            <br />
            Guide
          </p>
        </Link>
        <Link href="/games/itchio-games">
          <p>
            Itch.io
            <br />
            Games
          </p>
        </Link>
      </div>
    </header>
  );
}
