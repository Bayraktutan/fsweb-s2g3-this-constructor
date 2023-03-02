// Aşağıdaki görevleri tamamla

/*
  GÖREV 1
    - `Kisi` adında bir Constructor'ı oluştur, 'isim ve 'yas' argümanları alsın.
    - Tüm `Kisi` örnekleri boş bir `mide` dizisi ile yüklensin.
    - `Kisi` örneklerine `.ye("birYemek")` yeteneği ekle:
        + `.ye()` parametre olarak bir string alır, bu parametre bir yiyeceği temsil eder
        + Bir yiyecek yenildiğinde, `mide` dizisine eklenir.
        + Eğer, `mide` dizisinde 10 eleman varsa `.ye()` metodu çalışmamalı.
    - Sonra, `Kisi` örneklerine `.bosalt()` yeteneği de ekleyin:
        + Eğer bosalt tetiklenirse, 'mide' dizisi boşaltılır.
    - `Kisi` örneklerine `.toString()` metodu ekleyin:
        + Bu metotla, `isim` ve `yas`i içeren bir string döndürmelisin. (Örn: "Mary, 50")
*/

function Kisi(isim, yas) {
  this.mide = [];
  this.ye = function (birYemek) {
    if (this.mide.length <= 10) {
      this.mide.push(birYemek);
    }
  };
  this.bosalt = function () {
    this.mide = [];
  };
  this.isim = isim;
  this.yas = yas;
  this.toString = function () {
    return `${this.isim}, ${this.yas}`;
  };
}

/*
  GÖREV 2
    - `Araba` adında bir Constructor oluştur ve parametre olarak `model` ve `yakitTuketimi` kullan.
    - Tüm `Araba` örneklerinin:
        + `benzinDeposu` 0 olarak yüklenir
        + `kilometreSaati`i de 0 olarak yüklen,r
    - `Araba`ların `.doldur(litre)` metoduyla benzinliğe gidip `benzinDeposu` doldurmasını sağla.
      + Bu metot, 'litre' parametresiyle yüklenen yakıt miktarını alır.
      + girilen `litre`yi de `benzinDeposu`na ekler.
    - BONUS: `Araba`lara `.kullan(mesafe)` özelliği de ekleyin. `mesafe`:
        + `kilometreSaati`nin artmasına neden olmalı.
        + `yakitTuketimi` de hesaba katılarak `yakitposuın` azalmasını sağlamalıdır.
    - BONUS: Bir `araba`nın benzini biterse, `kullan` metodu aşağıdaki mesajı paylaşır:
        +  "x kilometrede benzinim bitti!" x değişkeni `kilometreSaati`ndeki sayı olmalıdır.
*/

function Araba(model, yakitTuketimi) {
  this.model = model;
  this.benzinDeposu = 0;
  this.kilometreSaati = 0;
  this.yakitTuketimi = yakitTuketimi;
  this.doldur = function (litre) {
    this.benzinDeposu = litre + this.benzinDeposu;
  };
  this.kullan = function (mesafe) {
    this.kilometreSaati = mesafe + this.kilometreSaati;
    this.benzinDeposu = this.benzinDeposu - this.yakitTuketimi;
    if (this.benzinDeposu == 0) {
      return `${this.kilometreSaati}de benzinim bitti!`;
    }
  };
}

/*
  GÖREV 3
  Kendi cümlelerinle "this" kelimesinin 4 prensibini açıklayın:
  1.Window Binding // this döndürecek hiçbir şeyi yokken global object olan window döner.

  ///

  2.Implicit Binding // 
  const me = {
    name: "Oguz"
    age: 28
    sayName = function(){
      console.log(this.me)
    }
  }
  me.sayName() --> this, fonksiyonun çağrıldığı yerde, noktanın soluna referans verir. bu durumda me.

  ///

  3.new Binding //
  function Pet(name, breed, bark){
    this.name = name;
    this.breed = breed;
    this.bark = bark;
  }
  Pet.prototype.sound = function(){ 
    console.log(this.bark);
  }

  const ada = new Pet('Ada', 'Bali Dog', 'woof woof');
  ada.sound()

  4.Explicit Binding // Oluşturulan fonksiyonu this neye refere edilmek isteniyorsa. O noktada invoke ediyoruz.
  Aşağıdaki örnekte this ada'dır.
  function sound(){
    console.log(this.bark);
  }

  const ada = {
    name: 'Ada',
    breed: 'Bali Dog',
    bark: 'woof woof'
  }

sound.call(ada)
    .call() 
    .apply()
    .bind()

*/

/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
module.exports = {
  as,
  Kisi,
  Araba,
  /*'Bebek'*/
};
