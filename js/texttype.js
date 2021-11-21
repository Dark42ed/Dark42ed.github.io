function typeUnderscore(element, text, speed, oscillateSpeed, oscillating=true) {
    if (text) {
        element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length-1);
        element.innerHTML += text[0];
        element.innerHTML += "_";
        text = text.substring(1);
        if (text) {
            setTimeout(typeUnderscore, speed, element, text, speed, oscillateSpeed, oscillating);
        } else {
            setTimeout(typeUnderscore, oscillateSpeed, element, text, speed, oscillateSpeed, oscillating);
        }
    } else {
        if (oscillating) {
            element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length-1) + "&nbsp";
        } else {
            element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length-6) + "_";
        }
        oscillating = !oscillating;
        setTimeout(typeUnderscore, oscillateSpeed, element, text, speed, oscillateSpeed, oscillating);
    }
}