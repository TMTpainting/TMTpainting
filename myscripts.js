// JavaScript source code

    window.onscroll = function () {scrollFunction()};

                function scrollFunction() {
                    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
                function topFunction() {
        document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
        var slideIndex1 = 1;
        showDivs1(slideIndex1);

        var slideIndex2 = 1;
        showDivs2(slideIndex2);
        var slideIndex4 = 1;
        showDivs4(slideIndex4);
        var slideIndex5 = 1;
        showDivs5(slideIndex5);
        var slideIndex6 = 1;
        showDivs6(slideIndex6);

                function plusDivs1(n) {
            showDivs1(slideIndex1 += n);
        }
                function plusDivs2(n) {
            showDivs2(slideIndex2 += n);
        }
                function plusDivs4(n) {
            showDivs4(slideIndex4 += n);
        }
                function plusDivs5(n) {
            showDivs5(slideIndex5 += n);
        }
                function plusDivs6(n) {
            showDivs6(slideIndex6 += n);
        }
                function showDivs1(n) {
                    var i;
        var x = document.getElementsByClassName("mySlides1");
                    if (n > x.length) {slideIndex1 = 1}
        if (n < 1) {slideIndex1 = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex1 - 1].style.display = "block";
    }
                function showDivs2(n) {
                    var i;
        var x = document.getElementsByClassName("mySlides2");
                    if (n > x.length) {slideIndex2 = 1}
        if (n < 1) {slideIndex2 = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex2 - 1].style.display = "block";
    }
                function showDivs4(n) {
                    var i;
        var x = document.getElementsByClassName("mySlides4");
                    if (n > x.length) {slideIndex4 = 1}
        if (n < 1) {slideIndex4 = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex4 - 1].style.display = "block";
    }
                function showDivs5(n) {
                    var i;
        var x = document.getElementsByClassName("mySlides5");
                    if (n > x.length) {slideIndex5 = 1}
        if (n < 1) {slideIndex5 = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex5 - 1].style.display = "block";
    }
                function showDivs6(n) {
                    var i;
        var x = document.getElementsByClassName("mySlides6");
                    if (n > x.length) {slideIndex6 = 1}
        if (n < 1) {slideIndex6 = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex6 - 1].style.display = "block";
    }
        filterSelection("interior")
                function filterSelection(c) {
                    var x, i;
        x = document.getElementsByClassName("column");
        if (c == "all") c = "";
                    for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

                function w3AddClass(element, name) {
                    var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
                    for (i = 0; i < arr2.length; i++) {
                        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i]; }
    }
}

                function w3RemoveClass(element, name) {
                    var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
                    for (i = 0; i < arr2.length; i++) {
                        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
                for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
                function openSearch() {
            document.getElementById("myOverlay").style.display = "block";
        }
                function closeSearch() {
            document.getElementById("myOverlay").style.display = "none";
        }
                function myFunction() {
                    var x = document.getElementById("myTopnav");
                    if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
