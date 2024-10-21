import type { NextApiRequest, NextApiResponse } from "next";

import { Course } from "./activities/ActivityTypes";
import allCourses from "./courses/allCourses";

type ResponseData = {
  course?: Course;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const course = allCourses.find((course) => (course.id = req.body.courseId));

  res.status(200).json({ course: course });
}
