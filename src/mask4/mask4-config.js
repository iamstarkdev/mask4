(function (angular) {
    'use strict';

    angular.module('mask4')
        .config(['$provide', config])

    function config($provide) {
        $provide.factory('phoneFormatter', function () {
            return function (phone) {
                phone = phone.replace(/[^0-9]+/g, "");
                if (phone.length > 2) {
                    phone = "(" + phone.substring(0, 2) + ") " + phone.substring(2);
                }
                if (phone.length > 10) {
                    phone = phone.substring(0, 10) + "-" + phone.substring(10, 14);
                }
                return phone;
            };
        });

        $provide.factory('cpfFormatter', function () {
            return function (cpf) {
                cpf = cpf.replace(/[^0-9]+/g, "");

                if (cpf.length > 3) {
                    cpf = cpf.substring(0, 3) + "." + cpf.substring(3);
                }

                if (cpf.length > 7) {
                    cpf = cpf.substring(0, 7) + "." + cpf.substring(7, 14);
                }

                if (cpf.length > 11) {
                    cpf = cpf.substring(0, 11) + "-" + cpf.substring(11, 13);
                }

                return cpf;
            };
        });

        $provide.factory('dateFormatter', function () {
            return function (date) {
                date = date.replace(/[^0-9]+/g, "");
                if (date.length > 2) {
                    date = date.substring(0, 2) + "/" + date.substring(2);
                }
                if (date.length > 5) {
                    date = date.substring(0, 5) + "/" + date.substring(5, 9);
                }

                return date;
            };
        });
    }

})(window.angular);