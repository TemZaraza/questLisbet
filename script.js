document.querySelector(".button").onclick = function() {
    for (let i = 0; i < 4; i++) {
    if (i == 2) {
        alert(`You've got the last try. Michael Bloomkwist will help you, he says: "T-t-the first letter is 'R'"`)
    }
    let password = prompt('Time to prove your hacker skills. What is the name of actress, who played Lisbet Salander?', '******');
    if (password == 'Rooney') {
    alert("Quest solved! You are as clever as Lisbet. Love you, my darling :*. Please, text me for prize");
    break;
    } else if (password == null) {
        break;    
    } else {
        if (i == 2) {
            alert('This was your last try, goodbye');
            break;
        }
        alert('Wrong, please try again');
        continue;
    }
}
    }