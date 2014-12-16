define([
    'jquery',
    'components/global_refs/global_ref_example'
], function($) {
    $(document).ready(function () {
        $('#globalRefs').html(Components.GlobalRefExample.content);
    });
});
