 /*--פונקציית הגלריה-- */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
/*--פונקציית השליחה-- */
function shliha() {
    var validity = validateEmail(document.getElementById("email").value);
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var topicselect = document.getElementById("topicselect").value;
    var content = document.getElementById("content").value;
    if (email == "" && phonenumber.length==10) {
        if (email == ""||fullname == "" || phonenumber == "" || topicselect == "" || content == "") {
            alert("יש למלא את כל השדות הדרושים");
        }
    }  
    else {
        if (validity) {   //אם המייל תקין אז תבדוק את יתר השדות
            if (phonenumber.length != 10) {
                alert("הזן מספר טלפון תקין באורך 10 ספרות");
            }
            else {
                if (fullname == "" || phonenumber == "" || topicselect == "" || content == "") {
                    alert("יש למלא את כל השדות הדרושים");
                }
                else {
                    alert("הטופס נשלח בהצלחה");
                }
            } 
        }
        else {
            alert('הזן מייל תקין מהצורה name@___.com');
        }
    }
    
}


function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(emailField) == false) {
        return false;
    }
    return true;
}

function changeImage() {

    var image = document.getElementById('momworking');
    if (image.src.match("mompainting")) {
        image.src = "images/momworking.jpg";
        image.alt = "ליאת עובדת ומרצה בפני אנשים";

    } else {
        image.src = "images/mompainting.jpg";
        image.alt = "ליאת מציירת";
    }
}