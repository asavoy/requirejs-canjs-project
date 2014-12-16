define([
    'can/util/library',
    'can/view/callbacks'
], function(can) {

    can.view.attr('view-attr-example', function(el, data) {
        $(el).html('OK');
    });

});
