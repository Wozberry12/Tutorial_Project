
//Begin script for index.html
$(document).ready(function () {
    var accordArray = document.getElementsByClassName("accordion");

    console.log(accordArray);
    for (var i = 0; i < accordArray.length; i++) {
        accordArray[i].addEventListener("click", function () {
            //Make Active when Clicked//vice versa
            this.classList.toggle("active");

            var details = this.nextElementSibling;
            if (details.style.display === "block") {
                details.style.display = "none";
            } else {
                details.style.display = "block";
            }
        });
    }
});
