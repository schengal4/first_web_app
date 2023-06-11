let home_score = 0
let guest_score = 0
let element1 = document.getElementById("home-score")
let element2 = document.getElementById("guest-score")
function homeScores(points_scored) {
    home_score += points_scored
    element1.innerText = home_score
}

function guestScores(points_scored) {
    guest_score += points_scored
    element2.innerText = guest_score
}