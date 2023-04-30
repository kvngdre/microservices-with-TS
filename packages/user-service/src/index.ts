import express, { type Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.dev' })

const app = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'user service is running' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
