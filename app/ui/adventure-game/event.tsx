import Image from "next/image";

interface Props {
  image: string;
  title: string;
  content: string;
}

export default function Event({ image, title, content }: Props) {
  return (
    <section className="p-3 m-10 max-w-full rounded-md border-2 border-themeText  flex space-x-4">
      <Image className="rounded-sm shrink-0 max-w-20" src={image} width={500} height={500} alt="test image" />
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
}
