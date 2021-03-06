// addEventListener is suported in IE9+
// thats the easiest way to detect IE8 and older
if( !document.addEventListener ){
  var iefMessage = 'Sorry but this website is unavailable on Internet Explorer 8, apologies for any inconvenience this may have caused. We highly recommend that you upgrade to one of the following browsers listed below by clicking on the suitable link. Get ready for a journey you won’t forget.';

  var iefFallback = ['<div class="ief"><div class="ief__box"><p class="ief__text">' + iefMessage + '</p><ul class="ief__list"><li class="ief__item"><a class="ief__link ief__link--chrome" href="http://www.google.com/chrome"></a></li><li class="ief__item"><a class="ief__link ief__link--firefox" href="http://www.mozilla.org/firefox/new/"></a></li><li class="ief__item"><a class="ief__link ief__link--safari" href="http://support.apple.com/downloads/#safari"></a></li><li class="ief__item"><a class="ief__link ief__link--ie" href="http://windows.microsoft.com/en-us/internet-explorer/download-ie"></a></li></ul></div></div>'];

  document.body.innerHTML += iefFallback;
}
