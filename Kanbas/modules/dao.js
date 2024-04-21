import model from "./model.js";
export const createModule = (course, module) => {
  module.id = "M" + new Date().getTime().toString();
  module.course = course;
  return model.create(module);
};
export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findOne({ id: moduleId });
export const findModulesByCourse = (courseId) =>
  model.find({ course: courseId });
export const updateModule = (moduleId, module) =>
  model.updateOne({ id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => {
  const status = model.findOneAndDelete({ id: moduleId });
  return status;
};
