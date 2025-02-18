import SidebarLink from "@/app/ui/recipe-book/SidebarLink";
import RecipeCard from "../ui/recipe-book/RecipeCard";

export default function Main() {
  return (
    <div>
      <h1>Recipes</h1>
      <div className="flex">
        <div className="w-0 md:w-1/5">
          <section className="sticky top-10 invisible md:visible">
            <h2 className="text-right">Index</h2>
            <ul>
              <SidebarLink link="#top" name="Baking" />
              <SidebarLink link="#breakfasts" name="Breakfasts" />
              <SidebarLink link="#meals" name="Meals" />
              <SidebarLink link="#desserts" name="Desserts" />
            </ul>
          </section>
        </div>
        <div className="md:grid md:grid-cols-8 w-full md:w-4/5">
          <div className="col-span-6">
            <div>
              <h2
                className="text-center text-4xl border-b-2 border-themeText ml-10 mr-10 pb-2 sticky top-0 bg-themePrimary"
                id="baking"
              >
                Baking
              </h2>
              <div className="flex flex-wrap justify-between p-10 pb-0">
                <RecipeCard
                  imgSrc="/recipe-book/Babka.jpg"
                  imgAlt="Babka"
                  header="Babka"
                  link="/recipe-book/babka"
                />
                <RecipeCard
                  imgSrc="/recipe-book/ChocMouseCake.jpg"
                  imgAlt="Chocolate Mousse Cake"
                  header="Chocolate Mousse Cake"
                  link="/recipe-book/chocolate-mousse-cake"
                />
                <RecipeCard
                  imgSrc="/recipe-book/ChocScrolls.jpg"
                  imgAlt="chocolate scrolls"
                  header="Chocolate Scrolls"
                  link="/recipe-book/chocolate-scrolls"
                />
              </div>
              <h2
                className="text-center text-4xl border-b-2 border-themeText ml-10 mr-10 pb-2 sticky top-0 bg-themePrimary"
                id="breakfasts"
              >
                Breakfast
              </h2>
              <div className="flex flex-wrap justify-between p-10 pb-0">
                <RecipeCard
                  imgSrc="/recipe-book/EggsBen.jpg"
                  imgAlt="Eggs Benedict"
                  header="Eggs Benedict"
                  link="/recipe-book/eggs-benedict"
                />
              </div>
              <h2
                className="text-center text-4xl border-b-2 border-themeText ml-10 mr-10 pb-2 sticky top-0 bg-themePrimary"
                id="meals"
              >
                Meals
              </h2>
              <div className="flex flex-wrap justify-between p-10 pb-0">
                <RecipeCard
                  imgSrc="/recipe-book/template.jpg"
                  imgAlt="Baked Orzo Puttanesca"
                  header="Baked Orzo Puttanesca"
                  link="/recipe-book/baked-orzo-puttanesca"
                />
              </div>
              <h2
                className="text-center text-4xl border-b-2 border-themeText ml-10 mr-10 pb-2 sticky top-0 bg-themePrimary"
                id="desserts"
              >
                Desserts
              </h2>
              <div className="flex flex-wrap justify-between p-10 pb-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
