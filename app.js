const express = require('express');
const app = express();
const giftRoutes = require('./giftRoutes');
const searchRoutes = require('./searchRoutes');

app.use(express.json());
app.use(giftRoutes);
app.use(searchRoutes);

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
