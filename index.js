//Your code here
function justInvoke(fn) {
  return fn.call();
}

function setThisWithCall(fn, thisValue, arg) {
  fn.call(thisValue, arg);
}