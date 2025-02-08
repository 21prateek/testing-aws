import express from "express";
import { client } from "@repo/prisma/client";

const app = express();
const port = 3002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await client.user.create({
    data: {
      username,
      password,
    },
  });

  res.json({
    message: "Create a user",
    id: user.id,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
