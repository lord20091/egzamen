let username = document.getElementById(`username`)
let password = document.getElementById(`password`)
let btn = document.getElementById(`button`)
let btn2 = document.getElementById(`button2`)


btn.addEventListener(`click`, ()=>{
    if (username.value === 'mmm' && password.value === 'mmm123') {
        alert(`Siz dasturga muvaffaqiyatli kirdingiz`)
        let ota2 = document.getElementById(`ota2`).style.display = `none`
    } else {
        alert(`username yoki password da xato!`)
    }
})
btn2.addEventListener(`click`, ()=>{
    let a = prompt(`Dasturlash togrisida savolingizni yozing`)
    alert( `Sizning sovolingiz: ` + a)
})