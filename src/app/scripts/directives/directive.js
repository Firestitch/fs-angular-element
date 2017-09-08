
(function () {
    'use strict';

    angular.module('fs-angular-element',[])
	.directive('fsElement', function () {
		return {
			scope: {
				instance: '=fsElement',
			},
		 	link: function ($scope, element) {

		 		function process(func,options) {
		 			if(options && options.timeout) {
		 				setTimeout(func,options.timeout);
		 			} else {
		 				func();
		 			}
		 		}

		 		angular.extend($scope.instance,
		 			{
		     			scroll: {
		     				bottom: function(options) {
		     					process(function() { element[0].scrollTop = element[0].scrollHeight },options);
		     				},
		     				top: function(options) {
		     					process(function() { element[0].scrollTop = 0; },options);
		     				}
		     			},
		     			focus: function(options) {
		     				process(function() { element[0].focus(); },options);
		     			},
		     			blur: function(options) {
		     				process(function() { element[0].blur(); },options);
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