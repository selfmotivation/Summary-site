window.onload = function() {
	let coll = document.getElementsByClassName('collapsible');
	for (let i = 0; i < coll.length; i++) {
		coll[i].addEventListener('click', function() {
			this.classList.toggle('collapsible-active');
			this.nextElementSibling.classList.toggle('collapse-content-hidden');
		//	let content = this.nextElementSibling;
		//	if (content.style.maxHeight) {
		//	// if (content.classList.) {	
		//		content.style.maxHeight = null;
		//	} else {
		//		content.style.maxHeight = content.scrollHeight + 'px';
		//	}
		});
	};
}