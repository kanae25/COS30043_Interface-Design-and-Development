const app = Vue.createApp({
  data() {
    return {
      numberToGuess: 0,
      userGuess: null,
      message: "Start guessing",
      attemptsLeft: 5,
      guesses: [],
      gameOver: false
    };
  },
  methods: {
    generateRandomNumber() {
      this.numberToGuess = Math.floor(Math.random() * 100) + 1;
    },
    checkGuess() {
      if (this.gameOver) {
        return;
      }

      if (this.userGuess === null || this.userGuess < 1 || this.userGuess > 100) {
        this.message = "Please enter a number between 1 and 100";
        return;
      }

      this.guesses.push(this.userGuess);
      this.attemptsLeft = this.attemptsLeft - 1;

      if (this.userGuess < this.numberToGuess) {
        this.message = "Guess higher";
      } else if (this.userGuess > this.numberToGuess) {
        this.message = "Guess lower";
      } else {
        this.message = "You got it!";
        this.gameOver = true;
        return;
      }

      if (this.attemptsLeft === 0) {
        this.message = "No attempts left. The correct number was " + this.numberToGuess;
        this.gameOver = true;
      }
    },
    giveUp() {
      if (this.gameOver) {
        return;
      }

      this.message = "You gave up. The correct number was " + this.numberToGuess;
      this.gameOver = true;
    },
    startOver() {
      this.userGuess = null;
      this.message = "Start guessing";
      this.attemptsLeft = 5;
      this.guesses = [];
      this.gameOver = false;
      this.generateRandomNumber();
    }
  },
  mounted() {
    this.generateRandomNumber();
  }
});

app.mount("#app");
