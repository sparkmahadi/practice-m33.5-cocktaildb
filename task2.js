/* ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 
 */

// object from task1
const student = {
    class: 10,
    group: 'sciece',
    section: 'A',
    roll: 38,
    result: 4.89,
    behaviour: 'Very good',
    parents:{
        father: 'Mr. X',
        mother: 'Mrs. X',
        familyTitle: 'Chowdhury',
    },
    sports: ['cricket', 'football', 'badminton', 'running','swimming','long jump'],
    resultStatistics: function(){
        const firstTerm = '80%';
        const secondTerm = '70%';
        const finalTerm = '90%';

        const average = (parseFloat(firstTerm) + parseFloat(secondTerm) + parseFloat(finalTerm))/3;
        return `His/Her result is ${this.result} with average of ${average}%`;
    }
}

const string = `first property is father's name ${student.parents.father}, 
second is ${student.sports[1]}, and 
third is '${student.resultStatistics()}'`;
console.log(string)