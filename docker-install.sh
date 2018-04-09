#!/bin/bash
apt install nano
apt install -y wget
apt install -y net-tools
apt install -y tmux
apt install -y screen
apt install -y vim
apt install -y curl
apt install nohup
apt install sl
apt install cmatrix
apt install python
apt install htop
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm install --lts
nvm use --lts
npm install -g truffle
npm install -g ganache-cli
git clone https://github.com/c9/core.git c9sdk
cd c9sdk
./scripts/install-sdk.sh
node ./server.js -p 3333 -a : -w ~

