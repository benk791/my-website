import RecipeBase from "@/app/ui/recipe-book/RecipeBase";
import { recipes } from "@/app/ui/recipe-book/recipes";

interface props {
  params: Promise<{ recipes: string }>;
}

export default async function main(props: props) {
  const recipeName = await (await props.params).recipes;
  const recipeData = recipes[recipeName as keyof typeof recipes];

  return <RecipeBase {...recipeData} />;
}
