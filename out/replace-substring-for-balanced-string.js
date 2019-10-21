/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    folder = folder.sort();
    let output = [];
    for (let i = 0; i < folder.length; i++) {
        let contains = false;
        let splitPath = folder[i].split("/");
        let folderPath = "";
        let elementsToRemove = [];
        for (let j = 1; j < splitPath.length; j++) {
            folderPath = folderPath + "/" + splitPath[j];
            if (output.includes(folderPath)) {
                contains = true;
                break;
            }
        }
        if (!contains)
            output.push(folder[i]);
    }
    return output;
};
console.log(removeSubfolders(["/aa/ab/ac/ae", "/aa/ab/af/ag", "/ap/aq/ar/as", "/ap/aq/ar", "/ap/ax/ay/az", "/ap", "/ap/aq/ar/at", "/aa/ab/af/ah", "/aa/ai/aj/ak", "/aa/ai/am/ao"]));
//# sourceMappingURL=replace-substring-for-balanced-string.js.map