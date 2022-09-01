/* ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।  */


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


// calling the method property
const studentResult = student.resultStatistics();
console.log(studentResult)