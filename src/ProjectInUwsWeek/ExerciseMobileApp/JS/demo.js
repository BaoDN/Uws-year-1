var aNumber = 10;
console.log("aNumber is:" + typeof (aNumber));

var trueFalse = true;
console.log("trueFalse is: " + typeof (trueFalse));

if (aNumber === "10") {
    console.log("anumber is 10");
} else {
    console.log("you can not compare between number and string");
}

function showMsg(msg) {
    console.log("showMsg: " + msg);

}

function showMsg(msg, more) {
    if (more) {
        console.log("( msg, more )showMsg + " + msg + more);
    } else {
        console.log("showMsg + " + msg);
    }
}
showMsg("this is the msg in showMsg function");
showMsg("this is the msg in showMsg function", "and even more information");

var showIt = function (msg) {
    console.log(msg);
}
showIt("some message");



function showItThen(msg, callback) {
    showIt(msg);
    callback();
}
showItThen("showItThen Called", function () {
    console.log("callback called");
});

//Scopes and Closures
var inGlobal = true;
function testme() {
    console.log("textMe(): " + inGlobal);
    var someMsg = "some Message";
    showItThen("with Closure", function () {
        showIt("testMe With Closure: " + someMsg);
    });
}
testme();


//Object and Arrays
var result = {
    name: "jquery",
    language: "javascript",
    score: 4.5,
    showLog: function () {

    },
    owner: {
        login: "Bao DN",
        id: 123456
    }
};
result.phoneNumber = "123-456-789";
console.log(result.phoneNumber);

// Arrays
var results = [{
    name: "jquery",
    language: "javascript",
    score: 4.5,
    showLog: function () {

    },
    owner: {
        login: "Bao DN",
        id: 123456
    }
},
 {
     name: "jquery",
     language: "javascript",
     score: 3.5,
     showLog: function () {

     },
     owner: {
         login: "DUY NB",
         id: 2222222
     }
 }];

//results.push(result[2]);
//results.push({
//    name: "dummy project",
//    score: 5,
//    owner: {
//        login: "Nguyen",
//        id: 2222222
//    }
//});

console.log(results.length);
console.log(results[0].name);

for (var x = 0 ; x < results.length ; x++) {
    var result = results[x];
   // if (result.score < 4) break;
    console.log(result.owner.login);
}
