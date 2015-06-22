'use strict';

//---------//
// Imports //
//---------//

var generators = require('yeoman-generator')
    , through2 = require('through2');


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
                if (file.contents) {
                    file.contents = new Buffer("generator testing1:\n" + file.contents.toString());
                }
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
