function convertToRem() {
  const pixelInput = document.getElementById("pixels").value;
  const remOutput = document.getElementById("rems");

  if (pixelInput) {
    const remValue = (pixelInput / 16).toFixed(2);
    remOutput.value = `${remValue} rem`;
  } else {
    remOutput.value = "0 rem";
  }
}
