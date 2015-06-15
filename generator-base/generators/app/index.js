var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    'constructor': function constructor() {
            generators.Base.apply(this, arguments);
        }
    , 'initialize': function initialize() {
        if (this.options.moreMaxListeners) {
            require('events').EventEmitter.defaultMaxListeners = 20;
        }

        this.composeWith('testing1', {}, {
            local: require.resolve('generator-testing1/generators/app')
        });
    }
});
