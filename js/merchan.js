function openCate(word, cateType) {
  let i, catePart;

  catePart = document.getElementsByClassName("cate-part");
  for(i = 0; i < catePart.length; i++) {
    catePart[i].style.display = "none";
  }

  document.getElementById(cateType).style.display = "flex";
}