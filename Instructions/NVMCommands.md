* Install nvm, node version manager
    * [Link to instructions](https://github.com/creationix/nvm)
* How to use the nvm
    * Install lts (long term support) verion
    ```
    nvm install --lts
    ```
    * Install a specific node version
    ```
    nvm install 10.9.0
    ```
    * Use a lts version of node
    ```
    nvm use --lts
    ```
    * Use a specifiv version of node
    ```
    nvm use 10.9.0
    ```
    * Upgrade npm (node package manager)
    ```
    nvm install-latest-npm
    ```
    * Check versions of node installed
    ```
    nvm ls
    ```
    * Test node
    ```
    node -v
    #Should give you something like "v8.1.4"
    npm -v
    #Should give you something like "5.6.0"
    ```
    * Set default version os NVM
    ```
    nvm alias default 10.9.0
    ```