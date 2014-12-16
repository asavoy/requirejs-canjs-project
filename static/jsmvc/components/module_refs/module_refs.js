define([
    'jquery',
    'components/module_refs/module_ref_example'
], function($, ModuleRefExample) {
    $(document).ready(function () {
        $('#moduleRefs').html(ModuleRefExample.content);
    });
});
