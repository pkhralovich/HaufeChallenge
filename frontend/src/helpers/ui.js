export function addError(input, label, error) {
    label.current.innerText = error;
    input.current.classList.add("error");
}

export function clearError(input, label) {
    label.current.innerText = "";
    input.current.classList.remove("error");
}