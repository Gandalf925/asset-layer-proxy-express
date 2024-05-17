import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import { Server } from 'http';
import { AssetLayer } from '@assetlayer/sdk';
import appsRouter from './routes/apps/router';
import assetsRouter from './routes/assets/router';
import collectionsRouter from './routes/collections/router';
import currenciesRouter from './routes/currencies/router';
import equipsRouter from './routes/equips/router';
// import expressionsRouter from './routes/expressions/router';
import listingsRouter from './routes/listings/router';
// import magicRouter from './routes/magic/router';
import shopRouter from './routes/shop/router';
import slotsRouter from './routes/slots/router';
import usersRouter from './routes/users/router';
import { parseBasicError } from './utils/basic-error';

const validErrorStatusCodes = new Set([400,401,404,406,407,409]);
const app = express();
const port = process.env.PORT || 3001;
const apiRoute = '/api';
let server: Server;

export const assetlayer = new AssetLayer({
  appSecret: process.env.ASSETLAYER_APP_SECRET!,
});

function init() {
  server = app.listen(port, () => console.log(`Running on ${port}`));
  server.keepAliveTimeout = 61 * 1000;
  server.headersTimeout = 65 * 1000;
}
function errorHandler(e: unknown, req: Request, res: Response, next: NextFunction) {
  const error = parseBasicError(e);
  const statusCode = error.status || 500;
  const message = error.message || 'Request Failed';
  
  console.error('Error Handler:', error);

  return res.status(error.status).json({ statusCode, success: false, message });
}

app.use((req, res, next) => {
  if (process.env.NODE_ENV !== 'local' && req.header('x-forwarded-proto') !== 'https') {
    return res.redirect(`https://${req.header('host')}${req.url}`);
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, didtoken');

  if (req.method === 'OPTIONS') { return res.sendStatus(200); }

  next();
});
app.use(express.json());
app.use(`${apiRoute}/app`, appsRouter);
app.use(`${apiRoute}/asset`, assetsRouter);
app.use(`${apiRoute}/collection`, collectionsRouter);
app.use(`${apiRoute}/currency`, currenciesRouter);
app.use(`${apiRoute}/equip`, equipsRouter);
// app.use(`${apiRoute}/expression`, expressionsRouter);
// app.use(`${apiRoute}/handcash`, handcashRouter);
app.use(`${apiRoute}/listing`, listingsRouter);
// app.use(`${apiRoute}/magic`, magicRouter);
// app.use(`${apiRoute}/permission`, permissionRouter);
app.use(`${apiRoute}/shop`, shopRouter);
app.use(`${apiRoute}/slot`, slotsRouter);
// app.use(`${apiRoute}/stripe`, stripeRouter);
// app.use(`${apiRoute}/team`, teamRouter);
app.use(`${apiRoute}/user`, usersRouter);

app.get('/test', async (req: any, res: any, next: NextFunction) => {
  try {
    return res.sendFile('test.html', { root: 'src' });
  }
  catch (e) {
    return next(e);
  }
});
app.get('/', async (req: any, res: any, next: NextFunction) => {
  try {
    return res.sendFile('did.html', { root: 'src' });
  }
  catch (e) {
    return next(e);
  }
});

app.use((req: Request, res: Response) => {
  res.status(404).send({ error: 'Route not found' });
});

app.use(errorHandler);

/*
const close = () => (
  server
    ? util.promisify(server.close).call(server)
    : Promise.reject(new Error('Server wasn\'t initialized'))
);
*/

export default { app, init, /*close*/ };
