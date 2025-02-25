import 'reflect-metadata'
import 'dotenv/config'

import loader from './loaders'

const startServer = async () => {
  await loader()
}
startServer()
  .then()
  .catch((e: Error) => {
    console.log('server start failed')
    console.log(e)
  })

process.on('SIGINT', () => {
  console.log('Exit server Expressjs')
})
