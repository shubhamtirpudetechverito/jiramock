const express = require('express');
const app = express();
app.get('/rest/api/2/issue/:key', (req, res) => {
  res.json({
    key: req.params.key,
    fields: {
      summary: 'Add a health check endpoint',
      description: 'Create a GET /health route that returns { status: "ok" }',
      status: { name: 'To Do' }
    }
  });
});
app.listen(4000, () => console.log('Jira mock on http://localhost:4000'));