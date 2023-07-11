// Animation Functions for use (Also copy the Required Lines in CSS File):
const applyStyleLetterByLetter = (element, delay_ms) => {
  const styledLetterSpanEls = element.innerText.split("").map(letter => {
    const span = document.createElement("span")
    span.innerText = letter

    return span
  })

  element.innerHTML = ""

  styledLetterSpanEls.forEach(span => {
    element.appendChild(span)
  })

  styledLetterSpanEls.forEach((span, i) => {
    setTimeout(() => {
      span.classList.add("styled-letter")
    }, (i + 1) * delay_ms)
  })
}

const applyStyleWordByWord = (
  element,
  delay_ms,
  contentAware = false,
  maxWordLengthForFullDelay = 10,
  isDelayAppliedRandomly = false
) => {
  const styledWordSpanEls = element.innerText.split(" ").map(word => {
    const span = document.createElement("span")

    span.innerHTML = word + " "

    return span
  })

  element.innerHTML = ""

  styledWordSpanEls.forEach(span => {
    element.appendChild(span)
  })

  let accumulatedDelayForContentAwareMode = 0
  let delaysforContentAwareMode = styledWordSpanEls.map((span, i) => {
    accumulatedDelayForContentAwareMode +=
      ((span.innerText.length - 1) / maxWordLengthForFullDelay) * delay_ms

    return accumulatedDelayForContentAwareMode
  })

  styledWordSpanEls.forEach((span, i) => {
    const calculateDelay = () => {
      if (contentAware) return delaysforContentAwareMode[i]
      if (isDelayAppliedRandomly)
        return (i + 1) * Math.random() * delay_ms(i + 1) * delay_ms
      return (i + 1) * delay_ms
    }

    setTimeout(() => {
      span.classList.add("styled-word")
    }, calculateDelay())
  })
}

const applyStyleSentenceBySentence = (element, delay_ms) => {
  const styledSentenceSpanEls = element.innerText.split(".").map(word => {
    const span = document.createElement("span")
    span.innerText = word + "."

    return span
  })

  element.innerHTML = ""

  styledSentenceSpanEls.forEach(span => {
    element.appendChild(span)
  })

  styledSentenceSpanEls.forEach((span, i) => {
    setTimeout(() => {
      span.classList.add("styled-sentence")
    }, (i + 1) * delay_ms)
  })
}

// Example App Config:
const LETTER_BY_LETTER_STYLING_DELAY_MS = 120
const WORD_BY_WORD_STYLING_DELAY_MS = 150
const SENTENCE_BY_SENTENCE_STYLING_DELAY_MS = 1000
const STYLING_METHODS = {
  WORD_BY_WORD: "word-by-word",
  LETTER_BY_LETTER: "letter-by-letter",
  SENTENCE_BY_SENTENCE: "sentence-by-sentence"
}

// Example App:
const stylingMethod = STYLING_METHODS.WORD_BY_WORD
const styledElement = document.querySelector(".styled-element")

switch (stylingMethod) {
  case STYLING_METHODS.LETTER_BY_LETTER:
    applyStyleLetterByLetter(styledElement, LETTER_BY_LETTER_STYLING_DELAY_MS)
    break
  // Word-by-word Method
  case STYLING_METHODS.WORD_BY_WORD:
    applyStyleWordByWord(
      styledElement,
      WORD_BY_WORD_STYLING_DELAY_MS,
      (contentAware = true),
      3
    )
    break

  case STYLING_METHODS.SENTENCE_BY_SENTENCE:
    applyStyleSentenceBySentence(
      styledElement,
      SENTENCE_BY_SENTENCE_STYLING_DELAY_MS
    )
    break

  default:
    break
}
