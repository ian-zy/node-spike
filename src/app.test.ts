import request from 'supertest'
import app from './app'

const agent = request.agent(app.callback());

test("app", () => agent.get("/").expect(200, "Hello World"));
