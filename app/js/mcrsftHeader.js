(function(){
	"use strict";
	
var hamburgerBtn = document.querySelector('.toggle-menu'),
		searchBtn = document.querySelector('.search'),
		toggleMenu = document.querySelector('.header-menubar'),
		buttonsList = document.querySelector('.buttons-list'),
		header = document.querySelector('.header-inner'),
		subMenu,
		currentBtn,
		prevBtn,
		toggleMenuModel;
	
/*---Loading header model, creating and appendin menu to the page when loaded-----*/
	
window.addEventListener('load', function(){
	
	var mainList = document.createElement('ul');
			mainList.classList.add('menu-list');
	
		Ajax({
					method: "GET",
					path: "models/headerModel.json",
					success: function(result) {
					toggleMenuModel = result;
					createSubMenu(toggleMenuModel, mainList, toggleMenu);	
					}
		});
	
	});
	
/*-----------------End------------------*/	

	
/*---------------Controls different menu states-----------------------*/	
/*----------almighty detoggler will sweep you away, be aware!---------*/
	
function deToggler(currentTrgt){
	var currentActiveTggl = header.querySelector('.active'),
			currentActiveForm = header.querySelector('.active-form'),
			highLightedBtn = header.querySelector('.highlight'),
			hasDataset = currentBtn.dataset.id,
			currentSlideMenuList;
	
	
	if(prevBtn){
		var	prevTrgt = prevBtn.querySelector('a');
	}
	
	/* checks something else ??? */
	
	function checkListItem(){
		if(currentBtn.dataset.id === 'item' && prevBtn) {
			if (prevBtn.dataset.id  && (currentTrgt.textContent !== prevTrgt.textContent)) {
				if(highLightedBtn){
						highLightedBtn.classList.remove('highlight');
				}
				
				currentSlideMenuList = header.querySelectorAll('.slide-down');
				
						if(currentSlideMenuList.length > 0) {
							Array.prototype.forEach.call(currentSlideMenuList, function(element){
								element.classList.remove('slide-down');
							});
							if(prevBtn.dataset.id === 'subItem'){
								var currentSubmenu = currentBtn.querySelector('.sub-menu');
								currentSubmenu.classList.add('slide-down');
							}
						}
					}
			}
	};
	
	
	/* checks if different buttons where pressed while showing toggle-menu on medium & small screens */
	
	if(prevBtn && currentActiveTggl){
		checkListItem();
		if (!hasDataset){
			currentActiveTggl.classList.remove('active');
		}
	}
	
	/* checks if toggle button was pressed */
	
	if (currentBtn === hamburgerBtn){
		if(currentActiveTggl) {
			currentActiveTggl.classList.toggle('active');
			currentBtn.classList.toggle('highlight');
		}
	}
	
	/* checks if the same level menu items where pressed when displayed on wide screen */
	
	if(hasDataset) {
		checkListItem();
	}
		
	/* checks if search-form was in interaction */
	
	if (currentActiveForm) {
		if(prevBtn) {
				if(document.activeElement.parentNode === currentActiveForm){
					return false;
			} else {
				prevBtn.classList.remove('highlight');
				currentActiveForm.classList.remove('active-form');
			}
		}
	}
};
/*-----------------End--------------------*/
	
/*----------Listening to click events and interacting with menu-------*/	
	
	header.addEventListener('click', function(e){
	var target = e.target;	
	currentBtn = e.target.parentNode;
		
			/* Checks if clicked outside menu */	
		
	function bodyListener(e) {
		if(e.target.parentNode.dataset.id) {
			return false;
	} else {
			var currentSlideMenuList = header.querySelectorAll('.slide-down'),
			highLightedBtn = header.querySelector('.highlight');
		
			if(currentSlideMenuList.length > 0) {
				Array.prototype.forEach.call(currentSlideMenuList, function(element){
						element.classList.remove('slide-down');
				});
			}
			if(highLightedBtn) {
				highLightedBtn.classList.remove('highlight');
			}
		
		document.body.removeEventListener('click', bodyListener);
		}
	};
		
	document.body.addEventListener('click', bodyListener);
		
		/* checks if current button if different from previous */
		
if (prevBtn !== currentBtn) {
		deToggler(target);
	};
		
	var menuList = document.querySelector('.menu-list'),	
			parent = e.target.parentNode,
			subMenu = parent.querySelector('.sub-menu');
		
		/* checks if menu item was pressed */
		
	if(e.target.parentNode.dataset.id) {
		if (e.target.parentNode.dataset.id === 'item'){
			e.target.parentNode.classList.toggle('highlight');
		}
			if(subMenu){
				subMenu.classList.toggle('slide-down');
			}
	}
		
		/* checks if search button was pressed */
		
	if(e.target.dataset.text === 'search') {
			var searchForm = document.searchForm;
			setTimeout(function(){
				searchForm.classList.toggle('active-form');
				e.target.parentNode.classList.toggle('highlight');
			}, 300);
	}
		
		/* checks if toggle menu button was pressed */
		
	if (e.target.dataset.text === 'reorder') {
			toggleMenu.classList.toggle('active');
			currentBtn.classList.toggle('highlight');
	}
		

	prevBtn = currentBtn;
	
	});

/*--------------------End--------------------------*/	
	
})();