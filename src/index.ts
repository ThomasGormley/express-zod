import { config } from "./config";
import { app } from "./server";

app.listen(config.port, () => {
  console.log(`Listening: http://localhost:${config.port}`);
});
