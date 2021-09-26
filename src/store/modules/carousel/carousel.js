export default {
  namespaced: true,
  state() {
    return {
      carousel: [
        {
          id: 1,
          imageSource: "assets/images/lingerie1.jpg",
          altText: "seventImage",
        },
        {
          id: 2,
          imageSource: "assets/images/lingerie2.jpg",
          altText: "fifthImage",
        },
        {
          id: 3,
          imageSource: "assets/images/lingerie3.jpg",
          altText: "another one",
        },
        {
          id: 4,
          imageSource: "assets/images/lingerie4.jpg",
          altText: "the fourth one",
        },
      ],
    };
  },
  getters: {
    getCarousel(state) {
      return state.carousel;
    },
  },
  mutations: {},
  actions: {},
};
