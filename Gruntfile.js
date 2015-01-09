'use strict';

module.exports = function(grunt) {

    // Set this to false if you want a non-minified build.
    var USE_MINIFIED_BUILD = true;

    grunt.initConfig({

        // RequireJS configuration.
        //
        // IMPORTANT: Before changing anything at all! RTFM!
        // https://github.com/jrburke/r.js/blob/master/build/example.build.js
        // for an explanation of every option.
        requirejs: {
            main: {
                options: {
                    // appDir and baseUrl together point to the root folder
                    // for all the JS modules.
                    appDir: 'static/jsmvc',
                    baseUrl: './',
                    // The module that contains the `requirejs.config(...)`.
                    mainConfigFile: 'static/jsmvc/require-config.js',
                    // This is the build output folder.
                    dir: 'static/build',
                    // Minification to apply, either 'uglify2' or 'none'.
                    optimize: USE_MINIFIED_BUILD ? 'uglify2' : 'none',
                    // Minification to apply to CSS. The require-css plugin
                    // takes care of this, so it is useless to do it here.
                    optimizeCss: 'none',
                    // These CSS settings are for require-css.
                    buildCSS: true,
                    writeCSSModule: true,
                    dynamicCSSBasePath: true,
                    // Whether to generate Source Maps for debugging.
                    generateSourceMaps: USE_MINIFIED_BUILD,
                    // Specifies files to ignore for the build.
                    fileExclusionRegExp: new RegExp(
                        '^\\.'
                    ),
                    // If false, empties the build folder before each build.
                    keepBuildDir: false,
                    // When true, skips minification of modules that aren't the
                    // built modules.
                    skipDirOptimize: false,
                    // If true, when the optimizer merges a module into a built
                    // module, the standalone module will be removed from the
                    // build output folder.
                    removeCombined: true,
                    // Here we must define every main module, and how the
                    // module will be treated in the build. Refer to the docs.
                    modules: [
                        {
                            // This is the common build layer, we have to
                            // manually declare common modules to include with
                            // `require-config.js`.
                            name: 'require-config',
                            include: [
                                'jquery',
                                'can',
                                'css',
                                'ejs',
                                'mustache',
                                'requirejs-plugins/require-css/normalize',
                                'stache'
                            ]
                        },
                        // Here are the main modules - the entry point loaded
                        // by pages, or via progressive loading.
                        {
                            name: 'pages/index/index',
                            exclude: ['require-config']
                        },
                        {
                            name: 'pages/example/example',
                            exclude: ['require-config']
                        }
                    ],
                    // Don't look at nested define() calls for dependencies
                    // to include in the build.
                    findNestedDependencies: false,
                    // Callback for when the build is completed.
                    done: function(done, output) {
                        // When the build is done, check for duplicated modules
                        // in the build. They should be optimised by putting
                        // into a common build layer.
                        // Taken from: https://github.com/gruntjs/grunt-contrib-requirejs/blob/master/README.md
                        var duplicates = require('rjs-build-analysis').duplicates(output);
                        if (Object.keys(duplicates).length > 0) {
                            grunt.log.subhead('Duplicates found in requirejs build:');
                            for (var key in duplicates) {
                                grunt.log.warn(duplicates[key] + ": " + key);
                            }
                            grunt.log.error('');
                            grunt.log.error('WARNING! Build contains ' +
                                'duplicated modules! Consider adding to a ' +
                                'common bundle/layer then into exclude: ' +
                                'arrays. It could be a problem if the module ' +
                                'has internal state!');
                        }
                        else {
                            grunt.log.success("Yay! No duplicated modules found in build!");
                        }
                        done();
                    },
                    // When false, strips out 'use strict' from builds as they
                    // will only serve to throw Strict mode errors in
                    // production.
                    useStrict: false,
                    preserveLicenseComments: false,
                    // Pragmas are build flags. When code blocks are tagged
                    // with a pragma via special comments, the code blocks
                    // will get removed from the build.
                    pragmas: {
                        stealRemove: true
                    },
                    // Converts the special comments used by CanJS and StealJS
                    // to mark code blocks excluded from production builds,
                    // into RequireJS pragmas, which achieve the same thing.
                    onBuildRead: function(moduleName, path, contents) {
                        return contents
                            .replace(
                                new RegExp('//!steal-remove-start', 'g'),
                                '//>>excludeStart("stealRemove", pragmas.stealRemove);')
                            .replace(
                                new RegExp('//!steal-remove-end', 'g'),
                                '//>>excludeEnd("stealRemove");');
                    }
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('build', ['requirejs']);
};
