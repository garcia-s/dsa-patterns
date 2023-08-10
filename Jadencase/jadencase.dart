final String text = "How can mirrors be real if our eyes aren't real";
main() {
  print(jadenCaseCopy(text));
}

//O(2n)
String jadenCase(String text) {
  List<String> words = text.split(' ');
  for (int i = 0; i < words.length; i++) {
    words[i] = "${words[i][0].toUpperCase()}${words[i].substring(1)}";
  }

  return words.join(" ");
}

//O(n)
String jadenCaseCopy(String text) {
  String string = "";
  for (int i = 0; i < text.length; i++) {
    string += i > 0 && text[i - 1] == " " ? text[i].toUpperCase() : text[i];
  }
  return string;
}
