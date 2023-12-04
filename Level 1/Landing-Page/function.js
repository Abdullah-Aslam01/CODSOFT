window.onload = function () {
	const menu_btn = document.querySelector('.barmenu');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('isactive');
		mobile_menu.classList.toggle('isactive');
	});
}