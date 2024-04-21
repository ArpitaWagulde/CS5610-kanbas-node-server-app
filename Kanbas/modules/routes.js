import * as dao from "./dao.js";

function ModuleRoutes(app) {
  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  });
  app.delete("/api/modules/:mid", async (req, res) => {
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  });
  app.post("/api/courses/:cid/modules", async (req, res) => {
    const module = await dao.findModuleById(req.body.id);
    if (module) {
      res.status(400).json({ message: "Module already exists" });
    } else {
      const newModule = await dao.createModule(req.params.cid, req.body);
      res.json(newModule);
    }
  });
  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModulesByCourse(cid);
    res.send(modules);
  });
}
export default ModuleRoutes;
