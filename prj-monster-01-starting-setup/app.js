function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      rounds: 0,
      winner: null,
      battleLog: [],
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.playerHealth + '%' };
    },
    mayUseSpecialAttack() {
      return this.rounds % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'player';
      }
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.rounds = 0;
      this.winner = null;
      this.battleLog = [];
    },
    monsterAttack() {
      this.rounds++;
      const attackValue = getRandomNumber(3, 12);
      this.monsterHealth -= attackValue;
      this.addlogMessage('player', 'attack', attackValue);
      this.playerAttack();
    },
    playerAttack() {
      const attackValue = getRandomNumber(8, 15);
      this.playerHealth -= attackValue;
      this.addlogMessage('monster', 'attack', attackValue);
    },
    specialAttack() {
      this.rounds++;
      const attackValue = getRandomNumber(10, 25);
      this.monsterHealth -= attackValue;
      this.addlogMessage('player', 'attack', attackValue);
      this.playerAttack();
    },
    healPlayer() {
      this.rounds++;
      const healValue = getRandomNumber(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addlogMessage('player', 'heal', healValue);
      this.playerAttack();
    },
    surrenderButton() {
      this.winner = 'monster';
      this.addlogMessage('player', 'surrenders');
    },
    addlogMessage(who, what, value) {
      this.battleLog.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount('#game');
