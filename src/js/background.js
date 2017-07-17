const KEY_ENABLE = "enable_peep_password";

chrome.storage.sync.set({
  "enable_peep_password": false
}, function () {
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.storage.sync.get(function (result) {
    for (key in result) {
      if (key === KEY_ENABLE) {
        setEnable(!result[KEY_ENABLE])
        return
      }
    }
    setEnable(false)
  })
});

function setEnable(isEnable) {
  chrome.storage.sync.set({
    "enable_peep_password": isEnable
  }, function () {
  });
};

chrome.storage.onChanged.addListener(function (changes, namespace) {
  if (changes[KEY_ENABLE].newValue) {
    chrome.browserAction.setIcon({
      path: "icon/eye_open.png"
    });
  } else {
    chrome.browserAction.setIcon({
      path: "icon/eye_close.png"
    });
  }
});

chrome.tabs.onHighlighted.addListener(function () {
  setEnable(false);
})

chrome.tabs.onUpdated.addListener(function () {
  setEnable(false);
})