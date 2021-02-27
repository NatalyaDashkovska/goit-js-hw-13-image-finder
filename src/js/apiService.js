// function onSearch() {
//   const text = inputRef.value;

//   fetch(
//     `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${text}&page=${num}&per_page=12&key=${key}`,
//   )
//     .then(res => res.json())
//     .then(images => insertList(images));
// }
// export default onSearch;

export default {
  key: '20431977-9a0c4e5e6a84a634219821f23',
  text: '',
  num: 1,

  fetchCards() {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.text}&page=${this.num}&per_page=12&key=${this.key}`,
    )
      .then(response => response.json())
      .then(images => {
        return images;
      });
  },
  resetPage() {
    this.num = 1;
  },
  incrementPage() {
    this.num += 1;
  },
  get query() {
    return this.text;
  },
  set query(value) {
    this.text = value;
  },
};
