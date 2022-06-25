let navWidth = 0;
let isTrue = !0;
let allMovies = !0;
let imgSource = "https://image.tmdb.org/t/p/w500";


$(".navBar-menu").click(function () {
    isTrue ?
        ($(".navTab-menu").addClass("openMenu").removeClass("closeMenu"),
            navWidth = $(".navTab-menu").width() - 10,
            $(".navBar-header").css("left", navWidth),
            $(".fa-align-justify").toggleClass("fa-times"),
            $(".navTab-menu .item1").animate({ opacity: "1", paddingTop: "25px" }, 1100),
            $(".navTab-menu .item2").animate({ opacity: "1", paddingTop: "25px" }, 1200),
            $(".navTab-menu .item3").animate({ opacity: "1", paddingTop: "25px" }, 1300),
            $(".navTab-menu .item4").animate({ opacity: "1", paddingTop: "25px" }, 1400),
            $(".navTab-menu .item5").animate({ opacity: "1", paddingTop: "25px" }, 1500),
            $(".navTab-menu .item6").animate({ opacity: "1", paddingTop: "25px" }, 1600), isTrue = !isTrue) :

        ($(".navTab-menu").addClass("closeMenu").removeClass("openMenu"),
            $(".fa-align-justify").toggleClass("fa-times"),
            $(".navBar-header").css("left", 0),
            $(".navTab-menu li").animate({ opacity: "0", paddingTop: "500px" }, 500), isTrue = !isTrue)
});


function getMovies() {
    let e = new XMLHttpRequest;
    e.open("get", URL), e.send(), e.onreadystatechange =
        function () {
            4 == e.readyState && 200 == e.status ?
                (allMovies = (allMovies = JSON.parse(e.response)).results,
                    displayMovies()) : console.log("false")
        }
}

let rowData = document.getElementById("hisData"),
    categorylinks = document.getElementsByClassName("navBar-category"),
    result = document.getElementById("result"),
    allMoviesByWord = document.getElementById("totalMovies"),
    URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    nowPlayingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    topRatedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    trendingURL = "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
    categs = "",

    searchURL = "https://api.themoviedb.org/3/search/movie?query=mad&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false",
    searchBar = document.getElementById("words");

getMovies();

for (let i = 0; i < categorylinks.length; i++)
    categorylinks[i].addEventListener("click", function (e) {
        "Now playing" == (categs = e.target.innerHTML) && (URL = nowPlayingURL, getMovies()),
            "Popular" == categs ? (URL = popularURL, getMovies()) :
                "Top Rated" == categs ? (URL = topRatedURL, getMovies()) :
                    "Trending" == categs ? (URL = trendingURL, getMovies()) :
                        "Upcoming" == categs && (URL = upcomingURL, getMovies())
    });

function displayMovies() {
    for (var e = "", a = 0; a < allMovies.length; a++)
        e += '<div class="col-md-6 col-lg-4 my-3 shadow">\n     <div class="movie shadow rounded position-relative">\n       <div class="post">\n      <img src=' + imgSource + allMovies[a].poster_path + ' class="img-fluid rounded"/>\n       <div class="layer d-flex align-items-center ">\n        <div class="info p-0">\n       <h2>' + allMovies[a].original_title + "</h2>\n        <p>" + allMovies[a].overview + "</p>\n       <p >rate: " + allMovies[a].vote_average + "</p>\n       <p>" + allMovies[a].release_date + "</p>\n      </div>\n      </div>\n      </div>\n     </div>\n      </div>";
    rowData.innerHTML = e
};

// async function getMoviesByWord(e) {
//     let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${e}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false`)
//     let finalResult = await allMovies.response.JSON.parse();
//     console.log(finalResult);
//     displayMovies();
// }

// ===================================================
// contact us validation sec
let userName = document.getElementById("name"),
    userEmail = document.getElementById("email"),
    userPhone = document.getElementById("phone"),
    userAge = document.getElementById("age"),
    userPassword = document.getElementById("password"),
    userRePassword = document.getElementById("rePassword"),
    userNameAlert = document.getElementById("nameAlert"),
    userEmailAlert = document.getElementById("emailAlert"),
    userPhoneAlert = document.getElementById("phoneAlert"),
    userAgeAlert = document.getElementById("ageAlert"),
    userpasswordAlert = document.getElementById("passwordAlert"),
    userRepasswordAlert = document.getElementById("repasswordAlert");

function userNameValidaion() {
    return 1 == /^[a-zA-Z0-9]+$/.test(userName.value) ?
        (userNameAlert.style.display = "none", !0) :
        (userNameAlert.style.display = "block", !1)
}

function userEmailValidaion() {
    return 1 == /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail.value) ?
        (userEmailAlert.style.display = "none", !0) :
        (userEmailAlert.style.display = "block", !1)
}

function userPhoneValidation() {
    return 1 == /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/.test(userPhone.value) ?
        (userPhoneAlert.style.display = "none", !0) :
        (userPhoneAlert.style.display = "block", !1)
}

function userAgeValidation() {
    return 1 == /^[1-9][0-9]?$|^100$/.test(userAge.value) ?
        (userAgeAlert.style.display = "none", !0) :
        (userAgeAlert.style.display = "block", !1)
}

function userPasswordValidation() {
    return 1 == /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(userPassword.value) ?
        (userpasswordAlert.style.display = "none", !0) :
        (userpasswordAlert.style.display = "block", !1)
}

function userRePasswordValidation() {
    return userPassword.value == userRePassword.value ?
        (userRepasswordAlert.style.display = "none", !0) :
        (userRepasswordAlert.style.display = "block", !1)
}

userAgeAlert.style.display = "none",
    userName.addEventListener("keyup", userNameValidaion),
    userEmail.addEventListener("keyup", userEmailValidaion),
    userPhone.addEventListener("keyup", userPhoneValidation),
    userAge.addEventListener("keyup", userAgeValidation),
    userPassword.addEventListener("keyup", userPasswordValidation),
    userRePassword.addEventListener("keyup", userRePasswordValidation),
    document.getElementById("contact").addEventListener("click", function () {
        userNameValidaion()
            && userEmailValidaion()
            && userPhoneValidation()
            && userAgeValidation()
            && userPasswordValidation()
            && userRePasswordValidation() ?
            document.getElementById("submitBtn").disabled = !1 :
            document.getElementById("submitBtn").disabled = !0
    });

