const btn = document.querySelector('.j-btn-test');
const icon = document.getElementById('icon');

const iconPic1 = '<svg xmlns="http://www.w3.org/2000/svg" width="16" id="icon" height="16" fill="currentColor"class="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z" /></svg>';
const iconPic2 = '<svg xmlns="http://www.w3.org/2000/svg" width="16" id="icon" height="16" fill="currentColor" class="bi bi-arrow-down-left-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z"/></svg>'

let a = true;

btn.addEventListener('click', () => {
    console.log(icon)
    console.log(icon.outerHTML)
    if (a) {
        icon.innerHTML = iconPic2;
        a = false;
    } else {
        icon.innerHTML = iconPic1;
        a = true;
    }
    // icon.remove();

    // if (icon.outerHTML.search("M16")) {
    //     icon.remove();
    //     icon.innerHTML = iconPic2;
    //     console.log("dddd")
    // } else if (icon.outerHTML.search("M1")) {
    //     icon.remove();
    //     icon.innerHTML = iconPic1;
    //     console.log("dddd2")
    // }


});