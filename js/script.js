document.addEventListener("DOMContentLoaded", function () {

    console.log("hello")
    let form_element = document.getElementById(`myForm`)
    let input_msg_element = document.getElementById(`input_text`)

    form_element.addEventListener(`submit`, (e) => {
        e.preventDefault();
        let trans_msg = `empty`
        let text_msg = input_msg_element.value
        // const formData = new FormData(this);
        console.log(text_msg);

        fetch("https://google-translate1.p.rapidapi.com/language/translate/v2/detect", {
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "accept-encoding": "application/gzip",
                "x-rapidapi-key": "c8ad9cbef7msh02ce88f81b3caebp1d6c5ejsna663c4baf122",
                "x-rapidapi-host": "google-translate1.p.rapidapi.com"
            },
            "body": {
                "q": "quand vais-je commencer"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });

        console.log(trans_msg);
    })
})

