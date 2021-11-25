# Electron socket.io example
# To Use

# Install dependencies
npm install

# Run the server socket
node ./sockets/index.js

# Run the app
npm start

# Install electron packager
npm i --save-dev electron-builder

# Open file package.json and set init files as follow
	"scripts":{
		"start": "electron .",
		"dist":"electron-builder -w"  -l linux -m macOS
	}