ssh -i ~/.ssh/id_ed25519_practice_deploy ubuntu@3.84.164.188
cd deploy-test/ && git pull
pnpm install 
pnpm run build 
pm2 restart web
pm2 restart http-server
pm2 restart ws-server
