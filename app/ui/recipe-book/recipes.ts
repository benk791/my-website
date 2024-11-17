const chocolateScrolls = {
  title: "Chocolate Scrolls",
  imgSrc: "/recipe-book/ChocScrolls.jpg",
  imgAlt: "Chocolate Scrolls",
  ingredients: [
    {
      items: [
        "200ml lukewarm milk",
        "1½ tsp dried yeast",
        "400g plain flour, plus extra for dusting",
        "1 egg",
        "120g butter, plus extra for greasing",
        "100g brown sugar mixed with ½ tsp ground cinammon",
        "70g dark choc (~70%), coarsley chopped",
      ],
    },
    { title: "Sticky Glaze", items: ["90ml double cream", "2½ tsp brown sugar", "15g butter"] },
  ],
  instructions: [
    "Stir milk and yeast in a bowl until yeast dissolves. Combine flour, egg, and a pinch of salt in an electric mixer fitted with a dough hook, add yeast mixture and knead until a soft elastic dough forms (2-3 mins). Transfer to a lightly buttered bowl, rub the top lightly with butter, cover, and stand to prove till doubled in size (~1 hour)",
    "For sticky glaze, bring ingredients to a boil in a small saucepan, stirring occasionally, until fully combined",
    "Line a 22cm-diameter springform cake tin with baking paper. Knock back dough and roll out onto a lightly floured surface, to a 35cm square, dusting with flour to prevent sticking if needed. spread butter evenly over the dough, and scatter with the brown sugar mixture, then chocolate, and roll away from you into a cylinder. Trim ends and cut into 5cm thick peices. Space scrolls evenly, cut side up, in the prepared tin. Cover and leave to prove until the sides are touching (~1 hour)",
    "Preheat oven 190°C and bake for 25-30 mins (or until golden brown). Stand for 5 mins then carefully transfer to a wire rack. Brush with glaze, and leave to stand for 15 mins, then serve warm",
  ],
};

const babka = {
  title: "Babka",
  imgSrc: "/recipe-book/Babka.jpg",
  imgAlt: "Babka",
  ingredients: [
    {
      title: "Dough (for 2)",
      items: [
        "7g dried yeast",
        "50g caster sugar",
        "120ml warm tap water",
        "500g strong white bread flour",
        "2 tsp fine sea salt",
        "3 large eggs",
        "125g butter",
      ],
    },
    {
      title: "Filling",
      items: [
        "80g hazelnuts",
        "80g butter",
        "100g brown sugar",
        "100g dark chocolate (70%)",
        "30g cocoa powder",
        "pinch of salt",
      ],
    },
    {
      title: "Syrupy Soak",
      items: ["80g caster sugar", "100ml water", "2 tbsp honey", "pinch of salt", "1tbsp amaretto"],
    },
  ],
  instructions: [
    "Cut the butter into 1cm pieces",
    "In the bowl of a stand mixer fitted with a dough hook, dissolve the yeast and sugar in the warm tap water. Add the flour and salt, and mix to form a dough. Add the eggs one by one and beat for about 10 mins. Add pieces of butter one by one, until fully incorporated into the dough (~10 more mins). Cover the bowl and leave to rise for about 2 hours. Punch the dough down to knock out some air, recover, and chill overnight",
    "butter and line a large loaf tin (~13x25cm)",
    "to make the filling toast the hazelnuts for 5 minutes, until golden. Chop finely and set aside",
    "Measure the butter, brown sugar, chocolate and cocoa powder into a saucepan. Cook over a medium heat, whisking continuously until melted",
    "on a lightly floured surface roll out 1 portion of dough (half of made quantity) into a 30cm square, spread with the chocolate mixture, and sprinkle with hazelnuts and salt. Roll the dough into a log, then using a sharp knife, divide lengthways revealing the chocolate centre",
    "carefully twist the two halves of the log around each other in a rope like fashion, you might lose some of the filling, but don't worry. Carefully lift the rope of dough into the loaf tin, tucking the ends underneath",
    "cover and leave to rise until doubled in size (~2 hours). Heat your oven to 180°C.",
    "Meanwhile make the syrup. Boil toghether all the ingredients, and set aside",
    "bake the babka for 45-50 minutes or until a skewer inserted comes out clean. Remove from the oven and our the syrup over the piping hot loaf, the babka should be able to absorb almost all of the syrup.",
    "cool completely before removing from the tin and serving",
  ],
};

const chocMousseCake = {
  title: "Chocolate Mousse Cake",
  imgSrc: "/recipe-book/ChocMouseCake",
  imgAlt: "Chocolate Mousse Cake",
  ingredients: [ {items: [""]}],
  instructions: [""],
};

const eggsBenedict = {
  title: "Eggs Benedict",
  imgSrc: "/recipe-book/EggsBen.jpg",
  imgAlt: "eggs Benedict",
  ingredients: ["eggs", "butter", "vinegar"],
  instructions: [{items: ["mix", "blend", "pour"]}],
};

export const recipes = {
  "chocolate-scrolls": chocolateScrolls,
  "eggs-benedict": eggsBenedict,
  babka: babka,
  "chocolate-mousse-cake": chocMousseCake,
};
