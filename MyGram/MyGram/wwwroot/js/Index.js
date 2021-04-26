﻿var divContainer = $("#MainContainer");

$("<span></span>").text("My Gram").appendTo(divContainer);
$("<button></button>").attr("id", "LogIn").text("Log In").appendTo(divContainer);
$("<button></button>").attr("id", "SignUp").text("Sign Up").appendTo(divContainer);

$("<br>").appendTo(divContainer);
$("<br>").appendTo(divContainer);

$("<span></span>").text("Image 1").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Image 2").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Image 3").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Image 4").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Image 5").css("margin-right", "10px").appendTo(divContainer);
$("<br>").appendTo(divContainer);
$("<br>").appendTo(divContainer);

$("<span></span>").text("About").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Blog").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Jobs").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Help").css("margin-right", "10px").appendTo(divContainer);

$("<br>").appendTo(divContainer);

$("<span></span>").text("English").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("2021").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("MyGram").css("margin-right", "10px").appendTo(divContainer);

$("#LogIn").click(function () {
    alert("You Have Logged In");
});
$("#LogIn").click(function () {
    $("#UserInputForm").show();
});

$("#UserInputForm").hide();


$(document).ready(function () {
    $('form[name="UserInputForm"]').validate({
        rules: {
            User: "required",
            Password: "required"
        },
        messages: {
            User: "User is required",
            Password: "Password is required"
        },
        submitHandler: function (form) {
            var user = $("#User").val();
            var password = $("#Password").val();

            $.when($.ajax({
                url: "/Home/Register",
                type: "POST",
                data: {
                    User: user,
                    Password: password
                },
                datatype: "json"
            })).then(function (data) {
                console.log(data);
                if (data != null && data.registerMessage!="") {

                    $.toast({
                        heading: "Success",
                        text: data.registerMessage,
                        icon: "success",
                        loader: true,
                        loaderBg: "blue"
                    })
                }
            });
        }
    });
});