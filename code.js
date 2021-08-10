let honda = {
    make: 'Honda',
    model: 'Fit',
    year: 2020,
    odometer: 0,
    isRunning: false,

    // method
    start: function() {
        this.isRunning = true
        console.log(`${this.name()} is running`)
    },

    stop: function() {
        this.isRunning = false
        console.error(`${this.name()} is not running`)
    },

    checkOdometer: function() {
        console.log(`${this.name()} ran for ${this.odometer} miles`)
    },

    drive: function(distance) {
        if (this.isRunning) {
            this.odometer += distance
            this.checkOdometer()
            this.saveOdometer()
        } else {
            console.error("Car is not running")
        }
        
    },

    name: function() {
        return `${this.make} ${this.model}`
    },

    saveOdometer() {
        localStorage.setItem("odometer", this.odometer)
    },

    loadOdometer() {
        let odometerValueFromLS = localStorage.getItem("odometer")
        if (odometerValueFromLS) {
            this.odometer = Number(odometerValueFromLS)
        }
    },

    render: function() {
        let ul = document.getElementById('carDisplay');
        ul.innerHTML = ""

        let makeLi = document.createElement('li')
        makeLi.innerText = `Make: ${this.make}`
        ul.append(makeLi)

        let modelLi = document.createElement('li')
        modelLi.innerText = `Model: ${this.model}`
        ul.append(modelLi)

        let yearLi = document.createElement('li')
        yearLi.innerText = `Year: ${this.year}`
        ul.append(yearLi)

        let odometerLi = document.createElement('li')
        odometerLi.innerText = `Odometer: ${this.odometer}`
        ul.append(odometerLi)

        let runningLi = document.createElement('li')
        runningLi.innerText = `Running: ${this.isRunning}`
        ul.append(runningLi)
    },

    toString: function() {
        return `${this.make} ${this.model} (${this.year})`
    }

}

honda.loadOdometer()
honda.render()

document.getElementById('start-button').addEventListener('click', () => {
    honda.start()
    honda.render()
})

document.getElementById('drive-button').addEventListener('click', () => {
    honda.drive(10)
    honda.render()
})

document.getElementById('stop-button').addEventListener('click', () => {
    honda.stop()
    honda.render()
})





