const likesCountElem = document.querySelector('span')
const likeButton = document.querySelector('button')

// Render current likes count
fetch('http://localhost:8000/likes')
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
  fetch('http://localhost:8000/update-likes', {
    method: 'POST',
    body: likesCount
  })
    .then(response => response.text())
    .then(response => console.log(response))
})