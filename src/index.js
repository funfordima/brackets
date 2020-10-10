module.exports = function check(str, bracketsConfig) {
    let result = str;

    for (let i = 0; i < str.length / 2; i++) {
        bracketsConfig.forEach((arr) => {
            const bracketsString = arr.join('');

            while (result.includes(bracketsString)) {
                result = result.replace(bracketsString, '');
            }
        });
    }

    if (result.length !== 0 || result == str) {
        return false;
    } else {
        return true;
    }
};
