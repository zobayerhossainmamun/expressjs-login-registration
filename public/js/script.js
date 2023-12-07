$('form[data-form="true"]').submit(function (e) {
    e.preventDefault();
    var url = $(this).attr("data-url");
    var save_id = $(this).attr("data-callback");
    var submit_button = $(this).find("button[type=submit]");
    var btn_text = submit_button.text();
    submit_button.attr("disabled", "disabled");
    submit_button.text('Working..');
    var formData = $(this).serializeArray();
    $.ajax({
        url: url,
        data: formData,
        method: "POST",
        contentType: "application/x-www-form-urlencoded",
        success: function (rsp) {
            if (rsp.status == 1) {
                $(save_id).show();
                $(save_id).html(`<div class="alert alert-success alert-dismissible fade show mb-0">
                    <strong>Success!</strong> ${rsp.message}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`);
            }
            if (rsp.redirect_url != "") {
                setTimeout(function () {
                    window.location.href = rsp.redirect_url;
                }, 2000);
            }
            if (rsp.status == 0) {
                $(save_id).html(`<div class="alert alert-danger alert-dismissible fade show mb-0">
                    <strong>Error!</strong> ${rsp.message}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`);
            }
            submit_button.removeAttr("disabled");
            submit_button.text(btn_text);
        }, error: function (err) {
            submit_button.removeAttr("disabled");
            submit_button.text(btn_text);
            $(save_id).html(`<div class="alert alert-danger alert-dismissible fade show mb-0">
                <strong>Error!</strong> Oops! Some error occured.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`);
        }
    });
});