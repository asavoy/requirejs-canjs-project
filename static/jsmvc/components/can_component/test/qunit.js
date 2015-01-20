define(['qunit'], function(QUnit) {

    module('can_component');
    test('equal exists in window scope', 1, function(){
        equal(1, 1);
    });
    test('ok() exists in window scope', 1, function(){
        ok(typeof window.ok === 'function');
    });

});
