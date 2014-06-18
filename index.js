"use strict";
var harmonify = require('harmonizer')
var esprima = require('esprima'); // ariya/esprima#harmony
var escodegen = require('escodegen');
var harmonize = require('harmonizer');

exports.src = function(module, callback){
    if (/\.es6$/.test(module.full)){
        var ast = esprima.parse(module.src);
        var harmonized = harmonize(ast);
        var outputCode = escodegen.generate(harmonized);

        module.src = outputCode
    }
    callback(null, module)
}
