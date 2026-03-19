const MIN_GUESS = 1;
const MAX_GUESS = 100;
const MAX_DIGITS = 3;
const MAX_ATTEMPTS = 5;

const app = Vue.createApp({
  data() {
    return {
      numberToGuess: 0,
      userGuess: null,
      message: "Start guessing",
      attemptsLeft: MAX_ATTEMPTS,
      guesses: [],
      gameOver: false
    };
  },
  computed: {
    guessSizeClass() {
      if (this.userGuess === null) {
        return "";
      }

      const digits = String(this.userGuess).length;

      if (digits >= MAX_DIGITS) {
        return "guess-size-3";
      }

      if (digits === 2) {
        return "guess-size-2";
      }

      return "";
    }
  },
  methods: {
    allowOnlyNumbers(event) {
      const allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Tab"
      ];

      if (event.ctrlKey || event.metaKey) {
        return;
      }

      if (allowedKeys.includes(event.key)) {
        return;
      }

      if (/^[0-9]$/.test(event.key) && event.target.value.length >= MAX_DIGITS) {
        event.preventDefault();
        return;
      }

      if (!/^[0-9]$/.test(event.key)) {
        event.preventDefault();
      }
    },
    limitGuessLength(event) {
      let value = event.target.value.replace(/\D/g, "");

      if (value.length > MAX_DIGITS) {
        value = value.slice(0, MAX_DIGITS);
      }

      event.target.value = value;
      this.userGuess = value === "" ? null : Number(value);
    },
    generateRandomNumber() {
      this.numberToGuess = Math.floor(Math.random() * MAX_GUESS) + MIN_GUESS;
    },
    checkGuess() {
      if (this.gameOver) {
        return;
      }

      if (this.userGuess === null || this.userGuess < MIN_GUESS || this.userGuess > MAX_GUESS) {
        this.message = "Please enter a number between 1 and 100";
        return;
      }

      this.guesses.push(this.userGuess);
      this.attemptsLeft -= 1;

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
      this.attemptsLeft = MAX_ATTEMPTS;
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
