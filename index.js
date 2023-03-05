const Home = document.getElementById("home-el")
const Men = document.getElementById("men-el")
const Women = document.getElementById("women-el")
const Kids = document.getElementById("kids-el")
const Accessories = document.getElementById("accessories-el")
const Introduction = document.getElementById("introduction-el")



Home.innerText = "Home"
Men.innerText = "Men"
Women.innerText ="Women"
Kids.innerText = "Kids"
Accessories.innerText= "Accessories"
Introduction.innerText = "Enjoy shopping with us"

function Student(name, age, university, country){
    this.name = name
    this.age = age
    this.university = university
    this.country = country

    Student.prototype.FirstStudent = function(){
        return this.name + this.age + this.university + this.university
        
    }
}

const img = document.querySelectorAll("img")

img[0].src="images/pexels-frank-k-1820656.jpg"
img[1].src="images/pexels-godisable-jacob-914668.jpg"
img[2].src="images/pexels-godisable-jacob-914668.jpg"
img[3].src="images/pexels-thnh-phng-3611797.jpg"
img[4].src="images/pexels-thnh-phng-3611797.jpg"
img[5].src="images/pexels-thnh-phng-3611797.jpg"
img[6].src="images/pexels-thnh-phng-3611797.jpg"
img[7].src="images/pexels-thnh-phng-3611797.jpg"
img[8].src="images/clothing-brand.png"




//let Student1 = new Student("Bernard Malunga", 24, "Nagoya University", "Malawi")
//let Student2 = new Student("Benson Malunga", 24, "Kwansei Gakuin University", "Sierra Leone")
//NameEl.innerText = "Name:" +" " + Student1.name
//AgeEl.innerText = "Age:"  +" " + Student1.age
//UniversityEl.innerText = "University Name:"   +" "+ Student1.university
//CountryEl.innerText = "country:"  +" " + Student1.country


    //let Time = new Date
   // let hr = Time.getHours()
  //  let min = Time.getMinutes()
  //  let secs = Time.getMilliseconds()

   // const TimeEl = document.getElementById("time-el")
    //TimeEl.innerHTML = hr+":"+min

    //let Day = new Date
    //let day = Day.getDate()
    //let month = Day.getMonth()+1
    //let year = Day.getFullYear()

   // const DayEl = document.getElementById("day-el")
   // DayEl.innerText = day+"/"+month+"/"+year



  




