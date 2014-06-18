all:
	./node_modules/wrapup/bin/wrup.js browser --transform ./index.js -r ./test.es6 > ./test.js

