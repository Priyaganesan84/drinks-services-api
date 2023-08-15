import express from 'express';
export const app = express();
export const coffeeapp = express();
app.get('/', (req, res) => res.send('Welcome to the Drinks API!'));
coffeeapp.get('/', (req, res) => res.send('I like coffee!'));