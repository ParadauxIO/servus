import { config as dotenvConfig } from "dotenv";
import express, { json, urlencoded } from "express";
import cors from "cors";
import createError from "http-errors"

import indexRouter from "./routes/indexRouter.js";
dotenvConfig({ path: `.env.${process.env.DEPLOYMENT_ENVIRONMENT}` });

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/", indexRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = process.env.DEPLOYMENT_ENVIRONMENT === "development" ? err : {};
  
    if (process.env.DEPLOYMENT_ENVIRONMENT === "development") {
        console.error(err);
    }

    // render the error page
    res.status(err.status || 500);
    res.json({
      status: err.status || 500,
      error: err.status || 500,
      message: "An unexpected error occured.",

    });
  });
  

app.listen(process.env["PORT"], () => {
    console.clear();
    console.log(`[index.js] [INFO] listening on port ${process.env["PORT"]}`);
});