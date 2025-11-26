-- Creates demo user and holdings
INSERT INTO profiles (id, email, display_name, base_currency) VALUES ('demo-user','demo@orbitfolio.test','Demo User','USD');
INSERT INTO holdings (profile_id, symbol, market, type, quantity, cost_basis, currency, acquired_at)
VALUES ('demo-user','AAPL','US','stock',10,250,'USD','2023-01-01'),
       ('demo-user','RELIANCE.NS','IN','stock',20,347.17,'INR','2023-02-01');
