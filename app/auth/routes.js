import { Router } from "express";
import { login, signup } from "./controller.js";
export const routes = new Router();

routes.post("/sign-up", signup);
routes.post("/login", login);
