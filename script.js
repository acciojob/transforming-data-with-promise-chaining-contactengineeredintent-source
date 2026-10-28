//your JS code here. If required.
let btnStart = document.querySelector("#btn");
let resultTag = document.querySelector("#output");

function populateResultTag(inputValue) {
  let pElement = document.createElement("p");
  pElement.textContent = inputValue;
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

  const promiseTwo = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve((inputValue *= 2));
      }, 1000);
    });
  };

  const promiseThree = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve((inputValue -= 3));
      }, 1000);
    });
  };

  const promiseFour = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve((inputValue /= 2));
      }, 1000);
    });
  };

  const promiseFive = function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve((inputValue += 10));
      }, 1000);
    });
  };

  promiseOne()
    .then((data) => {
      // console.log(data);
      populateResultTag(data);
      return promiseTwo();
    })
    .then((data) => {
      // console.log(data);
      populateResultTag(data);
      return promiseThree();
    })
    .then((data) => {
      // console.log(data);
      populateResultTag(data);
      return promiseFour();
    })
    .then((data) => {
      // console.log(data);
      populateResultTag(data);
      return promiseFive();
    })
    .then((data) => {
      populateResultTag(data);
      // console.log(data);
    })
    .catch((error) => {
      console.log("error caught", error);
    });
});
