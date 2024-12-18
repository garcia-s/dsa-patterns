final String text = "How can mirrors be real if our eyes aren't real";
main(List<String> arg) {
    if(arg.length < 1) return print("No words provided");
    final string = arg[0].trim(); 

    print("--------------------------------");
    print("Starting the letter copy version");
    final copyWatch= Stopwatch()..start();
    jadenCaseCopy(string);
    copyWatch.stop();
    print("Executed in ${copyWatch.elapsedMilliseconds} ms " );
    

    print("--------------------------------"); 
    print("Starting the word array version");
    final arrWatch = Stopwatch()..start();
    jadenCase(string);
    arrWatch.stop();
    print("Executed in ${arrWatch.elapsedMilliseconds} ms" );
}

String jadenCase(String text) {
  List<String> words = text.split(' ');
  for (int i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase()+words[i].substring(1);
  }
  return words.join(" ");
}

String jadenCaseCopy(String text) {
  List<String> string = [];
  for (int i = 0; i < text.length; i++) {
    string.add(i > 0 && text[i - 1] == ' ' ? text[i].toUpperCase() : text[i]);
  }
  return string.join();
}


