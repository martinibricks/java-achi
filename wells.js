let name = 'ikechukwu'
console.log(name)


let firstName = 'Martins'
console.log(firstName)

let lastName = 'Achi'
console.log(lastName)

const statement = name +' '+firstName + ' '+lastName
console.log(statement)




const presentation = `Your full name is ${name} ${firstName} ${lastName}`
console.log(presentation)

const appraisal  =`your full is ${name} ${firstName} ${lastName}`
console.log(appraisal)


// arrays


const pupils = ['kate','phina','lisa']
console.log(pupils)


console.log(pupils[0])
pupils.push('evans')

// Getting the size or number of element in an array
console.log(pupils.length)

// Object: Store value in form of key value pair. To create an object use {}
// const user = {
    // firstName: 'Ikechukwu',
    // lastName: 'Achi',
    // email: 'achi@gmail.com',
    // job: 'business developer'
// }


const user={
    firstName: 'ikechukwu',
    lastName : 'Achi',
    Email    : 'martinibricks@gmail.com',
    job      : 'business developer'
}

// Accessing element in the object using bracket notation
console.log(user['Email'])
console.log(user['firstName'])
console.log(user.job)
console.log(user['lastName'])

// Accesing all the values in an object
console.log(Object.values(user))

// Accesing all the keys in an object
console.log(Object.keys(user))

// loop
const sales = [45, 60, 234, 678]
console.log(sales[0])
console.log(sales[1])
console.log(sales[2])
console.log(sales[3])

for (let item of sales){
    console.log(item*2)
}

for (let i = 1; i <= 100; i++){
    console.log(i)
}



for (let i =1; i<=100; i++){
    console.log('Ikechukwu '+i)
}

