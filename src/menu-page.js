export function loadMenuPage() {
  const content = document.getElementById('content');
  content.innerHTML = ''; 

  const heading = document.createElement('h1');
  heading.className = 'text-center display-5 mt-4';
  heading.textContent = 'Our Menu';
  content.appendChild(heading);

  const menuContainer = document.createElement('div');
  menuContainer.className = 'container mt-4';

  const row = document.createElement('div');
  row.className = 'row justify-content-center';

  const menuItems = [
    { name: 'Spaghetti Carbonara', price: '$12' },
    { name: 'Margherita Pizza', price: '$10' },
    { name: 'Grilled Salmon', price: '$15' },
    { name: 'Caesar Salad', price: '$8' },
  ];

  menuItems.forEach((item) => {
    const col = document.createElement('div');
    col.className = 'col-md-5 col-lg-4 mb-4';

    const card = document.createElement('div');
    card.className = 'card h-100 shadow-sm';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body text-center';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = item.name;

    const price = document.createElement('p');
    price.className = 'card-text text-muted';
    price.textContent = item.price;

    cardBody.appendChild(title);
    cardBody.appendChild(price);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
  });

  menuContainer.appendChild(row);
  content.appendChild(menuContainer);
}