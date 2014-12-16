define([
    'jquery',
    'mustache!./mustache_partials.mustache',
    'mustache!./mustache_partials_example.mustache'
], function($, mustacheTemplate) {
    $(document).ready(function () {
        $('#mustachePartials').html(mustacheTemplate({}));
    });
});
