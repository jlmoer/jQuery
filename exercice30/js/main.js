$(() => {
    let inputValue = $(".form-control").keyup(() => {
        if (inputValue.length < 5) {
            $(".form-control").addClass("is-invalid") 
        } else {
            $(".form-control").addClass("is-valid")
        }
    })
})