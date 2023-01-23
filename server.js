require('dotenv').config();
const axios = require('axios')
const cron = require("node-cron");
const express = require("express");
const cors = require("cors");
const task = require("./app/controllers/task.controller.js");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json()); 

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Lofty's application." });
});

require("./app/routes/list.routes")(app);
require("./app/routes/task.routes")(app);

// Log overdue tasks on schedule at 9am every day to mock email service
cron.schedule("0 9 * * *", async () => {
    console.log('You will see this message every second');

    try {
      let resp = await axios.get(process.env.API_ADDRESS)
      const data = resp.data
      let overdueTasks = ""
      data.forEach(obj => {
        overdueTasks += obj.tbl_TaskName + ", "
      })
      overdueTasks = overdueTasks.trimEnd()
      overdueTasks = overdueTasks.substring(0, overdueTasks.length - 1)
      console.log(`The following tasks are now overdue:${overdueTasks}`)
    } catch (error) {
      console.error(error)
    }
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});