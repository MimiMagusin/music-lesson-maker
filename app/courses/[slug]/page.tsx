import { allCourses } from "../../api/courses/allCourses";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = (await params).slug;
  const course = allCourses.filter((course) => slug === course.id)[0];

  console.log(course);
  return <div>{course.title} </div>;
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
