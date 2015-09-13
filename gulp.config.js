module.exports = function() {
    var client = './src/client/';
    var server = './src/server/';
    var clientApp = client + 'app/';
    var temp = './.tmp/';

    var config = {
        /*
        * FILES PATHS
        */
        build: './build/',
        client : client,
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        css : temp + 'style.css',
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        html: clientApp + '**/*.html',
        htmltemplates: clientApp + '**/*.html',
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        js: [
            clientApp + '**/*.module.js',     //include module JS files first
            clientApp + '**/*.js',            //then the rest
            '!' + clientApp + '**/*.spec.js'  //exclude test JS files
        ],
        scss: client + 'scss/style.scss',
        server: server,
        temp: temp,
 
        /*
        * TEMPLATE CACHE
        */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app',
                standAlone: false,
                root: 'app/' //Don't create a separate module for this as it's already exist. 
            }
        },

        /*
        * BROWSER SYNC
        */
        browserReloadDelay: 1000,
 
        /*
        * BOWER and NPM LOCATIONS
        */
        bower: {
            json: require('./bower.json'),
            direcory: './bower_components/',
            ignorePath: '../..'
        },

        /*
        *NODE SETTINGS
        */
        defaultPort: 7203,
        nodeServer: './src/server/app.js' 
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            direcory: config.bower.direcory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;
};
