sudo NODE_ENV=staging forever start -a -o logs/out.log -e logs/err.log --minUptime 5000 --spinSleepTime 5000 --uid "staging-nest-egg-guru" server.js