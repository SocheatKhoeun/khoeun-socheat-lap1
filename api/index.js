const app = require('../app');

// Vercel serverless function entrypoint
// For Vercel, export a function of (req, res). We simply forward the request to the
// existing Express app instance exported from `app.js` so all routes keep working.
module.exports = (req, res) => {
  // Express app is a function that accepts (req, res)
  return app(req, res);
};
