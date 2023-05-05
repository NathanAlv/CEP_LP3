import dotenv from 'dotenv';
import { connection } from 'mongoose';
import { app } from './app';

dotenv.config();

const APP_PORT = process.env.APP_PORT || 3001;
const server = app.listen(APP_PORT, () => console.log(`App running on port ${APP_PORT}`));

type OtherNodeJSSignals = 'beforeExit' | 'disconnect' | 'exit' | 'rejectionHandled' | 'uncaughtException' | 'uncaughtExceptionMonitor' | 'unhandledRejection' | 'warning' | 'message' | 'multipleResolves' | 'worker';

const events: (NodeJS.Signals | OtherNodeJSSignals)[] = [
  'exit',
  'SIGINT',
  'SIGUSR1',
  'SIGUSR2',
  'SIGTERM'
];

events.forEach((e) => {
  process.on((e), () => {
    server.close();
    connection.close();
  });
});