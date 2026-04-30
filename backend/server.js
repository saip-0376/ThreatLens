const express = require("express");
const fs = require("fs");
const axios = require("axios");

const app = express();
app.use(express.json());

// Save logs
function logEvent(event) {
  const log = `${new Date().toISOString()} - ${event}\n`;
  fs.appendFileSync("/logs/app.log", log);
}

// Call ML service
async function checkAnomaly(event) {
  try {
    const res = await axios.post("http://ml-service:5001/check", {
      event
    });
    return res.data.result;
  } catch {
    return "normal";
  }
}

// Fake AI explanation
function explain(event) {
  return "This activity may indicate suspicious behavior such as repeated failures or unauthorized access.";
}

// API endpoint
app.post("/event", async (req, res) => {
  const event = req.body.event;

  logEvent(event);

  const result = await checkAnomaly(event);

  let explanation = "";
  if (result === "anomaly") {
    explanation = explain(event);
  }

  res.json({ result, explanation });
});

// Get logs
app.get("/logs", (req, res) => {
  const logs = fs.readFileSync("/logs/app.log", "utf-8");
  res.send(logs);
});

app.listen(3000, () => console.log("Backend running on port 3000"));
