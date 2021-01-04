import express, { Application } from 'express';
import cors from 'cors';
import { connect, ConnectionOptions } from 'mongoose';
import { config } from 'dotenv';
config();

//=========================================================Global Variables=====================================================
enum BaseOrigin {
  dev = 'http://localhost:3000',
  prod = ''
}
const Origin = process.env.NODE_ENV === 'production' ? BaseOrigin.prod : BaseOrigin.dev;
const MongoURI: any = process.env.mongoURI;
const Server = express();
//==========================================================Middlewares=========================================================
Server.use(
  cors({
    origin: Origin,
    credentials: true
  })
);

//=====================================================MongoDB connection & Configs=============================================
const connectionOptions: ConnectionOptions = {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

connect(MongoURI, connectionOptions, (error) => {
  if (error) {
    return console.error(error);
  }
  console.log('Connection to MongoDB was successful');
});

//====================================================Server connection & Configs===============================================
const PORT = process.env.PORT || 5000;
Server.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
