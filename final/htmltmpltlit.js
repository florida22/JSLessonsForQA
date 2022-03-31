let header = "Templates Literals";
let tags = ["template literals", "template strings", 
"string templates", " Back-Tics Syntax"];
// We use string interpolation
let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

