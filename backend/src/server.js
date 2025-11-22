import app from './app.js';
import { config as configDotenv } from 'dotenv';

configDotenv();

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Diagram Service alocado em http://localhost:${PORT}`)
});