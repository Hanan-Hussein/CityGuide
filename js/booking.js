function Booking(firstName, lastName, phone , email, destination, startDate, endDate){
    this.firstName = firstName;
    this.lastName =lastName;
    this.phone = phone;
    this.email = email;
    this.destination = destination;
    this.startDate = startDate;
    this.endDate = endDate
}

const myBookings = [];
const myBooking = ""

$(document).ready(function(){
    $(".tour-booking").on('click', (e)=>{
        e.preventDefault();
        let firstName = $("#firs-name").val();
        let lastName = $("#last-name").val();
        let phone = $("#tel").val();
        let email = $("#email").val();
        let destination = $("#destination").val();
        let startDate = $("start-date").val();
        let endDate = new Date($("end-date").val());
        const myBooking = new Booking(firstName,lastName,phone,email,destination,startDate,endDate);
        console.log(startDate);
        let markup = `<tr><td>${myBooking.phone}</td><td>${myBooking.email}</td><td>${myBooking.destination}</td><td>${myBooking.startDate}</td><td>${myBooking.endDate}</td></tr>`
        console.log(markup);
        $("table tbody").append(markup);
        myBookings.push(myBooking);
    })

    
})