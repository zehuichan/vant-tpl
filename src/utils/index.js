export function getData(el, name, val) {
  const prefix = 'data-';
  if (val) {
    return el.setAttribute(prefix + name, val)
  } else {
    return el.getAttribute(prefix + name);
  }
}

export function saveToLocal(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function loadFromLocal(key) {
  const ret = window.localStorage.getItem(key)
  return JSON.parse(ret)
}
