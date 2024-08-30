let wordCount = 0;
let charCount = 0;
let sentenceCount = 0;

function Counter(text) {
  const wordsList = text.trim().split(" ");
  const words = wordsList.map((str) => str.replace("\n", ""));
  wordCount = words[0] == "" ? 0 : words.length;

  charCount = words.join(" ").length;

  const sentences = text.startsWith(".") ? "1" : text.split(".");
  sentenceCount = sentences.length - 1;

  $("#charcount").text(charCount);
  $("#wordcount").text(wordCount);
  $("#sentencecount").text(sentenceCount);
}

$(".input").on("keyup", () => {
  Counter($(".input").val());
});
