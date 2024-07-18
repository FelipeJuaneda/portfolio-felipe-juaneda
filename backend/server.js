import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import emailRoutes from "./routes/emailRoutes.js";
import config from "./config/config.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.disable("x-powered-by");

app.use("/api", emailRoutes);

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
