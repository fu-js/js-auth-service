import { Hono } from "hono"
import { logger } from "hono/logger"
import { log } from "./config/logger"
import auth from "./controller/auth/route"
import { cors } from "hono/cors"

const app = new Hono()

app.use(logger(log))

app.use(
    "/api/v1/",
    cors({
        origin: [
            "http://localhost:3000",
            "http://localhost:3001",
            "https://*.jsclub.dev",
        ],
        allowMethods: ["GET", "POST", "PUT", "DELETE"],
    })
)

app.route("/", auth)

export default app
