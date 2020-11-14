var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hello typescript");
var hocvien1 = {
    hoTen: "Nguyen van Teo",
    lop: 'FE52',
    tuoi: 25
};
var hocvien2 = {
    hoTen: "Nguyen van Teo",
    lop: 'FE52',
};
// Opinal chaining
//data =[]
// data.hocVien = indefined
//data.hocVien.hoTen => error
// data && data.hocVien && data.hocVien.hoTen
//data?.hocVien?.hoTen
var diemToan = 0;
console.log(diemToan || 'N/A');
console.log(diemToan !== null && diemToan !== void 0 ? diemToan : 'N/A');
//=> ?? chi kiem tra gia tri null va undefined
//Class
var NhanVien = /** @class */ (function () {
    function NhanVien(hoTen, tuoi) {
        this.hoTen = hoTen;
        this.tuoi = tuoi;
    }
    NhanVien.prototype.tinhLuong = function () {
        return 1000;
    };
    return NhanVien;
}());
var GiamDoc = /** @class */ (function (_super) {
    __extends(GiamDoc, _super);
    function GiamDoc(hoTen, tuoi, heSoLuong) {
        var _this = _super.call(this, hoTen, tuoi) || this;
        _this.heSoLuong = heSoLuong;
        return _this;
    }
    GiamDoc.prototype.tinhLuong = function () {
        return _super.prototype.tinhLuong.call(this) * this.heSoLuong;
    };
    return GiamDoc;
}(NhanVien));
var giamDoc = new GiamDoc('Nguyen Van Teo', 25, 5);
console.log(giamDoc.tinhLuong());
