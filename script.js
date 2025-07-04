var comments = document.getElementById("comments");
var send_msg = document.getElementById("send_btn");
var lable = document.getElementById("lable");
//feedback massage
send_msg.addEventListener("click", function () {
  if (comments.value) {
    comments.value =
      "Thank you for your message!\nI received it and will get back to you as soon as possible.\nPlease be patient while I prepare my reply.\n\nBest regards,\nArab";
    console.log(comments.value);
  }
});
//scrool event
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("header");
  if (navbar) {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

//google translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "ar,en,fr,de,es", // اللغات المتاحة
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}
