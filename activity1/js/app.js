import {func} from "./img.js"
import {func2} from "./info.js"


let a = document.getElementById("sectionOne")

let Obj1 ={
    title: "MY CATT",
    desc: "Cats have very sweet features. It has two beautiful eyes, adorably tiny paws, sharp claws, and two perky ears which are very sensitive to sounds. It has a tiny body covered with smooth fur and it has a furry tail as well. Cats have an adorable face with a tiny nose, a big mouth and a few whiskers under its nose.",
    btn1:"Info",
    btn2:"Info",
    btn3:"Info",
    btn4:"Info",
    myImg: "../image/cat.jpg"
}


let {title, desc, btn1, btn2, btn3, btn4, myImg} = Obj1
a.append(func2(title,desc,btn1, btn2, btn3, btn4,))
a.append(func(myImg))

