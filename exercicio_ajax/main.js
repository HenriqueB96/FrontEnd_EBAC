document.addEventListener('DOMContentLoaded', function() {
    const profileAvatar = document.querySelector('#avatar');
    const profileName = document.querySelector('#name');
    const profileUserName = document.querySelector('#username');
    const followersCount = document.querySelector('#followers');
    const followingCount = document.querySelector('#following');
    const publicReposCount = document.querySelector('#repository');
    const profileLink = document.querySelector('#link');

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://api.github.com/users/HenriqueB96', true);
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                const data = JSON.parse(xhttp.responseText);
                profileAvatar.src = data.avatar_url;
                profileName.textContent = data.name;
                profileUserName.textContent = data.login;
                followersCount.textContent = data.followers;
                followingCount.textContent = data.following;
                publicReposCount.textContent = data.public_repos;
                profileLink.href = data.html_url;
            } else {
                console.error('Erro ao obter os dados do usuário:', xhttp.status);
            }
        }
    };
    xhttp.send();
});
