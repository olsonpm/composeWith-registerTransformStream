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
    , 'initialize': function initialize() {
        if (this.options.moreMaxListeners) {
            require('events').EventEmitter.defaultMaxListeners = 20;
        }
        this.registerTransformStream(
            through2.obj(function(file, enc, cb) {
                if (file.contents) {
                    file.contents = new Buffer("generator base:\n" + file.contents.toString());
                }
                this.push(file);
                cb();
            })
        );

        this.composeWith('testing1', {}, {
            local: require.resolve('generator-testing1/generators/app')
        });

        this.fs.copyTpl(
            this.templatePath("**/*")
            , this.destinationPath()
        );
    }
});
