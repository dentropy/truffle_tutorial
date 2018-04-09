#!/bin/bash
echo "Installing nvm, node version manager"
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
echo "Installing --lts and using --lts for nvm"
nvm install --lts
nvm use --lts
npm install -g truffle
npm install -g ganache-cli
echo "Installing and running cloud 9"
git clone https://github.com/c9/core.git c9sdk
cd c9sdk
echo "Installing cloud9 dependacies"
./scripts/install-sdk.sh
node ./server.js -p 3333 -a : -w ~