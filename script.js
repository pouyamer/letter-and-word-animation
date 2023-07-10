// Animation Functions for use (Also copy the Required Lines in CSS File):
const animateLetterByLetter = (animatingElement, delay_ms) => {
  const animatingLetterSpanEls = animatingElement.innerText
    .split("")
    .map(letter => {
      const spanElement = document.createElement("span")
      spanElement.innerText = letter

      return spanElement
    })

  animatingElement.innerHTML = ""

  animatingLetterSpanEls.forEach(element => {
    animatingElement.appendChild(element)
  })

  animatingLetterSpanEls.forEach((element, i) => {
    setTimeout(() => {
      element.classList.add("animating-letter")
    }, (i + 1) * delay_ms)
  })
}

const animatingWordByWord = (animatingElement, delay_ms) => {
  const animatingWordSpanEls = animatingElement.innerText
    .split(" ")
    .map(word => {
      const spanElement = document.createElement("span")
      spanElement.innerText = word + " "

      return spanElement
    })

  animatingElement.innerHTML = ""

  animatingWordSpanEls.forEach(element => {
    animatingElement.appendChild(element)
  })

  animatingWordSpanEls.forEach((element, i) => {
    setTimeout(() => {
      element.classList.add("animating-word")
    }, (i + 1) * delay_ms)
  })
}

const animatingSentenceBySentence = (animatingElement, delay_ms) => {
  const animatingSentenceSpanEls = animatingElement.innerText
    .split(".")
    .map(word => {
      const spanElement = document.createElement("span")
      spanElement.innerText = word + "."

      return spanElement
    })

  animatingElement.innerHTML = ""

  animatingSentenceSpanEls.forEach(element => {
    animatingElement.appendChild(element)
  })

  animatingSentenceSpanEls.forEach((element, i) => {
    setTimeout(() => {
      element.classList.add("animating-sentence")
    }, (i + 1) * delay_ms)
  })
}

// Example App Config:
const LETTER_BY_LETTER_ANIMATION_DELAY_MS = 10
const WORD_BY_WORD_ANIMATION_DELAY_MS = 400
const SENTENCE_BY_SENTENCE_DELAY_MS = 1000
const ANIMATING_METHODS = {
  WORD_BY_WORD: "word-by-word",
  LETTER_BY_LETTER: "letter-by-letter",
  SENTENCE_BY_SENTENCE: "sentence-by-sentence"
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

  case ANIMATING_METHODS.SENTENCE_BY_SENTENCE:
    animatingSentenceBySentence(
      animatingParagraph,
      SENTENCE_BY_SENTENCE_DELAY_MS
    )

  default:
    break
}
