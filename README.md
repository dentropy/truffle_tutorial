# truffle_tutorial
A tutorial for setting up a development environment and using truffle the smart contract framework

<span style="font-size:larger;"><b>Steps to deploy smart contracts</b></span><br>
* <b>REMINDER</b> You must have already installed the dependicies to deploy to ganache (A test blockchain) server
	1. Open your terminal and run this command. It should result in creating a series of wallet addresses and launch the server listener.
		1. ```bash
		   ganache-cli -p 8545
	       ```

    2. <b>Open a <u>NEW</u> terminal</b> and git clone this project in your Developer folder (or other working / project folder)
    	1. ```git clone https://github.com/mullinat/truffle_tutorial.git```
    3. cd into the truffleWorkspace directory
    	1. ```cd truffle_tutorial```
    	2. ```cd truffleWorkspace```
    4. Now compile the example smart contracts
        1. ```truffle compile```
    5. Now deploy  the example smart contracts
    	1. ```truffle migrate --reset``` 


<p><b>ATTENTION</b> - the following activities will RESET your MetaMask Acount.  If you're already using MetaMask to manage your Ethereum Wallet, you're going to have to find and ensure you have your SEEDPHRASE before doing any of the following activities.  Going forward with this tutorial is at your own risk and may cause loss of any tokens already attributed to your MetaMask Account.   <b>when in doubt</b> - <u>don't proceed</u>!</p>
	
<p>With your Tuffle contracts successfully deployed, you are now ready to access them via a web browser.  <b>REMINDER</b>: You must have <a href="https://metamask.io/" target="_blank">MetaMask</a> installed and set to your local machine as it's network.  <b>http://127.0.0.1:8545</b>. If you don't know how to set the network to local node (<a href="https://metamask.helpscoutdocs.com/article/29-using-a-local-node" target="_blank">read this support article on MetaMask.io</a>) You'll have to add the seed phrase from the terminal where you launched <i>ganache-cli</i> and set a password for this to work.</p>

<span style="font-size:larger;"><b>Launching the Node Server to test the smart contracts</b></span><br>
* <b>REMINDER</b> You must have already enabled MetaMask to fully launch and test the smart contracts, not having that process complete will limit your ability to update the data into the Smart Contract.
	1. Open your web browser and navigate to <a href="http://localhost:3042" target="_blank">http://localhost:3042</a>
	 ```
	 View the source of that page in your web browser window
	 ```
	2. Launch the Browser Console screen and try in the commands shown in the View Source of the page
	
	
<h2>Success</h2
<p>The commands should run and enable you to test your Truffle Smart Contract setup and view the data from the compiled contracts</p>
