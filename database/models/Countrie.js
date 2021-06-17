module.exports = (sequelize, dataTypes ) => {
    const alias = "Countries";
    const cols = {
        name: dataTypes.STRING,
        Banderas: dataTypes.STRING,
        Idioma: dataTypes.STRING,
        GastoAlimento:dataTypes.STRING,
        GastoTrasporte: dataTypes.STRING,
        GastoVivienda: dataTypes.STRING,
        Industrias: dataTypes.STRING,
        Desempleo: dataTypes.INTEGER,
        SalarioMinimo: dataTypes.INTEGER,
        SalarioMedio: dataTypes.INTEGER,
        TipoDeVisado: dataTypes.STRING,
        ServiciosPublicos: dataTypes.STRING,
        PromClima: dataTypes.INTEGER,
        AltoClima: dataTypes.INTEGER,
        BajoClima: dataTypes.INTEGER,
        PBI: dataTypes.INTEGER,
        PBIperCapital: dataTypes.INTEGER,
        Inflacion: dataTypes.INTEGER,
   
        
    }
    const Countrie = sequelize.define(alias, cols);


    return Countrie;
}