let total = 0;
function clickBtn(target) {
  const selectedItemContainer = document.getElementById("selected-items");
  const count = selectedItemContainer.childElementCount;
  const item = target.children[1].children[1].innerText;
  const p = document.createElement('p');
  p.innerText = `${count + 1}. ${item}`;
  selectedItemContainer.appendChild(p);
  //   console.log(target.children[1].children[2].innerText.split(" ")[0]);
  const price = target.children[1].children[2].innerText.split(" ")[0];
  total = parseInt(total) + parseInt(price);
  document.getElementById('total').innerText = total.toFixed(2)

  const restBtn = document.getElementById('purchase')
  if (total >= 0) {
    restBtn.removeAttribute('disabled')
  } else {
    restBtn.setAttribute('disabled', true)
  }

  const applyBtn = document.getElementById('cuponButton');
  if (total >= 200) {
    applyBtn.removeAttribute('disabled')
  } else {
    applyBtn.setAttribute('disabled', true)
  }

}



document.getElementById('cuponButton').addEventListener('click', function () {
  const cuponInput = document.getElementById('cuponInput');
  const value = cuponInput.value;
  if (value === 'SELL200') {
    const discount = (20 * total) / 100;
    const discountFixed = discount.toFixed(2)
    const discountSpan = document.getElementById('entry');
    discountSpan.innerText = discountFixed;

    const grantTotal = total - discount;
    const grantTotalFixed = grantTotal.toFixed(2);
    const grantTotalSpan = document.getElementById('grantTotal');
    grantTotalSpan.innerText = grantTotalFixed;

  } else if (value === '') {
    alert('please enter a cupon code')
  }
  else {
    alert('your cupon code is wrong')
  }
})

document.getElementById('reset-btn').addEventListener('click', function () {
  window.location.href = 'index.html'
})



function copyText() {
  const textToCopy = document.getElementById('text-to-copy')
  const hiddenText = document.createElement('textarea');
  hiddenText.textContent = textToCopy.textContent;
  hiddenText.style.display = 'none';
  document.body.appendChild(hiddenText);
  navigator.clipboard.writeText(hiddenText.textContent);
  hiddenText.remove();
}

const button = document.getElementById('button');
button.addEventListener('click', copyText);