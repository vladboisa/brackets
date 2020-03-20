module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < str.length; i++) {
        bracketsConfig.forEach(el => {
            let pairBracket = el.join('');
            let indexstr = str.indexOf(el);
            if (indexstr !== -1) {
                str = str.replace(pairBracket, '');
            }
        });
    }
    return !str;
}
