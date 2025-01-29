
String jadenCase(String text) {
  List<String> words = text.split(' ');
  for (int i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase()+words[i].substring(1);
  }
  return words.join(" ");
}
