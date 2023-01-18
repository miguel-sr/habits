import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./lib/routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);

const port = 8089;
app.listen({ port }).then(() => {
  console.log(`==> Server running on port ${port}!`);
});
