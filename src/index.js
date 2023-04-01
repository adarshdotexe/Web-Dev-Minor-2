import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('Adarsh'),
  };
  next();
});

// * Routes * //

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

// * Start * //

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);

    createUsersWithMessages();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

const createUsersWithMessages = async () => {
  const user1 = new models.User({
    username: 'Adarsh',
  });

  const user2 = new models.User({
    username: 'Varshney',
  });

  const message1 = new models.Message({
    text: 'This is my web dev assignment for minor 2',
    user: user1.id,
  });

  const message2 = new models.Message({
    text: 'I sure hope it works!',
    user: user2.id,
  });

  const message3 = new models.Message({
    text: 'This is to test the message model',
    user: user2.id,
  });

  await message1.save();
  await message2.save();
  await message3.save();

  await user1.save();
  await user2.save();
};
