define([
    'can/util/library',
    'can/view/mustache'
], function(can) {
    can.Mustache.registerHelper('mustacheHelperExample', function() {
        return 'OK';
    });
});
