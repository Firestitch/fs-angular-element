
(function () {
    'use strict';

    angular.module('fs-angular-element',[])
	.directive('fsElement', function () {
		return {
			scope: {
				instance: '=fsElement',
			},
		 	link: function ($scope, element) {

		 		function process(func) {
		 			setTimeout(func);
		 		}

		 		angular.extend($scope.instance,
		 			{
		     			scroll: {
		     				bottom: function() {
		     					process(function() { element[0].scrollTop = element[0].scrollHeight });
		     				},
		     				top: function() {
		     					process(function() { element[0].scrollTop = 0; });
		     				}
		     			},
		     			focus: function() {
		     				process(function() { element[0].focus(); });
		     			}
		     		});
			}
		};
	})
	.directive('fsElementFocus', function() {
		return {
		 	link: function ($scope, element) {
		 		setTimeout(function() {
		 			element[0].focus();
		 		});
			}
		};
	});
})();



