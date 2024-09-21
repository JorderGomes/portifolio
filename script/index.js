$("#menu-btn").on("click", function (event) {
    $("#open-menu").toggle();
    $("#close-menu").toggle();
})

$("#submit-contact").click(sendFeedback);

function sendFeedback(event) {
    event.preventDefault();
    
    const contact = {
        "nome": $('#inputName').val(),
        "email": $('#inputEmail').val(),
        "mensagem": $('#inputMessage').val()
    }
    
    $("form input[type=text], form input[type=email], form textarea").val("");
    
    $.ajax({
        url: "https://formsubmit.co/ajax/fdf9e996f6ba19a8f62f7456094c4041",
        method: "POST",
        data: contact,
        dataType: "json"
    });

    console.log(contact);
    alert("Mensagem enviada!");
}