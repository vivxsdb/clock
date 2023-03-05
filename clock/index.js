setInterval(() => {
    d = new Date();
    hy = d.getHours();
    my = d.getMinutes();
    sy = d.getSeconds();
    hr = 30*hy + my/2;
    mrotation = 6*my;
    srotation = 6*sy;

    hour.style.transform = `rotate(${hr}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);