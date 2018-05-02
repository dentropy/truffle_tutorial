* Requirements
    * Nodejs
    * npm packages
        * npm install -g ganache-cli
        * npm install-g truffle
        * npm install express
    * Basic Terminal knowlege
    * Wifi
    * git
    * Code Editor such as Visual Studio Code or Atom
    * Browser with metamask
* Install nodejs
* Get the tutorial code
    * Open terminal
    * navigate to documents folder
    * Make a projects folder
    * cd into projects folder
    * clone the git repo
    * Open git repo inside code editor
* Inside same terminal
    * cd into truffle_tutorial
    * Check node version for LTS and NPM 
    * Check beyond version 7+
    * Install npm dependencies
    * ganache-cli, truffle, and express
    * Explain what each of these do
* What is truffle
    * Smart contract framework
    * Command Line Interface, CLI
    * Manages different Ethereum Based Networks
        * exe Mainnet, Ropsten, Rinkeby, Ethereum Classic
    * Manages the addresses of the smart contracts
    * Deploys and migrates contracts 
    * Manages the ABI's of the smart contracts
    * Stores everything for you as JSON which can be sent to a front end application, which we will do later
* What is Ganache
    * On etherum running code costs ether and to use a testnet one  must obtain testnet ether, which is free but has a good number of steps
    * For simplicity sake we will be using ganache-cli which runs a test blockchain on your local computer
    * This ganache test blockchain has a JSON RPC(Remote Procedure Call) interface that acts the same as real ethereum
* Launch ganache in seperate terminal
* Connect metamask to ganache instance
* In seperate terminal tab deploy smart contracts to ganache blockchain
* Launch express server
    * Open up the code for the express server
    * Explain what it does in general
    * In seperate terminal tab launch the express server
* Switch to web browser
    * Open localhost:xxxx
    * Open browser javascript console
    * Show them that web3 is injected into the web page
    * Have a slide somewhere explain what an ABI, Address, and network are and why they are important
        * Mainnet = 1
        * Rospten = 2
    * Problem how do we get the ABI, and Address
* Next Steps
    * From Chrome
        * Get data from the blockchain
        * Set data to the blockchain
        * Create javascript functions
        * Learn how to get values from forms
        * Create a UI that interacts with the Blockchain
* Build the Future