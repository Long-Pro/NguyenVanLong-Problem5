const env = {
  app: {
    port: +process.env.APP_PORT!,
  },
  db: {
    host: process.env.MYSQL_HOST??'localhost',
    port: +process.env.MYSQL_PORT!,
    user: process.env.MYSQL_USER!,
    password: process.env.MYSQL_PASSWORD!,
    name: process.env.MYSQL_DATABASE!,
  },
}
export default env
