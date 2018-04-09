# truffle_tutorial
A tutorial for setting up a development environment <br>
and using truffle the smart contract framework

A tutorial for the truffle smart contract framework

<span style="font-size:larger;">First we need to install nodejs and some node packages</span><br><br><br>
<span style="font-size:larger;">Mac instructions</span>
* Open terminal
```bash
#First install the node version manager nvm
brew install nodejs
#The following commands may need "sudo" in front
sudo npm install -g truffle
sudo npm install -g ganache-cli
sudo npm install -g express
```
<br>
<span style="font-size:larger;">Windows instructions</span><br>
[Download and Install nodejs](https://nodejs.org/en/download/)
* Open power shell as administrator
```bash
npm install -g truffle
npm install -g ganache-cli
npm install -g express
```
<br>

<span style="font-size:larger;">Linux instructions</span><br>
* [Use your favorite package manager](https://nodejs.org/en/download/package-manager/)
```bash
#This is Ubuntu for example
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
#Install the npm modules
sudo npm install -g truffle
sudo npm install -g ganache-cli
sudo npm install -g express
```

* Steps to deploy smart contracts
	1. Launch Ganache from Cloud9 terminal
		1. ```bash
		   npm install -g ganache-cli
           npm install -g truffle
		   ganache-cli -p 8545
	       ```
    2. <b>Open new terminal</b> and git clone this project
    	1. ```git clone https://github.com/mullinat/truffle_tutorial.git```
    3. cd into the truffleWorkspace directory
    	1. ```cd truffle_tutorial```
    	2. ```cd truffleWorkspace```
    4. Now compile the example smart contracts
        1. ```truffle compile```
    5. Now deploy  the example smart contracts
    	1. ```truffle migrate --reset``` 




				
