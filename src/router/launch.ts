import { Router } from "express";
import { LaunchController } from "../controller/LaunchController";
import { UserController } from "../controller/UserController";
import { Launch } from "../entity/Launch";
import { User } from "../entity/User";

export const routerLaunch = Router();
const launchCtrl = new LaunchController();
const userCtrl = new UserController();

routerLaunch.post("/", async (request, response) => {
  const { idUser, valor, description, date } = request.body;
  const user = await userCtrl.findById(idUser);

  if (user) {
    const launch = new Launch(valor, description, date, user);
    const launchSaved = await launchCtrl.salvar(launch);
    response.json(launchSaved);
  } else {
    response
      .status(404)
      .json({ message: "Usuário do Lançamento não encontrado" });
  }
});

routerLaunch.get("/", async (request, response) => {
  const launchs = await launchCtrl.returnAll();
  response.json(launchs);
});
