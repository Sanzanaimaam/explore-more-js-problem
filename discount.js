/*
if ticket numbers is less than less than 100, per ticket 100,
if ticket numbers is more than 100, but less than 200 first 100 ticket will be 100
rest ticket will be 90 taka per price
if you purchase more than 200 tickets first 100 100 tk, 101-200--- 90 taka;
200---70tk
*/
function ticketPrice(quantity){
    const first100price=100;
    const second100price=90;
    // const moreThan200=70;
    if(quantity<=100){
        const ticket=quantity*first100price; 
        return ticket;    
    }
    else if (quantity<=200){
        const first100ticket=100*first100price;
        const ticketLeft=ticketQuantity-100;
        const restTicketPrice=ticketLeft*second100price;
        const totalAmount=first100ticket+restTicketPrice;
        return totalAmount;

    }
    else{

        const first100ticketPrice=100*first100price;
        const second100TicketPrice=ticketQuantity-100;
        const totalTicketPrice=second100TicketPrice*second100price;
        const thirdTicketLeft=ticketQuantity-200;
        const thirdTicketPrice=thirdTicketLeft*70;
        const costOfAllTicket=first100ticketPrice+totalTicketPrice+thirdTicketPrice
        return costOfAllTicket;
    }
    
}
const ticketQuantity=700;
const totalPrice=ticketPrice(ticketQuantity)
console.log(totalPrice)