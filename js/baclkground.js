window.onmouseup = function(e) {
  if (!e.button === 2) {
    return;
  }
  var message = getSelectionMessage();
  sendSelectionMessage(message);
};