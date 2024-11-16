import Link from "next/link";

interface Props {
  link: string;
  name: string;
}

export default function RecipeCard({ link, name, }: Props) {
  return (
    <li>
      <h3 className="text-right">
        <Link href={link} className="decoration-themeSecondary hover:decoration-themeHighlight underline">
          {name}
        </Link>
      </h3>
    </li>
  );
}
