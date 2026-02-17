import { revalidateExampleAction } from "@/actions/revalidate-example";
import { formatHour } from "@/utils/format-datetime";

// export const dynamic = "force-static";
// export const dynamicParams = true;
// export const revalidate = 10;

// export async function generateStaticParams() {
//   return [{ id: "1" }, { id: "2" }];
// }

export default async function ExemploDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = formatHour(Date.now());

  const response = await fetch("https://randomuser.me/api/?results=1", {
    next: {
      tags: ["randomuser"],
      revalidate: 10,
    },
  });
  const json = await response.json();
  const name = json.results[0].name.first;

  return (
    <main className="min-h-150 text-4xl font-bold">
      <div>
        {/* Hora: {hour} (ID: {id}) */}
        Name: {name} | Hora: {hour} | (ID: {id})
      </div>

      <form className="py-16" action={revalidateExampleAction}>
        <input type="hidden" name="path" defaultValue={`/exemplo/${id}`} />

        <button
          className="bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition cursor-pointer"
          type="submit"
        >
          REVALIDATE
        </button>
      </form>
    </main>
  );
}
