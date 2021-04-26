var divContainer = $("#MainContainer");

$("<span></span>").text("My Gram").appendTo(divContainer);
$("<button></button>").attr("id", "LogIn").text("Log In").appendTo(divContainer);
$("<button></button>").attr("id", "SignUp").text("Sign Up").appendTo(divContainer);

$("<br>").appendTo(divContainer);
$("<br>").appendTo(divContainer);

var imageContainer = $("<div></div>").attr("id", "ImageContainer").appendTo(divContainer);
var table = $("<table></table>").attr("id", "divContainer").appendTo(divContainer);
$("<tbody></tbody>").attr("id", "ImageBodyContainer").appendTo(table);

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

    $.when($.ajax({
        url: "/Home/GetAllImages",
        method: "GET"
    })).then(function (data) {
        var image = null;
        var tbody = $("ImageBodyCOntainer");
        var tr = $("<tr></tr>");
        var td = null;

        for (var element in data) {
            if (counter == 5) {
                tr = $("ImageBodyCOntainer");
                counter = 0;
            }
            image = data[element];

        td = $ $("<td></td>");

        
        $("<span></span>").text(image.imageAlt)
            .css("margin-right", "10px).appendTo(td);
                tr.append(td);
            counter++;
                }
    })
});