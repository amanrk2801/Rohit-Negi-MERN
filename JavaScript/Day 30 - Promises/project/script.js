document.querySelector("button").addEventListener("click", () => {
  const place = document.getElementById("location").value;

  function updateTemp(data) {
    const element = document.getElementById("weatherInfo");
    element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;
  }

  const promise = fetch(
    `http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=${place}&aqi=yes`
  );

  promise.then((response) => response.json()).then((data) => updateTemp(data));
});
