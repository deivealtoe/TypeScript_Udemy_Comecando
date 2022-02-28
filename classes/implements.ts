interface ShowTitle {
  itemTitle(): string
}

class BlogPost implements ShowTitle {
  title: string

  constructor(title: string) {
    this.title = title
  }

  itemTitle(): string {
    return `O título do post é ${this.title}`
  }
}

const myPost = new BlogPost('Hello, World')

console.log(myPost.itemTitle())
