define([
    'jquery',
    'mustache!components/mustache_template/mustache_template.mustache'
], function($, mustacheTemplate) {
    $(document).ready(function () {
        $('#mustacheTemplate').html(mustacheTemplate({}));
    });
});
