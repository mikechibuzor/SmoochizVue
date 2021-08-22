export default {
  namespaced: true,
  state() {
    return {
      categories: [
        {
          name: "Category 1",
          categoryImage: "assets/images/firstImage.jpg",
          id: 1
        },
        {
          name: "Category 2",
          categoryImage: "assets/images/secondImage.png",
          id: 2
        },
        {
          name: "Category 3",
          categoryImage: "assets/images/thirdImage.png",
          id: 3
        },
        {
          name: "Category 4",
          categoryImage: "assets/images/fourthImage.jpg",
          id: 4
        },
        {
          name: "Category 5",
          categoryImage: "assets/images/fifthImage.jpg",
          id: 5
        },
        {
          name: "Category 6",
          categoryImage: "assets/images/sixthImage.jpg",
          id: 6
        },
      ],
    };
  },
  actions: {},
  mutations: {},
  getters: {
    getCategories(state) {
      return state.categories;
    },
  },
};
