var format = ("LLL");
var today = moment().format(format);

// var eight = October 25, 2019 2:23 
var eight = moment().set({'hour': 8, 'minute': 0, 'second': 0}).format(format);
var nine = moment().set({'hour': 9, 'minute': 0, 'second': 0}).format(format);
var ten = moment().set({'hour': 10, 'minute': 0, 'second': 0}).format(format);
var eleven = moment().set({'hour': 11, 'minute': 0, 'second': 0}).format(format);
var twelve = moment().set({'hour': 12, 'minute': 0, 'second': 0}).format(format);
var one = moment().set({'hour': 13, 'minute': 0, 'second': 0}).format(format);
var two = moment().set({'hour': 14, 'minute': 0, 'second': 0}).format(format);
var three = moment().set({'hour': 15, 'minute': 0, 'second': 0}).format(format);
var four = moment().set({'hour': 16, 'minute': 0, 'second': 0}).format(format);
var five = moment().set({'hour': 17, 'minute': 0, 'second': 0}).format(format);

var arr = [];
arr.push(eight, nine, ten, eleven, twelve, one, two, three, four, five);
console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     // var dataIndex = 
//     console.log($("input").data("index"));
//     console.log($('input[data-index="i"]'));


    
//     // if (today < arr[i] && dataIndex === i) {
//     //     // console.log($(this));
//     //     $(".form-control").css("background-color", "red")

//     // }    
// }

$(".form-control").each(function(i){
    if ($(this).attr("data-index") == i ) {
        $(this).each(function() {
            // console.log($(this).attr('data-index'));
           var dataInd = ($(this).attr('data-index'));
           for (let i = 0; i < arr.length; i++) {
               const element = arr[i];
               
           }
        })
    }

});


// var time = moment() gives you current time. no format required.
var time = moment().format(format);
console.log(time);
//   beforeTime = '9AM';
//   afterTime = '10:00:00';
//   console.log(beforeTime);
//   console.log(afterTime);

// if (time.isBetween(beforeTime, afterTime)) {

//   console.log('is between') 

// } else {

//   console.log('is not between')

// }

var one = moment().set('hour', 0).format(format);
console.log(one);



// if (time > hours) {
//     $("#10AM").css("background-color", "red");
// }

// var subHour = moment().subtract(60, "minute");
// console.log(subHour);
var testy = moment().toDate();
console.log(testy);

// var hours = $(".hour").text();
// console.log(hours);

// $(".hour").each(function (index, value) {
//     // console.log(typeof $(this).text());
//     // console.log(typeof time);
//     // console.log($(this).text());
//     // console.log($(this).eq(index).text());
//     // console.log($(index).parent().siblings(".form-control"));
//     // console.log($(this).parent().siblings(".form-control"));
//     console.log(time);

//     // var value2 = $(this).text();

//     if ($(this).text() > time)  {
//         console.log($(this).text());
        
//         $(this).parent().siblings(".form-control").css("background-color", "blue");
//     } else {
//     $(this).parent().siblings(".form-control").css("background-color", "red")
//     // console.log(inputColor);
//     }

    // console.log($(this).parent().siblings(".form-control"));
    // $("#10AM").css("background-color", "blue");   

// })


