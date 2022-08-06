import express from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const port = 3000;
const app = express();

// Application config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes config
app.use(usersRoute);

app.use(statusRoute);

// Server starter
app.listen(port, () => {
    console.log(`Aplicação está m execução na porta: ${port}\ http://localhost:${port}`)
});