define([
    'can',
    'mustache!./component_example.mustache'
], function(can, componentTemplate) {

    return can.Component.extend({
        tag: 'can-component-example',
        template: componentTemplate,
        scope: {
            message: 'OK'
        }
    });

});
