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

