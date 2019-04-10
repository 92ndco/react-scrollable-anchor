export const getHash = () => {
  return decodeURI(window.location.hash.slice(1))
}

export const updateHash = (hash, affectHistory) => {
  if (affectHistory) {
    window.location.hash = hash
  } else {
    window.location.replace(`#${hash}`)
  }
}

// remove hash in url without affecting history or forcing reload
export const removeHash = () => {
  window.location.hash = ""
  
  // history.replaceState does not trigger the hashchange event on the window object

  // history.replaceState(
  //   "",
  //   document.title,
  //   window.location.pathname + window.location.search
  // )
}
