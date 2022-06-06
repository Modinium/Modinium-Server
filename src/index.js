import express from "express";
import { graphqlHTTP } from "express-graphql";
import gql from "graphql";
const { buildSchema } = gql;

//Images data

const imagesData = [
    {
        id: 1,
        title: "Stacked Brwonies",
        owner: "Ella Olson",
        category: "Desserts",
        url: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg",
    },
    {
        id: 2,
        title: "Shallow focus photography of Cafe Latte",
        owner: "Kevin Menajang",
        category: "Coffee",
        url: "https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg",
    },
    {
        id: 3,
        title: "Sliced Cake on White Saucer",
        owner: "Quang Nguyen Vinh",
        category: "Desserts",
        url: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg",
    },
    {
        id: 4,
        title: "Beverage breakfast brewed coffee caffeine",
        owner: "Burst",
        category: "Coffee",
        url: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
    },
    {
        id: 5,
        title: "Pancake with Sliced Strawberry",
        owner: "Ash",
        category: "Desserts",
        url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    },
];

// GraphQL Schema
const schema = buildSchema(`
      type Query {
        image(id: Int!): Image
        images(category: String): [Image]
      }
      type Image {
        id: Int
        title: String
        category: String
        owner: String
        url: String
      }
`);

// Get single Image using id

function getImage(args) {
    for (const image of imagesData) {
        if (image.id === args.id) {
            return image;
        }
    }
}

//Get images using category

function getImages(args) {
    if (args.category) {
        return imagesData.filter(
            (image) => image.category.toLowerCase() === args.category.toLowerCase()
        );
    } else {
        return imagesData;
    }
}

// Resolver
const root = {
    image: getImage,
    images: getImages,
};

//Create an express server and GraphQL endpoint
const app = express();
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

//Listening to our server
app.listen(5000, () => {
    console.log("GraphQL server with Express running on http://localhost:5000/graphql");
});