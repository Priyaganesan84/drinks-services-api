import express from 'express';
import { router } from './routes/routes';
export const app = express();
export const coffeeapp = express();
app.use(express.json());
coffeeapp.use(express.json());

app.get('/', (req, res) => res.send('Welcome to the Drinks API!'));

coffeeapp.get('/', (req, res) => res.send('I like coffee!'));


app.get('/coffee', (req, res) => res.json({
    drinkType: 'Coffee',
    name: 'Latte',
    }));

    app.get('/coffee', (req, res) =>
    res.json({
    drinkType: 'Coffee',
    name: 'Latte',
    })
    );