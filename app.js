
//----------------destructuring of nested array---------------- */

const student = ["java", "phython", "php", "mongodb", "magento", ["1", "2", "3", "4", "5"]]
const [java, phython, php, mongodb, magento, [one, two, three, four, five]] = student;
console.log(one, phython, two, php);

//-----------------extract keys from object------------------------

const student = {
    name: 'huzaifa',
    experience:'2 year',
    profession: 'mobile app developer',

  };
  console.log(Object.keys(student));

  //------------------extract values from object-----------------------

const student = {
    name: 'huzaifa',
    experience: '2 year',
    profession: 'mobile app developer',

};

  console.log(Object.values(student));
