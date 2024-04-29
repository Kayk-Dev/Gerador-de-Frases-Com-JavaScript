document.getElementById("botao").addEventListener("click", () => {
       //
       var quotes = {
          "Albert Einstein" : "A imaginação é mais importante que o conhecimento.",
          "Mahatma Gandhi" : "Seja a mudança que você quer ver no mundo.",
          "Leonardo da Vinci" : "A simplicidade é o último grau de sofisticação.",
          "Coco Chanel" : "A moda sai de moda, o estilo jamais.",
          "Nelson Mandela" : "A educação é a arma mais poderosa que você pode usar para mudar o mundo.",
          "Confúcio" : "A vida é realmente simples, mas insistimos em torná-la complicada.",
          "Martin Luther King Jr." : "A escuridão não pode expulsar a escuridão; apenas a luz pode fazer isso. O ódio não pode expulsar o ódio; apenas o amor pode fazer isso.",
          "Steve Jobs" : "A inovação distingue um líder de um seguidor.",
          "Maya Angelou" : "Acreditamos que podemos voar, mas batemos contra o teto.",
          "Dalai Lama" : "O amor e a compaixão são necessidades, não luxos. Sem eles, a humanidade não pode sobreviver.",
       }
       var authors = Object.keys(quotes);
       var author = authors[Math.floor(Math.random() * authors.length)];
       //
       var quote = quotes[author];
       document.getElementById("quote").innerHTML = quote;
       document.getElementById("author").innerHTML = author;

})