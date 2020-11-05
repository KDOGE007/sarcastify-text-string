const sarcasticCasing = (input) => {
  const output = input
    .split('')
    .map((letter, i) =>
      i % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join('')
  document.querySelector('#output').innerHTML = output
}

const copyToClipboard = (output) => {
  console.log(output)
  let anon = document.createElement('textarea') //create variable tht will creat text area
  anon.value = output
  document.body.appendChild(anon)
  anon.select() //select can only select from input or textarea hence the need to create textarea
  document.execCommand('copy') //copy to clipboard
  document.body.removeChild(anon)
  alert(`Copied the text: ${output}`)
}

document.querySelector('#sarcastic').addEventListener('click', () => {
  const text = document.querySelector('#myTextarea').value
  sarcasticCasing(text)
})

document
  .querySelector('#copy')
  .addEventListener('click', () => copyToClipboard(output.innerHTML))
