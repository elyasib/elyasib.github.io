var isMobile = { 
  Android: function() { 
    return navigator.userAgent.match(/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i); 
  }, 
  BlackBerry: function() { 
    return navigator.userAgent.match(/BlackBerry|BB10/i); 
  }, 
  IPhone: function() { 
    return navigator.userAgent.match(/iPhone|iPod/i); 
  }, 
  Windows: function() { 
    return navigator.userAgent.match(/IEMobile/i); 
  }, 
  OperaMini: function() { 
    return navigator.userAgent.match(/Opera Mini/i); 
  }, 
  FFoxMobile: function() { 
    return navigator.userAgent.match(/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i); 
  }, 
  any: function() { 
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IPhone() || isMobile.Windows() || isMobile.OperaMini() || isMobile.FFoxMobile()); 
  } 
}; 


var contentSize = {
  isNarrow: function(){
    var thisElement = document.querySelector("#docWrap"); 
    var aspect = document.documentElement.clientWidth/document.documentElement.clientHeight; 

    if (aspect <= 0.7 && !isMobile.any()) { 
      if(thisElement.classList.contains("outerFull")){thisElement.classList.remove("outerFull");thisElement.classList.add("outerSmall");} 
      wSize.setAttribute("value","narrow"); 
    } else { 
      if(thisElement.classList.contains("outerSmall")){thisElement.classList.remove("outerSmall");thisElement.classList.add("outerFull");} 
      wSize.setAttribute("value","wide"); 
    };
  },

  initWrapper: function(){ 
    //alert("hola");
    var thisElement = document.querySelector("#docWrap"); 
    var aspect = document.documentElement.clientWidth/document.documentElement.clientHeight;
    if (isMobile.any() || aspect <= 0.7){ 
      thisElement.classList.add("outerSmall"); 
    } else { 
      //alert("hola");
      thisElement.classList.add("outerFull"); 
    }; 
  }
};

window.onresize = contentSize.isNarrow; 