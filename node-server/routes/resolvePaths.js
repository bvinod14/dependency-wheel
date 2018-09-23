//TO-DO: need to implement a way to detect production or devmode.
const prod = false;
const dist = prod ? "/dist/" : "/dev-dist/";

/**
 * the function resolves the path required for production or development
 * mode, additionally adds if these are css file it will add css path to it
 * @param {Array} arr 
 * @param {String} resolveTo  parent directory(folder) name
 * @param {String} fileType   pass the argument if it is css
 */
function resolvePath(arr, resolveTo, fileType){
  resolveTo = resolveTo ? resolveTo + '/' : '';
  fileType = fileType === 'css' ? 'css/' : '';

  var resolvedArr =  arr.map(function(fileName){
    return dist + fileType + resolveTo  + fileName
  });

  return resolvedArr;
}

module.exports = resolvePath;


