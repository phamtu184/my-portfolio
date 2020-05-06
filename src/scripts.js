window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add(
      "sm:py-4",
      "sm:bg-white",
      "sm:text-gray-800",
      "sm:shadow-lg"
    );
    navbar.classList.remove("md:bg-transparent", "md:py-10", "md:text-white");
  } else {
    navbar.classList.add("md:bg-transparent", "md:py-10", "md:text-white");
    navbar.classList.remove(
      "sm:py-4",
      "sm:bg-white",
      "sm:text-gray-800",
      "sm:shadow-lg"
    );
  }
}
function toggleClass() {
  var navMb = document.getElementById("navigation");
  navMb.classList.toggle("h-32");
}
function handleTab(e, tab) {
  let tabLink = document.getElementsByClassName("tab");
  for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace(
      " border-indigo-400 border-b-4",
      ""
    );
  }
  e.currentTarget.className += " border-indigo-400 border-b-4";
}
