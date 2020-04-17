import bodyParser from "body-parser";
import compression from "compression";
import express from "express";

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  const frontendBuildDir = "../admin-web/build";
  app.use(express.static(frontendBuildDir));
  app.get("*", (req, res) =>
    res.sendFile("index.html", { root: frontendBuildDir })
  );
  console.log("Serving frontend static content");
}

app.listen(process.env.PORT, () =>
  console.log(`Backend is now running on http://localhost:${process.env.PORT}`)
);
