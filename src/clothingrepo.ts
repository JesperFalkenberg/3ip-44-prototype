import {Avg} from './domain/avg'
import {Desc} from './domain/desc'
import {Impact} from './domain/impact'
import {Product} from './domain/product'
import {Step} from './domain/step'

export class ClothingRepo{
    private static INSTANCE: ClothingRepo;

    private constructor(){
        // empty
    }

    // unique and ensured
    static getInstance(): ClothingRepo{
        if(!this.INSTANCE){
            this.INSTANCE = new ClothingRepo();
        }
        return this.INSTANCE;
    }

    getAllInfo(){
        return [this.getAvgList(), this.getProductList, this.getStepList];
    }

    getAvgList(){
        return avgList;
    }

    getProductList(){
        return productList;
    }

    getStepList(){
        return stepList;
    }
}

// static DB for now
const avgList: Array<Avg> = [
    new Avg(
        'tshirt', 
        [
            new Impact([
                4.07,
                32000,
                15000,
            ]),
        ]
    ),
];

const productList: Array<Product> = [
    new Product('Kortærmet T-shirt | Black/Royal Blue','tshirt'),
];

const stepList: Array<Step> = [
    new Step(
        'Kortærmet T-shirt | Black/Royal Blue',
        1,
        new Desc('Flaske','T-shirten er produceret af 115 gram bomuldsrester og 3 plastikflasker. Hvert år ender millioner af plastikflasker i verdenshavene. Nogle af disse flasker indsamler vi og fragter dem med tog til vores fabrik i Shanghai.'),
        new Impact([0.3, 3000, 0]),
    ),
    new Step(
        'Kortærmet T-shirt | Black/Royal Blue',
        2,
        new Desc('Plastgranulat og bomulsrester','Flaskerne nedbrydes til plastikgranulat og omdannes til garn. Derudover bruges garn lavet af kasserede bomuldsprodukter fra Beijing. Vi arbejder på at flytte produktionen til Portugal, for at minimere transport.'),
        new Impact([0.4, 1000, 1050]),
    ),
    new Step(
        'Kortærmet T-shirt | Black/Royal Blue',
        3,
        new Desc('Produktion af t-shirt','Når plastikgranulatet er blevet omdannet til garn kan t-shirten produceres. De to materialer vil I denne del af processen blive vævet sammen til den Despite t-shirt du kender.'),
        new Impact([0.3, 0, 5950]),
    ),
    new Step(
        'Kortærmet T-shirt | Black/Royal Blue',
        4,
        new Desc('Pakning af t-shirt','Vi får hang-tags leveret, som hænges på t-shirten. Vores tags er lavet af genbrugsplast og -papir. Når t-shirten har fået tags på, pakkes den i gennemsigtige plastikposer, hvilket er nødvendigt for at beskytte tøjet.'),
        new Impact([0.2, 200, 0]),
    ),
    new Step(
        'Kortærmet T-shirt | Black/Royal Blue',
        5,
        new Desc('Transport til Danmark','Når tøjet er pakket, fragtes det i lastbil til stationen i Shanghai, hvor resten af turen foregår med tog til Danmark. Når tøjet ankommer til Danmark, bliver det fragtet med lastbil til vores lager i København.'),
        new Impact([0.8, 7300, 0]),
    ),
    new Step(
        'Kortærmet T-shirt | Black/Royal Blue',
        6,
        new Desc('Levering til dig','Når du bestiller pakker vi i en forsendelsespose, lavet af det bedste slags genbrugspapir. Ved at benytte disse poser, sparer vi miljøet for fældning af skov og den ressourcekrævende produktion af ny papirmasse.'),
        new Impact([0.1, 200, 0]),
    ),
];
