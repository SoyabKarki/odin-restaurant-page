import restroImg from '../images/restaurant.jpg';

export function loadLandingPage() {
  const content = document.getElementById('content');
  content.innerHTML = ''; 

  const text = document.createElement('div');
  text.className = 'text-center';

  const title = document.createElement('h1');
  title.className = 'display-4';
  title.textContent = 'Welcome to Restaurant';
  text.appendChild(title);

  const paragraph = document.createElement('p');
  paragraph.className = 'lead';
  paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper placerat pellentesque. Sed a aliquam nisi. Etiam in nisl felis.';
  text.appendChild(paragraph);

  content.appendChild(text);

  const image = document.createElement('div');
  image.className = 'text-center mt-4 mb-4';

  const img = document.createElement('img');
  img.src = restroImg;
  img.className = 'img-fluid rounded shadow';
  image.appendChild(img);

  content.appendChild(image);
}
