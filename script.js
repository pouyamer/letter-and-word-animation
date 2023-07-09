// Animation Functions for use (Also copy the Required Lines in CSS File):
const animateLetterByLetter = (animatingParagraph, delay_ms) => {
  const animatingLetterSpanEls = animatingParagraph.innerText
    .split("")
    .map(letter => {
      const spanElement = document.createElement("span")
      spanElement.innerText = letter

      return spanElement
    })

  animatingParagraph.innerHTML = ""

  animatingLetterSpanEls.forEach(element => {
    animatingParagraph.appendChild(element)
  })

  animatingLetterSpanEls.forEach((element, i) => {
    setTimeout(() => {
      element.classList.add("animating-letter")
    }, (i + 1) * delay_ms)
  })
}

const animatingWordByWord = (animatingParagraph, delay_ms) => {
  const animatingWordSpanEls = animatingParagraph.innerText
    .split(" ")
    .map(word => {
      const spanElement = document.createElement("span")
      spanElement.innerText = word + " "

      return spanElement
    })

  animatingParagraph.innerHTML = ""

  animatingWordSpanEls.forEach(element => {
    animatingParagraph.appendChild(element)
  })

  animatingWordSpanEls.forEach((element, i) => {
    setTimeout(() => {
      element.classList.add("animating-word")
    }, (i + 1) * delay_ms)
  })
}

// Example App Config:
const LETTER_BY_LETTER_ANIMATION_DELAY_MS = 30
const WORD_BY_WORD_ANIMATION_DELAY_MS = 400
const ANIMATING_METHODS = {
  WORD_BY_WORD: "word-by-word",
  LETTER_BY_LETTER: "letter-by-letter"
}

// Example App:
const animatingMethod = ANIMATING_METHODS.LETTER_BY_LETTER
const animatingParagraph = document.querySelector(".animating-paragraph")

switch (animatingMethod) {
  case ANIMATING_METHODS.LETTER_BY_LETTER:
    animateLetterByLetter(
      animatingParagraph,
      LETTER_BY_LETTER_ANIMATION_DELAY_MS
    )
    break
  // Word-by-word Method
  case ANIMATING_METHODS.WORD_BY_WORD:
    animatingWordByWord(animatingParagraph, WORD_BY_WORD_ANIMATION_DELAY_MS)
    break

  default:
    break
}
