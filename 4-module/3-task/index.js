function highlight(table) {
  for (let tr of table.rows) { 
	    	
     let age = +tr.cells[1].textContent;
     if (age < 18) tr.style.textDecoration = 'line-through';
     
     let gender = tr.cells[2].textContent;
     switch (gender) {
      case "m":
          tr.classList.add("male");
          break;
      case "f":
          tr.classList.add("female");
     }
 
    let status = tr.cells[3];
    if (status.hasAttribute("data-available"))
            switch (status.dataset.available) {
                case "true":
                    tr.classList.add("available");
                    break;
                case "false":
                    tr.classList.add("unavailable");
            } else tr.hidden = true;
  } 
}

