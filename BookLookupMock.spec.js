function BookAuthen(authSearch) {
  this.authSearch = authSearch

  this.search = (title, image, isbn) => {
    var obj = this.authSearch(title, image, isbn)
    return {
      bookName: obj.bookName,
      token: '0000000000'
    }
  }
}

test ('BookLookup Mock', () => {
  const bookLookupMock = jest.fn()
      .mockReturnValue({
        bookName: "Conan",
        cover: "c.jpg",
        isbn: "1234567890123"
      })

  var auth = new BookAuthen(bookLookupMock)

  var title = "Detective"
  var image = "c.jpg"
  var isbn = "1234567890123"
  var accountInfo = auth.search(title, image, isbn)

  expect(bookLookupMock).toHaveBeenCalled()
  expect(bookLookupMock).toHaveBeenCalledWith(title, image, isbn)
  expect(accountInfo.bookName).toBe("Conan")
  expect(accountInfo).toHaveProperty('token')
  expect(accountInfo.token).toHaveLength(10)
})
