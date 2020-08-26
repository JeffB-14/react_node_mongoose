const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");

const dbConn = require("./connection");
const testDBRouter = require("../routes/testDB");
const testAPIRouter = require("../routes/testAPI");
const upload = require('../routes/upload');
const loadData = require('../routes/loadData');

const app = express();
const PORT = 3001;


//view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT,()=>{
    console.log(`Sample App is listening on PORT: ${PORT}`);

    dbConn().then(()=>{ console.log("Connected to Mongo!") });

});

//app.use("/testDB", testDBRouter);
app.use("/testAPI", testAPIRouter);

app.get("/",(req,res)=>{
    data = {
        "name":"Sample App"
    }
    res.json(data);
});

app.post("/insert",async (req,res)=>{
    await user.addOne("john",30,"cricket").then(result=>{
        console.log(result);
        res.send(result);
    }).catch(e=>{ console.log(e) });
});

app.use('/upload', upload);
app.use('/loadData', loadData);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;