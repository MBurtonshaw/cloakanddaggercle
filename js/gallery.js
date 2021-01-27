
const gallery_pictures = [
    "img/gallery_1-21_1.png",
    "img/gallery_1-21_2.png",
    "img/gallery_1-21_3.png",
    "img/gallery_1-21_4.png",
    "img/gallery_1-21_5.png",
    "img/gallery_1-21_6.png",
    "img/gallery_1-21_7.png",
    "img/gallery_1-21_8.png",
    "img/gallery_1-21_9.png",
    "img/gallery_1-21_10.png"
];

//LOOP TO POPULATE PAGE W PHOTOS//
$("#gallery_container").append("<div id='img_container'></div>");
for (let i = 1; i <= gallery_pictures.length; i++) {
    const an_image = document.createElement("img");
    $("#img_container").append(an_image);
    an_image.id = i;
    an_image.src =
        "img/gallery_1-21_" + parseInt(an_image.id) + "_thumbnail" + ".png";
    an_image.classList.add("gallery_pics");
    if (window.innerWidth > 700) {
        an_image.classList.add("thumbnail_pics");
    }
}
//FUNCTION THAT ENLARGES PHOTOS WHEN CLICKED//
$(".gallery_pics").click(e => {
    $("#img_container_2").html(
        "<div id='x_div'><img id='xxx' src='img/mobile_x.png'></div>" +
            "<img id='been_clicked' class='clickable_large' src=''>"
    );
    $("#been_clicked").attr(
        "src",
        "img/gallery_1-21_" + e.currentTarget.id + ".png"
    );
    $("#img_container").hide();
    $("#seven").hide();
    $("#img_container_2").show();
});
//FUNCTION THAT HIDES ENLARGED IMAGE WHEN CLICKED//
$("#img_container_2").click(e => {
    $("#img_container_2").hide();
    $("#img_container").show();
    $("#seven").show();
    $("#img_container_2").html(
        "<img id='been_clicked' class='clickable_large' src=''>"
    );
});

$("#1").addClass("big_pics");
$("#2").addClass("big_pics");
$("#3").addClass("big_pics");
$("#4").addClass("thin_pics");
$("#5").addClass("big_pics");
$("#6").addClass("thin_pics");
$("#7").addClass("big_pics");
$("#8").addClass("big_pics");
$("#9").addClass("big_pics");
$("#10").addClass("big_pics");


if (window.innerWidth < 1200) {
    $("#4").addClass("big_pics");
    $("#4").removeClass("thin_pics");
    $("#4").attr("src", "img/gallery_1-21_4_thumbnail_wide.png");

    $("#6").addClass("big_pics");
    $("#6").removeClass("thin_pics");
    $("#6").attr("src", "img/gallery_1-21_6_thumbnail_wide.png");
}
