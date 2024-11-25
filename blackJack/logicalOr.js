// create two boolean variables, likesDocumentaries and likesStartups
// use an OR statement || to call recommendMovie() if either of those vbariables are  true

likeDocumentaries = false
likeStartups = true

if (likeDocumentaries === true || likeStartups === true){
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey check out this new film we think you will Like this movie")
}