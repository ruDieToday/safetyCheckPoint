import { useState } from "react";

function Button() {
  let clickedText = "Thank you!";
  let text = "I am OK today!";
  const timestamp = new Date().getTime();
  let [buttonText, setbuttonText] = useState(text);

  function clickedButton() {
    setbuttonText(clickedText);
    console.log(timestamp);
  }

  return (
    <div class="flex h-dvh items-center justify-center bg-gray-200 basis-1/2">
      <button
        type="button"
        onClick={clickedButton}
        class="group relative h-96 w-96 overflow-hidden rounded-2xl bg-amber-400 text-5xl font-bold text-white active:bg-amber-600"
      >
        {buttonText}
        <div class="absolute inset-0 h-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button>
    </div>
  );
}

export default Button;
