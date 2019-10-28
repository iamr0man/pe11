new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameIsRunning = true;
            this.turns = []
        },
        attack: function () {
            const damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            })
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks()
        },
        specialAttack: function () {
            const damage = this.calculateDamage(7, 13);
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            })
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks()
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10
                this.monsterAttacks()
            } else {
                this.playerHealth = 97
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for ' + 10
            })
        },
        giveUp: function () {
            this.gameIsRunning = false
        },
        monsterAttacks: function () {
            const damage = this.calculateDamage(7, 12)
            this.playerHealth -= damage
            this.turns.unshift({
                isPlayer: false,
                text: 'Player hits Monster for ' + damage
            })
            this.checkWin()
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false
                }
                return true
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRungning = false
                }
                return true;
            }
            return false
        }
    }
})