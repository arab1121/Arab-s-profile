var message = document.getElementById("message");
var send_msg = document.getElementById("send_btn");
var lable = document.getElementById("lable");
var custumermsg = document.getElementById("message");
var x = 0;
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    console.log("The user returned to the page");
    // write code here when return
  } else if (document.visibilityState === "hidden") {
    console.log("The user left the page");
  }
});
//feedback massage
send_msg.addEventListener("click", function () {
  if (message.value && x == 0) {
    x = x + 1;
    message.value +=
      "\n\n\nThank you for your message!\nI received it and will get back to you as soon as possible.\nPlease be patient while I prepare my reply.\n\nBest regards,\nArab";
    console.log(message.value);
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
