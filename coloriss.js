
angular.module('Coloriss', [])

.controller('AppCtrl', function ($scope) {

	var colors = {
		red: '#C0392B',
		green: '#2ECC71',
		blue: '#3498DB',
		yellow: '#F1C40F',
		orange: '#E67E22',
		turquoise: '#1ABC9C',
		grey: '#EEEEEE',
		black: '#000000',
		dark: '#333333',
		white: '#FFFFFF',
	};

	$scope.form = {};
	$scope.invert = false;

	var toHex = function (n) {
		
		n = parseInt(n, 10);
		
		if (isNaN(n)) {
			return "00";
		}
		n = Math.max(0, Math.min(n, 255));
		return "0123456789ABCDEF".charAt((n - n % 16) / 16)
			+ "0123456789ABCDEF".charAt(n % 16);

	};

	$scope.needInvert = function () {
		var color = angular.copy($scope.colors.rgb);
		console.log(color);
		var gs = Math.floor((color.r + color.g + color.b) / 3);
		return (gs >= 100);
	};

	$scope.reinit = function () {

		$scope.colors = {
			hex: '000000',
			rgb: {r: -1, g: -1, b: -1}
		};		
	};

	$scope.update = function () {

		var color = angular.copy($scope.form.color);

		if (!$scope.form.color)
			$scope.reinit();

		for (var i in colors) {

			if (color.toLowerCase() === i) {
				color = colors[i];
				$scope.form.color = color;
			}
		}

		if (color.indexOf(',') > -1) {

			var e = color.split(',');

			if (e[2]) {
				// convert
				var hex = toHex(e[0]) + toHex(e[1]) + toHex(e[2]);
				color = "#" + hex;
				$scope.colors.hex = color;
				$scope.colors.rgb = {
					r: e[0],
					g: e[1],
					b: e[2]
				}
				return ;
			}

		}
		
		if (color.match(/^#?(?:[0-9a-f]{3}){1,2}$/i)) {

			if (color.indexOf('#') === 0)
				color = color.substr(1, color.length);

			if (color.length === 3) {
				color += color;
			}
			color = parseInt("0x" + color);

			a = color >> 24;
			r = 0xFF & (color >> 16);
			g = 0xFF & (color >> 8);
			b = 0xFF & color;

			$scope.colors.hex = $scope.form.color.indexOf('#') !== 0
				? '#' + $scope.form.color
				: $scope.form.color;
			$scope.colors.rgb = {r:r, g:g, b:b};
		
		}

		$scope.invert = $scope.needInvert() ? true : false;
	};

	$scope.reinit();

})