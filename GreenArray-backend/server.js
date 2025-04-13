const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received:', { name, email, message });
  res.json({ message: 'Message received successfully!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
