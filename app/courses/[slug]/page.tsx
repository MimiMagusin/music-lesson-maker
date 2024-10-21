// import { useRouter } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const data = await fetch(`api/courses/${params.slug}`);
  console.log(data);
  // console.log(data);
  // let posts = await data.json();

  return (
    <ul>
      lalalala
      {/* {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))} */}
    </ul>
  );
}
