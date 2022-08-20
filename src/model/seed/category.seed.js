module.exports = async (categoryModel)=>{

    return await categoryModel.bulkCreate([
         {name:'Novel'},
         {name:'Komik'},
         {name:'artikel'},
         {name:'nomik'},
         {name:'antologi'},
         {name:'dongeng'},
         {name:'biografi'},
         {name:'catatan Harian'},
         {name:'fotografi'},
         {name:'karya ilmiah'},
         {name:'tafsir'},
         {name:'kamus'},
         {name:'panduan'},
         {name:'buku ilmiah'},
         {name:'buku teks'},
         {name:'majalah'}
     ]);
 
 }
