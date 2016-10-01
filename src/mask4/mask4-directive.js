(function (angular) {
    'use strict';

    angular.module('mask4')
        .directive('mask4', ['mask4', mask4]);

    function mask4(mask4) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };

        function link(scope, element, attrs, ngModelCtrl) {
            var maskType = attrs.mask4;
            var factoryFn = mask4(maskType);

            element.bind("keyup", function () {
                ngModelCtrl.$setViewValue(factoryFn(ngModelCtrl.$viewValue));
                ngModelCtrl.$render();
            });
        }
    }

})(window.angular)