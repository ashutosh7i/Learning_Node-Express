//pm2- pm2 is node  process manager with built in load balancer and monitoring tools.

// installation-
// npm install pm2 -g

// commands-
// pm2-dev start app.js
// pm2 start app.js
// pm2 start app.js --name "my app"
// pm2 start app.js --wait-ready --listen timeout 5000
// pm2 list
// pm2 show server
// pm2 monit
// pm2 restart app.js
// pm2 start app.js --max-memory-restart 1G
// pm2 start app.js --cron-restart = "0 12 * * *"
// pm2 start app.js --watch