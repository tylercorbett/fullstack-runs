export const getSentence = () => {
  fetch('https://backendrunb.herokuapp.com/random')
    .then(res => res.json())
    .then(json => {
      return json;
    });
};


