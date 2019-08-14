console.log(`module`);
/* Approach1 */
function add(first, second){return first + second;}

function sub(first, second){return first + second;}

function multiply(first, second){return first + second;}

// module.exports.addMethod = add;

module.exports = {
    addMethod_1: add,
    subMethod_1: sub,
    mulMethod_1: multiply
}

console.log(module)
