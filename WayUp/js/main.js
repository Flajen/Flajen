var btn = document.getElementById('btn');

btn.onclick = function () {
	var text = document.querySelector('.ofters');
	text.classList.add('red');
	var img = document.querySelector('.desktop');
	img.style.display = 'none';
	document.querySelector('.rocket').style.marginLeft = '50px';
}