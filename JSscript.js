const USERS_URL = "https://60c98aa8772a760017203b57.mockapi.io/users";

// fetch - GET  console.log the data

// fetch(USERS_URL, {
//   method: "GET"
// })
//   .then((response) => response.json())
//   .then((users) => {
//     const userList = document.querySelector(".user-list");

//     // users.name - this will not work

//     users.forEach((user) => {
//       console.log(user);
//       const userContainer = document.createElement("div")

//       const userName = document.createElement("p");
//       userName.innerText = user.name;
//       // userList.append(userName);
//       // p create then append
//       // avatar (img)

//       const userImage = document.createElement("img");
//       userImage.src = user.avatar;
//       // userList.append(userImage);

//       // createdAt
//      const userTime = document.createElement("p");
//       userTime.innerText = user.createdAt;
//       userContainer.append(userName, userImage, userTime);
//       userList.append(userContainer);
//     });

//     // console.log(users);
//   });

// CRUD
// C- Create|Post
// R - Read|Get
// U - Update|Put/Patch
// D - Delete|Delete

// Write functionality, make the code better, style
/*
fetch(USERS_URL, {
  method: "GET"
})
  .then((response) => response.json())
  .then((users) => {
    const userList = document.querySelector(".user-list");
    users.forEach((user) => {
      console.log(user);
      const userContainer = document.createElement("div");
      userContainer.className = "user-container";

      userContainer.innerHTML = `
        <p class="user-name">${user.name}</p>
       <img class="user-image" src=${user.avatar}></img>
       <p class="user-time">${new Date(user.createdAt).toDateString()}</p>
      `;

      // userContainer.append(userName, userImage, userTime);
      userList.append(userContainer);
    });

    // console.log(users);
  });
*/


const GITHUB_APIUrl = "https://api.github.com";


function createURL_listRepos(userName, perPageCount){
  return(GITHUB_APIUrl+ `/users/${userName}/repos?per_page=${perPageCount}`);
}

function createURL_searchRepos(q_repoSearchString, resultsPerPage){
  return(GITHUB_APIUrl+ `/search/repositories/?q=${q_repoSearchString}&per_page=${resultsPerPage}`);
}

function createURL_searchUsers(q_userSearchString, resultsPerPage){
  return(GITHUB_APIUrl+ `/search/users/?q=${q_userSearchString}&per_page=${resultsPerPage}`);
}

function createURL_listRepoContents(repoOwnerUsername, repoName, pathInRepo=null){
  return(GITHUB_APIUrl+ `/repos/${repoOwnerUsername}/${repoName}/contents/${pathInRepo}`);
}

console.log(createURL_listRepos("reach2arunprakash", 5));


fetch(createURL_listRepos("donnemartin", 5), {
  method: "GET",
  headers: {'accept': 'application/vnd.github.v3+json'},
})
  .then((response) => response.json())
  .then(repos => {
    const repoList = document.querySelector(".list-repos");
    repos.forEach((individualRepo) => {
      console.log(individualRepo);
      const repoContainer = document.createElement("div");
      repoContainer.className = "repo-container";

      repoContainer.innerHTML = `
        <p class="user-name">${individualRepo.name}</p>
        <p class="user-name">${individualRepo.description}</p>
       <p class="user-time">${new Date(individualRepo.updated_at).toDateString()}</p>
      `;
      repoList.append(repoContainer);
    });

    // console.log(repos);
  });
  