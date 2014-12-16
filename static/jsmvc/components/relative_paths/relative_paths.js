define([
    'jquery',
    '../../components/relative_paths/relative_paths_example'
], function($, RelativePathsExample) {
    $(document).ready(function () {
        $('#relativePaths').html(RelativePathsExample.content);
    });
});
