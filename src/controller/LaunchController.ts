import { getManager } from "typeorm";
import { Launch } from "../entity/Launch";

export class LaunchController {
  async salvar(launch: Launch) {
    const launchSaved = await getManager().save(launch);
    return launchSaved;
  }
  async returnAll() {
    const launchs = await getManager().find(Launch);
    return launchs;
  }
}
