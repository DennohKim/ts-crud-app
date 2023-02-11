import express , {Express, Request, Response} from "express";
import dotenv from "dotenv";


//instanciate express app

const app: Express = express();
dotenv.config();

//Define server Portal
const port = process.env.PORT;

//create a default route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello Chizaa');
});

//start listening on port 3000
app.listen(port);
