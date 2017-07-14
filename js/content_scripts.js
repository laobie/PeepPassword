window.onmouseup = function (e) {
    // console.log(e);
    console.log(e.target.value)
    // console.log(e.target.classList)
    if (e.target.type === 'password') {
        e.target.type = 'text'
        e.target.classList.add('WhatPasswordFuck')
    } else if (e.target.classList.contains('WhatPasswordFuck')) {
        e.target.classList.remove('WhatPasswordFuck')
        e.target.type = 'password'
    }
};