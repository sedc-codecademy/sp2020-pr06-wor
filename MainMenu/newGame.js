// Selecting elements from HTML
let pickImg = document.getElementsByTagName("img")
let pic = document.getElementById("pic")
let user = document.getElementById("user-name")
let input = document.getElementById("input")
let avatars = document.getElementsByClassName("avatar")
let femaleButton = document.getElementById("female")
let maleButton = document.getElementById("male")
let continueButton = document.getElementById("continue-btn")

// DB for images for female avatars
let arrayWithUrlsForFAvatars = [
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-0.png?alt=media&token=7361aee5-737d-4726-904c-54cb2f56d48b",
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-1.png?alt=media&token=5e6f9871-787b-427e-8c66-e4c58276a1d5",
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-2.png?alt=media&token=c026b1a9-43f3-46de-bd27-4711f25a5d9e",
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-3.png?alt=media&token=0df8457b-bf73-4b55-b9c0-9e334358c174",
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-4.png?alt=media&token=d17fa692-ac7c-4b00-8ad3-fd8cd92a3220",
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-5.png?alt=media&token=3f127ca6-e85c-4e1a-9f76-e502e1ca8a69",
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-6.png?alt=media&token=0ee74587-eec7-4ce3-a891-0a466e36575c",
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-7.png?alt=media&token=7f5c4d72-8da4-48a0-9e4b-04764856d32a"
]

// DB for images for male avatars
let arrayWithUrlsForMAvatars = [
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-8.png?alt=media&token=f5aee297-4f6d-461d-9536-55acb7dda8cd",
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-9.png?alt=media&token=6fc526a7-0b9f-4df9-bb0e-fa6c5cdbee66",
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-10.png?alt=media&token=4da041c4-5a26-4f5d-a1ed-6362b4c0cddf",
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-11.png?alt=media&token=856be95a-9e74-4a80-ba19-8e7c12bf6493",
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-12.png?alt=media&token=b11729cd-6427-498e-8944-4026a982164a",
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-13.png?alt=media&token=0df9728f-59f2-4313-84e5-1fc966a7347a",
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-14.png?alt=media&token=304de38b-9118-4262-9eda-f67e02a1c7ed",
    "https://firebasestorage.googleapis.com/v0/b/project-word-e6c87.appspot.com/o/avatars%2FmyAvatar-15.png?alt=media&token=531db95b-b9f4-4b11-90eb-0a0f9c141d22"
]

// kreiram prazna niza vo koja ke gi vmetnam elementite avatars[i].innerHTML so zenski avatari. ZOSTO?! Zatoa sto od za mene nepoznata pricina samoto url na slikite posle vcituvanje na soodvetnoto mesto se menuva i preminuva vo url za koe e permission denied. Posle klikanje na femaleButton se vcituvaat soodvetnite url na slikite koi se sodrzat vo nizata arrayWithUrlsForFAvatars. Istoto se slucuva i posle klikanje na maleButton. Megutoa na event listeners so koi odbranata slika se stava soodvetnoto mesto na prozorecot new_game, poradi nekakvo izmenuvanje na samoto url na slikite uslovot vo linija 65 e sekogas netocen dokolku namesto `${arr1[index]}` stavam `<img class="img-avatar" src=${arrayWithUrlsForFAvatars[i]} alt="" height="100px">`. Vo ovaa niza arr1 se url na slikite koi davaat permision denied, a isto i vo avatars[i].innerHTML url-to na slikite e izmeneto i dava permision denied i zatoa moram da gi sporeduvam ovie dve... ako se isti se vcituvaat url na sliki od nizata arrayWIthUrlsForFAvatars, vo sprotivno se otcituvaat url na slikite od nizata arrayWithUrlsForMAvatars :)
let arr1 = [];

// Adding event listeners
femaleButton.addEventListener("click", () => {
    for (let i = 0; i < avatars.length; i++) {
        avatars[i].innerHTML = `<img class="img-avatar" src=${arrayWithUrlsForFAvatars[i]} alt="" height="100px">`

        arr1.push(avatars[i].innerHTML)
    }
    console.log(arr1)
})

maleButton.addEventListener("click", () => {
    for (let i = 0; i < avatars.length; i++) {
        avatars[i].innerHTML = `<img class="img-avatar" src=${arrayWithUrlsForMAvatars[i]} alt="" height="100px">`
    }
})


for (let i = 0; i < avatars.length; i++) {
    (function (index) {
        avatars[index].addEventListener("click", function () {
            if (avatars[index].innerHTML === `${arr1[index]}`) {
                console.log("ok")
                pic.innerHTML = `<img src=${arrayWithUrlsForFAvatars[index]} height="100px">`
            } else {
                pic.innerHTML = `<img src=${arrayWithUrlsForMAvatars[i]} height="100px">`
            }
        })
    })(i)
}

continueButton.addEventListener("click", () => {
    if (input.value === "") {
        user.innerHTML = "Username"
    } else {
        user.innerHTML = input.value;
    }
})