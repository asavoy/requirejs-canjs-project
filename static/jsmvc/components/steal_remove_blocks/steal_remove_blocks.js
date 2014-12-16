define([
    'jquery'
], function($) {
    $(document).ready(function () {

        var isProduction = (document.location.search === '?production');
        var isStealBlockRemoved = true;
        //!steal-remove-start
        isStealBlockRemoved = false;
        //!steal-remove-end
        if ((isProduction && isStealBlockRemoved)
            || (!isProduction)) {
            $('#stealRemoveBlocks').html('OK');
        }
    });
});
