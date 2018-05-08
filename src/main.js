import "./index.css";
import Promise from "bluebird";

const promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
    setTimeout(() => {
        console.log(2)
    }, 0);
})
promise.then(() => {
    setTimeout(() => {
        console.log(5)
    }, 0);
    console.log(3)
})
console.log(4)
setTimeout(() => {
    console.log(6)
}, 0);