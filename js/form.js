const form = document.querySelector(".form");

const handleChange = (e) => {
  const input = e.target;

  if (input.nodeName === "INPUT" || input.nodeName === "TEXTAREA") {
    if (input.value !== "") {
      return input.nextElementSibling.classList.add("hidden");
    }
    return input.nextElementSibling.classList.remove("hidden");
  }
  return;
};

form.addEventListener("input", handleChange);
