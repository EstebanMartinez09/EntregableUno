const getRandomElement = (elements) => {
    const indexRandom = Math.floor(Math.random() * elements.length);
    return elements[indexRandom]
  };

  export {
    getRandomElement
  }