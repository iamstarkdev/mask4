(function (angular) {
	'use strict';

	angular.module('app', ['mask4'], ['mask4Provider', '$provide', config])

	function config(mask4Provider, $provide) {

	

		mask4Provider.set({
			name: 'phone',
			formatter: 'phoneFormatter'
		});

		mask4Provider.set([
			{
				name: 'cpf',
				formatter: 'cpfFormatter'
			},
			{
				name: 'date',
				formatter: 'dateFormatter'
			}
		]);
	}

})(window.angular);

