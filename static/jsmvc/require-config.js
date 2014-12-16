requirejs.config({
    map: {
        '*': {
            // RequireJS loader plugin - here because it has more than one file.
            css: 'requirejs-plugins/require-css/css'
        }
    },
    paths: {
    },
    shim: {
        // Shim for `jquery-migrate` to load after jQuery.
        'jquery/jquery-migrate': {
            deps: ['jquery/jquery'],
            exports: 'jQuery'
        }
    }
});
