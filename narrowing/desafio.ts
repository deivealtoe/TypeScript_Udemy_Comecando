function userReview(review: number | boolean) {
  if (typeof(review) === 'number') {
    switch (review) {
      case 1:
        console.log('Péssimo')
        break
      case 2:
        console.log('Ruim')
        break
      case 3:
        console.log('Bom')
        break
      case 4:
        console.log('Ótimo')
        break
      case 5:
        console.log('Supreme')
        break
      default:
        console.log('Nota inválida!')
        break
    }
  } else if (review === false) {
    console.log('Nenhuma nota atribuída!')
  }
}

userReview(1)
userReview(2)
userReview(3)
userReview(4)
userReview(5)
userReview(6)
userReview(false)
