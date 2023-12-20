// !navbar 

const list = document.querySelectorAll('.list');

function activeLink() {

    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));












// !input


const usernameKayit = document.getElementById('usernameKayit')
const mailKayit = document.getElementById('mailKayit')
const passwordKayit = document.getElementById('passwordKayit')
const btnKayit = document.getElementById('btnKayit')





const usernameGiris = document.getElementById('usernameKayit')
const mailGiris = document.getElementById('mailGiris')
const passwordGiris = document.getElementById('passwordGiris')
const btnGiris = document.getElementById('btnGiris')




const signInBtn = document.getElementById('signIn')
const signUpBtn = document.getElementById('signUp')
const firstForm = document.getElementById('form1')
const secondForm = document.getElementById('form2')
const container = document.querySelector('.container')
signInBtn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
})

signUpBtn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
})

function ilkCalisacak() {
    let kayitlilar = JSON.parse(localStorage.getItem('kayit'))
    if (!kayitlilar) {
        localStorage.setItem('kayit', '[]')
    }
}
ilkCalisacak()
btnKayit.onclick = kayit

function kayit() {

    if (mailKayit.value.trim() != ' ' && passwordKayit.value.trim() != ' ') {

        let kayitlilar = JSON.parse(localStorage.getItem('kayit'))
        let kullanici = {
            mail: mailKayit.value,
            pass: passwordKayit.value
        }
        kayitlilar.push(kullanici)
        localStorage.setItem('kayit', JSON.stringify(kayitlilar))
        console.log('kayit')
    }

}

btnGiris.onclick = giris

function giris() {
    let kayitlilar = JSON.parse(localStorage.getItem('kayit'))
    let eslesme = kayitlilar.filter(uye => uye.mail == mailGiris.value && uye.pass == passwordGiris.value)
    if (eslesme.length != 0) {


        window.location.href = './index.html';
        console.log('asdasds');
    }

 else {

    alert('şifre ya da paralonız hatalı TEKRAR DENEYİN')
}
}







