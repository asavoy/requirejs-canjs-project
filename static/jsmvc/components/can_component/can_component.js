define([
    'jquery',
    'can',
    'components/can_component/component_example'
], function($) {
    $(document).ready(function () {
        var canComponentTemplate = can.mustache('<can-component-example></can-component-example>');
        $('#canComponent').html(canComponentTemplate({}));
    });
});
