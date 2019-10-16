function fontSize() {
  if ($("text").style.fontSize=="") {
    $("text").style.fontSize="16px"
  }
  var size = $("text").style.fontSize;
  var sz = parseInt(size);
  var newsz = sz + 2;
  var newsz = newsz + "px";
  size = newsz;
  $("text").style.fontSize = size;
}

function textStyle() {
  if ($("pimp").checked) {
    $("text").style.fontWeight = "bold";
    $("text").style.textDecoration = "underline blink";
    $("text").style.color = "green";
    $("body").style.backgound = "url('http://www.cs.washington.edu/education/courses/190m/09sp/labs/5-pimpify/hundred-dollar-bill.jpg')";
  } else {
    $("text").style.fontWeight = "normal";
    $("text").style.textDecoration = "none";
    $("text").style.color = "black";
  }
}

function snoopify() {
  $("text").value = $("text").value.toUpperCase();
  $("text").value = $("text").value.split(".").join("-izzle.");
}
