import express , {Express, Request, Response} from "express";
import dotenv from "dotenv";
import { DataSource } from 'typeorm'


//instanciate express app

const app: Express = express();
dotenv.config();

//Create a database connection

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    synchronize: true,
})

//Define server Portal
const port = process.env.PORT;

//create a default route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello Chizaa');
});

//Initialize app once mysql is available
AppDataSource.initialize().then(() => {
  //start listening on port 3000
  app.listen(port);
  console.log("Data source initialised")
}).catch((err) => {
    console.error('Error during data source initialization',err)
})

