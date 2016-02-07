
(function () {

	this.Coloriss = (function () {

		function Coloriss (color) {
			this.color = color;
		};
		
		Coloriss.prototype.hex = function (dash) {
			var hex = dash ? '#' : '';
			// 
		};

		Coloriss.prototype.rgb = function () {
			var a, r, g, b;

			this.alpha = a = this.color >> 24;
			this.red = r = 0xFF & (this.color >> 16);
			this.green = g = 0xFF & (this.color >> 8);
			this.blue = b = 0xFF & this.color;
			return {a:a, r:r, g:g, b:b};
		};

		Coloriss.prototype.red = function () {
			return this.red;
		};

		Coloriss.prototype.green = function () {
			return this.green;
		};

		Coloriss.prototype.blue = function () {
			return this.blue;
		};

		Coloriss.prototype.grey = function () {
			return (this.red + this.green + this.blue) / 3;
		};

		var toHex = function (val) {
			n = parseInt(val, 10);
			
			if (isNaN(n)) return null;
			
			n = Math.max(0, Math.min(n, 255));
			return "0123456789ABCDEF".charAt((n - n % 16) / 16)
				+ "0123456789ABCDEF".charAt(n % 16);
		}

		return Coloriss;

	})();

})();
