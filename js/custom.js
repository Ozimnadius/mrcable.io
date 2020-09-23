$(function () {

    $('.feed').validate({
        rules: {
            name: "required",
            tel: "required",
        },
        invalidHandler: function (event, validator) {
            // $(this).find('.form__error').addClass('active');
        },
        submitHandler: function (form) {
            let data = $(form).serialize(),
                url = $(form).attr('action');

            $.ajax({
                dataType: "json",
                type: "POST",
                url: url,
                data: data,
                success: function (result) {
                    if (result.status) {
                        openForm(getSuccess().addClass('relative'));
                    } else {
                        alert('Что-то пошло не так, попробуйте еще раз!!!');
                    }
                },
                error: function (result) {
                    alert('Что-то пошло не так, попробуйте еще раз!!!');
                }
            });
        },
    });

    $('body').on('click', '.jsCall', function (e) {
        e.preventDefault();
        e.stopPropagation();

        let form = getForm('.callback'),
            rules = {
                name: "required",
                tel: "required"
            };
        openForm(form);
        validateForm(form, rules);
    });

    $('body').on('click', '.jsQuestion', function (e) {
        e.preventDefault();
        e.stopPropagation();

        let form = getForm('.question'),
            rules = {
                name: "required",
                email: {
                    required: true,
                    email: true
                }
            };
        openForm(form);
        validateForm(form, rules);
    });

    $('body').on('click', '.jsPrice', function (e) {
        e.preventDefault();
        e.stopPropagation();

        let form = getForm('.price'),
            rules = {
                name: "required",
                tel: "required",
                email: {
                    required: true,
                    email: true
                }
            };
        openForm(form);
        validateForm(form, rules);
    });

    $('body').on('click', '.jsSolution', function (e) {
        e.preventDefault();
        e.stopPropagation();

        let form = getForm('.solution'),
            rules = {
                name: "required",
                tel: "required",
                email: {
                    required: true,
                    email: true
                }
            };
        openForm(form);
        validateForm(form, rules);
    });

    $('body').on('click', '.jsCerts', function (e) {
        e.preventDefault();
        e.stopPropagation();

        let form = getForm('.certs');
        openForm(form);
    });

});