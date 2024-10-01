import { fastify } from "fastify";
import { insertCoffee } from "../routes/postCoffee";
import { getCoffee } from "../routes/getCoffee";
import { insertCartItem } from "../routes/insertCartItem";
import { insertUser } from "../routes/postUser";
import cors from "@fastify/cors";
import { getCoffees } from "../routes/getManyCoffes";
import { getCartItems } from "../routes/getCartItems";
import { insertCart } from "../routes/createCart";
import { updateCartItemQuantity } from "../routes/updateCartItem";
import { deleteCartItem } from "../routes/deleteCartItem";
import fastifyStatic from "@fastify/static";
import path from "path";
import { getCartId } from "../routes/getCart";
import { updateCoffee } from "../routes/updateCoffee";
import { deleteCoffee } from "../routes/deleteCoffee";
import { clearCart } from "../routes/ClearCart";

const server = fastify();

server.register(cors, {
  origin: "http://localhost:5173",
});

server.register(fastifyStatic, {
  root: path.join(__dirname, "../../uploads"),
  prefix: "/uploads/",
});

server.register(require("@fastify/multipart"), {
  limits: {
    fileSize: 5 * 1024 * 1024, // Set file size limit to 5MB
  },
});

// server.register(multipart); // Register the multipart plugin
server.register(insertCoffee);
server.register(getCoffee);
server.register(insertCartItem);
server.register(insertUser);
server.register(getCoffees);
server.register(getCartItems);
server.register(insertCart);
server.register(updateCartItemQuantity);
server.register(deleteCartItem);
server.register(getCartId);
server.register(updateCoffee);
server.register(deleteCoffee);
server.register(clearCart);

server.listen({ port: 3333 }).then(() => {
  console.log("Server is running!");
});
