import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type",
}));

let PopularMovies = [
    {
        "id": 1,
        "title": "MUNJYA",
        "year": 2024,
        "rank": 15,
        "rankChange": "▲ +11",
        "rating": 67,
        "imdbRating": 6.5,
        "imdbVotes": "21k",
        "backdropImage": "https://images.justwatch.com/backdrop/317639257/s1440/munjha.webp/munjha.webp",
        "posterImage": "https://wallpapercave.com/wp/wp14067165.jpg",
        "duration": "2h 3min",
        "highestRank": 1,
        "top10Days": 97,
        "top100Days": 114,
        "top1000Days": 121,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "55k",
        "dislikes": "5",
        "watchlistText": "WatchList",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List",
        "videoId" : "qGb5aKEYR8Q"
    },

    {
        "id": 2,
        "title": "STRANGER THINGS",
        "year": 2016,
        "rank": 82,
        "rankChange": "▲ +67",
        "rating": 15,
        "imdbRating": 8.7,
        "imdbVotes": "1m",
        "backdropImage": "https://images.justwatch.com/backdrop/102141616/s1440/stranger-things.webp/stranger-things.webp",
        "posterImage": "https://rukminim2.flixcart.com/image/850/1000/jr0y9ow0/poster/r/g/e/medium-stranger-things-poster-for-room-office-13-inch-x-19-inch-original-imafcwvzakgs3c5v.jpeg?q=90&crop=false",
        "duration": "1h 1min",
        "highestRank": 1,
        "top10Days": 228,
        "top100Days": 1921,
        "top1000Days": 2994,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "79k",
        "dislikes": "3.6",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List",  
        "videoId" : "b9EkMc79ZSU",
        "type" : "series",
        "seasons": [ // Add season details here
          {
            "seasonNumber": 1,
            "episodes": 8,
            "posterImage": "https://www.justwatch.com/images/poster/249313589/s166/season-1.webp"
          },
    
          {
            "seasonNumber": 2,
            "episodes": 9,
            "posterImage": "https://www.justwatch.com/images/poster/10828442/s166/season-2.webp"
          },
    
          {
            "seasonNumber": 3,
            "episodes": 8,
            "posterImage": "https://www.justwatch.com/images/poster/147403540/s166/season-3.webp"
          },
    
          {
            "seasonNumber": 4,
            "episodes": 9,
            "posterImage": "https://www.justwatch.com/images/poster/264470916/s166/season-4.webp"
          },

        ]
    },

    {
        "id": 3,
        "title": "JUJUTSU KAISEN",
        "year": 2020,
        "rank": 175,
        "rankChange": "▲ +21",
        "rating": 93,
        "imdbRating": 8.6,
        "imdbVotes": "131K",
        "backdropImage": "https://images.justwatch.com/backdrop/297814126/s1440/jujutsu-kaisen.webp/jujutsu-kaisen.webp",
        "posterImage": "https://i.pinimg.com/originals/ac/43/52/ac4352f877cd4265d69538bd7532b7b3.jpg",
        "duration": " 24min",
        "highestRank": 2,
        "top10Days": 71,
        "top100Days": 390,
        "top1000Days": 1437,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "7.5K",
        "dislikes": "511",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List",  
        "videoId" : "Pm-wNmS9RGI",
        "type" : "series",
        "seasons": [ // Add season details here
          {
            "seasonNumber": 1,
            "episodes": 24,
            "posterImage": "https://www.justwatch.com/images/poster/312146079/s166/season-1.webp"
          },
    
          {
            "seasonNumber": 2,
            "episodes": 24,
            "posterImage": "https://www.justwatch.com/images/poster/306336521/s166/season-2.webp"
          },
    
          {
            "seasonNumber": 3,
            "episodes": 1,
            "posterImage": "https://www.justwatch.com/images/poster/320955231/s166/season-3.webp"
          },
        ]
    },
    {
        "id": 4,
        "title": "STREE 2: SARKATE KA AATANK",
        "year": 2024,
        "rank": 79,
        "rankChange": "▲ +67",
        "rating": 15,
        "imdbRating": 7.6,
        "imdbVotes": "25K",
        "backdropImage": "https://assets-in.bmscdn.com/discovery-catalog/events/et00364249-qbqdytudsg-landscape.jpg",
        "posterImage": "https://assetscdn1.paytm.com/images/cinema/Stree21-min-f4ac2e40-4389-11ef-83ec-5d141d381675.jpg",
        "duration": "2h 27min",
        "highestRank": 1,
        "top10Days": 228,
        "top100Days": 1921,
        "top1000Days": 2994,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "79k",
        "dislikes": "3.6",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List", 
        "videoId" : "hrNF3Qerxrk"
    },
    {
        "id": 5,
        "title": "GOBLIN",
        "year": 2016,
        "rank": 640.,
        "rankChange": "▲ +564",
        "rating": 73,
        "imdbRating": 8.6,
        "imdbVotes": "30k",
        "backdropImage": "https://images.justwatch.com/backdrop/31621283/s1440/goblin.webp/goblin.webp",
        "posterImage": "https://i.pinimg.com/736x/4e/70/9c/4e709c0df244780689bb3ab3d0373b06.jpg",
        "duration": "53min",
        "highestRank": 14,
        "top10Days": 0,
        "top100Days": 286,
        "top1000Days": 1342,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "79k",
        "dislikes": "3.6",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List",
        "videoId" : "qXCxYfV6V6c"
    },

    {
        "id": 6,
        "title": "SANAM TERI KASAM",
        "year": 2016,
        "rank": 214,
        "rankChange": "▲ +8",
        "rating": 69,
        "imdbRating": 7.6,
        "imdbVotes": "17k",
        "backdropImage": "https://images.justwatch.com/backdrop/198570000/s1440/sanam-teri-kasam.webp/sanam-teri-kasam.webp",
        "posterImage": "https://m.media-amazon.com/images/M/MV5BYTJmYmI0YWQtYjI3MC00MWU4LWI2OTQtNDYyOGEyNThjZjg3XkEyXkFqcGc@._V1_.jpg",
        "duration": "2h 34min",
        "highestRank": 7,
        "top10Days": 3,
        "top100Days": 117,
        "top1000Days": 1869,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "118k",
        "dislikes": "37",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List", 
        "videoId" : "_7L9F99K-kM"
    },
    {
        "id": 7,
        "title": "WEDNESDAY",
        "year": 2022,
        "rank": 172,
        "rankChange": "▲ -104",
        "rating": 95,
        "imdbRating": 8.1,
        "imdbVotes": "383K",
        "backdropImage": "https://images.justwatch.com/backdrop/301994024/s1440/wednesday.webp/wednesday.webp",
        "posterImage": "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/b/1/l/large-wednesday-poster-for-wall-home-office-decoration-posters-original-imagn38htdpyunqe.jpeg?q=90&crop=false",
        "duration": "29min",
        "highestRank": 1,
        "top10Days": 107,
        "top100Days": 329,
        "top1000Days": 783,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "44k",
        "dislikes": "2.2",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List", 
        "videoId" : "DwvQLVAxiKY"
    },
    {
        "id": 8,
        "title": "MY FAULT",
        "year": 2023,
        "rank": 579,
        "rankChange": "▲ +453",
        "rating": 82,
        "imdbrating": 6.2,
        "imdbVotes": "28K",
        "backdropImage": "https://images.justwatch.com/backdrop/305772264/s1440/culpa-mia.webp/culpa-mia.webp",
        "posterImage": "https://m.media-amazon.com/images/I/61i+ZrpiIiL._AC_UF894,1000_QL80_.jpg",
        "duration": "1h 57min",
        "highestRank": 3,
        "top10Days": 17,
        "top100Days": 82,
        "top1000Days": 484,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "30k",
        "dislikes": "536",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List", 
        "videoId" : "e7lvpm13ZN0"
    },
    {
        "id": 9,
        "title": "YOUR NAME",
        "year": 2016,
        "rank": 596,
        "rankChange": "▲ +33",
        "rating": 15,
        "imdbRating": 8.4,
        "imdbVotes": "334K",
        "backdropImage": "https://images.justwatch.com/backdrop/56668328/s1440/your-name.webp/your-name.webp",
        "posterImage": "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/1/f/p/your-name-the-official-visual-guide-original-imahy5knsetkjzxe.jpeg?q=90&crop=false",
        "duration": "1h 49min",
        "highestRank": 1,
        "top10Days": 228,
        "top100Days": 1921,
        "top1000Days": 2994,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "30k",
        "dislikes": "382",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List", 
        "videoId" : "_oWzYOwXn-o"
    },
    {
        "id": 10,
        "title": "SUZUME",
        "year": 2022,
        "rank": 82,
        "rankChange": "▲ +67",
        "rating": 91,
        "imdbRating": 7.6,
        "imdbVotes": "46K",
        "backdropImage": "https://images.justwatch.com/backdrop/306324717/s1440/suzume-no-tojimari.webp/suzume-no-tojimari.webp",
        "posterImage": "https://m.media-amazon.com/images/I/71riN5eCekL.jpg",
        "duration": "2h 1min",
        "highestRank": 2,
        "top10Days": 245,
        "top100Days": 1451,
        "top1000Days": 1584,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "2k",
        "dislikes": "263",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List", 
        "videoId" : "ciQc8lfvSm0",
    },

    {
        "id": 11,
        "title": "MONEY HEIST",
        "year": 2017,
        "rank": 40,
        "rankChange": "▲ +1",
        "rating": 91,
        "imdbRating": 8.2,
        "imdbVotes": "547k",
        "backdropImage": "https://images.justwatch.com/backdrop/242778527/s1440/paperhouse.webp/paperhouse.webp",
        "posterImage": "https://m.media-amazon.com/images/I/71pFk6piECL._AC_UF1000,1000_QL80_.jpg",
        "duration": "50min",
        "highestRank": 1,
        "top10Days": 239,
        "top100Days": 2007,
        "top1000Days": 2481,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "40k",
        "dislikes": "2.7k",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List", 
        "videoId" : "8QkyLqmJCMM",
        "type": "series",
        "seasons": [ // Add season details here
              {
                "seasonNumber": 1,
                "episodes": 13,
                "posterImage": "https://www.justwatch.com/images/poster/270389468/s166/season-1.webp"
              },
        
              {
                "seasonNumber": 2,
                "episodes": 9,
                "posterImage": "https://www.justwatch.com/images/poster/281065948/s166/season-2.webp"
              },
        
              {
                "seasonNumber": 3,
                "episodes": 8,
                "posterImage": "https://www.justwatch.com/images/poster/281066199/s166/season-3.webp"
              },
        
              {
                "seasonNumber": 4,
                "episodes": 8,
                "posterImage": "https://www.justwatch.com/images/poster/270389906/s166/season-4.webp"
              },
        
              {
                "seasonNumber": 5,
                "episodes": 10,
                "posterImage": "https://www.justwatch.com/images/poster/281044992/s166/season-5.webp"
              },
            ]
    },

    {
        "id": 12,
        "title": "TUMBBAD",
        "year": 2018,
        "rank": 73,
        "rankChange": "▲ +67",
        "rating": 82,
        "imdbRating": 8.2,
        "imdbVotes": "64k",
        "backdropImage": "https://images.justwatch.com/backdrop/245230559/s1440/tumbbad.webp/tumbbad.webp",
        "posterImage": "https://m.media-amazon.com/images/M/MV5BMzVjNGFmZTMtYjRjNi00OWQzLTlkNWQtZmU1OGI0ODc2ODU5XkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "duration": "1h 53min",
        "highestRank": 2,
        "top10Days": 258,
        "top100Days": 1458,
        "top1000Days": 2586,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "18k",
        "dislikes": "3.5k",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List",
        "videoId" : "YGIcZrUBY0k",
    },

    {
        "id": 13,
        "title": "PUT YOUR HEAD ON MY SHOULDER",
        "year": 2019,
        "rank": 1411,
        "rankChange": "▲ +820",
        "rating": 53,
        "imdbRating": 8.0,
        "imdbVotes": "3.4k",
        "backdropImage": "https://images.justwatch.com/backdrop/150332384/s1440/put-your-head-on-my-shoulder.webp/put-your-head-on-my-shoulder.webp",
        "posterImage": "https://image.tmdb.org/t/p/original/zVYvodC12ZHGVPHX8LJjZHDERmK.jpg",
        "duration": "41min",
        "highestRank": 51,
        "top10Days":  10,
        "top100Days": 50,
        "top1000Days": 239,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "5k",
        "dislikes": "34",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List", 
        "videoId" : "HMLeGMSeJVM"
    },


    {
        "id": 14,
        "title": "LAILA MAJNU",
        "year": 2018,
        "rank": 12.,
        "rankChange": "▲ +11",
        "rating": 78,
        "imdbRating": 7.7,
        "imdbVotes": "6.6",
        "backdropImage": "https://images.justwatch.com/backdrop/81338817/s1440/laila-majnu.webp/laila-majnu.webp",
        "posterImage": "https://static.digit.in/OTT/v2/images/laila-majnu-229760.jpg?tr=w-600",
        "duration": "2h 19min",
        "highestRank": 2,
        "top10Days": 8 ,
        "top100Days": 83,
        "top1000Days": 445,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "55k",
        "dislikes": "358",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List", 
        "videoId" : "Cv-6cAHanZ8"
    },

    {
        "id": 15,
        "title": "ATTACK ON TITAN",
        "year": 2013,
        "rank": 46,
        "rankChange": "▲ +63",
        "rating": 91,
        "imdbRating": 9.1,
        "imdbVotes": "546k",
        "backdropImage": "https://images.justwatch.com/backdrop/302212233/s1440/attack-on-titan.webp/attack-on-titan.webp",
        "posterImage": "https://m.media-amazon.com/images/I/61t9ie31jgL._AC_UF1000,1000_QL80_.jpg",
        "duration": "25min",
        "highestRank": 1,
        "top10Days": 63,
        "top100Days": 1077,
        "top1000Days": 2941,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "17k",
        "dislikes": "1.6k",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List", 
        "videoId" : "LV-nazLVmgo"
    },


    {
        "id": 16,
        "title": "ANIMAL",
        "year": 2023,
        "rank": 192.,
        "rankChange": "▲ +342",
        "rating": "67%",
        "imdbRating": 6.1,
        "imdbVotes": "99k",
        "backdropImage": "https://images.justwatch.com/backdrop/309854144/s1440/animal-2022.webp/animal-2022.webp",
        "posterImage": "https://m.media-amazon.com/images/M/MV5BMmFjYzdhZjktN2E1ZS00NzY5LWE1NTUtY2U4YTQ1NzdhOGVmXkEyXkFqcGc@._V1_QL75_UX820_.jpg",
        "duration": "1h 1min",
        "highestRank": 1,
        "top10Days": 113,
        "top100Days": 241,
        "top1000Days": 336,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "12k",
        "dislikes": "152",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List", 
        "videoId" : "Dydmpfo68DA"
    },

    {
        "id": 17,
        "title": "LOVE IS SWEET",
        "year": 2020,
        "rank": 82,
        "rankChange": "▲ +67",
        "rating": 68,
        "imdbRating": 8.7,
        "imdbVotes": "18k",
        "backdropImage": "https://images.justwatch.com/backdrop/305955903/s1440/love-is-sweet.webp/love-is-sweet.webp",
        "posterImage": "https://m.media-amazon.com/images/M/MV5BYWZiZTQ0ZTMtOTJhNC00NzIzLTlmNjgtZmRmZDc4NTVmNjlmXkEyXkFqcGc@._V1_.jpg",
        "duration": "44min",
        "highestRank": 3,
        "top10Days": 15,
        "top100Days": 152,
        "top1000Days": 1025,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "10k",
        "dislikes": "1.1k",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List",
        "videoId" : "44SPxWJ9Rno" 
    },

    {
        "id": 18,
        "title": "THE CONJURING 2",
        "year": 2016,
        "rank": 990,
        "rankChange": "▲ +589",
        "rating": 93,
        "imdbRating": 7.3,
        "imdbVotes": "309k",
        "backdropImage": "https://www.justwatch.com/images/backdrop/828170/s1440/the-conjuring-2.webp/the-conjuring-2.webp",
        "posterImage": "https://e0.pxfuel.com/wallpapers/230/354/desktop-wallpaper-the-conjuring-2-movie-hq-the-conjuring-2-2019-the-conjuring-3-thumbnail.jpg",
        "duration": "1h 53min",
        "highestRank": 13,
        "top10Days": 5,
        "top100Days": 70,
        "top1000Days": 2994,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "17k",
        "dislikes": "1.1k",
        "watchlistText": "WatchLists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List", 
        "videoId" : "ejMMn0t58Lc"
    },


    {
        "id": 19,
        "title": "THE KISSING BOOTH 3",
        "year": 2018,
        "rank": 3023.,
        "rankChange": "▲ +2225",
        "rating": 75,
        "imdb": 5.9,
        "imdbVotes": "96k",
        "backdropImage": "https://images.justwatch.com/backdrop/238965629/s1440/the-kissing-booth.webp/the-kissing-booth.webp",
        "posterImage": "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/z/u/s/the-kissing-booth-3-one-last-time-original-imah4ey75grdnnsp.jpeg?q=90&crop=false",
        "duration": "1h 45min",
        "highestRank": 4,
        "top10Days": 13,
        "top100Days": 164,
        "top1000Days": 667,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "4.7k",
        "dislikes": "1.5k",
        "watchlistText": "WatchLists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List",
        "videoId" : "5fKn0Dhj64w"
    },
    
    {
        "id": 20,
        "title": "MY GIRLFRIEND IS AN ALIAN",
        "year": 2019,
        "rank": 12,
        "rankChange": "▲ +45",
        "rating": 76,
        "imdbRating": 8.2,
        "imdbVotes": "2.7k",
        "backdropImage": "https://images.justwatch.com/backdrop/300784304/s1440/my-girlfriend-is-an-alien.webp/my-girlfriend-is-an-alien.webp",
        "posterImage": "https://image.tmdb.org/t/p/original/sOtUZ34xeQiEZh6n0tC8vkaTNQF.jpg",
        "duration": "44min",
        "highestRank": 5,
        "top10Days": 425,
        "top100Days": 1451,
        "top1000Days": 2524,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "4k",
        "dislikes": "35",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List", 
        "videoId" : "m21MWq6wb9Y"
    },

    
    {
        "id": 21,
        "title": "SHAITAAN",
        "year": 2024,
        "rank": 1841,
        "rankChange": "▲ +650",
        "rating": 53,
        "imdbRating": 6.6,
        "imdbVotes": "51k",
        "backdropImage": "https://images.justwatch.com/backdrop/315476071/s1440/black-magic-2024.webp/black-magic-2024.webp",
        "posterImage": "https://m.media-amazon.com/images/M/MV5BOTdlZGE5YmUtZDE1Ny00NzUzLTg2YzYtNWYyMzgyNzRiY2EzXkEyXkFqcGc@._V1_.jpg",
        "duration": "2h 12min",
        "highestRank": 1,
        "top10Days": 17,
        "top100Days": 105,
        "top1000Days": 208,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "990",
        "dislikes": "112",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List",
        "videoId" : "upDhKSx7P7E"
    },

    {
        "id": 22,
        "title": "Bad Newz",
        "year": 2024,
        "rank": 61,
        "rankChange": "▲ +170",
        "rating": 27,
        "imdbRating": 5.1,
        "imdbVotes": "25k",
        "backdropImage": "https://images.justwatch.com/backdrop/321215960/s1440/untitled-vicky-kaushal-prime-video-project.webp/untitled-vicky-kaushal-prime-video-project.webp",
        "posterImage": "https://www.prabhatkhabar.com/wp-content/uploads/2024/07/IMG_5778-716x1024.jpeg",
        "duration": "2h 20min",
        "highestRank": 3,
        "top10Days": 9,
        "top100Days": 41,
        "top1000Days": 80,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "1.5k",
        "dislikes": "203",
        "watchlistText": "Lists",
        "seenText": "Seen",
        "syncText": "Sign in to sync Watch List", 
         "videoId" : "uV50UfcIT68"
    },
    {
        "id": 23,
        "title": "NO GAIN NO LOVE",
        "year": 2024,
        "rank": 24,
        "rankChange": "▲ +12",
        "rating": 53,
        "imdbRating": 7.9,
        "imdbVotes": "1.1k",
        "backdropImage": "https://images.justwatch.com/backdrop/320106640/s1440/no-gain-no-love.webp/no-gain-no-love.webp",
        "posterImage": "https://asianwiki.com/images/6/68/No_Gain_No_Love-mp01.jpeg",
        "duration": "1h 8min",
        "highestRank": 12,
        "top10Days": 0,
        "top100Days": 27,
        "top1000Days": 41,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "520",
        "dislikes": "45",
        "watchlistText": "Lists",
        "seenText": "Seen all",
        "syncText": "Sign in to sync Watch List", 
         "videoId" : "NL88DKtfrl"
    },
    {
        "id": 24,
        "title": "DEMON SLAYER",
        "year": 2019,
        "rank": 29,
        "rankChange": "▲ +6",
        "rating": 90,
        "imdbRating": 8.6,
        "imdbVotes": "166k",
        "backdropImage": "https://images.justwatch.com/backdrop/317220005/s1440/demon-slayer-kimetsu-no-yaiba.webp/demon-slayer-kimetsu-no-yaiba.webp",
        "posterImage": "https://i.pinimg.com/736x/51/2c/9a/512c9a9bfd71ae7ab6b583dca74c318f.jpg",
        "duration": "26min",
        "highestRank": 1,
        "top10Days": 126,
        "top100Days": 660,
        "top1000Days": 1920,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "15k",
        "dislikes": "951",
        "watchlistText": "Lists",
        "seenText": "Seen all",
        "syncText": "Sign in to sync Watch List",
        "videoId" : "VQGCKyvzIM4",
        "type" : "series",
        "seasons": [ // Add season details here
          {
            "seasonNumber": 1,
            "episodes": 26,
            "posterImage": "https://www.justwatch.com/images/poster/320272945/s166/season-1.webp"
          },
    
          {
            "seasonNumber": 2,
            "episodes": 18,
            "posterImage": "https://www.justwatch.com/images/poster/320272944/s166/season-2.webp"
          },
    
          {
            "seasonNumber": 3,
            "episodes": 11,
            "posterImage": "https://www.justwatch.com/images/poster/320272942/s166/season-3.webp"
          },
    
          {
            "seasonNumber": 4,
            "episodes": 11,
            "posterImage": "https://www.justwatch.com/images/poster/320272941/s166/season-4.webp"
          },
    
          {
            "seasonNumber": 5,
            "episodes": 8,
            "posterImage": "https://www.justwatch.com/images/poster/320272943/s166/season-5.webp"
          },
        ]
    },
    {
        "id": 25,
        "title": "FRIENDS",
        "year": 2000,
        "rank": 31,
        "rankChange": "▲ +85",
        "rating": 92,
        "imdbRating": 8.9,
        "imdbVotes": "1m",
        "backdropImage": "https://images.justwatch.com/backdrop/177294826/s1440/friends.webp/friends.webp",
        "posterImage": "https://i.pinimg.com/originals/41/2c/ea/412cea60bab9c59e1d7414616d426f81.jpg",
        "duration": "25min",
        "hightRank": "01",
        "top10Days": "869 Days",
        "top100Days": "2581 Days",
        "top1000Days": "3197 Days",
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "35k",
        "dislikes": "274",
        "watchlistText": "Lists",
        "seenText": "Seen all",
        "syncText": "Sign in to sync Watch List", 
         "videoId" : "VQGCKyvzIM4",
         "type" : "series",
         "seasons": [ // Add season details here
           {
             "seasonNumber": 1,
             "episodes": 24,
             "posterImage": "https://www.justwatch.com/images/poster/238614572/s166/season-1.webp"
           },
     
           {
             "seasonNumber": 2,
             "episodes": 24,
             "posterImage": "https://www.justwatch.com/images/poster/238614566/s166/season-2.webp"
           },
     
           {
             "seasonNumber": 3,
             "episodes": 25,
             "posterImage": "https://www.justwatch.com/images/poster/238614557/s166/season-3.webp"
           },
     
           {
             "seasonNumber": 4,
             "episodes": 24,
             "posterImage": "https://www.justwatch.com/images/poster/238614546/s166/season-4.webp"
           },
     
           {
             "seasonNumber": 5,
             "episodes": 24,
             "posterImage": "https://www.justwatch.com/images/poster/238614540/s166/season-5.webp"
           },

           {
            "seasonNumber": 6,
            "episodes": 25,
            "posterImage": "https://www.justwatch.com/images/poster/300603462/s166/season-6.webp"
          },

          {
            "seasonNumber": 7,
            "episodes": 24,
            "posterImage": "https://www.justwatch.com/images/poster/238614521/s166/season-7.webp"
          },

          {
            "seasonNumber": 8,
            "episodes": 24,
            "posterImage": "https://www.justwatch.com/images/poster/304855085/s166/season-8.webp"
          },

          {
            "seasonNumber": 9,
            "episodes": 24,
            "posterImage": "https://www.justwatch.com/images/poster/238614510/s166/season-9.webp"
          },

          {
            "seasonNumber": 10,
            "episodes": 18,
            "posterImage": "https://www.justwatch.com/images/poster/252095774/s166/season-10.webp"
          },
         ]
    },

    {
        "id": 26,
        "title": "FLAMES",
        "year": 2018,
        "rank": 196,
        "rankChange": "▲ +297",
        "Rating": "71%",
        "imdbRating": 8.8,
        "imdbVotes": "33k",
        "backdropImage": "https://images.justwatch.com/backdrop/163344875/s1440/flames.webp/flames.webp",
        "posterImage": "https://m.media-amazon.com/images/M/MV5BOTQ5MWNkMDgtNjk5ZC00NGE5LWEyMGQtN2YzNzlkZTgxZWFlXkEyXkFqcGc@._V1_.jpg",
        "duration": "31min",
        "highestRank": 1,
        "top10Days": 71,
        "top100Days": 515,
        "top1000Days": 1793,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "4k",
        "dislikes": "35",
        "watchlistText": "Lists",
        "seenText": "Seen all",
        "syncText": "Sign in to sync Watch List", 
        "videoId" : "NkdCgjqQq7s",
        "type": "series",
       "seasons": [ // Add season details here
        {
          "seasonNumber": 1,
          "episodes": 5,
          "posterImage": "https://www.justwatch.com/images/poster/310326899/s166/season-1.webp"
        },
  
        {
          "seasonNumber": 2,
          "episodes": 5,
          "posterImage": "https://www.justwatch.com/images/poster/310330520/s166/season-2.webp"
        },
  
        {
          "seasonNumber": 3,
          "episodes": 5,
          "posterImage": "https://www.justwatch.com/images/poster/301436273/s166/season-3.webp"
        },
  
        {
          "seasonNumber": 4,
          "episodes": 5,
          "posterImage": "https://www.justwatch.com/images/poster/310330522/s166/season-4.webp"
        },
      ]
    },
    {
        "id": 27,
        "title": "ALICE IN BORDERLAND",
        "year": 2020,
        "rank": 204,
        "rankChange": "▲ +347",
        "rating": 92,
        "imdbRating": 7.7,
        "imdbVotes": "102k",
        "backdropImage": "https://images.justwatch.com/backdrop/239548970/s1440/alice-in-borderland.webp/alice-in-borderland.webp",
        "posterImage": "https://e1.pxfuel.com/desktop-wallpaper/942/291/desktop-wallpaper-alice-in-borderland-thumbnail.jpg",
        "duration": "54min",
        "highestRank": 4,
        "top10Days": 14,
        "top100Days": 152,
        "top1000Days": 1287,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "12k",
        "dislikes": "1k",
        "watchlistText": "Lists",
        "seenText": "Seen all",
        "syncText": "Sign in to sync Watch List", 
        "videoId" : "49_44FFKZ1M",
        "type" : "series",
        "seasons": [ // Add season details here
          {
            "seasonNumber": 1,
            "episodes": 8,
            "posterImage": "https://www.justwatch.com/images/poster/302278527/s166/season-1.webp"
          },
      
          {
            "seasonNumber": 2,
            "episodes": 8,
            "posterImage": "https://www.justwatch.com/images/poster/302278475/s166/season-2.webp"
          },
      
        ]
    },

    {
        "id": 28,
        "title": "DARLING IN THE FRANXX",
        "year": 2018,
        "rank": 2599.,
        "rankChange": "▲ +2391",
        "rating": 85,
        "imdbRating": 7.3,
        "imdbVotes": "15k",
        "backdropImage": "https://images.justwatch.com/backdrop/104372012/s1440/darling-in-the-franxx.webp/darling-in-the-franxx.webp",
        "posterImage": "https://m.media-amazon.com/images/M/MV5BYWNlYzk1NGQtNTZkNi00YzJiLWJkMWUtZTYzNjI3YTc5ZDRhXkEyXkFqcGc@._V1_.jpg",
        "duration": "24min",
        "highestRank": 113,
        "top10Days": 458,
        "top100Days": 1458,
        "top1000Days": 1258,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "25k",
        "dislikes": "354",
        "watchlistText": "Lists",
        "seenText": "Seen all",
        "syncText": "Sign in to sync Watch List",
        "videoId" : "xiNeXCUosSg",
        "type" : "series",
        "seasons": [ // Add season details here
          {
            "seasonNumber": 1,
            "episodes": 13,
            "posterImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAikiNq4ov7QAAqD04wi8nqoeZ1_niblCjqQ&s"
          },

          {
            "seasonNumber": 2,
            "episodes": 13,
            "posterImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb8IXqeK0YrXMTObRnH46INl4doEGvFmUSQg&s"
          }
        ]
    },
    

    {
        "id": 29,
        "title": "EVIL DEAD RISE",
        "year": 2023,
        "rank": 78,
        "rankChange": "▲ +640",
        "rating": 81,
        "imdbRating": 6.5,
        "imdbVotes": "146k",
        "backdropImage": "https://images.justwatch.com/backdrop/305192753/s1440/evil-dead-rise.webp/evil-dead-rise.webp",
        "posterImage": "https://rukminim2.flixcart.com/image/850/1000/xif0q/movie/v/k/r/2023-dvd-flt-films-english-evil-dead-rise-2023-in-english-play-original-imagpnke3bexpr2h.jpeg?q=90&crop=false",
        "duration": "1h 36min",
        "highestRank": 3,
        "top10Days": 12,
        "top100Days": 126,
        "top1000Days": 549,
        "watchOptions": [
      {"platform": "Netflix", "price": "Rs200/-"},
      {"platform": "Amazon Prime", "price": "Rs500/-"}
    ],
        "likes": "6.1k",
        "dislikes": "452",
        "watchlistText": "Lists",
        "seenText": "Seen all",
        "syncText": "Sign in to sync Watch List",
        "videoId" : "smTK_AeAPHs"
    },
    {
      "id": 30,
      "title": "NARUTO",
      "year": 2002,
      "rank": 34,
      "rankChange": "▲ +82",
      "rating": 88,
      "imdbRating": 8.4,
      "imdbVotes": "134k",
      "backdropImage": "https://images.justwatch.com/backdrop/304968809/s1440/naruto.webp/naruto.webp",
      "posterImage": "https://i.pinimg.com/originals/f8/6c/c3/f86cc358c2f65afc5cc2472f9ec2bcc4.jpg",
      "duration": "23min",
      "highestRank": 6,
      "top10Days": 25,
      "top100Days": 666,
      "top1000Days": 2673,
      "watchOptions": [
    {"platform": "Netflix", "price": "Rs200/-"},
    {"platform": "Amazon Prime", "price": "Rs500/-"}
  ],
      "likes": "8.8k",
      "dislikes": "1k",
      "watchlistText": "Lists",
      "seenText": "Seen all",
      "syncText": "Sign in to sync Watch List",
      "videoId" : "-G9BqkgZXRA",
      "type": "series",
      "seasons": [ // Add season details here
        {
          "seasonNumber": 1,
          "episodes": 220,
          "posterImage": "https://www.justwatch.com/images/poster/301262497/s166/season-1.webp"
        },
    
        {
          "seasonNumber": 2,
          "episodes": 104,
          "posterImage": "https://www.justwatch.com/images/poster/280619753/s166/season-2.webp"
        },

        {
          "seasonNumber": 3,
          "episodes": 108,
          "posterImage": "https://www.justwatch.com/images/poster/8605717/s166/season-3.webp"
        },

        {
          "seasonNumber": 4,
          "episodes": 124,
          "posterImage": "https://www.justwatch.com/images/poster/8605715/s166/season-4.webp"
        },

        {
          "seasonNumber": 5,
          "episodes": 220,
          "posterImage": "https://www.justwatch.com/images/poster/734764/s166/season-5.webp"
        },

        {
          "seasonNumber": 6,
          "episodes": 50,
          "posterImage": "https://www.justwatch.com/images/poster/6499522/s166/season-6.webp"
        },


    
      ]
  },

{
  "id": 31,
  "title": "THE GARDEN OF WORDS",
  "year": 2013,
  "rank": 88,
  "rankChange": "▲ +55",
  "rating": 45,
  "imdbRating": 7.5,
  "imdbVotes": "47k",
  "backdropImage": "https://images.justwatch.com/backdrop/315433074/s1440/the-garden-of-words.webp/the-garden-of-words.webp",
  "posterImage": "https://m.media-amazon.com/images/M/MV5BYjdiMDdlMDItOGM4Ny00YmE4LTk0MTEtMGRhM2Y4OWZkZDZkXkEyXkFqcGc@._V1_.jpg",
  "duration": "46min",
  "highestRank": 4,
  "top10Days": 55,
  "top100Days": 452,
  "top1000Days": 1025,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "45k",
  "dislikes": "152",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "2IlccH4VzQ4"
},


{
  "id": 32,
  "title": "COLLEGE ROMANCE",
  "year": 2018,
  "rank": 126.,
  "rankChange": "▲ +160",
  "rating": 76,
  "imdbRating": 8.8,
  "imdbVotes": "29k",
  "backdropImage": "https://images.justwatch.com/backdrop/307434339/s1440/college-romance.webp/college-romance.webp",
  "posterImage": "https://i.pinimg.com/736x/f3/e1/b1/f3e1b1e3fe5fb345efefb38dd40e6560.jpg",
  "duration": "31min",
  "highestRank": 1,
  "top10Days": 309,
  "top100Days": 992,
  "top1000Days": 1622,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "72k",
  "dislikes": "158",
  "watchlistText": "Lists",
  "seenText": "Seen all",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "zwRhlzrJGxo",
  "type": "series",
  "seasons": [ // Add season details here
    {
      "seasonNumber": 1,
      "episodes": 5,
      "posterImage": "https://www.justwatch.com/images/poster/153922176/s166/season-1.webp"
    },

    {
      "seasonNumber": 2,
      "episodes": 5,
      "posterImage": "https://www.justwatch.com/images/poster/241488605/s166/season-2.webp"
    },

    {
      "seasonNumber": 3,
      "episodes": 5,
      "posterImage": "https://www.justwatch.com/images/poster/300726847/s166/season-3.webp"
    },

    {
      "seasonNumber": 4,
      "episodes": 5,
      "posterImage": "https://www.justwatch.com/images/poster/307436638/s166/season-4.webp"
    },
  ]
  
},


{
  "id": 33,
  "title": "5 CENTIMETRE PER SECONDS",
  "year": 2007,
  "rank": 45,
  "rankChange": "▲ +40",
  "rating": 69,
  "imdbRating": 7.5,
  "imdbVotes": "65k",
  "backdropImage": "https://c4.wallpaperflare.com/wallpaper/826/590/471/anime-5-centimeters-per-second-makoto-shinkai-train-wallpaper-preview.jpg",
  "posterImage": "https://m.media-amazon.com/images/M/MV5BMTI4MDIyNzQyNl5BMl5BanBnXkFtZTcwNDcyNTk2MQ@@._V1_.jpg",
  "duration": "1h 3min",
  "highestRank": 3,
  "top10Days": 20,
  "top100Days": 152,
  "top1000Days": 690,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "6.2k",
  "dislikes": "125",
  "watchlistText": "Watchlist",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "wdM7athAem0",
 
},


{
  "id": 34,
  "title": "ALL OF US ARE DEAD",
  "year": 2022,
  "rank": 177,
  "rankChange": "▲ -83",
  "rating": 88,
  "imdbRating": 7.5,
  "imdbVotes": "71k",
  "backdropImage": "https://wallpapers.com/images/featured/all-of-us-are-dead-kckh95o0iza3codt.jpg",
  "posterImage": "https://lh3.googleusercontent.com/QXOt-OYAsmiSttvpL80-83zT30UnSUPolyxlL7VntZi7N9Mu6VfvSd8PukAUzfM9rAedaGmgkWGr5-j7UBwiH-dw5no0HPlWc7leNdoeevlbMdpA=nu-e365-rj-q80-w925",
  "duration": "1h 1min",
  "highestRank": 2,
  "top10Days": 37,
  "top100Days": 290,
  "top1000Days": 1002,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "6.1k",
  "dislikes": "490",
  "watchlistText": "Lists",
  "seenText": "Seen ",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "IN5TD4VRcSM",
  "type": "series",
  "seasons": [ // Add season details here
    {
      "seasonNumber": 1,
      "episodes": 5,
      "posterImage": "https://www.justwatch.com/images/poster/277565481/s166/season-1.webp"
    },
  ]
},
{
  "id": 35,
  "title": " A SILENT VOICE",
  "year": 2016,
  "rank": 81.,
  "rankChange": "▲ +55",
  "rating": 93,
  "imdbRating": 8.1,
  "imdbVotes": "107k",
  "backdropImage": "https://e1.pxfuel.com/desktop-wallpaper/978/602/desktop-wallpaper-review-a-silent-voice-is-an-unconventional-tale-of-loss-regret-a-silent-voice.jpg",
  "posterImage": "https://m.media-amazon.com/images/I/71Pfz2S9ZQL._AC_UF1000,1000_QL80_.jpg",
  "duration": "2h 9min",
  "highestRank": 5,
  "top10Days": 121,
  "top100Days": 115,
  "top1000Days": 578,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "158",
  "dislikes": "45",
  "watchlistText": "Watchlist",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "nfK6UgLra7g"
},

{
  "id": 36,
  "title": "SMILE",
  "year": 2022,
  "rank": 81.,
  "rankChange": "▲ +55",
  "rating": 82,
  "imdbRating": 6.5,
  "imdbVotes": "185k",
  "backdropImage": "https://m.media-amazon.com/images/M/MV5BNjFhMzBlNzktMjE2Ni00YTMyLWI2YWUtYmM1N2QxMDQwZmZhXkEyXkFqcGc@._V1_.jpg",
  "posterImage": "https://image.tmdb.org/t/p/original/67Myda9zANAnlS54rRjQF4dHNNG.jpg",
  "duration": "1h 55min",
  "highestRank": 12,
  "top10Days": 258,
  "top100Days": 1458,
  "top1000Days": 2578,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "458",
  "dislikes": "36",
  "watchlistText": "Watchlist",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List",
  "videoId" : ""
},

{
  "id": 37,
  "title": "wEATHERING WITH YOU",
  "year": 2019,
  "rank": 72.,
  "rankChange": "▲ +48",
  "rating": 90,
  "imdbRating": 7.5,
  "imdbVotes": "59k",
  "backdropImage": "https://m.media-amazon.com/images/M/MV5BMWQzOTYxMjQtMjRkOC00M2Y5LWExODYtNTFkNmZiOWUwOTE0XkEyXkFqcGc@._V1_.jpg",
  "posterImage": "https://i.redd.it/nlf34se7m0421.jpg",
  "duration": "1h 45min",
  "highestRank": 45,
  "top10Days": 185,
  "top100Days": 1458,
  "top1000Days": 3695,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "158",
  "dislikes": "63",
  "watchlistText": "Watchlist",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "nfK6UgLra7g"
},

{
  "id": 38,
  "title": "KGF:CHAPTER1",
  "year": 2018,
  "rank": 93.,
  "rankChange": "▲ +150",
  "rating": 82,
  "imdbRating": 8.2,
  "imdbVotes": "101k",
  "backdropImage": "https://www.justwatch.com/images/backdrop/131930909/s1440/k-g-f-chapter-1.webp/k-g-f-chapter-1.webp",
  "posterImage": "https://stat4.bollywoodhungama.in/wp-content/uploads/2018/12/KGF.jpg",
  "duration": "2h 36min",
  "highestRank": 1,
  "top10Days": 458,
  "top100Days": 1258,
  "top1000Days": 3689,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "1.1",
  "dislikes": "206",
  "watchlistText": "Watchlist",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "nfK6UgLra7g"
},

{
  "id": 39,
  "title": "Agatha All Along",
  "year": 2024,
  "rank": 9.,
  "rankChange": "▲ +4",
  "rating": 83,
  "imdbRating": 6.9,
  "imdbVotes": "28k",
  "backdropImage": "https://www.justwatch.com/images/backdrop/320432746/s1440/agatha-house-of-harkness.webp/agatha-house-of-harkness.webp",
  "posterImage": "https://pix1.wapkizfile.info/download/be397283a01febdccbba1e58cb69f5ef/filmy4cab+wapkiz+com/Agatha-All-Along-2024-Season-1-Dual-Audio-Hindi-English-Completed-Web-Series-HD-ESub-(filmycab.us).jpg",
  "duration": "39min",
  "highestRank": 1,
  "top10Days": 12,
  "top100Days": 36,
  "top1000Days": 73,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "1.7",
  "dislikes": "36",
  "watchlistText": "Watchlist",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "nfK6UgLra7g"
},
{
  "id": 40,
  "title": "TRUE BEAUTY",
  "year": 2020,
  "rank": 110.,
  "rankChange": "▲ +24",
  "rating": 83,
  "imdbRating": 8.0,
  "imdbVotes": "17k",
  "backdropImage": "https://m.media-amazon.com/images/M/MV5BZTFlNWFiNGQtNjA3Zi00ODNmLTgyNWQtODk4ZGQ2OWZjZjAxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  "posterImage": "https://i.etsystatic.com/27925100/r/il/422196/4674287015/il_fullxfull.4674287015_topr.jpg",
  "duration": "1h 15min",
  "highestRank": 27,
  "top10Days": 0,
  "top100Days": 14,
  "top1000Days": 619,
  "watchOptions": [
{"platform": "Netflix", "price": "Rs200/-"},
{"platform": "Amazon Prime", "price": "Rs500/-"}
],
  "likes": "734",
  "dislikes": "120",
  "watchlistText": "Watchlist",
  "seenText": "Seen",
  "syncText": "Sign in to sync Watch List",
  "videoId" : "nfK6UgLra7g"
},

{
  "id":41,
  "title": "Chandu Champion",
  "year": 2024,
  "rank":688,
  "rankChange": "▲ +600",
  "rating": 71,
  "imdbRating": 7.9,
  "imdbVotes": "2m",
  "backdropImage": "https://images.justwatch.com/backdrop/319469589/s1440/chandu-champion.webp/chandu-champion.webp",
  "posterImage": "https://upload.wikimedia.org/wikipedia/hi/archive/d/df/20240918230235%21Chandu_Champion_film_poster.jpeg",
  "duration": "2h 2min",
  "highestRank": 2,
  "top10Days": 13,
  "top100Days":666,
  "top1000Days": 113,
  "watchOptions": [
    {"platform": "Netflix", "price": "Rs200/-"},
    {"platform": "Amazon Prime", "price": "Rs500/-"}
  ],
  "likes": "96",
  "dislikes": "26",
  "watchlistText": "Watchlist",
  "seenText": "Seen",
  "syncText": "Sign in to Sync Watchlist",
  "videoId": "IHQQK_Wn5DM",
  "type": "bollywood",
  "genre": ["Sports", "War & Military", "Action & Adventure", "Drama", "History"]
},

 
 
{
 
  "id":76,
  "title": "War",
  "year": 2019,
  "rank":856,
  "rankChange": "▲ +477",
  "rating": 70,
  "imdbRating": 7.8,
  "imdbVotes": "40k",
  "backdropImage": "https://www.justwatch.com/images/backdrop/151180234/s1440/war-2019.webp/war-2019.webp",
  "posterImage": "https://lh5.googleusercontent.com/proxy/lU778sl4j3OGp8BzgJV9oX32tIAsJDh-FoNhV_AzIcJhRTgROfY8XHrNcZw2o7sMDHvxU6kGNiDa0Fg-gxabYmdDWaut3SwuwEbpX-GQ9cGmw0BeqWIxF8SZwqqXEL5fack679AG306sz-B5dNc5Thhjy2lZhXm-R1Qs65Bw",
  "duration": "2h 32min",
  "highestRank": 1,
  "top10Days": 10,
  "top100Days":159,
  "top1000Days": 1424,
  "watchOptions": [
    {"platform": "Apple Tv+", "price": "Rs1500/-"},
    {"platform": "Amazon Prime", "price": "Rs500/-"}
  ],
  "likes": "481",
  "dislikes": "61",
  "watchlistText": "Watchlist",
  "seenText": "Seen",
  "syncText": "Sign in to Sync Watchlist",
  "videoId": "tQ0mzXRk",
  "type" : "bollywood",
  "genre": ["Mystery & Thriller", "Action & Adventure"]
},
];

// Find movie by title
app.get('/api/Popular-movies', (req, res) => {
    const titleQuery = req.query.title ? req.query.title.toLowerCase() : null;
    console.log("Search title:", titleQuery);
    if (titleQuery) {
        const movieByTitle = PopularMovies.find(movie => movie.title.toLowerCase() === titleQuery);
        if (movieByTitle) {
            return res.json(movieByTitle);
        } else {
            return res.status(404).json({ message: "Movie not found by Title" });
        }
    } else {
        return res.json(PopularMovies);
    }
});

// Find movie by ID
app.get('/api/Popular-movies/:id', (req, res) => {
    const id = req.params.id;
    const movie = PopularMovies.find(movie => movie.id === parseInt(id));
    if (!movie) {
        return res.status(404).json({ message: "Movie not found by ID" });
    }
    res.json(movie);
});

// For creating data
app.post('/api/MyPopularMovies', (req, res) => {
    const newMovies = { ...req.body, id: PopularMovies.length + 1 };
    myMovies.push(newMovies);
    res.status(201).location(`/api/MyMovies/${newMovies.id}`).json(newMovies);
});

// Listen to server on the defined PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

