//Objects lesson
var Robot = {
    fuel: 100,
    weapon: "laser",
    speed: 10,
    strength: 5,
    armor: "light",

    AddFuel: function (tank) {
        this.fuel += tank;
    },

    UpgradeArmor: function (change) {
        this.armor = change;
    },

    ChangeWeapon: function (change) {
        this.weapon = change;
    },

}

Robot.speed += parseInt(prompt("Increase Robot speed."));
alert("Our Robot now has a speed of " + Robot.speed);
Robot.UpgradeArmor(prompt("What should we upgrade the armor to?"));
alert("Our Robot now has " + Robot.armor + " armor.");