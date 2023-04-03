import getAllCategories from "@/services/getAllCategories";

export default async function page() {
  const data = await getAllCategories();

  return (
    <div>
      {data.map((category) => (
        <li key={category.id}>{category.title}</li>
      ))}
    </div>
  );
}
