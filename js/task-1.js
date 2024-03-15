const list = document.querySelector("#categories")

console.log(`Number of categories: ${list.children.length}`)

for (const elem of list.children) {
    const header = elem.firstElementChild.textContent;
    const categoriesLength = elem.lastElementChild.children.length;
    console.log(`Category: ${header}`);
    console.log(`Elements: ${categoriesLength}`);
}

