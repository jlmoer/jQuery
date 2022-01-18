$(() => {
    $(".btn").click(() => {
      let inputValue = $(".form-control").val()
        if (inputValue.length < 5) {
            $(".form-control").addClass("is-invalid") 
        } else {
            $(".form-control").addClass("is-valid")
        }
    })
  })