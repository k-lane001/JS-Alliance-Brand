var customerName = 'Alliance ';

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;

    let header = document.getElementById('tm-header')
    header.textContent = customerName;

    let introheader = document.getElementById('introheader')
    introheader.textContent = customerName;

};
function toggleColors() {

    let el = document.querySelectorAll('.tm-white-rect')
    let el2 = document.querySelectorAll('.tm-color-primary')

    for(i=0; i<el.length; i++) {
        el[i].classList.add('tm-blue-rect');
        el[i].classList.remove('tm-white-rect');
    }
    for(i=0; i<el2.length; i++) {
        el2[i].classList.add('tm-color-green');
        el2[i].classList.remove('tm-color-primary');
    }
};


//<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
function hideElement() {

    let links = document.querySelector('.tm-social-links')
    links.style.visibility = 'none';

}

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text-->
    function addText() {

        let intropara1 = document.getElementById('intropara1')
        intropara1.textContent = 'Alliance was founded in 1931 by Albert Daniels';

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text-->
        let intropara2 = document.getElementById('intropara2')
        intropara2.textContent = 'The company is a leader in P.C. Manufacturing';
     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: change about text-->
        let aboutpara1 = document.getElementById('aboutpara1')
        aboutpara1.textContent = 'We deliver the best service this side of creation';
    //<p id="aboutpara2"> <!--todo: change about text-->
        let aboutpara2 = document.getElementById('aboutpara2')
        aboutpara2.textContent = 'Our motto is satisfaction guaranteed';
    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company address/phone number text-->
        let addresspara = document.getElementById('addresspara')
        addresspara.textContent = '1-800-565-5656';
    };

