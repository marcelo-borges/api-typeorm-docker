import { createConnection } from "typeorm";

export const conectarServerDB = async () => {
  const connectionDB = await createConnection();
  console.log(`App conectado ao DB ${connectionDB.options.database}`);

  process.on("SIGINT", () => {
    connectionDB.close().then(() => console.log("Conexão com o DB Fechada"));
  });
};
