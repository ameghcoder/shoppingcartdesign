const init = () => {


    const summaryButton = document.querySelectorAll('.summary-button');
    const detailsBox = document.querySelectorAll('.details-box');
    let tempId = 0;
    summaryButton.forEach(btn => {
        btn.addEventListener("click", (e) => {
            tempId = e.target.getAttribute('data-id');
            detailsBox.forEach(box => {
                if(box.getAttribute('data-id') == tempId){
                    if(box.getAttribute('open') == 'true'){
                        box.removeAttribute('style');
                        box.removeAttribute('open');
                    } else{
                        box.style.height = "auto";
                        box.style.padding = "12px";
                        box.setAttribute('open', 'true');
                    }
                } else{
                    box.removeAttribute('style');
                }
            })
        })
    })

    const imgPreview = document.querySelector('.imgPreview');
    const smallImages = document.querySelectorAll('.showImageBtn');
    smallImages.forEach(btn => {
        btn.addEventListener("click", (e) => {
            imgPreview.setAttribute('src', e.target.getAttribute('src'));
            smallImages.forEach(sBtn => {
                sBtn.classList.remove('activeBorder');
            })
            
        })
    })

    // change images
    const changeToBlue = document.getElementById('changeToBlue');
    const changeToSkin = document.getElementById('changeToSkin');
    const changeToBorderBlue = document.getElementById('changeToBorderForBlue');
    const changeToBorderSkin = document.getElementById('changeToBorderForSkin');
    changeToBlue.addEventListener("click", () => {
        smallImages.forEach(btn => {
            btn.setAttribute('src', btn.getAttribute('data-blue-src'));
        })
        changeToBorderBlue.classList.add('activeBorder');
        changeToBorderSkin.classList.remove('activeBorder');
    })
    changeToSkin.addEventListener("click", () => {
        smallImages.forEach(btn => {
            btn.setAttribute('src', btn.getAttribute('data-skin-src'));
        })
        changeToBorderBlue.classList.remove('activeBorder');
        changeToBorderSkin.classList.add('activeBorder');
    })

    const addToCart = document.getElementById('addToCart');
    const badgeNumber = document.getElementById('badge-counter');
    addToCart.addEventListener('click', () => {
        badgeNumber.style.display = "block";
        if(localStorage.getItem('addToCart-glass') != null){
            let tempcount = parseInt(localStorage.getItem('addToCart-glass')) + 1;
            badgeNumber.innerHTML = tempcount;
            localStorage.setItem('addToCart-glass', tempcount);
        } else{
            badgeNumber.innerHTML = 1;
            localStorage.setItem('addToCart-glass', 1);
        }
    })

    if(localStorage.getItem('addToCart-glass') != null){
        badgeNumber.innerHTML = parseInt(localStorage.getItem('addToCart-glass'));
    }

    const changeMode = document.getElementById('changeMode');
    const _Body = document.body;
    changeMode.addEventListener('click', () => {
        if(_Body.getAttribute('data-theme') == 'light'){
            changeMode.children[0].classList.add('left-6');
            changeMode.children[0].classList.remove('left-0');
            _Body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else{
            changeMode.children[0].classList.add('left-0');
            changeMode.children[0].classList.remove('left-6');
            _Body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    })
    if(localStorage.getItem('theme') != null){
        if(localStorage.getItem('theme') == 'dark'){
            changeMode.children[0].classList.add('left-6');
            changeMode.children[0].classList.remove('left-0');
            _Body.setAttribute('data-theme', 'dark');
        } else{
            changeMode.children[0].classList.add('left-0');
            changeMode.children[0].classList.remove('left-6');
            _Body.setAttribute('data-theme', 'light');
        }
    }
}

document.readyState == "interactive" ? init() : document.addEventListener('DOMContentLoaded', () => init());