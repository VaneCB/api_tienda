// servidor web para la API de la tienda online

//importar las despendencias
import express from "express";
import morgan from "morgan";
import indexRouter from "./routes/index.js";
import productsRouter from "./routes/products.js";
import cors from "cors";
//const express = require("express");

//crear una instancia express
const app = express();

app.use(morgan("dev"));
app.use(cors());
//definir las rutas aparte
app.use("/", indexRouter);
app.use("/products", productsRouter);

//arrancar el servidor por el puerto 3000
app.listen(3000);
