const cost = document.getElementById("inp-price");

const duration = document.getElementById("inp-duration");

const comission = document.querySelector(".money-comission");

const total = document.querySelector(".money-total");

const changeDay = function () {
  if (duration.value > 7) {
    comission.innerText =
      parseInt(comission.innerText.split(",").join("")) + 5200;
    total.innerText = parseInt(total.innerText.split(",").join("")) + 5200;
  } else if (duration.value < 7) {
    comission.innerText =
      parseInt(comission.innerText.split(",").join("")) - 5200;
    total.innerText = parseInt(total.innerText.split(",").join("")) - 5200;
  }
};

const changeCost = function () {
  if (cost.value > 40000) {
    comission.innerText =
      parseInt(comission.innerText.split(",").join("")) + 0.91;
    total.innerText = parseInt(total.innerText.split(",").join("")) + 0.91;
  } else if (cost.value < 40000) {
    comission.innerText =
      parseInt(comission.innerText.split(",").join("")) - 0.91;
    total.innerText = parseInt(total.innerText.split(",").join("")) - 0.91;
  }
};

duration.addEventListener("change", changeDay);
cost.addEventListener("change", changeCost);
