requirejs.config({
    map: {
        '*': {
            // RequireJS loader plugin - here because it has more than one file.
            css: 'requirejs-plugins/require-css/css',
            // Always load these Mustache plugins, part 1/2.
            'can/view/mustache': 'canjs-plugins/mustache'
        },
        'canjs-plugins': {
            // Always load these Mustache plugins, part 2/2.
            'can/view/mustache': 'can/view/mustache'
        }
    },
    paths: {
        // RequireJS loader plugins.
        ejs: 'requirejs-plugins/requirejs-canjs-templates/ejs',
        mustache: 'requirejs-plugins/requirejs-canjs-templates/mustache',
        stache: 'requirejs-plugins/requirejs-canjs-templates/stache',
        text: 'requirejs-plugins/text/text'
    },
    shim: {
        // Shim for `jquery-migrate` to load after jQuery.
        'jquery/jquery-migrate': {
            deps: ['jquery/jquery'],
            exports: 'jQuery'
        },
        // Ensures that `can/view/ejs` is included in the build.
        ejs: {
            deps: ['can/view/ejs']
        },
        // Ensures that `can/view/stache` is included in the build.
        stache: {
            deps: ['can/view/stache']
        }
    }
});
