import { styles } from './styles';

export const oneImage =
  "https://images.unsplash.com/photo-1566821582776-92b13ab46bb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60";
export const twoImage =
  "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80";
export const threeImage =
  "https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80";
export const fourImage =
  "https://images.unsplash.com/photo-1600207438283-a5de6d9df13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80";
export const fiveImage =
  "https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80";
export const sixImage =
  "https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80";


export const data = [
  {
    id: 1,
    uri: oneImage,
    name: "Andy Will",
  },
  {
    id: 2,
    uri: twoImage,
    name: "Emmy Lou",
  },
  {
    id: 3,
    uri: threeImage,
    name: "Tim Russel",
  },
  {
    id: 4,
    uri: fourImage,
    name: "Jessica Bell",
  },
  {
    id: 5,
    uri: fiveImage,
    name: "Ryan Patrick",
  },
  {
    id: 6,
    uri: sixImage,
    name: "Tina Cate",
  },
];

export const chat_data = [
  {
    name: 'Ryan Patrick',
    profile_image: fiveImage,
    type: 'Text',
    text: "Helloo\nteam!😍",
  },
  {
    name: 'Andy Will',
    profile_image: oneImage,
    type: 'Text',
    text: "Hello! Can you hear me?🤯\n@ryanpatrick",
  },
  {
    name: 'Jessica Bell',
    profile_image: fourImage,
    type: 'Text',
    text: "Hi team! Let's get\nstarted it.",
  },
  {
    name: 'Emmy Lou',
    profile_image: twoImage,
    type: 'Text',
    text: "Good\nmorning!🌈",
  },
  {
    name: 'Tim Russel',
    profile_image: threeImage,
    type: 'Text',
    text: "New design\ndocument⬇️",
  },
  {
    name: 'Tim Russel',
    profile_image: threeImage,
    type: 'File',
    file: {
      name: 'NewYear.sketch',
      color: 'gold',
      size: '120 MB'
    }
  },
  {
    name: 'Ryan Patrick',
    profile_image: fiveImage,
    type: 'Text',
    text: "Hi team!❤️",
  },
  {
    name: 'Ryan Patrick',
    profile_image: fiveImage,
    type: 'Text',
    text: "I downloaded the file\n@timrussel",
  },
  {
    name: 'Emmy Lou',
    profile_image: twoImage,
    type: 'Text',
    text: "Woooww!\nAwesome❤️",
  },
]

export const dataImages = [
  {
    id: "1",
    image:
    {
      uri: "https://e0.pxfuel.com/wallpapers/568/276/desktop-wallpaper-minimalist-dark.jpg",
    },
    size: "large",
    style: styles.firstImage,
  },
  {
    id: "2",
    image:
    {
      uri: "https://e0.pxfuel.com/wallpapers/799/827/desktop-wallpaper-dark-female-black.jpg",
    },
    size: "large",
    style: styles.thImages,
  },
  {
    id: "3",
    image:
    {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2q1SK-d1so1cNOabKmRj0a8y38_zI6uryA&usqp=CAU",
    },

    size: "large",
    style: styles.thImages,
  },
  {
    id: "4",
    image:
    {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw81-kt1o_H5tbk3w7nsDIGaTOVZE7ApGUNA&usqp=CAU",
    },
    size: "large",
    style: styles.twoImages,
  },
  {
    id: "5",
    image:
    {
      uri: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/49123/article_aligned%402x.jpg",
    },
    size: "large",
    style: styles.twoImages,
  },
  {
    id: "6",
    image: {
      uri: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/49123/article_aligned%402x.jpg",
    },
    size: "large",
    style: styles.lastImage,
  },
  {
    id: "7",
    image: {
      uri:
        "https://static.cdn.asset.aparat.com/avt/40697525-7932-b__5853.jpg",
    },
    size: "large",
    style: styles.lastImage,
  },
  {
    id: "8",
    image: {
      uri:
        "https://cdn.nody.ir/files/2021/09/23/nody-%D8%B9%DA%A9%D8%B3-%D8%B2%DB%8C%D8%A8%D8%A7%D8%AA%D8%B1%DB%8C%D9%86-%D8%AC%D8%A7%DB%8C-%D8%AC%D9%87%D8%A7%D9%86-1632412340.jpg",
    },
    size: "large",
    style: styles.lastImage,
  },
  {
    id: "9",
    image: {
      uri:
        "https://panel.safaraneh.com/wp-content/uploads/2022/06/0618-mexico.jpg",
    },
    size: "large",
    style: styles.lastImage,
  },
  {
    id: "10",
    image: {
      uri:
        "https://arzotravels.com/wp-content/uploads/2017/04/shutterstock_554612293.jpg",
    },
    size: "large",
    style: styles.lastImage,
  },
  {
    id: "11",
    image: {
      uri:
        "https://wallpaperaccess.com/full/5576099.jpg",
    },
    size: "large",
    style: styles.lastImage,
  },
];


