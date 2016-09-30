var app = angular.module('mask4', []);
app.directive('maskPhone', function () {
	return {
		require: 'ngModel',
		link: function (scope, element, attrs, ctrl) {
		     var _formatPhone = function (phone) {
		     	phone = phone.replace(/[^0-9]+/g, "");
		     	if(phone.length > 2) {
		     	   phone = "(" + phone.substring(0,2) + ") " + phone.substring(2);
		     	} 
		     	if (phone.length > 10) {
		     	   phone =  phone.substring(0,10)  + "-"+ phone.substring(10,14);		     		
		     	}
		     	return phone;
		     };
		     element.bind("keyup", function () {
			ctrl.$setViewValue(_formatPhone(ctrl.$viewValue));
			ctrl.$render();
		   });
		}

	};
});

app.directive('maskCpf', function () {
	return {
		require: 'ngModel',
		link: function (scope, element, attrs, ctrl) {
		     var _formatCpf = function (cpf) {
		     	cpf = cpf.replace(/[^0-9]+/g, "");

		     	if(cpf.length > 3) {
		     	    cpf = cpf.substring(0,3) + "." + cpf.substring(3);
		     	} 

		     	if(cpf.length > 7) {
		     	    cpf = cpf.substring(0,7) + "." + cpf.substring(7, 14);
		     	} 	

		       	if(cpf.length > 11) {
		     	    cpf = cpf.substring(0,11) + "-" + cpf.substring(11, 13);
		     	}	

		     	return cpf;
		     };
		     element.bind("keyup", function () {
			ctrl.$setViewValue(_formatCpf(ctrl.$viewValue));
			ctrl.$render();
		   });
		}

	};
});

 angular.module('mask4').directive('maskDate', function () {
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ctrl) {
			var _formatDate = function (date) {
				date = date.replace(/[^0-9]+/g, "");
				if(date.length > 2) {
				    date = date.substring(0,2) + "/" + date.substring(2);
				}
				if(date.length > 5) {
				    date = date.substring(0,5) + "/" + date.substring(5,9);
				}
				return date;
			};

			element.bind("keyup", function () {
				ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
				ctrl.$render();
			});
		}	
	};
});