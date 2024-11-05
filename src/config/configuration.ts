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
}); 