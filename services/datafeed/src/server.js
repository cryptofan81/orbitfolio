const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.get('/api/bars', async (req, res) => {
  const { symbol, from, to } = req.query;
  // Simple Yahoo Finance fallback: fetch CSV or JSON from a public endpoint (this is a placeholder)
  // In production we normalize and cache results in Supabase.
  res.json({ s: 'ok', bars: [] });
});
const port = process.env.PORT || 3001;
app.listen(port, ()=>console.log('datafeed running on', port));
