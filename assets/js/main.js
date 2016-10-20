/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function () {
    handleTopNavAnimation();
});

$(window).load(function () {
    handleTopNavAnimation();
});

function handleTopNavAnimation() {
    var top = $(window).scrollTop();

    if (top > 10) {
        $('#site-nav').addClass('navbar-solid');
    }
    else {
        $('#site-nav').removeClass('navbar-solid');
    }
}

$('#form-subscribe').submit(function (e) {
    e.preventDefault();
    $("#veil").show();
    var email = $('#form-subscribe #email').val();
    $.ajax({
        type: 'POST',
        url: './api/conference/Subscribe',
        data: `'${email}'`,
        contentType: 'application/json',
        dataType: 'text',
        success: function (data) {
            $("#veil").hide();
            toastr.success("Your email was successfully added!", "Mailing List");
            $('#form-subscribe #email').val('');
        },
        error: function (error) {
            $("#veil").hide();
            toastr.error("an error occurred while adding your email!", "Mailing List");
        }
    });

});

/*
 * Registration Form
*/

$('#registration-form').submit(function (e) {
    e.preventDefault();
    $("#veil").show();
    var postForm = { //Fetch form data
        'FirstName': $('#registration-form #firstName').val(),
        'LastName': $('#registration-form #lastName').val(),
        'Email': $('#registration-form #email').val(),
        'Phone': $('#registration-form #phone').val(),
        'address': $('#registration-form #address').val(),
        'Adults': $('#registration-form #adults').val(),
        'Children': $('#registration-form #children').val(),
        'ChurchName': $('#registration-form #churchName').val(),
        'Donation': $('#registration-form #donation').val(),
        'Address': $('#registration-form #address').val(),
        'City': $('#registration-form #city').val(),
        'State': $('#registration-form #state').val(),
        'Country': $('#registration-form #country').val(),
        'Transportation': $('#registration-form #transportation').val(),
        'Sessions': $('#registration-form #sessions').val().join(','),
        'Comment': $('#registration-form #comment').val()
    };

    $.ajax({
        type: 'POST',
        url: './api/conference/register',
        data: postForm,
        
        success: function (data) {
            $("#veil").hide();
            toastr.success("Your registration was successfully submitted!", "Registration")
            $('#registration-form input').val('');
            $('#registration-form textarea').val('');

        },
        error: function (error) {
            $("#veil").hide();
            toastr.error("an error occurred when submitting your registration!", "Registration")
        }
    });

});


$('#contact-form').submit(function (e) {
    e.preventDefault();
    $("#veil").show();

    var contactForm = {
        Name: $("#contact-form #firstName").val() + ' ' + $("#contact-form #lastName").val(),
        Phone: $("#contact-form #phone").val(),
        Message: $("#contact-form #comment").val(),
        Email: $("#contact-form #email").val(),
    }

    $.ajax({
        type: 'POST',
        url: './api/conference/Contact',
        data: contactForm,

        success: function (data) {
            $("#veil").hide();
            toastr.success("Thank you for contacting us!", "Contact")
            $('#contact-form input').val('');
            $('#contact-form textarea').val('');
        },
        error: function (error) {
            $("#veil").hide();
            toastr.error("an error occurred when submitting the contact form!", "Contact")
        }
    });
});
$(document).ready(function () {
    $('#sessions').multiselect();
});

/*
 * SmoothScroll
*/

smoothScroll.init();