 
  //PROBLEM-1

 function anaToVori(ana){
     const vori = ana/16;
     return vori ;
 }

 const quantity = anaToVori(16);
 console.log(quantity);





 //PROBLEM-2

function pandaCost(singara, shomucha, jilapi) {
  let totalPrice =( singara * 7) + (shomucha * 10) + (jilapi * 15);

  return totalPrice;
}
const total = pandaCost(25, 5, 25);
console.log(total);



// PROBLEM-3

function picnicBudget(numbers){
 if(numbers<=100){
    let total = 100*5000;
    return total;
 }
  
 else if(numbers>100 && numbers<=200){
     let firstHundred = 5000;
     let remaining = 4000;
     let total =(5000*100) + (4000*100)
 }

 else if(numbers>100 && numbers<=200 && numbers>200){
    let firstHundred = 5000;
    let secondHundred = 4000;
    let remaining = 3000;

}
}












//PROBLEM-4

function oddFriend(names) {

    for (const element of names) {

      if (element.length % 2 != 0) {
        return element;
      }
    }

  }

  console.log(oddFriend(["Tutul", "Mridul", "Ayan", "Ayaz", "Soyab", "Atif"]));
