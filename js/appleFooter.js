(function(){
	'use strict';
	
	var appleFooter = document.querySelector('footer.apple'),
			footerMenu = document.querySelector('.footer-menu'),
			menuItems,
			appleFooterModel;
	
	/*---------------Set click event listenets to top menu items-----------*/
	function doAppleStuff(){
		var falseClassList = document.querySelectorAll('.footer-list .sub-menu');
	
		Array.prototype.forEach.call(falseClassList, function(item){
			item.classList.remove('sub-menu');
			item.classList.add('footer-sub-items');
		});
		
		menuItems = footerMenu.querySelectorAll('[data-id="item"]');
		
		function onFire(item){
			item.addEventListener('click', function(){
				var prevBtn = footerMenu.querySelector('.on-fire');
				if(prevBtn && prevBtn.innerHTML !== item.innerHTML){
					prevBtn.classList.remove('on-fire');
				}
				item.classList.toggle('on-fire');
			});
		} 
	
		Array.prototype.forEach.call(menuItems, onFire);
	};
	
	/*--------Loading footer model and appending footer menu to document---------*/
	
	window.addEventListener('load', function(){
		
		var footerList = document.createElement('ul');
		footerList.classList.add('footer-list');
		
		Ajax({
					method: "GET",
					path: "models/footerModel.json",
					success: function(result) {
					appleFooterModel = result;
					createSubMenu(appleFooterModel, footerList, footerMenu);
					doAppleStuff();	
					}
		});
		
	});
	/*------------------End-------------------*/
	
})();