var util = require('../utitl/util');

function getFile(file) {
    return new Promise(function(resolve) {
        fakeAjax(file, resolve);
    });
}


// Request all files at once in
// "parallel" via `getFile(..)`.
//
// Render as each one finishes,
// but only once previous rendering
// is done.

// ???s