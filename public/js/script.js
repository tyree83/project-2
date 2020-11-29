const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'public/images/logo-no-background.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://trefle.io/api/v1/users/search?token=8-2wVBiSqv-LIZRMpOGPbkMGHxLCLdyFTA152FQxMpE&q=coconut');
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(data => {
    //   const card = document.createElement('div');
    //   card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = data.family_common_name;

    //   const p = document.createElement('p');
    //   movie.description = movie.description.substring(0, 300);
    //   p.textContent = `${movie.description}...`;

    //   container.appendChild(card);
      card.appendChild(h1);
    //   card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();