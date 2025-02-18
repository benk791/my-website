"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface props {
  title: string;
  imgSrc: string;
  imgAlt: string;
  serving?: string;
  ingredients: Array<{ title?: string; items: Array<string> }>;
  instructions: Array<{ title?: string; items: Array<string> }>;
}

export default function RecipeBase({
  title,
  imgSrc,
  imgAlt,
  serving,
  ingredients,
  instructions,
}: props) {
  const router = useRouter();
  if (!title) {
    router.push("/recipe-book");
    return null;
  }
  return (
    <div className="container">
      <h1>{title}</h1>
      <Image
        src={imgSrc}
        width="200"
        height="200"
        alt={imgAlt}
        className="pb-4 md:h-0 object-cover visible md:invvisible"
      />
      <h3 className="pb-0">{serving}</h3>
      <div className="md:grid md:grid-cols-5">
        <section className="pr-5 mb-2">
          <h2 className="text-left">Ingredients</h2>
          <ul>
            {ingredients.map((section, i) => (
              <li key={section.title ?? i} className="mb-2">
                {section.title && <h3>{section.title}</h3>}
                <ul className="mb-5">
                  {section.items.map((item) => (
                    <li key={item} className="ml-3 mb-1 list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
        <section className="col-span-4 md:border-l-2 md:px-5">
          <h2 className="pb-0">Instructions</h2>
          <ul>
            <div className="float-right pb-5 pl-5">
              <Image
                src={imgSrc}
                width="200"
                height="200"
                alt={imgAlt}
                className="md:w-[250px] md:h-[250px] h-0 object-cover invisible md:visible"
              />
            </div>
            {instructions.map((section, instruction) => (
              <li key={section.title ?? instruction}>
                {section.title && <h3 className="pb-2">{section.title}</h3>}
                <ol className="pb-2">
                  {section.items.map((item) => (
                    <li key={item} className="mb-2 ml-5 list-decimal">
                      {item}
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
