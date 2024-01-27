import  express  from "express";
import  bodyParser  from "body-parser";
import  viewEngine  from "./config/viewEngine";
import  initWebRoutes  from "./route/web";
import  initApiRouter  from "./route/api";
import  connectDB from "./config/connectDB";
import  cors from "cors";
import cookieParser from 'cookie-parser';
require('dotenv').config();

let app = express();
app.use(cookieParser())
// app.use(
//   cors({ 
//     origin: 'http://localhost:3000',
//   })
// );

app.get('/api/login', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.send({ "msg": "This has CORS enabled 🎈" })
    res.send('Hello World!');
  });
// config app
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
viewEngine(app);
initWebRoutes(app);
initApiRouter(app); 


connectDB();

let port = process.env.PORT || 6969;
// if port is undefided then port is 6969.

app.listen(port, () => {
    console.log("ok nha : http://localhost:"+port);
   
})
