window.addEventListener('load', function() {
  var markupExample = document.querySelector('.markup-example');
  var toast = document.querySelector('.notification-toast');

  var toastTimeout;
  function showToast() {
    toast.style.visibility = 'visible';
    requestAnimationFrame(function() {
      toast.style.opacity = 1;
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(function() {
        hideToast();
      }, 2000);
    });
  }

  function hideToast() {
    toast.style.opacity = 0;
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function() {
      toast.style.visibility = 'hidden';
    }, 500);
  }

  window.addEventListener('click', function(event) {
    var icon = event.target.closest('.spectrum-Icon');
    if (icon) {
      var iconMarkup = icon.outerHTML.replace(/^ +/gm, '');
      iconMarkup = iconMarkup.replace('<use', '  <use');
      iconMarkup = iconMarkup.replace(' xmlns:xlink="http://www.w3.org/1999/xlink"', '');
      markupExample.value = iconMarkup;

      try {
        markupExample.select();
        document.execCommand('copy');
        markupExample.blur();

        showToast();
      }
      catch(error) {
        console.error('Could not copy code to clipboard: ' + error);
      }
    }
  });
});
