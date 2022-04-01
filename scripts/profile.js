

    function checkSpaces(data) {
        var count = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i] == " ") {
                count++;
            }
        }
        return count;
    }
    
    function modifyFullname(data) {
        if (checkSpaces(data) == 1) {
    
            var res = data[0].toUpperCase();
            for (let i = 1; i < data.length; i++) {
                if (data[i] == " ") {
                    res += data[i + 1].toUpperCase()
                    break;
                }
            }
            return res;
        } else {
            res = data[0].toUpperCase();
            for (let j = data.length - 1; j >= 1; j--) {
                if (data[j] == " ") {
                    res += data[j + 1].toUpperCase()
                    break;
                }
            }
            return res;
        }
    }
export{modifyFullname};