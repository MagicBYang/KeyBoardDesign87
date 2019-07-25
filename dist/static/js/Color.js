//rgb转16进制
function rgb2Hex(rgb) {
        let hexColor = '#';
        let reg = /^rgb\((\s*[1-2]?[0-9]?[0-9]{1}\,)(\s*[1-2]?[0-9]?[0-9]{1}\,)(\s*[1-2]?[0-9]?[0-9]{1})\)$/;
        if (reg.test(rgb)) {
            let matches = reg.exec(rgb);
            for (let i = 1; i <= 3; i++) {
                if (parseInt(matches[i]) < 16) {
                    hexColor += '0' + parseInt(matches[i]).toString(16)
                } else {
                    hexColor += parseInt(matches[i]).toString(16);
                }
            }
        }
        return hexColor.toLocaleUpperCase();
}
export {rgb2Hex}