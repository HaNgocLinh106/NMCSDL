const mongoose = require('mongoose');

var BacSi = mongoose.model('BacSi', {
    MaBacSi: { type: String },
    TenBacSi: { type: String },
    SDT: { type: Number },
    GioiThieuChung: { type: String },
    ChiPhiTuVan: { type: Number },
    ChucVi: { type: String },
    Khoa: { type: String },
    PhongKham: { type: String }
});

module.exports = { BacSi };