const getAuthors = async () => {
    // Mock data or API call
    return [
      { name: 'Author 1', birthDate: '1970-01-01', biography: 'Short biography of Author 1.' },
      { name: 'Author 2', birthDate: '1980-05-15', biography: 'Short biography of Author 2.' },
    ];
  };
  
  const authorService = { getAuthors };
  export default authorService;
  