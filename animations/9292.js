var blockWidth = 3;

var black = [0, 0, 0];
var white = [255, 255, 255];

var colors = [black, white];

var frames = 30/*colors.length * blockWidth*/;

function copyArray(c) {
	return [].concat(c);
}
	
module.exports = function() {
    var animation = [];

    for (var f = 0; f < frames; f++) {
        var frame = {pixels:[]};

        for (var i = 0; i < 30; i++) {
			var color = copyArray(colors[Math.floor((i + f) / blockWidth) % colors.length])
			frame.pixels.push(color);
        }

        animation.push(frame);
    }

    return animation;
};
