function typeUnderscore(element, text, speed, oscelateSpeed, oscelateing=true) {
    if (text) {
        element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length-1);
        element.innerHTML += text[0];
        element.innerHTML += "_";
        text = text.substring(1);
        if (text) {
            setTimeout(typeUnderscore, speed, element, text, speed, oscelateSpeed, oscelateing);
        } else {
            setTimeout(typeUnderscore, oscelateSpeed, element, text, speed, oscelateSpeed, oscelateing);
        }
    } else {
        if (oscelateing) {
            element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length-1) + "&nbsp";
        } else {
            element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length-6) + "_";
        }
        oscelateing = !oscelateing;
        setTimeout(typeUnderscore, oscelateSpeed, element, text, speed, oscelateSpeed, oscelateing);
    }
}