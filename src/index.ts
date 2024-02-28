import express from "express";
import cors from "cors";
import dovenv from "dotenv";
import router from "./routes";

dovenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
