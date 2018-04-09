#!/bin/bash
apt install -y wget
apt install -y net-tools
apt install -y tmux
apt install -y screen
apt install -y vim
apt install -y curl
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm install --lts
nvm use --lts
npm install -g truffle
npm install -g ganache-cli

