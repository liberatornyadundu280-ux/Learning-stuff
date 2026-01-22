const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const PORT = 4000;

const app = express();

app.use(cookieParser());

app.use(
  session({
    secret: "amar",
    saveUninitialized: true,
    resave: true,
  }),
);

app.get("/", (req, res) => {
  if (req.session.view) {
    req.session.view++;
    res.send("You visited this page for " + req.session.view + " times");
  } else {
    req.session.view = 1;
    res.send("You have visited this page" + " for first time ! Welcome....");
  }
});

app.listen(PORT, () => console.log(`Server running at \${PORT}`));
