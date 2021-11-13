console.log("Secret Found!");
let previousPage = '0';

function SetMain(pagenum) {
  document.getElementById(previousPage).style.display = "none";
  document.getElementById(pagenum).style.display = "block";
  previousPage = pagenum;
}