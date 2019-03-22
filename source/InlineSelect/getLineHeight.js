// From: https://stackoverflow.com/a/4515470

export default function getLineHeight (element) {
  var temp = document.createElement(element.nodeName);
  temp.setAttribute('style', 'margin:0px;padding:0px;font-family:' + element.style.fontFamily + ';font-size:' + element.style.fontSize);
  temp.innerHTML = 'test';
  temp = element.parentNode.appendChild(temp);
  var ret = temp.clientHeight;
  temp.parentNode.removeChild(temp);
  return ret;
}
