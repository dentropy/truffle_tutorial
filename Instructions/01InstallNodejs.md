# Install Nodejs

<p><b>First we need to install the latest version of nodejs</p></b>

* [You can download it from here](https://nodejs.org/en/)

<p>Alternatively if you are using linux, mac or WSL(Windows Subsystem for Linux) you can install the nvm (node version manager)</p>

``` bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

<p>Once nvm is installed you need to configure it</p>

``` bash
nvm install node
nvm install-latest-npm
nvm alias default node
```

<p>Now we can test is nodejs is installed correctly</p>

```
node -v
#Should return v10.9.0 or higher
npm -v
#Should return 6.2.0 or higher
```

* [Souce code for nvm is available here](https://github.com/creationix/nvm)