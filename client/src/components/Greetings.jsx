import React from 'react'
import "./assets/Greetings.css"

function Greetings() {

    function currentTime() {

        const today = new Date();
        let hrs = today.getHours();
        let greet = "";
        let day = today.getDay();
        const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
        let month = today.toLocaleString('default', { month: "long" });
        let date = today.getDate();
        let year = today.getFullYear();
        let time = today.toLocaleTimeString();
    
        if (hrs < 12) {
            greet = "Good Morning!";
        }
        else if (hrs >= 12 && hrs < 17) {
            greet = "Good Afternoon!";
        }
        else if (hrs >= 17 && hrs < 24) {
            greet = "Good Evening!";
        }
        document.querySelector(".greeting-text").innerHTML = greet;
        document.querySelector(".day-text").innerHTML = dayList[day];
        document.querySelector(".date-text").innerHTML = `${month} ${date}, ${year}, ${time}`;
    
    }
    setInterval(currentTime, 1000);

  return (
    <div className="date-section">
    <div className="greetings">
        <h1 className="greeting-text">Good Morning!</h1>
        <h4 className="secondary-text">Welcome to the T&P Cell</h4>
    </div>
    <div className="gcet">
        <h1>By GCET</h1>
    </div>
    <div className="date">
        <h1 className="day-text">Monday</h1>
        <h4 className="date-text secondary-text">April 25, 2024</h4>

    </div>

</div>
  )
}

export default Greetings