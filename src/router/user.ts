import { Router } from "express";
import { UserController } from "../controller/UserController";
import { User } from "../entity/User";

export const routerUser = Router();
const userCtrl = new UserController();

routerUser.post("/", async (request, response) => {
  const { name, email, password } = request.body;
  const user = new User(name, email, password);
  const userSaved = await userCtrl.salvar(user);
  response.json(userSaved);
});

routerUser.get("/", async (request, response) => {
  const users = await userCtrl.returnAll();
  response.json(users);
});

routerUser.get("/launchs/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  const launchs = await userCtrl.findLaunchByUser(id);
  response.json(launchs);
});
