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




//console.log(createURL_listRepos("reach2arunprakash", 5));



let userSearchInput = "";
userSearchInput = document.getElementById("searchBox_RepoAndUser").value;
console.log(userSearchInput);


// userSearchInput = document.getElementById("searchBox_RepoAndUser");
// userSearchInput.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//       event.preventDefault();
//       document.getElementById("searchBox_RepoAndUser").click();
//   }
// });



fetch(createURL_listRepos(userSearchInput, 5), {
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
        <p class="repo-name">${individualRepo.name}</p>
        <p class="user-name">${individualRepo.description}</p>
       <p class="user-time">Updated on ${new Date(individualRepo.updated_at).toDateString()}</p>
      `;
      repoList.append(repoContainer);
    });

    // console.log(repos);
  });
  