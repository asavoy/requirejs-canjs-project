define([
    'can'
], function(can) {

    return can.Component.extend({
        tag: 'imported-component',
        template: '<span>OK</span>'
    });

});
