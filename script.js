let btnStart = document.querySelector("#btn");
let resultTag = document.querySelector("#output");
let count = 0;
function populateResultTag(inputValue) {
  count++;
  let pElement = document.createElement("p");
  if (count != 5) {
    pElement.textContent = `Result: ${inputValue}`;
  }
  else{
    pElement.textContent = `Final Result: ${inputValue}`;
  }
  resultTag.appendChild(pElement);
}

btnStart.addEventListener("click", () => {
  let inputValue = document.querySelector("#ip").value;

  const promiseOne = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(inputValue);
      }, 2000);
    });
  };

  const promiseTwo = (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve((value * 2));
      }, 1000);
    });
  };

  const promiseThree = (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve((value - 3));
      }, 1000);
    });
  };

  const promiseFour = (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve((value / 2));
      }, 1000);
    });
  };

  const promiseFive = function (value) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve((value + 10));
      }, 1000);
    });
  };

  promiseOne()
    .then((data) => {
      // console.log(data);
      populateResultTag(data);
      return promiseTwo(data);
    })
    .then((data) => {
      // console.log(data);
      populateResultTag(data);
      return promiseThree(data);
    })
    .then((data) => {
      // console.log(data);
      populateResultTag(data);
      return promiseFour(data);
    })
    .then((data) => {
      // console.log(data);
      populateResultTag(data);
      return promiseFive(data);
    })
    .then((data) => {
      populateResultTag(data);
      // console.log(data);
    })
    .catch((error) => {
      console.log("error caught", error);
    });
});
