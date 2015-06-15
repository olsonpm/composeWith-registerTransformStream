'use strict';

//---------//
// Imports //
//---------//

var generators = require('yeoman-generator')
    , through2 = require('through2')
    , path = require('path');


//------//
// Main //
//------//

module.exports = generators.Base.extend({
    'constructor': function constructor() {
            generators.Base.apply(this, arguments);
        }
    , 'writing': function writing() {
        this.registerTransformStream(
            through2.obj(function(file, enc, cb) {
                console.log("transforming '" + file.path + "'");
                this.push(file);
                cb();
            })
        );

        this.fs.copyTpl(
            this.templatePath("**/*")
            , this.destinationPath()
        );
    }
});
