/* ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array
 হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
 */

 const arr = [7, 14, 28, 70, 77, 63, 56, 84];

 const singleArrow = arr.map(x => x/7)
//  console.log(singleArrow)


// lesson: function inside map will return array by default