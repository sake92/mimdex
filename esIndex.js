
const esIndex = elasticlunr(function () {
    this.setRef('id');
    this.addField('title');
    this.addField('description');
    this.addField('date');
    this.addField('imgUrl');
    this.addField('fbPostUrl');
});

let idCounter = 1
const getId = () => ++idCounter

const kicinImages = 'kicin';
const kicinDocs = [{
    "title": "Autoputevi",
    "description": "Tbh ne znam kako funkcioniše ovo finansiranje autoputeva but I'm not putting any more research into this meme",
    "date": new Date("2020-06-26"),
    "imgUrl": "autoputevi.jpg"
}, {
    "title": "Hana Hadžiavdagić",
    "description": "Hana Hadžiavdagić",
    "date": new Date("2020-06-1"),
    "imgUrl": "hana_hadziavdagic.jpg"
}, {
    "title": "Teravija a moram piškit",
    "description": "Ja (8 godina) na teraviji dok čekam da me babo pogleda da mu kažem da moram pišat",
    "date": new Date("2020-04-21"),
    "imgUrl": "teravija_pisanje.jpg"
},].map(doc => {
    return {
        ...doc,
        "id": getId(),
        "imgUrl": `kicin/${doc.imgUrl}`
    }
});

kicinDocs.forEach(doc => {
    esIndex.addDoc(doc);
});

