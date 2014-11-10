function selectWrapper(element){
	var thisElement = document.querySelector(element);
	if (isMobile.any()){
			alert(element);
	  thisElement.classList.add("outerSmall");
	  alert(headerv.classList);
	} else {
			alert(element);
	  thisElement.classList.add("outerFull");
	  alert(headerv.classList);
	}
	;
};
