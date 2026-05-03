import { Hono } from 'hono';
const app = new Hono();

app.get('/info', (c) => {
  return c.json({ message: 'Welcome Banner backend is alive!' });
});

export default app;
