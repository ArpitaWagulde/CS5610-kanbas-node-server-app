import model from "./model.js";
export const createCourse = (course) => {
  course.id = "C" + new Date().getTime().toString();
  return model.create(course);
};
export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findOne({ id: courseId });
export const findCourseByNumber = (courseNumber) =>
  model.findOne({ number: courseNumber });
export const updateCourse = (courseId, course) =>
  model.updateOne({ id: courseId }, { $set: course });
export const deleteCourse = (courseId) => {
  const status = model.findOneAndDelete({ id: courseId });
  return status;
};
