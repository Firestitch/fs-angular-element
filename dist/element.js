
(function () {
    'use strict';

    angular.module('fs-angular-element',[])
	.directive('fsElement', function () {
		return {
			scope: {
				instance: '=fsElement',
			},
		 	link: function ($scope, element) {
		 		angular.extend($scope.instance,
		 			{
		     			scroll: {
		     				bottom: function() {
		     					element[0].scrollTop = element[0].scrollHeight;
		     				},
		     				top: function() {
		     					element[0].scrollTop = 0;
		     				}
		     			},
		     			focus: function() {
		     				element[0].focus();
		     			}
		     		});
			}
		};
	});
})();

