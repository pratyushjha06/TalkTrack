const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

// Store active meetings
let activeMeetings = [];

app.post("/join-meeting", (req, res) => {
    const { meetLink, userId } = req.body;
    if (!meetLink.startsWith("https://meet.google.com/")) {
        return res.status(400).json({ error: "Invalid meet link" });
    }
    
    activeMeetings.push({ userId, meetLink, timestamp: new Date() });
    res.json({ message: "Meeting joined successfully!", meetLink });
});

app.get("/active-meetings", (req, res) => {
    res.json(activeMeetings);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
