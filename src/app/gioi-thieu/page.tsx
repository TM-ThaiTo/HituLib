import './style.css';

const data = {
  id: 1,
  tieuDe: 'Giới thiệu chung',
  noiDung:
    '<p style="text-align:justify"><span style="font-size:18px">Trung tâm Thông tin - Thư viện được thiết kế một tòa nhà 2 tầng (Nhà C) có diện tích sử dụng 3.123 m2 bao gồm: Kho sách tiếng việt và kho sách Ngoại văn, khu vực đọc chuyên sâu của các chuyên ngành đào tạo (kho tài liệu môn học), kho luận văn/luận án/khoá luận tốt nghiệp, khu vực học tập chung với 500 chỗ ngồi riêng biệt theo mô hình không gian mở, khu vực nghiên cứu với hệ thống máy tính tra cứu tài liệu, truy cập cơ sở dữ liệu, khu vực đọc báo - tạp chí, 03 phòng hội thảo, 03 phòng học nhóm, 12&nbsp;máy tính phục vụ bạn đọc tra cứu và sử dụng tài liệu điện tử, 38 máy lạnh công suất lớn,&hellip; nhằm cung cấp không gian, dịch vụ và nguồn tài liệu học thuật phong phú phục vụ cho việc tự học, tự nghiên cứu, phát huy tính tích cực chủ động và sáng tạo trong học tập của người học.</span></p>\r\n\r\n<p style="text-align:center"><img alt="" src="../../Upload/Digital/images/GioithieuTv.png" /></p>\r\n\r\n<p style="text-align:justify"><span style="font-size:18px">Về nguồn tài liệu, hiện nay thư viện có đầy đủ sách, giáo trình, tài liệu tham khảo tiếng Việt và tiếng nước ngoài, bao gồm:</span></p>\r\n\r\n<p style="text-align:justify"><span style="font-size:18px">- Giáo trình, sách tham khảo, sách tiếng việt: 3.949 đầu sách tương đương 9.861 bản</span></p>\r\n\r\n<p style="text-align:justify"><span style="font-size:18px">- Giáo trình, sách tham khảo, sách nước ngoài: 1.941 đầu sách tương đương 6.348 bản</span></p>\r\n\r\n<p style="text-align:justify"><span style="font-size:18px">- Cơ sở dữ liệu trực tuyến&nbsp;đã mua quyền truy cập tại sachweb.com với hơn 2.400 ebook bao gồm các loại tài liệu đọc trực tuyến như: Giáo trình, kinh tế, văn hóa xã hôi&hellip;cùng với gần 20 nguồn tài nguyên truy cập mở thu thập từ các nguồn trong nước và trên thế giới.</span></p>\r\n\r\n<p style="text-align:justify"><span style="font-size:18px">Thư viện Trường Đại học Công nghệ Đồng Nai tăng cường hợp tác chia sẻ tài liệu với các cơ sở giáo dục và trung tâm thông tin &ndash; thư viện: Thư viện tỉnh Đồng Nai, Trường Đại học Mỏ - Địa chất Hà Nội, Trường Đại học Hùng Vương Phú Thọ, Trường Đại học Bình Dương, Trường Đại học Thủ Dầu Một, Trường Đại học Đông Á, Trường Đại học Y khoa Phạm Ngọc Thạch, Trường Đại học Nguyễn Tất Thành, Trường Đại học Nha Trang.</span></p>\r\n\r\n<p style="text-align:justify"><span style="font-size:18px">Ngoài ra Thư viện cũng là thành viên của Trung tâm Tri thức số: Kết nối thư viện số dùng chung - Đổi mới sáng tạo là &ldquo;TRUNG TÂM TRI THỨC SỐ&rdquo; đầu tiên của hệ thống giáo dục đại học Việt Nam cung cấp tri thức số cho Hệ tri thức Việt số hóa của Chính phủ. Tích hợp tri thức số khoa học quốc gia, khu vực và quốc tế, tối ưu hóa hệ tri thức số quốc gia.</span></p>\r\n\r\n<p style="text-align:justify"><span style="font-size:18px">Với việc ứng dụng công nghệ thông tin, hiện Thư viện đang sử dụng các phần mềm Quản lý Thư viện tích hợp CDS giúp quản lý bổ sung, biên mục, lưu thông, quản lý tài liệu điện tử, phân hệ quản lý tài nguyên môn học, báo tạp chí chuyên ngành và mục lục tra cứu công cộng trực tuyến thông qua cổng thông tin Thư viện số <a href="https://lib.dntu.edu.vn/"><span style="color:#0563c1">https://lib.dntu.edu.vn/</span></a><u><span style="color:#0563c1">.</span></u></span></p>\r\n\r\n<p style="text-align:center">&nbsp;</p>',
  ngayTao: '2023-10-20T15:39:34.883',
  trangThai: 1,
};

export default function GioiThieuPage() {
  return (
    <div className="max-w-screen-container mx-auto mt-8 px-4 sm:px-6 lg:px-8 2xl:px-0">
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{data.tieuDe}</h1>
        <p className="mt-2 text-sm text-gray-500">
          Ngày đăng: {new Date(data.ngayTao).toLocaleDateString('vi-VN')}
        </p>
        <hr className="my-4 border-gray-300" />
        <div
          className="prose max-w-none text-justify text-gray-800"
          dangerouslySetInnerHTML={{ __html: data.noiDung }}
        />
      </div>
    </div>
  );
}
