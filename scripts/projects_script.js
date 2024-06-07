const random_featured = document.getElementById("random-featured");
let previous_ind = -1;

function display_random() {
  const all_projects = document.getElementsByClassName("featureable");

  const ind = resolve_index(all_projects);
  const proj = all_projects[ind];

  random_featured.innerHTML = proj.innerHTML;
  random_featured.href = proj.href;
}

// Supposed to be random, but probably better to do both random and different from the current selection
function resolve_index(all_projects) {
  let ind = Math.floor(Math.random() * all_projects.length);

  if (ind == previous_ind) {
    ind++;
  }

  if (ind == all_projects.length) {
    ind = 0;
  }

  previous_ind = ind;

  return ind;
}

display_random();
