# truffle_tutorial
A tutorial for setting up a development environment <br>
and using truffle the smart contract framework

<span style="font-size:larger;"><b>First we need to install Docker</b></span><br>
* [Instructions for Windows](https://docs.docker.com/docker-for-windows/)<br>
* [Instructions for MAC](https://docs.docker.com/docker-for-mac/)<br>
* [Instructions for Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04)<br>

<p><b>What is Docker?</b></p>
<p>Docker helps people run virtual computers on their computer? All our computers are set up differently but when you use docker to set up a virtual computer you know exactly what is it capable of.</p>

<p><b>Why are we using Docker?</b></p>
<p>Since we have MAC Windows, and hopefully some Linux Computer users in the audience we all have to install and manage our programs differently. When we use docker we all run the seperate versions of the same virtual computer on our laptops making life much more easier</p>

<p><b>I Have Docker installed what now?</b></p>
<p>Now we are going to deploy a Ubuntu Virtual Computer using Docker. We will set up cloud9, a web IDE(Integrated Development Environment) inside the Ubuntu Virtual Computer and we will be writing our smart contracts in there<p>

<p><b>How do I know Docker works</b></p>
<p>Open up a terminal (on windows as administrator) and type "docker"</p>

* "sudo docker" on mac or linux
* You should get someting that looks like this
![alt text](https://i.imgur.com/q3dh2Ty.png)
	
<p><b>If that works you can now try starting your own virtual machine</b></p>

* Windows
	* ```docker run -ti -p 8545:8545 -p 8081:8081 -p 3042:3042 ubuntu```
* MAC or Linux
	* ```sudo docker run -ti -p 8545:8545 -p 8081:8081 -p 3042:3042 ubuntu```
* Now You should have something that looks like this
![alt text](https://i.imgur.com/5SjpaZm.png)

<p><b>Cool you now have your own virtual machine running Ubuntu Linux</b></p>

<span style="font-size:larger;">Next we need to configure everything</span><br>
* Type these commands in one by one into the docker terminal
```bash
apt update
apt upgrade
apt install -y wget
cd 
wget https://raw.githubusercontent.com/mullinat/truffle_tutorial/master/docker-install.sh
bash docker-install.sh
adduser cloud9
#ADD YOUR PASSWORD
#FOR FOLLOWING FIELDS JUST PRESS ENTER
cd /home/cloud9/
su cloud9
wget https://raw.githubusercontent.com/mullinat/truffle_tutorial/master/cloud9-install.sh
bash cloud9-install.sh
exit
su cloud9
node -v
ifconfig
#Get the Virtual Mahcines's ip address
node ./c9sdk/server.js -l 0.0.0.0 -p 8081 -a : -w ~  
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




				
