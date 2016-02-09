
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

		// New colors 1.1
		pink: '#F7CAC9',
		gold: '#FFD700',
		silver: '#C0C0C0',
		copper: '#B87333',
		brass: '#B5A642',
		azur: '#007FFF',
		serenity: '#92A8D1'

	};

	$scope.form = {};
	$scope.invert = false;

	$scope.needInvert = function () {
		var color = angular.copy($scope.colors.rgb);
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

		var color, cs, i;
		
		color = angular.copy($scope.form.color);

		if (!$scope.form.color)
			$scope.reinit();

		for (i in colors) {

			if (color.toLowerCase() === i) {
				color = colors[i];
			}
		}

		if (color.length > 3) {
			// Call Coloriss API.
			cs = new Coloriss(color);
			$scope.colors.hex = cs.hex();
			$scope.colors.rgb = cs.rgb();
		}

		$scope.invert = $scope.needInvert() ? true : false;
	};

	$scope.reinit();

})