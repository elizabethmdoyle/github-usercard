import axios from 'axios';


const cards = document.querySelector('.cards');
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/elizabethmdoyle')
      .then(res => {
        console.log(res.data)
      const githubCard = githubUserCardMaker(res.data)
      cards.appendChild(githubCard)

      //document.queryselector('.cards').appendChild(gitHubCard(res.data));
      
      }
      )
      .catch(err => console.log(err))
      .finally(() => console.log('done'))

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/




const followersArray = [tetondan,
                        dustinmyers,
                        justsml,
                        luishrd,
                        bigknell
                      ];  

// for(let i = 0; i < followersArray.length; i++) {
//   getGitCard(followersArray[i])
// }   

followersArray.forEach(getGitCard(followersArray))

function getGitCard(username) {

  axios.get(`https://api.github.com/users/${username}`)
      .then(res => {
        console.log(res.data)
      const githubCard = githubUserCardMaker(res.data)
      cards.appendChild(githubCard)

      //document.queryselector('.cards').appendChild(gitHubCard(res.data));
      
      }
      )
      .catch(err => console.log(err))

}      

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function githubUserCardMaker(obj) {

  const githubCard = document.createElement('div');
  const githubCardImage = document.createElement('img');
  const cardInfoWrapper = document.createElement('div');
  const githubUserName = document.createElement('h3');
  const githubUserUsername  = document.createElement('p');
  const githubLocation = document.createElement('p');
  const githubProfile  = document.createElement('p');
  const githubPageLink = document.createElement('a');
  const githubFollowerCount = document.createElement('p');
  const githubFollowingCount = document.createElement('p');
  const githubBio = document.createElement('p');



  githubCard.classList.add('card');
  cardInfoWrapper.classList.add('card-info');
  githubUserName.classList.add('name');
  githubUserUsername.classList.add('username');
  
  githubCard.appendChild(githubCardImage);
  githubCard.appendChild(cardInfoWrapper);
  cardInfoWrapper.appendChild(githubUserName);
  cardInfoWrapper.appendChild(githubUserUsername);
  cardInfoWrapper.appendChild(githubLocation);
  cardInfoWrapper.appendChild(githubProfile);
  githubProfile.appendChild(githubPageLink)
  cardInfoWrapper.appendChild(githubFollowerCount);
  cardInfoWrapper.appendChild(githubFollowingCount);
  cardInfoWrapper.appendChild(githubBio);

  githubCardImage.src = obj.avatar_url;
  githubUserName.textContent = obj.name;
  githubUserUsername.textContent = obj.login;
  githubLocation.textContent = `Location: ${obj.location}`;
  githubProfile.textContent = `Profile: ${obj.html_url}`;
  githubPageLink.href = obj.html_url;
  githubPageLink.textContent = obj.html_url;
  githubFollowerCount.textContent = `Followers: ${obj.followers}`;
  githubFollowingCount.textContent = `Following: ${obj.following}`;
  githubBio.textContent = `Bio: ${obj.bio}`;



    return githubCard
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
