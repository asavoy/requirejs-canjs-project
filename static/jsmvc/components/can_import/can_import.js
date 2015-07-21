define([
    'jquery',
    'stache!components/can_import/can_import.stache'
], function($, canImportTemplate) {
    $(document).ready(function () {
        $('#canImportTemplate').html(canImportTemplate({}));
    });
});
