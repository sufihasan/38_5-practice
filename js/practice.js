// console.log('ok practice js');

const prob1 = () => {

    console.log('number1');
    // console.log('number2');

    setTimeout(() => {
        console.log('number2');
    }, 3500);

    console.log('number3');
}

// prob1();

// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। 
//যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 
const prob2 = () => {

    // let person = prompt("Please enter your name", "Harry Potter");
    let numberString = prompt("Please enter a number", "");
    console.log(numberString);

    const number = parseInt(numberString);
    console.log(number);

    const totalNumber = number + 200;

    console.log(totalNumber);

    alert(`The total Number is: ${totalNumber}`);
}

// prob2();

// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও।
//যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 

const problem3 = () => {

    const confirmOpinion = confirm('Are you going to picnic ?');
    console.log(confirmOpinion);

    if (confirmOpinion === true) {

        console.log(location.href);
    }


}

// problem3();






