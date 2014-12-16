define([
    'jquery',
    'stache!components/stache_template/stache_template.stache'
], function($, stacheTemplate) {
    $(document).ready(function () {
        $('#stacheTemplate').html(stacheTemplate({}));
    });
});
