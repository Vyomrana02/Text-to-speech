if ("speechSynthesis" in window) {
  // (A) GET HTML ELEMENTS
  let demo = document.getElementById("demoC"),
      vvol = document.getElementById("demoC-vol"),
      vpitch = document.getElementById("demoC-pitch"),
      vrate = document.getElementById("demoC-rate"),
      vmsg = document.getElementById("demoC-msg"),
      vgo = document.getElementById("demoC-go");

  // (B) SPEAK
  var speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.voice = speechSynthesis.getVoices()[0];
    msg.text = vmsg.value;
    msg.volume = +vvol.value;
  	msg.pitch = +vpitch.value;
    msg.rate = +vrate.value;
    speechSynthesis.speak(msg);
    return false;
  };

  // (C) ENABLE FORM
  demo.onsubmit = speak;
  vmsg.disabled = false;
  vgo.disabled = false;
}
