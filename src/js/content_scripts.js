const KEY_ENABLE = "enable_peep_password";
var isEnable = false;

chrome.storage.onChanged.addListener(function (changes, namespace) {
    window.isEnable = changes[KEY_ENABLE].newValue;
    var inputs = document.getElementsByTagName('Input');
    for (var i = 0; i < inputs.length; i++) {
        var element = inputs[i];
        if (isEnable) {
            if (element.type.toUpperCase() == 'PASSWORD') {
                element.type = "text"
                element.classList.add('WhatFuckPassword');
            }
        } else if (element.classList.contains('WhatFuckPassword')) {
            element.type = "password"
            element.classList.remove('WhatFuckPassword');
        }
    }
});