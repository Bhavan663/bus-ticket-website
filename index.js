let productArray = JSON.parse(localStorage.getItem('values')) || [];
function renderCards() {
    let cards = ``;
    for (let i =0; i < productArray.length; i++) {
        if (productArray[i] != "") {
            let card = `<div class="container "
        style="height: fit-content; margin-top: 10px;font-family: 'Montserrat', sans-serif;  ">
        <div class="row bg-danger-subtle" style="margin-top: 20px;padding-top: 20px;">
            <div class="col-lg-4"
                <p style="font-size: 15px;font-weight: 600;padding-top: 10px;">${productArray[i].travelsname}</p>
            </div>
            <div class="col-lg-1 ">
                <p style="font-weight: 600;font-size: 20px;padding-top: 5px;text-align: center;">${productArray[i].departure}</p>
            </div>
            <div class="col-lg-1" >
                <p style="font-size: 14px;padding-top: 10px; text-align: center;">${productArray[i].duration}</p>
            </div>
            <div class="col-lg-1" >
                <p style="font-size: 20px;font-weight: 600; padding-top: 5px;text-align: center;">${productArray[i].arrival}</p>
            </div>
            <div class="col-lg-1"  style="padding-top: 7px; ">
                <button type="button"
                    style="border-radius: 5px;font-size:13px ; border-color: transparent;background-color: green;color: white; text-align: center;"><i
                        class="fa-solid fa-star"></i>${productArray[i].ratings}</button>
            </div>
            <div class="col-lg-2" >
                <p style="text-align: center;padding-top: 5px;">INR <span
                        style="font-size: 20px;font-weight: 600;">${productArray[i].fare}</span></p>
            </div>
        </div>
        <!---->
        <div class="row bg-danger-subtle" >
            <div class="col-lg-6">
                <p style="font-size: 12px;">${productArray[i].travelstype}</p>
            </div>
            <div class="col-lg-1" >
                <p style="color: red;font-weight: 200;text-align: center;">${productArray[i].date}</p>
            </div>
            <div class="col-lg-3" >
                <p style="font-size: 15px;"><i class="fa-solid fa-users"></i><span
                        style="padding-left: 10px;">${productArray[i].reviewers}</span></p>
            </div>
            <div class="col-lg-2" >
                <p style="font-size: 15px;font-weight: 300;">${productArray[i].seatavailable} Seats available </p>
            </div>
        </div>
    
        <!---->
        <div class="row bg-danger-subtle" >
            
            <div class="col-lg-5 " >
                <p style="font-size: 12px; width: fit-content;float: right;">${productArray[i].boardingpoint}</p>
            </div>
    
            <div class="col-lg-2" >
                <p style="font-size: 12px;float: right; width: fit-content;">${productArray[i].endingpoint}</p>
            </div>
            
            <div class="col-lg-5 ">
                <p style="font-size: 15px;; float: right; font-weight: 300; width: 60%;text-align: center;">${productArray[i].typeofseats} Single</p>
            </div>
        </div>
        <!---->
        <div class="row bg-danger-subtle mb-0">
            <div class="col-lg-2" style="font-size: 12px;">
                <p><i class="fa-solid fa-bottle-water"></i><span><i style="padding-left: 10PX;"
                            class="fa-solid fa-charging-station"></i></span><i style="padding-left: 10px;"
                        class="fa-solid fa-tv"></i><span><i style="padding-left: 10px;"
                            class="fa-solid fa-video"></i></span><span><i style="padding-left: 10px;"
                            class="fa-solid fa-circle-plus"></i></span><span style="padding-left: 8px;">2</span>
                </p>
    
            </div>
        </div>
        <!---->
        <div class="row bg-danger-subtle">
            <div class="col-lg-12 ">
                <button type="button"
                    style="float: right; border-width: 0;color: #fff;background-color: #D84E55;"
                    onclick="window.location.href='bussearch.html';">VIEW SEATS
                </button>
                <button class="remove" onclick="productArray.splice(${i},1);renderCards();localStorage.setItem('values',JSON.stringify(productArray));" >remove</button>
            </div>
        </div>
    
    
    </div>`
            cards += card;
        }

    }
    document.querySelector(".newProduct").innerHTML = cards;
}

function product(travelsname, departure, duration, arrival, ratings, fare, travelstype, date, reviewers, seatavailable, boardingpoint, endingpoint, typeofseats) {
    this.travelsname = travelsname;
    this.departure = departure;
    this.duration = duration;
    this.arrival = arrival;
    this.ratings = ratings;
    this.fare = fare;
    this.travelstype = travelstype;
    this.date = date;
    this.reviewers = reviewers;
    this.seatavailable = seatavailable;
    this.boardingpoint = boardingpoint;
    this.endingpoint = endingpoint;
    this.typeofseats = typeofseats;
}
document.querySelector("#addProduct").addEventListener("click", function () {
    let travelsname = document.querySelector("#travelsname").value;
    let departure = document.querySelector("#departure").value;
    let duration = document.querySelector("#duration").value;
    let arrival = document.querySelector("#arrival").value;
    let ratings = document.querySelector("#ratings").value;
    let fare = document.querySelector("#fare").value;
    let travelstype = document.querySelector("#travelstype").value;
    let date = document.querySelector("#date").value;
    let reviewers = document.querySelector("#reviewers").value;
    let seatavailable = document.querySelector("#seatavailable").value;
    let boardingpoint = document.querySelector("#boardingpoint").value;
    let endingpoint = document.querySelector("#endingpoint").value;
    let typeofseats = document.querySelector("#typeofseats").value;


    let newProduct = new product(travelsname, departure, duration, arrival, ratings, fare, travelstype, date, reviewers, seatavailable, boardingpoint, endingpoint, typeofseats);
    productArray.push(newProduct);
    localStorage.setItem('values', JSON.stringify(productArray));
    renderCards();

})


renderCards();
console.log(JSON.stringify(productArray));




