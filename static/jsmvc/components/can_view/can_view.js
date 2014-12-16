define([
    'jquery',
    'can',
    'mustache!components/can_view/can_view.mustache'
], function($) {
    $(document).ready(function () {
        $('#canView').html(can.view('components/can_view/can_view.mustache'));
    });
});
