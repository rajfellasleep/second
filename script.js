$(document).ready(function () {
    $("#registrationForm").on("submit", function (e) {
        let valid = true;
        $("input, select, textarea").each(function () {
            if ($(this).prop("required") && $(this).val() === "") {
                alert(Please fill out the ${$(this).prev("label").text()} field.);
                $(this).focus();
                valid = false;
                return false;
            }
        });

        return valid; // Allow form submission if valid
    });
});
