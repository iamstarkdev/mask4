(function (angular) {
    'use strict';

    var isString = angular.isString;
    var isArray = angular.isArray;

    angular.module('mask4')
        .provider('mask4', mask4);

    function mask4() {
        var storage = {};

        this.set = set;
        this.$get = ['$injector', $get];

        function _set(obj){
            storage[obj.name] = obj.formatter;
        }

        function set(obj) {
            if(isArray(obj)){
                obj.forEach(function(obj) {
                    _set(obj);   
                });
                return;
            }

            _set(obj);
        };

        function $get($injector) {
            return function (name) {
                var value = storage[name];

                return $injector.get(value);
            }
        }
    }

})(window.angular);