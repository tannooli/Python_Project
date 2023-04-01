function getSentiment(event, text) {
  if (!text || event.key !== "Enter") {
    answer.innerHTML = '';
    return;
  }
  answerPart.style.visibility = "visible";
  // Get Sentiment
  fetch('/sentiment?' + new URLSearchParams({
    text: text,
  }), {
    method: 'GET',
    headers: {}
  }).then(
    response => {
      console.log(response)
      response.text().then(function (text) {
        answer.innerHTML = text;
      });
    }
  ).then(
    success => console.log(success)
  ).catch(
    error => console.log(error)
  );
}
