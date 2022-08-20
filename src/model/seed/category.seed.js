module.exports = async (categoryModel) => {
  return await categoryModel.bulkCreate([
    { name: "Novel" },
    { name: "Cergram" },
    { name: "Komik" },
    { name: "ensiklopedia" },
    { name: "nomik" },
    { name: "antologi" },
    { name: "dongeng" },
    { name: "biografi" },
    { name: "catatan Harian" },
    { name: "fotografi" },
    { name: "karya ilmiah" },
    { name: "tafsir" },
    { name: "kamus" },
    { name: "panduan" },
    { name: "atlas" },
    { name: "buku ilmiah" },
    { name: "buku teks" },
    { name: "majalah" },
  ]);
};
