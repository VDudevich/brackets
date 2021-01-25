module.exports = function check(str, bracketsConfig) {
    let arrayStack = [];
    let len;
    let isAlreadyAdded = false;
    for (let i = 0; i < str.length; i++) {
        // camparing with config
        for (let j = 0; j < bracketsConfig.length; j++) {
            // checking if bracket of str is among open brackets and adding it to the stack 
            if (str[i] === bracketsConfig[j][0]) {
                /* if open and closed brackets are not the same then just push and break,
                   otherwise push and set isAlreadyAdded to true and break */
                if (bracketsConfig[j][0] != bracketsConfig[j][1]) {
                    arrayStack.push(str[i]);
                    break;
                } else if (!isAlreadyAdded) {
                    arrayStack.push(str[i]);
                    isAlreadyAdded = true;
                    break;
                }
            }
            // check if bracket of str is among closed barckets
            if (str[i] === bracketsConfig[j][1]) {
                len = arrayStack.length;
                // if on this stage stack is empty then it's done, sequence is not correct 
                if (arrayStack.length === 0) {
                    return false;
                }
                /* if the last bracket of the stack and open bracket of config are the same, then remove the bracket from the stack
                   also if open and closed brackets are the same in config => set isAlreadyAdded to flase*/
                if (arrayStack[len - 1] === bracketsConfig[j][0]) {
                    arrayStack.pop();
                    if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
                        isAlreadyAdded = false;
                    }
                    break;
                }
            }
        }
    }
    return arrayStack.length === 0 ? true : false;
}
