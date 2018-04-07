# truffle_tutorial
A tutorial for the truffle smart contract framework

Commands you will need to run this tutorial

```bash
#First install the node version manager nvm
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
#Now open a new terminal
nvm install --lts
nvm use --lts
#The following commands may need "sudo" in front
npm install -g truffle
npm install -g ganache-cli
```