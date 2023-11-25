function submitData() {
    const inputName = document.getElementById("Tname").value
    const inputEmail = document.getElementById("Temail").value
    const inputPhone = document.getElementById("Tphone").value
    const inputSubject = document.getElementById("Tsubject").value
    const inputMessage = document.getElementById("Tmessage").value

    // kondisi (memunculkan sebuah alert "{field} harus diisi")
    if (inputName == "") {
        alert('Nama harus diisi')
    } else if (inputEmail == "") {
        alert('Email harus diisi')
    } else if (inputPhone == "") {
        alert('Phone number harus diisi')
    } else if (inputSubject == "") {
        alert('Subject harus diisi')
    } else if (inputMessage == "") {
        alert('Message harus diisi')
    } else {
        // harus tervalidasi dulu

        console.log(`Name : ${Tname}\nEmail: ${Temail}\nPhone: ${Tphone}\nSubject: ${Tsubject}\nMessage: ${Tmessage}`)

        let a = document.createElement('a')
        a.href = `mailto:${inputEmail}?subject=${Temail}&body=${Tmessage}`
        a.click()
    }
}