import Image from "next/image";
import Link from "next/link";

interface Props {
  imgSrc: string;
  imgAlt: string;
  header: string;
  link: string;
}

export default function RecipeCard({ imgSrc, imgAlt, header, link }: Props) {
  return (
    <section className="m-auto mb-5">
      <Link href={link}>
        <Image src={imgSrc} width="200" height="200" alt={imgAlt} className="w-[320px] h-[320px] object-cover" />
        <h2 className="text-center pt-1">{header}</h2>
      </Link>
    </section>
  );
}
