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
  }, 
}; 

var mobFlg = isMobile.any(); 

var contentSize = { 
  isNarrow: function(){ 
  if (!mobFlg) { 
    var thisElement = document.querySelector("#docWrap"); 
    var aspect = document.documentElement.clientWidth/document.documentElement.clientHeight; 

    if (aspect <= 0.7) { 
      if(thisElement.classList.contains("outerFull")){thisElement.classList.remove("outerFull");thisElement.classList.add("outerSmall");} 
    } else { 
      if(thisElement.classList.contains("outerSmall")){thisElement.classList.remove("outerSmall");thisElement.classList.add("outerFull");} 
      }; 
    }; 
  }, 

  initWrapper: function(){ 
    var thisElement = document.querySelector("#docWrap"); 
    var aspect = document.documentElement.clientWidth/document.documentElement.clientHeight; 
    if (mobFlg || aspect <= 0.7){ 
      thisElement.classList.add("outerSmall"); 
    } else { 
      thisElement.classList.add("outerFull"); 
    }; 
  } 
}; 

function rltiveScaling(base,toScale){
  var b = document.getElementById(toScale); 
  a = document.getElementById(base);
  if (a.offsetWidth*.9 < 350) {
    z = (a.offsetWidth*.9)/350; 
    b.width = b.offsetWidth*(a.offsetWidth/b.offsetWidth);
    b.height = b.offsetHeight*(a.offsetWidth/b.offsetWidth);
    s = "-ms-zoom: "+z+"; -moz-transform: scale("+z+"); -moz-transform-origin: 0 0; -o-transform: scale("+z+"); -o-transform-origin: 0 0; -webkit-transform: scale("+z+"); -webkit-transform-origin: 0 0;"; 
    if (typeof b.setAttribute === "function") b.setAttribute('style', s); 
    else if (typeof b.style.setAttribute === "object") b.style.setAttribute('cssText', s); 
  }; 
};

function scaleIframe(){
  return rltiveScaling("mainContent","contactIframe");
};

window.onresize = contentSize.isNarrow; 

