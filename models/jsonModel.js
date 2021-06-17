const fs = require('fs');
const path = require('path');

module.exports = (archivo) => {

   const funciones = {
      path: path.join(__dirname, '..', 'data', archivo + '.json'),
      leerJson: function () {
         const dataJson = fs.readFileSync(this.path, 'utf-8');
         const data = JSON.parse(dataJson);
         return data;
      },

      escribirJson: function (data) {
         data = JSON.stringify(data, null, ' ')

         fs.writeFileSync(this.path, data);
      },

      guardarUno: function (newData) {
         // Leer todo el json
         let allData = this.leerJson();
         // Agregar la data
         allData = [...allData, newData];
         // Guarar la data
         this.escribirJson(allData)
      },

      findById: function (id) {
         const data = this.leerJson();
         const obj = data.find(function(elemento){
            return elemento.id == id;
         })

         return obj;
      },
      findBySomething: function (callback) {
         const data = this.leerJson();
         const dataFiltrada = data.find(callback);
         return dataFiltrada;
      },
      filterBySomething: function(callback){
         const data = this.leerJson();
         const dataFiltrada = data.filter(callback);
         return dataFiltrada;
      },
      edit: function(newData, id){
         
         let data = this.leerJson();
         // editar
         let newProduct = {
            id: id,
            ...newData
         }
         data = data.map(product => {
            
            if(product.id == id){
               newProduct = {
                  ...newProduct,
                  image: product.image
               }
               
               return newProduct;
            } else {
               return product;
            }
            
         })
         this.escribirJson(data);
        },
         createId: (arr) => {
         let contador = 1;
         arr.forEach( (x) => {
            if (x.id == contador) { 
                contador++
             } 
         });
         return contador
         }

   }

   return funciones;
}