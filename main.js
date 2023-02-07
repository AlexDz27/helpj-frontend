const likesCountElem = document.querySelector('span')
const likeButton = document.querySelector('button')

// TODO: 'Hi from server!', /likes, /update-likes
// Render current likes count
fetch('http://localhost:8000')
  .then(response => response.text())
  .then(currentLikesCount => {
    likesCountElem.innerText = currentLikesCount
  })

// Update likes count on click
likeButton.addEventListener('click', () => {
  // Обновить количество лайков
  let likesCount = Number(likesCountElem.innerText)
  likesCount++
  likesCountElem.innerText = likesCount

  // Отправить запрос на сервер чтобы сервер у себя обновил количество лайков
  fetch('http://localhost:8000', {
    method: 'POST',
    body: likesCount
  })
    .then(response => response.text())
    .then(response => console.log(response))
})