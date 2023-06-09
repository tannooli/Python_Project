 //Node16
 runs:
  using: 'node16'
  main: 'script.js'

//Interface
const formular = document.getElementById("image-input");
const bildEingabe = document.getElementById("image-upload");

formular.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData();
  formData.append("bild", bildEingabe.files[0]);

  fetch(
    "https://api-inference.huggingface.co/models/facebook/maskformer-swin-large-ade",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const resultElement = document.getElementById('result');
      resultElement.innerText = JSON.stringify(data);
    })
    .catch(error => console.error(error));
});
