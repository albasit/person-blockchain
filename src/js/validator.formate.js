$(function() {
    // $(".form-validation").validate({
    //     onsubmit: false,
    //     submitHandler: function(form) {
    //         if ($(form).valid())
    //         {
    //             form.submit();
    //         }
    //         return false; // prevent normal form posting
    //     }
    // });

    $.validator.setDefaults({
        errorClass: 'help-block',
        highlight: function(element) {
            $(element)
                .closest('.form-group')
                .addClass('has-error');
        },
        unhighlight: function(element) {
            $(element)
                .closest('.form-group')
                .removeClass('has-error');
        },
        errorPlacement: function (error, element) {
            if (element.prop('type') === 'checkbox') {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $.validator.addMethod('strongPassword', function(value, element) {
        return this.optional(element)
            || value.length >= 5
            && /\d/.test(value)
            && /[a-z]/i.test(value);
    }, 'Your password must be at least 5 characters long and contain at least one number and one char\'.')


    $.validator.addMethod('matches', function(value, element, param) {
        return this.optional(element) || value.match(param);
    }, 'Your email should be (your-email@gmail.com)');
});
$( document ).ready(function() {
    $(".form-validation").validate({
//            onsubmit: false,
        rules: {
            email: {
                required: true,
                email: true,
                // remote: "http://localhost:3000/inputValidator"
                matches: '@gmail.com'
            },
            password: {
                required: true,
                strongPassword: false
            },
            password2: {
                required: true,
                equalTo: '#password'
            },
            cnic: {
                required: true,
                digits: true,
                minlength: 12,
                maxlength: 12
            },
            age: {
                required: true,
                digits: true,
                minlength: 1,
                maxlength: 3
            },
            pname: {
                required: true,
            },
            dob: {
                required: true,
            },
            address: {
                required: true,
            },
            generalinfo: {
                required: true
            },
            dataType: {
                required: true
            }
        },
        messages: {
            email: {
                required: 'Please enter your email address.',
                email: 'Please enter a <em>valid</em> email address.',
                remote: $.validator.format("{0} is already associated with an account."),
            },
            password: {
                required: 'Please enter your password'
            },
            cnic: {
                required: 'Please enter CNIC',
                digits: 'CNIC should be numeric',
                minlength: 'CNIC should be of 12 digits',
                maxlength: 'CNIC should be equal to 12 digits'
            },
            pname: {
                required: 'Please enter person\'s name'
            },
            age: {
                required: 'Please enter second name',
                digits: 'Age should be numeric',
                maxlength: 'Age should be less than 3 digits'
            },
            dob: {
                required: 'Please enter Date of birth',
            },
            address: {
                required: 'Please enter complete address',
            },
            generalinfo: {
                required: 'Please enter general information',
            },
            dataType: {
                required: 'Please choose data type'
            }

        },

    });

});