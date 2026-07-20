# 🎯 Guess My Number

An interactive number-guessing game built with vanilla JavaScript. The app picks a random number between 1 and 100 and gives "too high" / "too low" hints until you find it, tracking how many attempts it took.

🔗 **[Live Demo](https://coderblockch.github.io/guess-my-number/)**

## Features

- Random secret number (1–100) each round
- Higher/lower feedback on every guess
- Attempt counter and win state
- Input validation (rejects empty values and numbers outside 1–100)
- Reset button to play again

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)

## Run Locally

```bash
git clone https://github.com/coderblockch/guess-my-number.git
cd guess-my-number
# Open index.html directly, or serve it:
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project Structure

```
index.html   # Markup
index.css    # Styling
index.js     # Game logic
```
