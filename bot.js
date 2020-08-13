function giveAnswer(answer) {
	var splitInput = answer.split(" ");
	for (var i = 0; i < splitInput.length; i++) {
		var t = splitInput[i];
		if (t == 'hi' || t == 'hello' || t == 'old' || t == 'weather' || t == 'time' || t == 'name' || t == 'you' || t == 'dumb') {
			if (t == 'hi' || t == 'hello') {
				document.getElementById('computer-text').innerHTML = 'hello!';
			}
			else if (t == 'old') {
				document.getElementById('computer-text').innerHTML = 'I am 10 years old';
			}
			else if (t == 'weather') {
				document.getElementById('computer-text').innerHTML = 'okay, I will open weather';
				window.open('https://www.bing.com/search?q=weather&qs=n&form=QBRE&sp=-1&pq=&sc=8-0&sk=&cvid=02AF94EB20E5464D8CB9AC95DEB44D05')
			}
			else if (t == 'name') {
				document.getElementById('computer-text').innerHTML = 'my name is robot, of course';
			}
			else if (t == 'you') {
				document.getElementById('computer-text').innerHTML = 'I know';
			}
			else if (t == 'dumb') {
				document.getElementById('computer-text').innerHTML = "that's not very nice";
			}
			else {
				document.getElementById('computer-text').innerHTML = 'you can find the time on your laptop';
			}
		}
		else {
			if (t == splitInput[splitInput.length]) {
				document.getElementById('computer-text').innerHTML = 'I have no idea of what you are talking about';
			}
		}
	}
}

function saveVariable() {
	var input = document.getElementById('TheInput').value;
	giveAnswer(input);
	document.getElementById('TheInput').innerHTML = '';
}