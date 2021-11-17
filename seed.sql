-- CREATE
CREATE TABLE averages(
    productType char DEFAULT '',
    CO2 decimal DEFAULT 0.0 NOT NULL,
    transport decimal DEFAULT 0.0 NOT NULL,
    water decimal DEFAULT 0.0 NOT NULL,
    PRIMARY KEY (productType)
);
CREATE TABLE products(
    id int AUTO_INCREMENT,
    name char DEFAULT '' NOT NULL,
    productType char DEFAULT '' NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE stepValues(
    productId int DEFAULT 0 NOT NULL,
    stepNum int DEFAULT 0 NOT NULL,
    CO2 decimal DEFAULT 0.0 NOT NULL,
    transport decimal DEFAULT 0.0 NOT NULL,
    water decimal DEFAULT 0.0 NOT NULL,
    PRIMARY KEY (productId, stepNum)
);
CREATE TABLE stepDescriptions(
    productId int DEFAULT 0 NOT NULL,
    stepNum int DEFAULT 0 NOT NULL,
    header varchar(255) NOT NULL,
    descr varchar(255) NOT NULL,
    PRIMARY KEY (productId, stepNum)
);

-- POPULATE
INSERT INTO 
    averages(productType, CO2, transport, water)
VALUES (
    ('tshirt',4.07, 32000, 15000)
);
INSERT INTO
    products(name, productType)
VALUES (
    ('Kortærmet T-shirt | Black/Royal Blue','tshirt')
);
INSERT INTO
    stepValues(productId, stepNum, CO2, transport, water)
VALUES (
    (1,1, 0.3, 3000,    0),
    (1,2, 0.4, 1000, 1050),
    (1,3, 0.3,    0, 5950),
    (1,4, 0.2,  200,    0),
    (1,5, 0.8, 7300,    0),
    (1,6, 0.1,  200,    0)
);
INSERT INTO
    stepDescriptions(productId, stepNum, header, descr)
VALUES (
    (1,1, 'Flaske','T-shirten er produceret af 115 gram bomuldsrester og 3 plastikflasker. Hvert år ender millioner af plastikflasker i verdenshavene. Nogle af disse flasker indsamler vi og fragter dem med tog til vores fabrik i Shanghai.'),
    (1,2, 'Plastgranulat og bomulsrester','Flaskerne nedbrydes til plastikgranulat og omdannes til garn. Derudover bruges garn lavet af kasserede bomuldsprodukter fra Beijing. Vi arbejder på at flytte produktionen til Portugal, for at minimere transport.'),
    (1,3, 'Produktion af t-shirt','Når plastikgranulatet er blevet omdannet til garn kan t-shirten produceres. De to materialer vil I denne del af processen blive vævet sammen til den Despite t-shirt du kender.'),
    (1,4, 'Pakning af t-shirt','Vi får hang-tags leveret, som hænges på t-shirten. Vores tags er lavet af genbrugsplast og -papir. Når t-shirten har fået tags på, pakkes den i gennemsigtige plastikposer, hvilket er nødvendigt for at beskytte tøjet. '),
    (1,5, 'Transport til Danmark','Når tøjet er pakket, fragtes det i lastbil til stationen i Shanghai, hvor resten af turen foregår med tog til Danmark. Når tøjet ankommer til Danmark, bliver det fragtet med lastbil til vores lager i København.'),
    (1,6, 'Levering til dig','Når du bestiller pakker vi i en forsendelsespose, lavet af det bedste slags genbrugspapir. Ved at benytte disse poser, sparer vi miljøet for fældning af skov og den ressourcekrævende produktion af ny papirmasse.')
);