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

fetch(USERS_URL, {
  method: "GET"
})
  .then((response) => response.json())
  .then((users) => {
    const userList = document.querySelector(".user-list");

    // users.name - this will not work

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
