(function(){
	'use strict';
	
/*--------globall helper function that creates nav menus ------*/
	
	window.createSubMenu = function(model, menu, location){
			model.forEach(function(element){
			if(element){
				var listItem = document.createElement('li');
				listItem.dataset.id = Object.getOwnPropertyNames(element)[0];
				var textNode = document.createTextNode(element.item || element.subItem);
				var link = document.createElement('a');
				link.appendChild(textNode);

				if(element.subItems) {
					var arrow = document.createElement('span');
					arrow.classList.add('fontawesome-angle-down');
					arrow.dataset.text = 'angle-down';
					link.appendChild(arrow);
					var subMenu = document.createElement('ul');
					subMenu.classList.add('sub-menu');			
					window.createSubMenu(element.subItems, subMenu, listItem);
				}

				listItem.appendChild(link);
				if(subMenu) {
					listItem.appendChild(subMenu);
				}
				menu.appendChild(listItem);
				location.appendChild(menu);
				}
			})
		};
		
/*-------------------------End----------------------------*/
	
/*---------------globall AJAX request function--------------*/	
	
	window.Ajax = function(obj){
		var method = obj.method,
				path = obj.path,
				success = obj.success;
		
		var req = new XMLHttpRequest();
      req.open(method, path);
      req.onreadystatechange = function(aEvt) {
      	if (req.readyState === 4) {
        	if (req.status === 200) {
							var response;
							try {
								response = JSON.parse(req.responseText);
							} catch (e) {
								console.error(e);
							}
					success(response);
        } else {	
            error(req, aEvt);  
					}
				}
			};
         req.send();
	};
	/*-----------------------End-----------------------------*/
})();