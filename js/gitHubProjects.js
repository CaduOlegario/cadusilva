const projects = document.querySelector(".projects-js");

fetch("https://api.github.com/users/CaduOlegario/repos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.map((item) => {
      console.log(item.url);
      projects.innerHTML += `
      <div class='item-grid p-2'>
        <div class='flex al-center'>
          <img src='./assets/GitHub-Logo-white.png' alt='GitHub' class='logo-github'/>
          <div class='project'>
            <h2 class='nameproject'>${item.name}</h2>
            <a href='${item.html_url}'><input type='button' value='Ir para projeto' class='btn-project'></a>
          </div>
        </div>
      </div>
    `;
    });
  });
