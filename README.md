Harmonify
=========

Harmonify is a wrapup transform for requiring ECMAScript 6 files with .es6 extension directly in wrapup,
in order to do this it uses @kamicane Harmonizer which is currently in alpha state

How to use it:
==============
if you have wrapup installed globally (`npm install -g wrapup`) you can do

`wrup browser --transform ./index.js -r ./test.es6 > ./test.js`

 otherwise since I added wrapup to __package.json__ after typing `npm install` you can use:
 
`./node_modules/.bin/wrup browser --transform ./index.js -r ./test.es6 > ./test.js`


