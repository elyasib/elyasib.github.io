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


function slctWrprClss() { 
  var thisWrpr = document.querySelector("#docWrap");                                     
  var aspect = document.documentElement.clientWidth/document.documentElement.clientHeight; 
  if (mobFlg) { 
    if (!thisWrpr.classList.contains("outerSmall")) { 
      thisWrpr.classList.add("outerSmall"); 
    }; 
  }else {
    if (aspect <= 0.7) {
      if(thisWrpr.classList.contains("outerFull")) { 
        thisWrpr.classList.remove("outerFull"); 
        thisWrpr.classList.add("outerSmall"); 
      } else { 
        if(!thisWrpr.classList.contains("outerSmall")) {thisWrpr.classList.add("outerSmall");}; 
      }; 
    }else {
      if(thisWrpr.classList.contains("outerSmall")) { 
        thisWrpr.classList.remove("outerSmall"); 
        thisWrpr.classList.add("outerFull"); 
      } else { 
        if(!thisWrpr.classList.contains("outerFull")) {thisWrpr.classList.add("outerFull");}; 
      };
    };
  }; 
}; 

function placeContent(header,content) {
  s = document.getElementById(header).offsetHeight+"px";
  document.getElementById(content).style.marginTop = s;
}

            


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

function scaleContactPage(){ 
  rltiveScaling("mainContent","contactIframe"); 
  slctWrprClss(); 
}; 

function scalePage(){ 
  slctWrprClss(); 
}; 

