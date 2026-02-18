// import "dotenv/config";
// import { eq } from 'drizzle-orm';
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
//     await drizzleDb
//       .update(postsTable)
//       .set({
//         title: 'Rotina matinal de pessoas altamente eficazes',
//         published: true,
//       })
//       .where(eq(postsTable.slug, 'rotina-matinal-de-pessoas-altamente-eficazes'));
//   } catch (error) {
//     console.error("Erro ao buscar posts:", error);
//   } finally {
//     process.exit(0);
//   }
// }

// main();
