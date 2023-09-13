const app = Vue.createApp({
  data() {
    return {
      newComment: {
        text: "",
      },
      cafes: [
        {
          imageUrl:
            "https://i0.photo.2gis.com/images/branch/0/30258560088758746_615f.jpg",
          name: "Барвинок",
          address: "ул. Мира, 7 (этаж цокольный)",
          cuisine: "Украинская",
          lunch: 1,
        },
        {
          imageUrl:
            "https://i4.photo.2gis.com/images/branch/38/5348024602951070_5007.jpg",
          name: "Дед Хо",
          address: "ул. Мира, 7 (этаж цокольный)",
          cuisine: "Вьетнамская",
          lunch: 1,
        },
        {
          imageUrl:
            "https://i3.photo.2gis.com/images/branch/0/30258560063238684_ab2c.jpg",
          name: "Синичка",
          address: " Каменно-островский проспект, 14 цокольный этаж",
          cuisine: "СССР",
          lunch: 1,
        },
        {
          imageUrl:
            "https://i8.photo.2gis.com/images/branch/0/30258560071696228_bd35.jpg",
          name: "Хачапури и вино",
          address: "Большой проспект П.С., 74, 1 этаж",
          cuisine: "Грузинская",
          lunch: 1,
        },
        {
          imageUrl:
            "https://avatars.mds.yandex.net/get-altay/9663145/2a0000018906aad394254c983ccde410d505/XXXL",
          name: "Паруса на крыше",
          address: "ул. Льва Толстого, 9",
          cuisine: "Смешанная",
          lunch: 1,
        },
        {
          imageUrl:
            "https://i1.photo.2gis.com/images/branch/0/30258560096364628_e9c7.jpg",
          name: "Ramen Slurp Bar",
          address: "Большой проспект П.С., 65, 1 этаж",
          cuisine: "Раменная",
          lunch: 0,
        },
        {
          imageUrl:
            "https://avatars.mds.yandex.net/get-altay/910613/2a00000187ae775b13a6bfd01faa027e1189/XXXL",
          name: "Лукоморье",
          address: "улица Рентгена, 9Б (под арку)",
          cuisine: "Смешанная",
          lunch: 1,
        },
        {
          imageUrl:
            "https://i2.photo.2gis.com/images/branch/0/30258560109887175_b126.jpg",
          name: "Civil",
          address: "Большой просп. Петроградской стороны, 71",
          cuisine: "Смешанная",
          lunch: 0,
        },
        {
          imageUrl:
            "https://i2.photo.2gis.com/images/branch/0/30258560109887175_b126.jpg",
          name: "Futura",
          address: "Набережная реки Карповки, 5 к36 1 этаж",
          cuisine: "",
          lunch: 0,
        },
        {
          imageUrl: "",
          name: "Pan and cake",
          address: "",
          cuisine: "",
          lunch: 0,
        },
        {
          imageUrl: "",
          name: "Каха бар",
          address: "",
          cuisine: "",
          lunch: 0,
        },
        {
          imageUrl: "",
          name: "Буше",
          address: "",
          cuisine: "",
          lunch: 0,
        },
        {
          imageUrl: "",
          name: "Люди любят",
          address: "",
          cuisine: "",
          lunch: 0,
        },
        {
          imageUrl: "",
          name: "Теремок",
          address: "",
          cuisine: "",
          lunch: 0,
        },
        {
          imageUrl:
            "https://i2.photo.2gis.com/images/branch/0/30258560083049418_dfc7.jpg",
          name: "Coffee Room",
          address: "Большой проспект П.С., 41",
          cuisine: "Европейская",
          lunch: 0,
        },
        {
          imageUrl:
            "https://i2.photo.2gis.com/images/branch/0/30258560083049418_dfc7.jpg",
          name: "Crispy pizza",
          address: "Большой проспект П.С., 41",
          cuisine: "Европейская",
          lunch: 0,
        },
        {
          imageUrl: "",
          name: "Akiba Ramen",
          address: "Каменноостровский проспект, 22",
          cuisine: "Раменная",
          lunch: 0,
        },
        {
          imageUrl:
            "https://i5.photo.2gis.com/images/branch/0/30258560091785308_7a43.jpg",
          name: "Coffee-3",
          address: "Проспект Медиков, 5 к7",
          cuisine: "Кофейня",
          lunch: 0,
        },
        {
          imageUrl:
            "https://i5.photo.2gis.com/images/branch/0/30258560091785308_7a43.jpg",
          name: "Чебуреки и рюмочная у Ларисы",
          address: "Кронверкская, 7",
          cuisine: "Чебуречная",
          lunch: 1,
        },
        {
          imageUrl:
            "https://i5.photo.2gis.com/images/branch/0/30258560091785308_7a43.jpg",
          name: "Толстый Фраер",
          address: "Мира, 11",
          cuisine: "",
          lunch: 1,
        },
        {
          imageUrl: "",
          name: "Брынза",
          address: "Мира, 11",
          cuisine: "Чебуречная",
          lunch: 0,
        },
        {
          imageUrl: "",
          name: "Bab jib",
          address: "",
          cuisine: "Корейская",
          lunch: 0,
        },
        {
          imageUrl: "",
          name: "Жизнь Март",
          address: "",
          cuisine: "",
          lunch: 0,
        },
      ],
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

      localStorage.setItem("comments", JSON.stringify(this.comments));
      //localStorage.removeItem("comments");

      this.newComment.text = "";
    },
    getAddress(address) {
      if (address === "") {
        return "Нет адреса";
      }
      return address;
    },
    getCuisine(cuisine) {
      if (cuisine === "") {
        return "Нет данных";
      }
      return cuisine;
    },
    getLunch(lunch) {
      if (lunch === 1) {
        return "есть";
      }
      return "нет";
    },
  },
});

app.mount("#app");
