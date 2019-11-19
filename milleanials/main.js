const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"

const sentence = `Hi.  My name is ${name}, and I'm ${age} years old.  They say that makes me a ${generationStereotype}.  In ${timeSpan} years I'll be ${futureAge}! I guess that mean I'll be a ${dadJoke} then.  Ha ha!`
console.log(sentence)


// "Hi. My name is Biff, and I'm 30 years old. They say that makes me a millenial. In 25 years I'll be 55! I guess that means I'll be a milleni-old then. Ha ha!"


const myFavoriteFoods = (arr) => {
  let newArray = []
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
    if (element.startsWith("a") || element.startsWith("t")) {
      newArray.push(arr[index])
    }
  }
  return newArray
}


const foodArray = ["pizza", "anchovies", "burgers", "artichokes", "muffins", "french fries", "apples", "tamales", "curry", "tomatoes", "corn", "tamarind"]

myFavoriteFoods(foodArray)