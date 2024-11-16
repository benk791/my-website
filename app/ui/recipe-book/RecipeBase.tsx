"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface props {
  title: string;
  imgSrc: string;
  imgAlt: string;
  ingredients: Array<string>;
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
      <Image src={imgSrc} width="200" height="200" alt={imgAlt} />
      <section>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Instructions</h2>
        <ul>
          {instructions.map((instruction) => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
