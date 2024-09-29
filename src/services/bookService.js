const getBooks = async () => {
    // Mock data or API call
    return [
      { title: 'Book 1', author: 'Author 1', isbn: '1234567890', publicationDate: '2023-01-01' },
      { title: 'Book 2', author: 'Author 2', isbn: '0987654321', publicationDate: '2022-05-15' },
    ];
  };
  
  const bookService = { getBooks };
  export default bookService;
  