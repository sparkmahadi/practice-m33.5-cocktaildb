/* ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে। */

// object destructuring
const {section, group, ...rest} = {
    class: 10,
    group: 'sciece',
    section: 'A',
    roll: 38,
    result: 4.89,
    behaviour: 'Very good'};
//   console.log(section, group, rest)

//   array destructuring
const [a, b, ...r] = [12, 45, 21, 65, 98];
// console.log(a,b,r)