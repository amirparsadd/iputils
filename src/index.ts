import { Hono } from 'hono'
import { cors } from 'hono/cors'

export const app = new Hono()

// Used to detect cold starts
let requests = 0

app.use(async (_, next) => {
  requests++
  next()
})

app.use(cors({
  origin: (origin) => origin,
  allowMethods: ["GET", "POST", "OPTIONS"]
}))

app.get("/", (c) => {
  return c.json({
    ip: c.req.header()["ar-real-ip"],
    countrycode: c.req.header()["x-country-code"],
    _ddata: {
      rq: requests
    }
  })
})

// Make it compatible with R1Cloud Edge
export default {
  async fetch(request: Request) {
    return app.fetch(request)
  }
}
