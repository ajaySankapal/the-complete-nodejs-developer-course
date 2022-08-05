const square = function (x) {
  return x * x;
};
console.log(square(5));

//arrow function

const square1 = (x) => x * x;

console.log(square1(10));

//arrow function don't bind their own this keyword

const event = {
  name: "birthday party",
  guest: ["Durgesh", "Vanshu", "Adnan"],
  printGuestList() {
    // const that = this;
    console.log("GuestList of the event " + this.name);
    //this arrow function is avoiding the functions own binding of "this"
    this.guest.forEach((guest) => {
      console.log(guest + " is attending the event " + this.name);
    });
  },
};
console.log(event.printGuestList()); //Guestlist of the event undefined
