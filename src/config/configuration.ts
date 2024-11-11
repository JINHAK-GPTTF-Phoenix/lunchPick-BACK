export default () => ({
  port: parseInt(process.env.PORT, 10) || 8080,
  frontend: {
    url: process.env.FRONTEND_URL || 'http://localhost:3000',
  },
  cors: {
    allowedHeaders: ['Content-Type', 'Authorization'],
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  },
  database: {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: process.env.NODE_ENV !== 'production',
    charset: 'utf8mb4',
  },
});
