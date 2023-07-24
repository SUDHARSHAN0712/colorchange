const changeText = () => {
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,1)),url('https://w0.peakpx.com/wallpaper/684/162/HD-wallpaper-master-vijay-thalapathy.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Meaner! Leaner! Stronger!"
    }, 400)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 29, 29, 0.3), rgba(231, 80, 236, 0.479)),url('https://w0.peakpx.com/wallpaper/684/162/HD-wallpaper-master-vijay-thalapathy.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Meaner! Leaner! Stronger!"
    }, 600)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(2, 255, 213, 0.3), rgba(255, 23, 23)),url('https://w0.peakpx.com/wallpaper/684/162/HD-wallpaper-master-vijay-thalapathy.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Thirai Thee Pidikkum Vedi Vedikkum"
    }, 800)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 0, 0, 0.3), rgb(3, 255, 45)),url('https://w0.peakpx.com/wallpaper/684/162/HD-wallpaper-master-vijay-thalapathy.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Thirai Thee Pidikkum Vedi Vedikkum"
    }, 1000)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 0, 0, 0.3), rgb(3, 255, 45)),url('https://w0.peakpx.com/wallpaper/684/162/HD-wallpaper-master-vijay-thalapathy.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("demo").innerHTML = "Oruthan Vantha Padai Nadungum,"
    }, 1200)
}

setInterval(changeText, 1500)