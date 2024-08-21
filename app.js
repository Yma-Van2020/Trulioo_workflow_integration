const express = require('express');
const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file when the root URL is accessed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Webhook endpoint
app.post('/webhook', (req, res) => {
  try {
    const { type, challenge } = req.body;

    if (type == 'URL_VERIFICATION') {
      // Respond with the challenge value for verification
      res.status(200).json({ challenge });
    } else {
      // Handle other event types
      console.log('Received Webhook event:', req.body);

      // Respond with a success message for other events
      res.status(200).send(challenge);
    }
  } catch (error) {
    console.error('Error processing Webhook event:', error);

    // Respond with a 500 status code in case of error
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
