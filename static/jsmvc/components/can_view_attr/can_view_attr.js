define([
    'jquery',
    'can',
    'mustache!./can_view_attr_example.mustache'
], function($, can, mustacheTemplate) {
    $(document).ready(function () {
        $('#canViewAttr').html(mustacheTemplate({}));
    });
});
