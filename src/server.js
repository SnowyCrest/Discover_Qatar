import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import cors from 'cors';

// Initialize Express app
const app = express();
const port = 5000;

app.use(cors());

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware to parse JSON body
app.use(express.json({ limit: '10mb' })); // Increase JSON body limit for image data

// Serve static files from the 'public' directory located at the root of your project
app.use(express.static(path.join(__dirname, '../public')));

// Endpoint to get feedback from feedback.json
app.get('/api/feedback', (req, res) => {
  const feedbackFilePath = path.join(__dirname, '../public', 'feedback.json');
  fs.readFile(feedbackFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.error("Error reading feedback file:", err);
      return res.status(500).json({ message: 'Error reading feedback data' });
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint to submit new feedback to feedback.json
app.post('/api/feedback', (req, res) => {
  const newFeedback = req.body;

  // Validate required fields
  if (!newFeedback.score || !newFeedback.title || !newFeedback.description) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const feedbackFilePath = path.join(__dirname, '../public', 'feedback.json');
  fs.readFile(feedbackFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.error("Error reading feedback file:", err);
      return res.status(500).json({ message: 'Error reading feedback data' });
    }

    const feedbackList = JSON.parse(data);
    feedbackList.push(newFeedback);

    fs.writeFile(feedbackFilePath, JSON.stringify(feedbackList, null, 2), 'utf-8', (err) => {
      if (err) {
        console.error("Error writing feedback file:", err);
        return res.status(500).json({ message: 'Error writing feedback data' });
      }
      res.status(201).json({ message: 'Feedback submitted successfully' });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});