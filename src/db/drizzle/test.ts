// import "dotenv/config";
// import { drizzleDb } from "./index";
// import { postsTable } from "./schemas";

// async function main() {
//   try {
//     const posts = await drizzleDb.select().from(postsTable);

//     posts.forEach((post) => {
//       console.log(post.title);
//       console.log(post.slug);
//       console.log(post.author);
//       console.log();
//     });
//   } catch (error) {
//     console.error("Erro ao buscar posts:", error);
//   } finally {
//     process.exit(0);
//   }
// }

// main();
