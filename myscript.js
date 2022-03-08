 class Gempa{
        // member 1 & 2 : variable dan konstruktor
        constructor(lokasi, skala){
            this.lokasi = lokasi;
            this.skala = skala;

        }
        // member fungsi
        dampak(){
            // logic fungsi dampak
            if(this.skala >= 0 && this.skala <= 2) this.gempa = "dampak tidak terasa";
            else if(this.skala >= 3 && this.skala  <= 4 ) this.gempa = "bangunan retak-retak";
            else if(this.skala >= 5 && this.skala  <= 6 ) this.gempa = "bangunan Roboh";
            else if(this.skala >=  7 && this.skala <= 10) this.gempa = "bangunan Roboh dan berpotensi Tsunami";
            else this.gempa = '';

            document.write(
                    `Lokasi Gempa : ${this.lokasi}
                    <br>Skala Gempa : ${this.skala}
                    <br>Dampak Gempa : ${this.gempa}<hr>`
                ) 
        }

    }
    // ============ Menciptakan Saldo object ===============
    let amsterdam = new Gempa('Amsterdam', 6 );
    let bali = new Gempa('Bali', 5 );
    let paris = new Gempa('Paris', 9 );
    let garut = new Gempa('Garut', 8 );
    let sydney = new Gempa('Sydney', 6 );
    let ausie = new Gempa('Ausie', 4 );
    let florida = new Gempa('Florida', 3 );
    let sanFrancisco = new Gempa('San Francisco', 2 );
    let london = new Gempa('London', 1 );
    let rusia = new Gempa('Rusia', 10 );

    // menggunakan member class
    amsterdam.dampak(); bali.dampak(); paris.dampak(); garut.dampak(); sydney.dampak(); ausie.dampak(); florida.dampak(); sanFrancisco.dampak(); london.dampak(); rusia.dampak();


