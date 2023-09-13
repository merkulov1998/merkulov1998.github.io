const app = Vue.createApp({
  data() {
    return {
      newComment: {
        text: "",
      },
      comments: [],
    };
  },
  mounted() {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      this.comments = JSON.parse(savedComments);
    }
  },
  methods: {
    addComment() {
      const comment = {
        id: Date.now(),
        text: this.newComment.text,
      };

      this.comments.push(comment);

      //localStorage.setItem("comments", JSON.stringify(this.comments));
      //localStorage.removeItem("comments");

      this.newComment.text = "";
    },
  },
});

app.mount("#app");
