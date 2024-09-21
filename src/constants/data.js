import images from "./images";

const wines = [
  {
    title: "Vanilla Shake",
    price: "$6.50",
    tags: "Vanilla ice cream, whole milk",
  },
  {
    title: "Chocolate Shake",
    price: "$6.95",
    tags: "Chocolate ice cream, chocolate syrup, whole milk, ",
  },
  {
    title: "Strawberry Shake",
    price: "$5.95",
    tags: "Fresh strawberries, strawberry ice cream, whole milk",
  },
  {
    title: "Cookies Shake",
    price: "$7.25",
    tags: "Vanilla ice cream, crushed Oreo cookies, whole milk",
  },
  {
    title: "Peanut Shake",
    price: "$7.00",
    tags: "Vanilla ice cream, peanut butter",
  },
];

const cocktails = [
  {
    title: "Classic Iced Coffee",
    price: "$4.50",
    tags: "Cold brew coffee, ice, milk",
  },
  {
    title: "Caramel Macchiato",
    price: "$5.75",
    tags: "Espresso, steamed milk, caramel syrup, vanilla syrup, caramel drizzle",
  },
  {
    title: "Espresso Con Panna",
    price: "$8.00",
    tags: "Double shot of espresso, whipped cream",
  },
  {
    title: "Chai Spiced Latte",
    price: "$6.00",
    tags: "Black tea, steamed milk, cinnamon, cardamom, cloves, honey",
  },
  {
    title: "Hazelnut Frappe",
    price: "$5.00",
    tags: "Espresso, hazelnut syrup, ice, milk",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Best Fast-Casual Restaurant",
    subtitle:
      "Recognized for bringing gourmet flavors to the fast-casual scene.",
  },
  {
    imgUrl: images.award01,
    title: "Freshness You Can Taste",
    subtitle: "Using only the finest local ingredients, from farm to fork.",
  },
  {
    imgUrl: images.award05,
    title: "Top Chef-Inspired Dishes",
    subtitle:
      "Crafted by some of the most innovative minds in the culinary world.",
  },
  {
    imgUrl: images.award03,
    title: "Speed Meets Flavor",
    subtitle: "Where convenience never compromises taste.",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { wines, cocktails, awards };
