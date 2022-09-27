$(function () {
	"use strict";
	var a = 0;
	for (; a < 25; a += 1) {
		setTimeout(function b() {
			var a = Math.random() * 1e3 + 5e3,
				c = $("<div />", {
					"class": "smoke",
					css: {
						left: Math.random() * 800,
						backgroundSize: "contain",
						width: Math.random() * 800,
						height: Math.random() * 600
					}
				});
			$(c).addClass("animated");
			$(c).addClass("zoomIn");
			$(c).addClass("rollOut");
			$(c).appendTo("#viewport");
			$.when($(c).animate({}, {
					duration: a / 4,
					easing: "linear",
					queue: false,
					complete: function () {
						$(c).animate({}, {
							duration: a / 3,
							easing: "linear",
							queue: false
						})
					}
				}),
				$(c).animate({
					bottom: $("#viewport").height()
				}, {
					duration: a,
					easing: "linear",
					queue: false
				})).then(
				function () {
					$(c).remove();
					b()
				})
		}, Math.random() * 3e3)
	}
}())