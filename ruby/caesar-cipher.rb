def caesar_cipher(phrase, shift)
  phrase = phrase.split("")
  cipher_text = []
  phrase.each do |i|
    unless i.ord == 32
      cipher_text.push(i.ord + shift)
    else
      cipher_text.push(32)
    end
  end
  for i in (0...cipher_text.length)
    cipher_text[i] = cipher_text[i].chr
  end
  p cipher_text
end

caesar_cipher("What a string!", 5)