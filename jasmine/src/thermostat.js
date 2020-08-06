class Thermostat {
  constructor() {
    this.temperature = 20
    this.powerSaving = true
  }

  upTemp() {
    this.temperature++
      if (this.temperature >= 25 && this.powerSaving == true) {
        this.temperature = 25
      } else if (this.temperature >= 32 && this.powerSaving == false) {
        this.temperature = 32
      }
  }

  downTemp() {
    this.temperature--
    if (this.temperature <= 10) {
      this.temperature = 10
    }
  }

  reset() {
    this.temperature = 20
  }

  powerSave() {
    if (this.powerSaving = true) {
      this.powerSaving = false
    } else {
      this.powerSaving = true
    }
  }

  powerUsage() {
    if (this.temperature < 18) {
      return "low-usage"
    } else if (this.temperature <= 25) {
      return "medium-usage"
    } else {
      return "high-usage"
    }
  }
}