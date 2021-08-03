export function numberCheck(num) {
    let numberReg1 = /^(1[3-9]\d{9})(;(1[3-9]\d{9}))/;
    let numberReg2 = /^(1[3-9]\d{9})/;
    let splitArray = [];

    if (numberReg1.test(num)|numberReg2.test(num)) {
        if (num.indexOf(';') != -1) {
            splitArray = num.split(';');
        } else {
            splitArray.push(num);
        }
        return splitArray;
    } else {
        return false
    }
}