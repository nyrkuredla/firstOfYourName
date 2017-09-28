const _ = require('lodash');
// const characters = require('./characterdata.js')
//
//TITLES FUNCTIONS

//functions for generating initial titles array
let titlesArr = [];
let titles = [];
function getUniqueTitles () {
  characters.forEach(function(item){
  if (item.titles) {
    item.titles.forEach((function(item) {
    titlesArr.push(item)
  })
)}
})
  titlesArr = _.uniq(titlesArr)
  return titlesArr;
}

// function createTitleObjects () {
//   let count = 1;
//   getUniqueTitles()
//   titlesArr.forEach(function(item) {
//     let titlesObj = { id: count, title: "", epic: false };
//     titlesObj.title=item;
//     titles.push(titlesObj)
//     count += 1;
//   })
//   return titles
// }
//
// console.log(createTitleObjects())
//
// //TRIVIA FUNCTIONS
