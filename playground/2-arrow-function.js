// const square = function (x) {
//     return x * x 
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(3))

// Create object event
const event = {
    name: 'Birthday Party',
    guestList: ['Evelina', 'Marialena', 'Dimtris', 'Vaggelis'],
    printGuestList() {
        

        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)


        })
    }
}

event.printGuestList()