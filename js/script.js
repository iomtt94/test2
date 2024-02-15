$(document).ready(function () {
    // --------------SCROLL-------------------
    $('a[href="#"]').on("touchend, click", function (e) {
        e.preventDefault();
        $("body,html").animate({
                scrollTop: $(".toscroll").offset().top - 50
            },
            400
        );
    });

    $(".to-comments").on("touchend, click", function (e) {
        e.preventDefault();
        $("body,html").animate({
                scrollTop: $(".comments.comments__list").offset().top - 50
            },
            400
        );
    });
});


// send form
const form = document.querySelector("#order_form");
async function sendData() {
  const formData = new FormData(form);

  try {
    const response = await fetch("https://webhook.site/480a6ad0-20f6-44cb-a26b-b2ec841d2097", {
      method: "POST",
      body: formData,
      mode: 'no-cors'
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});