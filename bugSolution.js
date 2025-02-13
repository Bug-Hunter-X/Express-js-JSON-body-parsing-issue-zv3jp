const express = require('express');
const app = express();
app.use(express.json({limit: '50mb'})); //Added for larger json
app.use(express.urlencoded({ extended: true }));
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data here
  console.log(data);
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});