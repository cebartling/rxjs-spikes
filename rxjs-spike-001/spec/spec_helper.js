'use strict';

window.unescapeString = function (input) {
    return $('<div/>').html(input).text()
};