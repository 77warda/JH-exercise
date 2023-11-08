import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { from, reduce } from "rxjs";
import { concatMap, map, of, zip } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "JH-exercise";

  //////////////////======variables===///////////////////
  videoAndTitle = [];
  mapVideoAndTitle = [];
  ratingVideos = [];
  ids = [];
  allVideoIdsInMovieLists = [];
  concatAllVideoIds = [];
  videoData = [];
  largestRating = [];
  largestBox = [];
  smallestBoxart = [];
  videoIdAndBookmarkIdPairs = [];
  ngOnInit(): void {
    this.getData();
    console.log("3", this.videoAndTitle);
    console.log("5", this.mapVideoAndTitle);
    console.log("6", this.ratingVideos);
    console.log("8", this.ids);
    this.movieData();
    console.log("9", this.allVideoIdsInMovieLists);
    console.log("11", this.concatAllVideoIds);
    this.newMovieData();
    console.log("12", this.videoData);
    this.largestRate();
    console.log("17", this.largestRating);
    this.largestBoxart();
    console.log("18", this.largestBox);
    this.videos();
    this.smallestBox();
    this.zippingData();
    console.log("21", this.videoIdAndBookmarkIdPairs);
  }
  // =====================================Exercise 3 =============================================
  getData() {
    var newReleases = [
      {
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
      {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: [],
      },
      {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }],
      },
    ];
    newReleases.forEach((release) => {
      this.videoAndTitle.push({ id: release.id, title: release.title });
    });
    // =====================================Exercise 5 =============================================
    newReleases.map((release) => {
      this.mapVideoAndTitle.push({ id: release.id, title: release.title });
    });
    // =====================================Exercise 6 =============================================
    newReleases.forEach((release) => {
      if (release.rating === 5.0) this.ratingVideos.push(release);
    });

    // =====================================Exercise 8 =============================================

    const fetchIds = newReleases
      .filter((video) => video.rating === 5.0)
      .map((release) => release.id);
    this.ids.push(fetchIds);
  }
  movieData() {
    var movieLists = [
      {
        name: "New Releases",
        videos: [
          {
            id: 70111470,
            title: "Die Hard",
            boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            uri: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 654356453,
            title: "Bad Boys",
            boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            uri: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
      {
        name: "Dramas",
        videos: [
          {
            id: 65432445,
            title: "The Chamber",
            boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            uri: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 675465,
            title: "Fracture",
            boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            uri: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
    ];
    // =====================================Exercise 9 =============================================

    movieLists.map((movie) =>
      movie.videos.map((video) => this.allVideoIdsInMovieLists.push(video.id))
    );

    // =====================================Exercise 11 =============================================

    const movieIds = movieLists.map((movie) =>
      movie.videos.map((video) => video.id)
    );
    this.concatAllVideoIds.push(movieIds);
  }
  newMovieData() {
    var movieLists = [
      {
        name: "Instant Queue",
        videos: [
          {
            id: 70111470,
            title: "Die Hard",
            boxarts: [
              {
                width: 150,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
              },
              {
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg",
              },
            ],
            url: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 654356453,
            title: "Bad Boys",
            boxarts: [
              {
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg",
              },
              {
                width: 150,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg",
              },
            ],
            url: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
      {
        name: "New Releases",
        videos: [
          {
            id: 65432445,
            title: "The Chamber",
            boxarts: [
              {
                width: 150,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg",
              },
              {
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg",
              },
            ],
            url: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 675465,
            title: "Fracture",
            boxarts: [
              {
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
              },
              {
                width: 150,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
              },
              {
                width: 300,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
              },
            ],
            url: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
    ];
    // ================================ exercise 12 ============================

    const videos = movieLists.map((movie) => {
      return movie.videos.map((box) => {
        return box.boxarts
          .filter((box) => box.width === 150 && box.height === 200)
          .map((x) => {
            this.videoData.push({
              id: box.id,
              title: box.title,
              boxarts: x.url,
            });
          });
      });
    });
  }
  // ================================ exercise 17 ============================
  largestRate() {
    var ratings = [2, 3, 1, 4, 5];
    const rate = ratings.reduce((a, b) => (a > b ? a : b), 0); // Complete this expression
    this.largestRating.push(rate);
  }

  largestBoxart() {
    var boxarts = [
      {
        width: 200,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
      },
      {
        width: 150,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
      },
      {
        width: 300,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
      },
      {
        width: 425,
        height: 150,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
      },
    ];
    // ================================ exercise 18 ============================
    //of gives data in an array
    const a = of(boxarts)
      .pipe(
        map((boxarts) =>
          boxarts.reduce((prev, current) =>
            prev.width > current.width ? prev : current
          )
        ),
        map((largestBoxart) => largestBoxart.url)
      )
      .subscribe((largestBoxartUrl) => {
        console.log("url", largestBoxartUrl);
      });
  }
  // ================================ exercise 19 ============================

  videos() {
    var videos = [
      {
        id: 65432445,
        title: "The Chamber",
      },
      {
        id: 675465,
        title: "Fracture",
      },
      {
        id: 70111470,
        title: "Die Hard",
      },
      {
        id: 654356453,
        title: "Bad Boys",
      },
    ];

    // Expecting this output...
    // [
    //	 {
    //		 "65432445": "The Chamber",
    //		 "675465": "Fracture",
    //		 "70111470": "Die Hard",
    //		 "654356453": "Bad Boys"
    //	 }
    // ]
    from(videos)
      .pipe(
        reduce((acc, video) => {
          acc[video.id] = video.title;
          return acc;
        }, {})
      )
      .subscribe((result) => {
        console.log("key:value", result);
      });
  }
  // ================================ exercise 20 ============================

  smallestBox() {
    var movieLists = [
      {
        name: "New Releases",
        videos: [
          {
            id: 70111470,
            title: "Die Hard",
            boxarts: [
              {
                width: 150,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg",
              },
              {
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg",
              },
            ],
            url: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 654356453,
            title: "Bad Boys",
            boxarts: [
              {
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg",
              },
              {
                width: 140,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg",
              },
            ],
            url: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
      {
        name: "Thrillers",
        videos: [
          {
            id: 65432445,
            title: "The Chamber",
            boxarts: [
              {
                width: 130,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg",
              },
              {
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg",
              },
            ],
            url: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 4.0,
            bookmark: [],
          },
          {
            id: 675465,
            title: "Fracture",
            boxarts: [
              {
                width: 200,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
              },
              {
                width: 120,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg",
              },
              {
                width: 300,
                height: 200,
                url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
              },
            ],
            url: "http://api.netflix.com/catalog/titles/movies/70111470",
            rating: 5.0,
            bookmark: [{ id: 432534, time: 65876586 }],
          },
        ],
      },
    ];

    // Use one or more concatMap, map, and reduce calls to create an array with the following items (order matters)
    // [
    //	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
    //	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
    //	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
    //	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
    // ];
    from(movieLists)
      .pipe(
        // to retrieve videos
        concatMap((movieList) => movieList.videos),
        // to find smallest box
        map((val) => {
          const smallestBoxart = val.boxarts.reduce((x, y) => {
            return x.width * x.height < y.width * y.height ? x : y;
          });
          return {
            id: val.id,
            title: val.title,
            boxart: smallestBoxart.url,
          };
        })
      )
      .subscribe((data) => {
        this.smallestBoxart.push(data);
        console.log(this.smallestBoxart);
      });
  }
  zippingData() {
    var videos = [
        {
          id: 70111470,
          title: "Die Hard",
          boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
          uri: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: 4.0,
        },
        {
          id: 654356453,
          title: "Bad Boys",
          boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
          uri: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: 5.0,
        },
        {
          id: 65432445,
          title: "The Chamber",
          boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
          uri: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: 4.0,
        },
        {
          id: 675465,
          title: "Fracture",
          boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
          uri: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: 5.0,
        },
      ],
      bookmarks = [
        { id: 470, time: 23432 },
        { id: 453, time: 234324 },
        { id: 445, time: 987834 },
      ];
    // ============================== exercise 21===================

    zip(videos, bookmarks).subscribe(([video, bookmark]) => {
      const pair = {
        videoId: video.id,
        bookmarkId: bookmark.id,
      };
      this.videoIdAndBookmarkIdPairs.push(pair);
    });
    return this.videoIdAndBookmarkIdPairs;
  }
}
