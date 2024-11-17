"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface props {
  title: string;
  imgSrc: string;
  imgAlt: string;
  ingredients: Array<{ title?: string; items: Array<string> }>;
  instructions: Array<string>;
}

export default function RecipeBase({ title, imgSrc, imgAlt, ingredients, instructions }: props) {
  const router = useRouter();
  if (!title) {
    router.push("/recipe-book");
    return null;
  }
  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="grid grid-cols-5">
        <section className="pr-5">
          <h2 className="text-right">Ingredients</h2>
          <ul>
            {ingredients.map((section, i) => (
              <li key={section.title ?? i} className="mb-2">
                {section.title && <h3 className="mt-5">{section.title}</h3>}
                <ul>
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
        <section className="col-span-4 border-l-2 px-5">
          <h2>Instructions</h2>
          <ol className="list-decimal">
            <div className="float-right w-[250px] h-[250px] pb-5 pl-5">
              <Image src={imgSrc} width="200" height="200" alt={imgAlt} />
            </div>
            {instructions.map((instruction) => (
              <li key={instruction} className="mb-2 ml-5">
                {instruction}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
