function NguoiDungService() {
    this.DSND = [];
    this.layDanhSachNguoiDung = function () {
        return $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type: "GET"
        })

    }
    this.themNguoiDung = function (nguoiDung) {
        $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            type: "POST",
            data: nguoiDung

        })
            .done(function (a) {
                if (a === "tai khoan da ton tai !") {
                    alert(a);
                } else {
                    location.href = "";
                }
            })
            .fail(function (b) {
                console.log(b);
            })

    }
    this.xoaNguoiDung = function (taiKhoan) {
        $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taiKhoan}`,
            type: "DELETE",

        })
            .done(function (result) {
                console.log(result);
            })
            .fail(function (err) {
                console.log(err);
            })
    }
    this.timKiemNguoiDung = function (chuoiTimKiem) {
        var mangTimKiem = []
        var dsnd = JSON.parse(localStorage.getItem("danhSachNguoiDung"));
        dsnd.map(function () {
            if (item.TaiKhoan.toLowerCase().indexOf(chuoiTimKiem.toLowerCase() > -1)) {
                mangTimKiem.push(item);
            }
        })
        return mangTimKiem;
    }
    this.layViTriNguoiDung = function (taiKhoan) {
        var danhSachNguoiDung = JSON.parse(localStorage.getItem("DanhSachNguoiDung"));
        var viTri;
        // danhSachNguoiDung.map(function (item) {
        //     if (item.TaiKhoan === taiKhoan) {
        //         viTri = index;
        //         return viTri;

        //     }

        // })
        return danhSachNguoiDung.findIndex(function(item){
            return item.TaiKhoan = taiKhoan;
        })
       

    }
    this.layThongTinNguoiDung = function(taiKhoan){
        var danhSachNguoiDung = JSON.parse(localStorage.getItem("DanhSachNguoiDung"));
      return  danhSachNguoiDung.find(function(item){
           return item.TaiKhoan === taiKhoan;
        })
    }
}

