
import { styles } from './styles';

export const dataImages = [
    {
        id: "1",
        image: {
            uri: "https://e0.pxfuel.com/wallpapers/568/276/desktop-wallpaper-minimalist-dark.jpg",
        },

        style: styles.firstImage,
    },
    {
        id: "2",
        images: [
            {
                uri: "https://e0.pxfuel.com/wallpapers/799/827/desktop-wallpaper-dark-female-black.jpg",
            },
            {
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2q1SK-d1so1cNOabKmRj0a8y38_zI6uryA&usqp=CAU",
            }
        ],
        style: styles.thImages,
    },
    {
        id: "3",
        images: [
            {
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw81-kt1o_H5tbk3w7nsDIGaTOVZE7ApGUNA&usqp=CAU",
            },
            {
                uri: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/49123/article_aligned%402x.jpg",
            }
        ],
        style: styles.twoImages,
    },
    {
        id: "4",
        image: {
            uri: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/49123/article_aligned%402x.jpg",
        },
        style: styles.lastImage,
    },
    {
        id: "5",
        image: {
            uri:
                "https://static.cdn.asset.aparat.com/avt/40697525-7932-b__5853.jpg",
        },
        style: styles.lastImage,
    },
    {
        id: "6",
        image: {
            uri:
                "https://cdn.nody.ir/files/2021/09/23/nody-%D8%B9%DA%A9%D8%B3-%D8%B2%DB%8C%D8%A8%D8%A7%D8%AA%D8%B1%DB%8C%D9%86-%D8%AC%D8%A7%DB%8C-%D8%AC%D9%87%D8%A7%D9%86-1632412340.jpg",
        },
        style: styles.lastImage,
    },
    {
        id: "7",
        image: {
            uri:
                "https://panel.safaraneh.com/wp-content/uploads/2022/06/0618-mexico.jpg",
        },
        style: styles.lastImage,
    },
    {
        id: "8",
        image: {
            uri:
                "https://arzotravels.com/wp-content/uploads/2017/04/shutterstock_554612293.jpg",
        },
        style: styles.lastImage,
    },
    {
        id: "9",
        image: {
            uri:
                "https://wallpaperaccess.com/full/5576099.jpg",
        },
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
  