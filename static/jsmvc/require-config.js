requirejs.config({
    map: {
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
