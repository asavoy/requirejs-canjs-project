define([
    'jquery'
], function($) {
    $(document).ready(function () {
        if ($ && window.$) {
            $('#jqueryWorks').html('OK');
        }
    });
});
