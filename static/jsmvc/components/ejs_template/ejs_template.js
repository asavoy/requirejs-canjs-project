define([
    'jquery',
    'ejs!components/ejs_template/ejs_template.ejs'
], function($, ejsTemplate) {
    $(document).ready(function () {
        $('#ejsTemplate').html(ejsTemplate({}));
    });
});
