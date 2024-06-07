function set_last_modified() {
  const last_modified = document.getElementById("last-modified-display");
  const date = document.lastModified.split(" ")[0];

  last_modified.innerText = date;
}

set_last_modified();
