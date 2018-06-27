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
            userid: {
                required: true,
                digits: true
            },
            password: {
                required: true,
            },
            password2: {
                required: true,
                equalTo: '#password'
            },
            oldPass: {
                required: true
            },
            sid: {
                required: true,
                digits: true,
                minlength: 8,
                maxlength: 8
            },
            tid: {
                required: true,
                digits: true,
                minlength: 5,
                maxlength: 5
            },
            sname: {
                required: true,
                digits: false
            },
            tname: {
                required: true,
            },
            cname: {
                required: true,
            },
            ccode: {
                required: true
            },
            dataType: {
                required: true
            },
            userName: {
                required: true
            },
            org: {
                required: true
            },
            oid: {
                required: true,
                digits: true
            },
            role: {
                required: true
            },
            dtname: {
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
                required: 'Please enter your password.'
            },
            userid: {
                required: 'Please enter userid.',
                digits: 'User ID should be numeric'
            },
            oldPass: {
                required: 'Please enter your old password.'
            },
            sid: {
                required: 'Please enter student ID.',
                digits: 'CNIC should be numeric.',
                minlength: 'Student ID should be of 8 digits.',
                maxlength: 'Student ID should be equal to 8 digits.'
            },
            sname: {
                required: 'Please enter student\'s name.'
            },
            tid: {
                required: 'Please enter teacher ID.',
                digits: 'Teacher ID should be numeric.',
                maxlength: 'Teacher ID should be of 5 digits.',
                minlength: 'Teacher ID should be equal to 5 digits.'
            },
            cname: {
                required: 'Please enter course name.',
            },
            ccode: {
                required: 'Please enter course code.',
            },
            tname: {
                required: 'Please enter teacher name.',
            },
            dataType: {
                required: 'Please choose data type.'
            },
            userName: {
                required: 'Please enter officer\'s name.'
            },
            org: {
                required: 'Please choose organization.'
            },
            oid: {
                required: 'Please enter officer\'s id.',
                digits: 'Officer ID should be numeric.'
            },
            role: {
                required: 'Please choose officer\'s role.'
            },
            dtname: {
                required: 'Please enter data type name.'
            }

        },

    });

});