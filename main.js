const sarcasticCasing = (input) => {
  const output = input
    .trim()
    .split('')
    .map((letter, i) =>
      i % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join('')
  document.querySelector('#output').innerHTML = output
}

const copyToClipboard = (str) => {
  let copyStr = document.createElement('textarea') //create variable tht will creat text area
  copyStr.value = str
  document.body.appendChild(copyStr)
  copyStr.select() //select function can only select from the input or textarea hence the need to create textarea
  document.execCommand('copy') //copy to clipboard
  document.body.removeChild(copyStr)
  alert(`Copied the text: ${str}`)
}

document.querySelector('#sarcastic').addEventListener('click', () => {
  const text = document.querySelector('#myTextarea').value
  sarcasticCasing(text)
})

document
  .querySelector('#copy')
  .addEventListener('click', () => copyToClipboard(output.innerHTML))
