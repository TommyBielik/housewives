const anoButton = document.getElementById(`ano`);
const niButton = document.getElementById(`ni`);
const message = document.getElementById(`message`);

anoButton.addEventListener("click", () => {
    message.innerHTML = "No šuper🥰, budeme hlivieť"
})

niButton.addEventListener("click", () => {
    message.innerHTML = "Something went wrong. Try again."
})