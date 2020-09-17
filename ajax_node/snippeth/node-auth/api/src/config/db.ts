import { ConnectionOptions } from 'mongoose'

// const {
//   MONGO_USERNAME = 'admin',
//   MONGO_PASSWORD = 'secret',
//   MONGO_HOST = 'localhost',
//   MONGO_PORT = 27017,
//   MONGO_DATABASE = 'auth'
// } = process.env

export const MONGO_URI = `mongodb+srv://iamr0man:danit0@cluster0-51kl1.mongodb.net/polica?retryWrites=true&w=majority`

export const MONGO_OPTIONS: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
