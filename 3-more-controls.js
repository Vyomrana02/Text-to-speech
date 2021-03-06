if ("speechSynthesis" in window) {
  // (A) GET HTML ELEMENTS
  let demo = document.getElementById("demoC"),
      vvol = document.getElementById("demoC-vol"),
      vlevel = document.getElementById("demoC-level"),
      vspeed = document.getElementById("demoC-speed"),
      vmsg = document.getElementById("demoC-msg"),
      vgo = document.getElementById("demoC-go");
      vvoice = document.querySelector("data-lang");
      console.log(vvoice);
  // (B) SPEAK
  var speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.voice = speechSynthesis.getVoices()[1];
    msg.text = vmsg.value;
    msg.volume = +vvol.value;
  	msg.level = +vlevel.value;
    msg.speed = +vspeed.value;

    // msg.voice = +vvoice.value;
    // msg.lang = +vvoice.value;
    console.log(msg.getVoices);
    speechSynthesis.speak(msg);
    return false;
  };

  // (C) ENABLE FORM
  demo.onsubmit = speak;
  vmsg.disabled = false;
  vgo.disabled = false;
}
