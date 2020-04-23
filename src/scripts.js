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
