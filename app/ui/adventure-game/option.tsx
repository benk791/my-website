import Link from "next/link";
import { Stats } from "@/public/adventure-game/Global variables";

interface Props {
  Icon: React.ReactElement;
  title: string;
  content: string;
  link: string;
  check?: number[];
}

export default function Option({ Icon, title, content, link, check }: Props) {
  return (
    <section className="p-2 m-10 max-w-full rounded-sm border-2 border-themeText flex">
      <div className="w-full">
        <h2 className="p-0">{title}</h2>
        <p>{content}</p>
      </div>
      {check && (
        <div className="flex items-center">
          <p className="text-center p-2 border-2 rounded-md">
            {Stats[check[0]][0]}
            <br />
            {Stats[check[0]][1]}/{check[1]}
          </p>
        </div>
      )}
      <div className="items-center p-1 justify-items-center ">
        <div className="w-12 mt-0 m-1">{Icon}</div>
        <Link
          href={link}
          className=" text-themePrimary bg-themeSecondary p-1 m-3 rounded-md border-2 border-themeText hover:border-themeHighlight hover:text-themeHighlight"
        >
          Go
        </Link>
      </div>
    </section>
  );
}
