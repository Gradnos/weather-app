export function assignData(fn, arg1){
  let object = new Object();
  fn(arg1, object);
  return object;
}