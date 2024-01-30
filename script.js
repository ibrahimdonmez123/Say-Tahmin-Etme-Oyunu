let sayi = Math.floor(Math.random() * 100) + 1;
let tahmin = prompt( "1 ile 100 arasında bir sayı seçiniz");

while (tahmin != sayi){
    if (tahmin > sayi) {
        tahmin = prompt("Daha küçük bir sayı  tahmin edin");
    } else{
        tahmin = prompt("Daha büyük bir sayı tahmin edin");
    }
}

alert("Tebrikler, sayıyı doğru tahmin ettiniz");