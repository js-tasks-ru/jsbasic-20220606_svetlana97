function makeFriendsList(friends) {
  let newUl = document.createElement('ul');
  let users = friends.map(user => (`${user.firstName} ${user.lastName}`));

  for (let i=0 ; i< users.length ; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = users[i];
    newUl.appendChild(newLi);
  }
  return newUl;
}
