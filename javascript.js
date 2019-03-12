
$(function() {
	var sample_text = ["Website's", "Landing Page", "Mobile Page"];
	var current_text;
	var typer;
	var i = 0;
	var j = 0;

	displayCharacter = function(t) {
		$("#text span").append(t);
	}

	nextText = function() {
		if (j ===  sample_text.length) {
			j = 0;
		}
		current_text = sample_text[j];
		j ++;
		typer = current_text.split("");
		setTimeout(typingText, 500);
	}

	typingText = function() {
		var timer = setInterval(function() {
			displayCharacter(typer[i]);
			i++;
			console.log(i);
			if (i === typer.length) {
				i = 0;
				clearInterval(timer);
				setTimeout(backspaceText,1000);
			}

		}, 50);
	}

	backspaceText = function() {
		var t = $("#text span").text();
		var timer = setInterval(function() {
			t = t.slice(0,-1)
			$("#text span").text(t);
			console.log(t);
			if (t === "") {
				clearInterval(timer);
				setTimeout(nextText,500);
			}
	}, 50);
	}

	nextText();

})
