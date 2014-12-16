define([
    'jquery',
    'components/absolute_paths/absolute_paths_example'
], function($, AbsolutePathsExample) {
    $(document).ready(function () {
        $('#absolutePaths').html(AbsolutePathsExample.content);
    });
});
