define([
    'jquery',
    'mustache!./mustache_helper.mustache'
], function($, mustacheTemplate) {
    $(document).ready(function () {
        $('#mustacheHelper').html(mustacheTemplate({}));
    });
});
