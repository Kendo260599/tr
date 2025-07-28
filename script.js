
const birthData = {
  1992: {
    name: "Nhâm Thân",
    menhNguHanh: "Kiếm Phong Kim",
    quaiMenh: {
      nam: { cung: "Cấn", nguHanh: "Thổ", menh: "Tây Tứ Mệnh" },
      nu: { cung: "Đoài", nguHanh: "Kim", menh: "Tây Tứ Mệnh" }
    },
    huongTot: ["Tây", "Tây Bắc", "Tây Nam", "Đông Bắc"],
    huongXau: ["Đông", "Đông Nam", "Bắc", "Nam"]
  },
  1993: {
    name: "Quý Dậu",
    menhNguHanh: "Kiếm Phong Kim",
    quaiMenh: {
      nam: { cung: "Đoài", nguHanh: "Kim", menh: "Tây Tứ Mệnh" },
      nu: { cung: "Cấn", nguHanh: "Thổ", menh: "Tây Tứ Mệnh" }
    },
    huongTot: ["Tây", "Tây Bắc", "Tây Nam", "Đông Bắc"],
    huongXau: ["Đông", "Đông Nam", "Bắc", "Nam"]
  }
  // Thêm dữ liệu các năm khác tại đây
};

function getYearFromDate(dateStr) {
  const date = new Date(dateStr);
  return date.getFullYear();
}

function hienThiThongTinPhongThuy(namSinh, gioiTinh, houseYear, houseDirection) {
  const data = birthData[namSinh];
  if (!data) return `<p>⚠️ Chưa có dữ liệu phong thủy cho năm ${namSinh}</p>`;

  const info = data.quaiMenh[gioiTinh];

  const huongTot = data.huongTot.includes(houseDirection)
    ? `<span style="color:green">Hướng nhà hợp mệnh</span>`
    : `<span style="color:red">Hướng nhà không hợp mệnh</span>`;

  return `
    <h2>📌 Tư vấn phong thủy cho người sinh năm ${namSinh} – ${data.name}</h2>
    <ul>
      <li><strong>Mệnh ngũ hành:</strong> ${data.menhNguHanh}</li>
      <li><strong>Quái mệnh:</strong> ${info.cung} (${info.nguHanh}) – ${info.menh}</li>
      <li><strong>Hướng tốt:</strong> ${data.huongTot.join(", ")}</li>
      <li><strong>Hướng xấu:</strong> ${data.huongXau.join(", ")}</li>
      <li><strong>Hướng bạn chọn:</strong> ${houseDirection} → ${huongTot}</li>
    </ul>
  `;
}

document.getElementById("birthForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const birthday = document.getElementById("birthday").value;
  const gioiTinh = document.getElementById("gender").value;
  const houseYear = parseInt(document.getElementById("houseYear").value);
  const houseDirection = document.getElementById("houseDirection").value;
  const namSinh = getYearFromDate(birthday);

  const ketQua = hienThiThongTinPhongThuy(namSinh, gioiTinh, houseYear, houseDirection);

  document.getElementById("result").innerHTML = ketQua;
});
