class Levened {
    isCooked = false;
    isLeavened = false;
    isBurned = false;

    constructor() {
        console.log('Lievitato creato');
    }

    cook() {
        console.log('cottura in corso.....');
        if (this.isLeavened === false) {
            this.isCooked = true;
            this.isBurned = true;
            console.log('Attenzione, si è bruciato perchè non era lievitato');
            return;
        }

        if (this.isCooked === true) {
            this.isBurned = true;
            console.log('Bene,lo hai bruciato.....');
            return;
        }

        this.isCooked = true;

        console.log('Cottura completata.....');

    }

    rise() {
        if (this.isCooked === true || this.isBurned === true) {
            console.log('Non si può lievitare perchè gia cotto o bruciato');
            return;
        }

        if (this.isLeavened === true) {
            console.log('è già lievitato');
            return;
        }

        console.log('Inizio lievitatura.....');

        this.isLeavened = true;

        console.log('Lievitazione completata.....');
    }

    burn() {
        this.cook();
        this.cook();
    }

    isReadyToEat() {
        if (this.isBurned) {
            return false;
        }
        if (this.isLeavened) {
            if (this.isCooked) {
                return true;
            }
        }
        return false;
    }
}

class Pizza extends Levened {
    ripieno = false;

    farcisci() {
        if (this.ripieno === true) {
            console.log('il panzerotto è gia ripieno');
            return;
        }
        this.ripieno = true;
        console.log('il panzerotto è stato farcito');
    }

    cook() {
        this.farcisci();
        super.cook();
    }
}

/*
class Beer extends Levened {
    constructor(provName, stiCazzi) {
        stiCazzi(provName);
        super(provName);
    }

    chiara = true;
    alcolica = false;
    artigianale = true;

    cottura() {
        if (this.artigianale === true) {
            console.log('la birra va cotta solo se è artigianale');
            this.artigianale = true;
        }
    }

    mescolare() {
        if (this.alcolica === false) {
            console.log('il processo di mescolatura rende alcolica la birra');
            this.alcolica = true;
        }
    }
}
*/
