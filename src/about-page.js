export function loadAboutPage() {
  const content = document.getElementById('content');
  content.innerHTML = ''; 

  const heading = document.createElement('h1');
  heading.className = 'text-center display-5 mt-4';
  heading.textContent = 'About Us';
  content.appendChild(heading);

  const description = document.createElement('p');
  description.className = 'lead text-center mt-3';
  description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis congue augue, id dictum risus. Donec leo tellus, fringilla in aliquet pretium, imperdiet ac libero. Duis efficitur nisi a ipsum venenatis tincidunt. Ut non risus tellus. Cras ornare, mauris ut vulputate interdum, diam lorem luctus odio, vitae placerat dui nisi.';
  content.appendChild(description);

  const contact = document.createElement('div');
  contact.className = 'container mt-4';

  const row = document.createElement('div');
  row.className = 'row justify-content-center';

  const col = document.createElement('div');
  col.className = 'col-md-6';

  const card = document.createElement('div');
  card.className = 'card shadow-sm';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const contactHeader = document.createElement('h5');
  contactHeader.className = 'card-title text-center mb-3';
  contactHeader.textContent = 'Contact Information';

  const phone = document.createElement('p');
  phone.className = 'card-text';
  phone.textContent = 'Phone: (123) 456-7890';

  const email = document.createElement('p');
  email.className = 'card-text';
  email.textContent = 'Email: contact@restaurant.com';

  const address = document.createElement('p');
  address.className = 'card-text';
  address.textContent = '123 Main St, City, USA';

  cardBody.appendChild(contactHeader);
  cardBody.appendChild(phone);
  cardBody.appendChild(email);
  cardBody.appendChild(address);
  card.appendChild(cardBody);
  col.appendChild(card);
  row.appendChild(col);
  contact.appendChild(row);
  content.appendChild(contact);
}