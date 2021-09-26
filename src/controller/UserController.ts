import { getManager } from "typeorm";
import { User } from "../entity/User";

export class UserController {
  async salvar(user: User) {
    const userSaved = await getManager().save(user);
    return userSaved;
  }
  async returnAll() {
    const users = await getManager().find(User);
    return users;
  }

  async findById(id: number) {
    const user = await getManager().findOne(User, id);
    return user;
  }

  async findLaunchByUser(id: number) {
    const user = await getManager().findOne(User, id, {
      relations: ["launchs"],
    });
    return user.launchs;
  }
}
