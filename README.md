# Project Jabberwocky (Lab 6)
Links to status pages (if server is up) are on [jabberwocky.ddns.net](http://jabberwocky.ddns.net)

## Caveat Student

Official instructions are on Moodle. Make sure to answer the "Report Questions" R1...R7 listed there.

## Part A

### Install & Setup

Check out a copy of this code using git:

    git clone https://github.com/jjfiv/project-jabberwocky.git

Download a version of node with which to run the server, then extract the package.

    ./download_nodejs.sh

Setup your ``PATH`` variable to execute the new ``node`` binary by editing your bash configuration file.

Check your node configuration with:

    node hello.js

### Running the Server

Then run the server in a way that SSH will not disconnect you. 
- Easy: ``nohup node server.js``. 
- Harder: using ``screen`` or ``tmux``.

## Part B
### Disconnecting the Server

Send "SIGINT" to your running server process. If you used "nohup", what command sends signals? How do you figure out the PID of your server?
