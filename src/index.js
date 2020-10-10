module.exports = function reverse(n) {
    let p = String(n);
    if (p[0] === "-") {
        p = p.slice(1);
    }
    p2 = p.split("").reverse().join("");
    return Number(p2);
};
