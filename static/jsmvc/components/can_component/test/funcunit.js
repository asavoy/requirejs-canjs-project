define([
    'jquery',
    'qunit',
    'funcunit',
    'can/view/mustache',
    'components/can_component/component_example'
], function($, QUnit, S) {

    module('can_component', {
        setup: function() {
            $('#qunit-test-area').empty();
        }
    });

    test('Render a component working (OK exists inside component)', function() {
        var canComponentTemplate = can.mustache('<can-component-example></can-component-example>');
        $('#qunit-test-area').html(canComponentTemplate({}));
        equal($('can-component-example').text(), 'OK');
    });

});
