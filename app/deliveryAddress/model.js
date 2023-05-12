const { Schema, model } = require("mongoose");

const deliveryAddress = Schema(
  {
    name: {
      type: String,
      required: [true, "Nama alamat harus diisi"],
      maxlength: [255, "Panjang maksimal nama alamat adalah 25 karakter"],
    },
    kelurahan: {
      type: String,
      required: [true, "kelurahan harus diisi"],
      maxlength: [255, "Panjang maksimal kelurahan adalah 25 karakter"],
    },
    kecamatan: {
      type: String,
      required: [true, "kecamatan harus diisi"],
      maxlength: [255, "Panjang maksimal kecamatan adalah 25 karakter"],
    },
    kabupaten: {
      type: String,
      required: [true, "kabupaten harus diisi"],
      maxlength: [255, "Panjang maksimal kabupaten adalah 25 karakter"],
    },
    provinsi: {
      type: String,
      required: [true, "Provinsi harus diisi"],
      maxlength: [255, "Panjang maksimal provinsi adalah 25 karakter"],
    },
    detail: {
      type: String,
      required: [true, "Detail alamat harus diisi"],
      maxlength: [1000, "Panjang maksimal detail alamat adalah 1000 karakter"],
    },

    // relasi one to one dengan user
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = model("DeliveryAddress", deliveryAddress);
