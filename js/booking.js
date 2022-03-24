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

$(document).ready(function(){
    $(".tour-booking").on('click', (e)=>{
        e.preventDefault();
        let firstName = $("#firs-name").val();
        let lastName = $("#last-name").val();
        let phone = $("#tel").val();
        let email = $("#email").val();
        let destination = $("#destination").val();
        let startDate = $("start-date").val();
        let endDate = $("end-date").val();
        const bookedTour = new Booking(firstName,lastName,phone,email,destination,startDate,endDate);
        myBookings.push(bookedTour);
    })

    $(".tour-booking").on('click',()=>{
        
    })
})