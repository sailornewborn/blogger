const butt = document.getElementById("butt")
const para = document.getElementById("para")

butt.addEventListener("click", ()=>{
  let totalSeconds = 60 * 6
  const interval = setInterval(() => {
    totalSeconds -= 1
    para.textContent = `Time left: ${totalSeconds} seconds`
    if (totalSeconds <= 0){
      clearInterval(interval)
      para.textContent = "Time left: TIME'S UPPPPPPP🔥"
    }
  }, 1000);
})