export const dataSocial = [
  {
    id: "bd7acbea",
    title: "First Item",
    image:
      "https://www.transparentpng.com/thumb/anime-boy/GzVoMV-anime-boy-cut-out-png.png",
  },
  {
    id: "3ac68afc",
    image:
      "https://www.transparentpng.com/thumb/anime-boy/fRZVsA-anime-boy-clipart-hd.png",
    title: "Second Item",
  },
  {
    id: "58888694a0f",
    image:
      "https://www.transparentpng.com/thumb/anime-boy/KRE3FV-anime-boy-png-picture.png",
    title: "Third Item",
  },
  {
    id: "57778694a0f",
    image:
      "https://p7.hiclipart.com/preview/218/63/782/uchiha-clan-naruto-anime-manga-naruto.jpg",
    title: "Four Item",
  },
  {
    id: "58666694a0f",
    image:
      "https://p7.hiclipart.com/preview/218/63/782/uchiha-clan-naruto-anime-manga-naruto.jpg",
    title: "Five Item",
  },
];


// Videos Data

export const videoData = [
  {
    video: require('../../assets/videos/video1.mp4'),
    postProfile: require('../../assets/images/post1.jpg'),
    title: 'Ram_Charan',
    description: 'Feel the buity of nature',
    likes: '245k',
    isLike: false,
  },
  {
    video: require('../../assets/videos/video2.mp4'),
    postProfile: require('../../assets/images/post2.jpg'),
    title: 'The_Groot',
    description: "It's a tea time",
    likes: '656k',
    isLike: false,
  },
  {
    video: require('../../assets/videos/video3.mp4'),
    postProfile: require('../../assets/images/post3.jpg'),
    title: 'loverland',
    description: 'Feel the buity of nature',
    likes: '243k',
    isLike: false,
  },
  {
    video: require('../../assets/videos/video4.mp4'),
    postProfile: require('../../assets/images/post4.jpg'),
    title: 'mr. bean',
    description: 'How cute it is !!',
    likes: '876k',
    isLike: false,
  },
];

// Friends Profile Data

export const FriendsProfileData = [
  {
    name: 'Ram_Charan',
    accountName: 'Ram Charan',
    profileImage: require('../../assets/images/profile4.jpg'),
    posts: 56,
    followers: 6542,
    following: 43,
    follow: false,
  },
  {
    name: 'The_Tom',
    accountName: 'Tom',
    profileImage: require('../../assets/images/profile5.jpg'),
    posts: 24,
    followers: 1253,
    following: 64,
    follow: false,
  },
  {
    name: 'live_long',
    accountName: 'Live Long',
    profileImage: require('../../assets/images/profile2.jpg'),
    posts: 21,
    followers: 7886,
    following: 32,
    follow: false,
  },
  {
    name: 'the_real_hero',
    accountName: 'Ram Charan',
    profileImage: require('../../assets/images/post1.jpg'),
    posts: 123,
    followers: 64253,
    following: 32,
    follow: false,
  },
  {
    name: 'the_jerry',
    accountName: 'The Jerry',
    profileImage: require('../../assets/images/post2.jpg'),
    posts: 56,
    followers: 6542,
    following: 43,
    follow: false,
  },
  {
    name: 'angry_bird',
    accountName: 'Angry Bird',
    profileImage: require('../../assets/images/post3.jpg'),
    posts: 452,
    followers: '564k',
    following: 31,
    follow: false,
  },
  {
    name: 'mr_bean',
    accountName: 'Mr Bean',
    profileImage: require('../../assets/images/post4.jpg'),
    posts: 543,
    followers: '435k',
    following: 22,
    follow: false,
  },
  {
    name: 'the_Jd',
    accountName: 'Mr JD',
    profileImage: require('../../assets/images/post5.jpg'),
    posts: 234,
    followers: '763k',
    following: 332,
    follow: false,
  },
  {
    name: '_don_',
    accountName: 'Don',
    profileImage: require('../../assets/images/post6.jpg'),
    posts: 111,
    followers: 11223,
    following: 1,
    follow: false,
  },
  {
    name: 'black_white',
    accountName: 'blackWhite',
    profileImage: require('../../assets/images/post7.jpg'),
    posts: 121,
    followers: 43213,
    following: 21,
    follow: false,
  },
  {
    name: 'iron_man',
    accountName: 'Iron Man',
    profileImage: require('../../assets/images/post8.jpg'),
    posts: 432,
    followers: '987k',
    following: 24,
    follow: false,
  },
  {
    name: 'funny_videos',
    accountName: 'Funny Video Official',
    profileImage: require('../../assets/images/post9.jpg'),
    posts: '1.2k',
    followers: '1.2M',
    following: 12,
    follow: false,
  },
  {
    name: 'mr_jhon',
    accountName: 'Mr Jhony',
    profileImage: require('../../assets/images/post10.jpg'),
    posts: 533,
    followers: 64322,
    following: 123,
    follow: false,
  },
];
