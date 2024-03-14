function fillTable(tableId, motorcycleInfo, desiredCC, desiredCategory) {

    // Select the table by ID
    const motorcycleTable = document.getElementById(tableId);

    // Delete table (to use for categorizing)
    motorcycleTable.innerHTML = '';

    // Add tableheads for the table
    const headerRow = document.createElement('tr');
    const headerCells = ['Motorcycle', 'Brand', 'Model', 'Category', 'CC'];

    for (const headerText of headerCells) {
        const headerCell = document.createElement('th');
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    }

    // Add table heads
    const thead = document.createElement('thead');
    thead.appendChild(headerRow);
    motorcycleTable.appendChild(thead);

    // Fill table with data by all cc's all categegories or cc/category given in parameter
    for (const motorcycle of motorcycleInfo) {
        // Check for the desiredCc and desiredCategory parameter in the method
        if (desiredCC === 'allCc' && desiredCategory === 'allCategories' ||
            (desiredCC === 'lessThan651CC' && motorcycle.CC < 651) ||
            (desiredCC === 'between651And999CC' && motorcycle.CC > 650 && motorcycle.CC < 1000) ||
            (desiredCC === 'moreThan999CC' && motorcycle.CC > 999) ||
            motorcycle.Category === desiredCategory) {

            const newRow = document.createElement('tr');

            // Add cell for the picture
            const pictureCell = document.createElement('td');
            const picture = document.createElement('img');
            picture.src = motorcycle.Motorcycle;
            picture.alt = motorcycle.alt;
            pictureCell.appendChild(picture);
            newRow.appendChild(pictureCell);

            const brandCell = document.createElement('td');
            brandCell.textContent = motorcycle.Brand;
            newRow.appendChild(brandCell);

            const modelCell = document.createElement('td');
            modelCell.textContent = motorcycle.Model;
            newRow.appendChild(modelCell);

            const categoryCell = document.createElement('td');
            categoryCell.textContent = motorcycle.Category;
            newRow.appendChild(categoryCell);

            const ccCell = document.createElement('td');
            ccCell.textContent = motorcycle.CC;
            newRow.appendChild(ccCell);

            motorcycleTable.appendChild(newRow);
        }
    }
}