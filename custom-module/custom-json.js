const path = require('path');
const fs = require('fs');

module.exports = (fileName) => {

    return {

        modelPath: path.resolve(__dirname, `../data/${fileName}.json`),

        allFile () {
            return JSON.parse(fs.readFileSync(this.modelPath, 'utf-8'))
        },

        writeFile (arr) {
        arr = JSON.stringify(arr, null, 1);
        fs.writeFileSync(this.modelPath, arr);
        },

        createId (arr) {
        let contador = 1;
        arr.forEach( (x) => {
           if (x.id == contador) { 
               contador++
            } 
        });
        return contador
        },

        createNewData (newData) {
        let allData = this.allFile();

        allData.sort( (a, b) => a.id - b.id );
 
        newData = {
            id: this.createId(allData),
            ...newData
        };

        allData = [...allData, newData];

        this.writeFile(allData)
        },

        findByID (id) {
             return this.allFile().find( data => data.id == id);
        },

        findBySomething (callback) {
            return this.allFile().find(callback)
        },

        filterBySomething (callback) {
            return this.allFile().filter(callback)
        },

        destroy (id) {
            
            let allData = this.allFile();

            allData.forEach ((elem, index) => {
                if(elem.id == id) {
                    allData.splice(index, 1)
                }
            });

            this.writeFile(allData);

        },

        update (id, newData) {
            let allData = this.allFile();

            allData = allData.map((data) =>
                 data.id == id  ? { id, ...newData }: data
            )

            this.writeFile(allData);
        }

    }
}