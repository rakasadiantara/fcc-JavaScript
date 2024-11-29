let myCourse = ["learn CSS Animations", "UI Design Fundamental", "Intro ro Clean Code"]

// create a function that takes a single parameter, an array
// and logas all the items of the array to the console.
// call the function while passing in myCourses as an argumnet

function courses(arr){
    for (i=0;i<arr.length; i+=1){
        console.log(arr[i])
    }
}

courses(myCourse)