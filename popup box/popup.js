let popupBtns = document.querySelectorAll("button.popup-btn")
if (popupBtns) {
	var popupWrapper = document.createElement("div")
	popupWrapper.className = "popup-wrapper"
	document.body.prepend(popupWrapper)
}
popupBtns.forEach(popupBtn =>{
	let popup = popupBtn.nextElementSibling	
	popupBtn.addEventListener("click", e =>{
		popup.classList.add("show")
		popupWrapper.classList.add("show")
	})
	let popupClosefunc = e =>{			
			popup.classList.remove("show")
			popupWrapper.classList.remove("show")			
		}
	let popupCloses = document.querySelectorAll(".popup-close")
	popupCloses.forEach(popupClose =>{
		popupClose.addEventListener("click", popupClosefunc )
		popupWrapper.addEventListener("click", popupClosefunc )
	})
})