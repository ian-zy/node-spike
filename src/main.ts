import http from "http"
import app from "./app"

http.createServer(app.callback()).listen(3000)
