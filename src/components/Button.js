import { useState } from "react";

function Button() {
    let [buttonText, setbuttonText] = useState("I am OK today!");

  function clickedButton() {
    setbuttonText("Thank you!");
    console.log("clicked!")
  }

  return (
    <main class="flex h-dvh items-center justify-center bg-gray-200 basis-1/2">
      <button 
      type="button"
      onClick={clickedButton}
      class="group relative h-96 w-96 overflow-hidden rounded-2xl bg-amber-400 text-5xl font-bold text-white active:bg-amber-600">
        {buttonText}
        <div class="absolute inset-0 h-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button>
    </main>
  );
}

export default Button;
