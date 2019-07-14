```
=========================
About
-------------------------

This is my attempt at creating a boilerplate express + webpack project for my own personal use.
 
=========================
Node Modules Used
-------------------------

Express
> npm i --save express

Webpack
> npm i --save-dev webpack webpack-scli webpack-node-externals

Nodemon
> npm i --save-dev nodemon

=========================
Project Structure
-------------------------
 + client
	+ public
		+ script
			- bundle.js
		- index.html
	+ src
		- mycode.js
 + server
	- server.js
 - package.json	
 - webpack.config.js

-------------------------
Notes:

/  						: files needed for building the project
/server					: server.js and any other server-side code and files
/client/src				: js to be bundled using webpack
/client/public			: files publically accessible to clients
/client/public/script	: scripts (including built bundle.js) for client use
```