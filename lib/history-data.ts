export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface Topic {
  id: string;
  title: string;
  questions: Question[];
}

export const HISTORY_DATA: Topic[] = [
  {
    id: 'topic-6',
    title: 'CHỦ ĐỀ 6: MỘT SỐ NỀN VĂN MINH TRÊN ĐẤT NƯỚC VIỆT NAM (TRƯỚC NĂM 1858)',
    questions: [
      {
        id: 1,
        question: 'Nhà nước đầu tiên được hình thành trên lãnh thổ Việt Nam có tên gọi là',
        options: ['Văn Lang', 'Lâm Ấp', 'Chăm pa', 'Phù Nam'],
        answer: 'Văn Lang'
      },
      {
        id: 2,
        question: 'Nền văn minh Văn Lang - Âu Lạc chủ yếu được hình thành trên lưu vực con sông nào sau đây?',
        options: ['Sông Hằng', 'Sông Ấn', 'Sông Hồng', 'Sông Nin'],
        answer: 'Sông Hồng'
      },
      {
        id: 3,
        question: 'Điều kiện tự nhiên nào sau đây tạo thuận lợi cho cư dân Văn Lang – Âu Lạc phát triển ngành nông nghiệp lúa nước?',
        options: ['Tài nguyên khoáng sản phong phú', 'Khí hậu khô hạn, lượng nhiệt lớn', 'Hệ thống đất phù sa màu mỡ', 'Tiếp giáp với các nền văn minh lớn'],
        answer: 'Hệ thống đất phù sa màu mỡ'
      },
      {
        id: 4,
        question: 'Văn minh Văn Lang – Âu Lạc được hình thành trên cơ sở của nền văn hóa nào sau đây?',
        options: ['Sa Huỳnh', 'Óc Eo', 'Đông Sơn', 'Sơn Vi'],
        answer: 'Đông Sơn'
      },
      {
        id: 5,
        question: 'Nhà nước nào sau đây ở Việt Nam ra đời vào khoảng thế ki VII TCN?',
        options: ['Văn Lang', 'Âu Lạc', 'Phù Nam', 'Đại Việt'],
        answer: 'Văn Lang'
      },
      {
        id: 6,
        question: 'Kinh đô của nhà nước Văn Lang đặt tại',
        options: ['Cổ Loa (Hà Nội)', 'Phong Châu (Phú Thọ)', 'Phú Xuân (Huế)', 'Quy Nhơn (Bình Định)'],
        answer: 'Phong Châu (Phú Thọ)'
      },
      {
        id: 7,
        question: 'Năm 208 TCN, nước Âu Lạc ra đời, đặt kinh đô tại',
        options: ['Đông Anh (Hà Nội)', 'Phong Châu (Phú Thọ)', 'Trà Kiệu (Quảng Nam)', 'Thoại Sơn (An Giang)'],
        answer: 'Đông Anh (Hà Nội)'
      },
      {
        id: 8,
        question: 'Đứng đầu nhà nước Văn Lang là Vua Hùng, giúp việc cho vua là',
        options: ['tể tướng', 'Lục bộ', 'Lạc hầu', 'đại hành khiển'],
        answer: 'Lạc hầu'
      },
      {
        id: 9,
        question: 'Bộ máy hành chính nhà nước dưới thời kì Văn Lang không tồn tại chức vụ nào sau đây?',
        options: ['Lạc hầu', 'Lạc tướng', 'Bồ chính', 'Thượng thư'],
        answer: 'Thượng thư'
      },
      {
        id: 10,
        question: 'Nhà nước nào sau đây là sự kế thừa và phát triển của nhà nước Văn Lang?',
        options: ['Âu Lạc', 'Lâm Ấp', 'Chămpa', 'Phù Nam'],
        answer: 'Âu Lạc'
      },
      {
        id: 11,
        question: 'Nội dung nào sau đây phản ánh đúng đặc điểm của bộ máy nhà nước Văn Lang - Âu Lạc?',
        options: ['Hoàn chỉnh, chặt chẽ', 'Đơn giản, sơ khai', 'Quan liêu, tập quyền', 'Phân quyền, pháp trị'],
        answer: 'Đơn giản, sơ khai'
      },
      {
        id: 12,
        question: 'Một trong những công trình kiến trúc tiêu biểu được xây dựng dưới thời kì nhà nước Âu Lạc là',
        options: ['chùa Một Cột', 'tháp Phổ Minh', 'thành Cổ Loa', 'kinh thành Huế'],
        answer: 'thành Cổ Loa'
      },
      {
        id: 13,
        question: 'Ngành kinh tế nào sau đây phát triển mạnh dưới thời kì Văn Lang – Âu Lạc?',
        options: ['Chế tạo máy', 'Đóng tàu biển', 'Trồng lúa nước', 'Làm giấy'],
        answer: 'Trồng lúa nước'
      },
      {
        id: 14,
        question: 'Ngành kinh tế chủ đạo của cư dân Văn Lang – Âu Lạc là',
        options: ['Công nghiệp khai khoáng', 'Buôn bán đường biển', 'Dịch vụ du lịch', 'Nông nghiệp lúa nước'],
        answer: 'Nông nghiệp lúa nước'
      },
      {
        id: 15,
        question: 'Hiện vật nào sau đây trở thành biểu tượng của nền văn minh Văn Lang - Âu Lạc?',
        options: ['Trống đồng Đông Sơn', 'Tượng Phật Đồng Dương', 'Phù điêu Khương Mỹ', 'Tiền đồng Óc Eo'],
        answer: 'Trống đồng Đông Sơn'
      }
    ]
  },
  {
    id: 'topic-7-cd',
    title: 'B. VĂN MINH CHĂM-PA, VĂN MINH PHÙ NAM',
    questions: [
      {
        id: 1,
        question: 'Nền văn minh cổ đại nào sau đây được hình thành trên khu vực miền Trung Việt Nam ngày nay?',
        options: ['Văn Lang', 'Âu Lạc', 'Chăm pa', 'Phù Nam'],
        answer: 'Chăm pa'
      },
      {
        id: 2,
        question: 'Nền văn minh Chăm – pa chủ yếu được hình thành trên lưu vực con sông nào sau đây?',
        options: ['Sông Mã', 'Sông Thu Bồn', 'Sông Hồng', 'Sông Mê Công'],
        answer: 'Sông Thu Bồn'
      },
      {
        id: 3,
        question: 'Văn minh Chăm – pa được hình thành trên cơ sở của nền văn hóa nào sau đây?',
        options: ['Sa Huỳnh', 'Óc Eo', 'Đông Sơn', 'Phùng Nguyên'],
        answer: 'Sa Huỳnh'
      },
      {
        id: 4,
        question: 'Văn hóa Ấn Độ ảnh hưởng sâu sắc đến văn minh Chăm – pa thông qua vai trò to lớn của tầng lớp',
        options: ['thợ thủ công', 'nông dân công xã', 'nô lệ', 'thương nhân'],
        answer: 'thương nhân'
      },
      {
        id: 5,
        question: 'Nhà nước cổ đại nào sau đây ở Việt Nam ra đời vào khoảng thế ki II?',
        options: ['Văn Lang', 'Âu Lạc', 'Phù Nam', 'Chăm - pa'],
        answer: 'Chăm - pa'
      },
      {
        id: 6,
        question: 'Trên cơ sở của văn hoá Sa Huỳnh, quốc gia cổ đại nào sau đây đã được hình thành trên lãnh thổ Việt Nam?',
        options: ['Văn lang', 'Âu Lạc', 'Chăm – pa', 'Phù Nam'],
        answer: 'Chăm – pa'
      },
      {
        id: 7,
        question: 'Dưới thời kì nhà nước Chăm – pa, ở cấp địa phương, cả nước được chia thành các',
        options: ['châu, huyện, làng', 'tỉnh, huyện, xã', 'tỉnh, huyện, làng', 'phủ, huyện, tổng'],
        answer: 'châu, huyện, làng'
      },
      {
        id: 8,
        question: 'Cư dân Chăm – pa đã tiếp thu tôn giáo nào sau đây từ đất nước Ấn Độ?',
        options: ['Hin – du giáo', 'Đạo giáo', 'Nho giáo', 'Thiên chúa giáo'],
        answer: 'Hin – du giáo'
      },
      {
        id: 9,
        question: 'Cư dân Chăm – pa đã sáng tạo ra chữ Chăm cổ trên cơ sở tiếp thu chữ viết nào sau đây?',
        options: ['Chữ Phạn', 'Chữ Hán', 'Chữ La-tinh', 'Chữ Nôm'],
        answer: 'Chữ Phạn'
      },
      {
        id: 10,
        question: 'Nền văn minh Phù Nam được hình thành trên lưu vực con sông nào sau đây?',
        options: ['Sông Cửu Long', 'Sông Thu Bồn', 'Sông Hồng', 'Sông Mã'],
        answer: 'Sông Cửu Long'
      },
      {
        id: 11,
        question: 'Văn minh Chămpa và văn minh Phù Nam đều chịu ảnh hưởng mạnh mẽ của văn minh',
        options: ['Trung Hoa', 'Ấn Độ', 'Ai Cập', 'Hy Lạp'],
        answer: 'Ấn Độ'
      }
    ]
  },
  {
    id: 'topic-dv',
    title: 'C. VĂN MINH ĐẠI VIỆT',
    questions: [
      {
        id: 1,
        question: 'Văn minh Đại Việt được phát triển trong điều kiện độc lập, tự chủ của quốc gia Đại Việt, với kinh đô chủ yếu là',
        options: ['Thăng Long (Hà Nội)', 'Phú Xuân (Huế)', 'Hoa Lư (Ninh Bình)', 'Thiên Trường (Nam Định)'],
        answer: 'Thăng Long (Hà Nội)'
      },
      {
        id: 2,
        question: 'Văn minh Đại Việt có nguồn gốc sâu xa từ',
        options: ['văn minh Chăm-pa', 'văn minh Phù Nam', 'văn minh Trung Hoa', 'văn minh Văn Lang – Âu Lạc'],
        answer: 'văn minh Văn Lang – Âu Lạc'
      },
      {
        id: 3,
        question: 'Người Việt đã tiếp thu có chọn lọc các thành tựu về thể chế chính trị, luật pháp từ nền văn minh nào sau đây?',
        options: ['Văn minh Ấn Độ', 'Văn minh Trung Hoa', 'Văn minh Ai Cập', 'Văn minh La Mã'],
        answer: 'Văn minh Trung Hoa'
      },
      {
        id: 4,
        question: 'Trong quá trình hình thành và phát triển, văn minh Đại Việt đã tiếp thu có chọn lọc tinh hoa văn minh từ bên ngoài, đặc biệt là văn minh',
        options: ['Trung Hoa', 'Pháp', 'Ả rập', 'Ai Cập'],
        answer: 'Trung Hoa'
      },
      {
        id: 5,
        question: 'Triều đại phong kiến nào sau đây gắn liền với quá trình định hình của văn minh Đại Việt trong thế ki X?',
        options: ['Đinh', 'Lý', 'Trần', 'Nguyễn'],
        answer: 'Đinh'
      },
      {
        id: 6,
        question: 'Năm 1010, Lý Công Uẩn quyết định dời đô từ Hoa Lư về',
        options: ['Cổ Loa', 'Tây Đô', 'Đại La', 'Phong Châu'],
        answer: 'Đại La'
      },
      {
        id: 7,
        question: 'Công trình kiến trúc nào dưới đây được coi là minh chứng cho sự phát triển rực rỡ của văn minh Đại Việt trên các lĩnh vực chính trị, kinh tế, văn hóa, giáo dục?',
        options: ['Hoàng thành Thăng Long (Hà Nội)', 'Thánh địa Mỹ Sơn (Quảng Nam)', 'Thành Cổ Loa (Hà Nội)', 'Thành nhà Hồ (Thanh Hóa)'],
        answer: 'Hoàng thành Thăng Long (Hà Nội)'
      },
      {
        id: 8,
        question: 'Từ thế kỉ XI – XV, văn minh Đại Việt phát triển mạnh mẽ và toàn diện gắn liền với các vương triều nào sau đây?',
        options: ['Lý, Trần, Hồ, Lê sơ', 'Khúc, Ngô, Đinh, Tiền Lê', 'Lý, Trần, Lê sơ, Mạc', 'Lê sơ, Tây Sơn, Nguyễn'],
        answer: 'Lý, Trần, Hồ, Lê sơ'
      },
      {
        id: 9,
        question: 'Các triều đại phong kiến ở Việt Nam đều theo thể chế chính trị nào sau đây?',
        options: ['Quân chủ chuyên chế', 'Quân chủ lập hiến', 'Dân chủ chủ nô', 'Dân chủ cộng hòa'],
        answer: 'Quân chủ chuyên chế'
      },
      {
        id: 10,
        question: 'Mô hình tổ chức bộ máy nhà nước của các triều đại phong kiến ở Việt Nam chịu ảnh hưởng sâu sắc của thiết chế chính trị',
        options: ['Ấn Độ', 'La Mã', 'Trung Hoa', 'Hi Lạp'],
        answer: 'Trung Hoa'
      },
      {
        id: 11,
        question: 'Bộ máy nhà nước quân chủ chuyên chế trung ương tập quyền của Đại Việt được hoàn chỉnh dưới triều đại nào sau đây?',
        options: ['Lê sơ', 'Tây Sơn', 'Tiền Lê', 'Tiền Lý'],
        answer: 'Lê sơ'
      },
      {
        id: 12,
        question: 'Trung tâm chính trị - văn hóa và đô thị lớn nhất Đại Việt trong các thế kỷ X-XV là',
        options: ['Phố Hiến', 'Thanh Hà', 'Thăng Long', 'Hội An'],
        answer: 'Thăng Long'
      },
      {
        id: 13,
        question: 'Bộ luật thành văn đầu tiên của Đại Việt là',
        options: ['Hình thư', 'Hình luật', 'Luật Hồng Đức', 'Luật Gia Long'],
        answer: 'Hình thư'
      },
      {
        id: 14,
        question: 'Năm 1230, vua Trần Thái Tông đã cho soạn bộ luật nào?',
        options: ['Hình thư', 'Hình luật', 'Luật Hồng Đức', 'Luật Gia Long'],
        answer: 'Hình luật'
      },
      {
        id: 15,
        question: 'Bộ luật nào dưới đây được ban hành dưới thời Lê sơ?',
        options: ['Hình thư', 'Hình luật', 'Luật Hồng Đức', 'Luật Gia Long'],
        answer: 'Luật Hồng Đức'
      },
      {
        id: 16,
        question: 'Bộ luật nào dưới đây được ban hành dưới thời Nguyễn?',
        options: ['Hình thư', 'Hình luật', 'Luật Hồng Đức', 'Luật Gia Long'],
        answer: 'Luật Gia Long'
      },
      {
        id: 17,
        question: 'Nông nghiệp là ngành kinh tế chủ đạo của cư dân Đại Việt với cây trồng chính là',
        options: ['lúa mì', 'đậu tương', 'lúa nước', 'ngô'],
        answer: 'lúa nước'
      },
      {
        id: 18,
        question: '"Lễ Tịch điền" được các vua thời Tiền Lê và Lý tổ chức hàng năm nhằm khuyến khích',
        options: ['sản xuất nông nghiệp', 'sản xuất thủ công nghiệp', 'bảo vệ, tôn tạo đê điều', 'sự phát triển của giáo dục'],
        answer: 'sản xuất nông nghiệp'
      },
      {
        id: 19,
        question: 'Nghề thủ công truyền thống nào sau đây được cư dân Đại Việt kế thừa và phát triển từ nền văn minh Văn Lang – Âu Lạc?',
        options: ['Sơn mài', 'Đúc đồng', 'Làm giấy', 'Làm đường'],
        answer: 'Đúc đồng'
      },
      {
        id: 20,
        question: 'An Nam tứ đại khí là một trong những thành tựu tiêu biểu của ngành kinh tế nào sau đây của cư dân Đại Việt?',
        options: ['Nông nghiệp', 'Thủ công nghiệp', 'Thương nghiệp', 'Hàng hải'],
        answer: 'Thủ công nghiệp'
      },
      {
        id: 21,
        question: 'Một trong những trung tâm buôn bán sầm uất, nhộn nhịp của cư dân Đại Việt ở Đàng Trong là',
        options: ['Thăng Long', 'Phố Hiến', 'Hội An', 'Vân Đồn'],
        answer: 'Hội An'
      },
      {
        id: 22,
        question: 'Ở Đại Việt, Phật giáo phát triển mạnh mẽ nhất dưới thời kì nào?',
        options: ['Ngô - Đinh', 'Đinh - Tiền Lê', 'Lý - Trần', 'Lê - Nguyễn'],
        answer: 'Lý - Trần'
      },
      {
        id: 23,
        question: 'Cuối thế kỉ XIV – đầu thế kỉ XV, Hồ Nguyên Trừng đã chế tạo thành công',
        options: ['súng trường', 'đại bác', 'súng thần cơ', 'tàu chiến'],
        answer: 'súng thần cơ'
      },
      {
        id: 24,
        question: 'Một trong những công trình kiến trúc tiêu biểu của nước ta dưới thời kì văn minh Đại Việt là',
        options: ['thành nhà Hồ', 'Thánh địa Mỹ Sơn', 'Thành Cổ Loa', 'dinh Độc lập'],
        answer: 'thành nhà Hồ'
      }
    ]
  },
  {
    id: 'topic-7',
    title: 'CHỦ ĐỀ 7: CÁC DÂN TỘC TRÊN ĐẤT NƯỚC VIỆT NAM',
    questions: [
      {
        id: 1,
        question: 'Căn cứ vào tiêu chí phân chia nhóm các dân tộc ở Việt Nam, dân tộc Kinh thuộc nhóm',
        options: ['dân tộc đa số', 'dân tộc thiểu số', 'dân tộc vùng thấp', 'dân tộc vùng đồng bằng'],
        answer: 'dân tộc đa số'
      },
      {
        id: 2,
        question: 'Căn cứ vào tiêu chí nào dưới đây để phân chia nhóm các dân tộc ở Việt Nam?',
        options: ['Dân số của các dân tộc trên phạm vi lãnh thổ', 'Thời gian xuất hiện của dân tộc đầu tiên', 'Thành tích đấu tranh chống giặc ngoại xâm', 'Không gian địa lí trên phạm vi lãnh thổ'],
        answer: 'Dân số của các dân tộc trên phạm vi lãnh thổ'
      },
      {
        id: 3,
        question: 'Theo đặc điểm để xếp các dân tộc vào cùng một ngữ hệ ở Việt Nam, dân tộc Kinh thuộc ngữ hệ nào dưới đây?',
        options: ['Ngữ hệ Nam Á', 'Ngữ hệ Bắc Á', 'Ngữ hệ Đông Á', 'Ngữ hệ Tây Á'],
        answer: 'Ngữ hệ Nam Á'
      },
      {
        id: 4,
        question: 'Hoạt động sản xuất chính trong nông nghiệp của dân tộc Kinh ở Việt Nam là',
        options: ['trồng lúa nước', 'trồng cây lúa mì', 'trồng cây lúa mạch', 'trồng cây lúa nương'],
        answer: 'trồng lúa nước'
      },
      {
        id: 5,
        question: 'Đâu không phải là Ngữ hệ hiện nay 54 dân tộc Việt Nam sử dụng?',
        options: ['Ngữ hệ Indo-Arya', 'Ngữ hệ Nam Đảo', 'Ngữ hệ Nam Á', 'Ngữ hệ Hán-Tạng'],
        answer: 'Ngữ hệ Indo-Arya'
      },
      {
        id: 6,
        question: 'Người Khơ-me và người Chăm cùng canh tác lúa nước ở đâu?',
        options: ['Đồng bằng sông Cửu Long', 'Đồng bằng sông Hồng', 'Đồng bằng duyên hải miền Trung', 'Các sườn núi ở Tây Nguyên'],
        answer: 'Đồng bằng sông Cửu Long'
      },
      {
        id: 7,
        question: 'Canh tác lúa nước là hoạt động kinh tế chính của tộc ở Việt Nam?',
        options: ['Kinh', 'Thái', 'Chăm', 'Mường'],
        answer: 'Kinh'
      },
      {
        id: 8,
        question: 'Những nghề thủ công ra đời sớm, phát triển mạnh ở hầu hết các dân tộc ở nước ta là',
        options: ['nghề dệt và nghề đan', 'nghề rèn, đúc và nghề mộc', 'nghề gốm và nghề rèn đúc', 'nghề gốm và làm đồ trang sức'],
        answer: 'nghề dệt và nghề đan'
      },
      {
        id: 9,
        question: 'Lễ hội của tộc người thiểu số ở nước ta chủ yếu được tổ chức với quy mô',
        options: ['từng làng/bản và tộc người', 'nhiều làng/bản hay cả khu vực', 'tập trung ở các đô thị lớn', 'theo từng dòng họ ruột thịt'],
        answer: 'từng làng/bản và tộc người'
      },
      {
        id: 10,
        question: 'Tín ngưỡng tôn giáo sau đây được người Việt tiếp thu từ bên ngoài?',
        options: ['Thờ Phật', 'Thờ anh hùng dân tộc', 'Thờ ông Thành hoàng', 'Thờ cúng tổ tiên'],
        answer: 'Thờ Phật'
      }
    ]
  },
  {
    id: 'topic-doanket',
    title: 'KHỐI ĐẠI ĐOÀN KẾT DÂN TỘC TRONG LỊCH SỬ VIỆT NAM',
    questions: [
      {
        id: 1,
        question: 'Khối đoàn kết dân tộc Việt Nam đã được hình thành từ khi nào?',
        options: ['Từ thời dựng nước Văn Lang – Âu Lạc', 'Từ khi thắng lợi 1000 năm Bắc thuộc', 'Từ khi giành được nền độc lập tự chủ', 'Từ khi giặc phương Bắc sang xâm lược'],
        answer: 'Từ thời dựng nước Văn Lang – Âu Lạc'
      },
      {
        id: 2,
        question: 'Một trong những cơ sở hình thành khối đại đoàn kết dân tộc Việt Nam là từ yêu cầu',
        options: ['giúp đỡ, chia sẻ nhau trong trong cuộc sống', 'tập hợp lực lượng đấu tranh chống ngoại xâm', 'tập hợp chống thú dữ khi cuộc sống còn sơ khai', 'chế tạo công cụ lao động trong sinh hoạt hàng ngày'],
        answer: 'tập hợp lực lượng đấu tranh chống ngoại xâm'
      },
      {
        id: 3,
        question: 'Nhân tố nào sau đây quyết định thắng lợi của sự nghiệp giải phóng dân tộc, xây dựng phát triển, bảo vệ tổ quốc hiện nay?',
        options: ['Truyền thống yêu nước nồng nàn của nhân dân Việt Nam', 'Sự liên kết chặt chẽ của các dân tộc trên đất nước Việt Nam', 'Khối đại đoàn kết dân tộc ngày càng được củng cố và mở rộng', 'Ý thức xây dựng của toàn dân tham gia đấu tranh để bảo vệ Tổ quốc'],
        answer: 'Khối đại đoàn kết dân tộc ngày càng được củng cố và mở rộng'
      },
      {
        id: 4,
        question: 'Khối Đại đoàn kết các dân tộc Việt Nam được thể hiện tập trung trong Mặt trận nào sau đây?',
        options: ['Mặt trận nhân dân thống nhất Việt Nam', 'Mặt trận dân chủ thống nhất Việt Nam', 'Mặt trận dân tộc dân chủ Việt Nam', 'Mặt trận dân tộc thống nhất Việt Nam'],
        answer: 'Mặt trận dân tộc thống nhất Việt Nam'
      },
      {
        id: 5,
        question: 'Trong lịch sử dựng nước và giữ nước của Việt Nam, khối Đại đoàn kết dân tộc có vai trò như thế nào?',
        options: ['Rất quan trọng', 'Đặc biệt quan trọng', 'Tương đối quan trọng', 'Tương đối đặc biệt'],
        answer: 'Đặc biệt quan trọng'
      },
      {
        id: 6,
        question: 'Nhân tố quan trọng nào sau đây quyết định sự thành công của các cuộc đấu tranh chống ngoại xâm của dân tộc Việt Nam trong lịch sử?',
        options: ['Khối Đại đoàn kết dân tộc', 'Tinh thần đấu tranh anh dũng', 'Nghệ thuật quân sự độc đáo', 'Sự lãnh đạo tài tình, sáng suốt'],
        answer: 'Khối Đại đoàn kết dân tộc'
      },
      {
        id: 7,
        question: 'Nội dung nào sau đây phản ánh đúng quan điểm của Đảng và Nhà nước Việt Nam trong công tác dân tộc và chính sách dân tộc?',
        options: ['Kêu gọi toàn dân tham gia vào Mặt trận dân tộc', 'Nghiêm cấm mọi hoạt động tín ngưỡng, tôn giáo', 'Để ra chủ trương chính sách hoạt động tôn giáo', 'Để ra chủ trương chính sách phù hợp từng thời kỳ'],
        answer: 'Để ra chủ trương chính sách phù hợp từng thời kỳ'
      },
      {
        id: 8,
        question: 'Nội dung nào sau đây phản ánh đúng quan điểm của Đảng và Nhà nước Việt Nam trong công tác dân tộc và chính sách dân tộc?',
        options: ['Kêu gọi toàn dân tham gia vào Mặt trận dân tộc', 'Nghiêm cấm mọi hoạt động tín ngưỡng, tôn giáo', 'Để ra chủ trương chính sách phù hợp từng vùng miền', 'Để ra chủ trương chính sách hoạt động tôn giáo'],
        answer: 'Để ra chủ trương chính sách phù hợp từng vùng miền'
      },
      {
        id: 9,
        question: 'Nội dung nào sau đây phản ánh đúng quan điểm của Đảng và Nhà nước Việt Nam trong công tác dân tộc và chính sách dân tộc?',
        options: ['Kêu gọi toàn dân tham gia vào Mặt trận dân tộc', 'Nghiêm cấm mọi hoạt động tín ngưỡng, tôn giáo', 'Để ra chủ trương chính sách phù hợp từng địa phương', 'Để ra chủ trương chính sách hoạt động tôn giáo'],
        answer: 'Để ra chủ trương chính sách phù hợp từng địa phương'
      },
      {
        id: 10,
        question: 'Nội dung nào sau đây phản ánh đúng quan điểm của Đảng và Nhà nước Việt Nam trong công tác dân tộc và chính sách dân tộc?',
        options: ['Kêu gọi toàn dân tham gia vào Mặt trận dân tộc', 'Để ra chủ trương chính sách phù hợp từng dân tộc', 'Để ra chủ trương chính sách hoạt động tôn giáo', 'Nghiêm cấm mọi hoạt động tín ngưỡng, tôn giáo'],
        answer: 'Để ra chủ trương chính sách phù hợp từng dân tộc'
      },
      {
        id: 11,
        question: 'Nguyên tắc nào sau đây là quan điểm của Đảng Cộng Sản Việt Nam trong việc xây dựng và phát triển khối Đại đoàn kết dân tộc?',
        options: ['Đoàn kết, bình đẳng và tương trợ cùng phát triển', 'Bình đẳng, hợp tác và giúp đỡ nhau cùng phát triển', 'Đoàn kết, giúp đỡ nhau để vượt qua mọi khó khăn', 'Hợp tác, tương trợ và giúp đỡ nhau trong cuộc sống'],
        answer: 'Đoàn kết, bình đẳng và tương trợ cùng phát triển'
      },
      {
        id: 12,
        question: 'Yếu tố nào sau đây không phải là cơ sở hình thành khối đoàn kết dân tộc Việt Nam?',
        options: ['Yêu cầu trị thủy để phục vụ sản xuất nông nghiệp', 'Yêu cầu làm thủy lợi phục vụ sản xuất nông nghiệp', 'Yêu cầu tập hợp lực lượng chống giặc ngoại xâm', 'Yêu cầu hợp tác và giúp đỡ nhau trong cuộc sống'],
        answer: 'Yêu cầu hợp tác và giúp đỡ nhau trong cuộc sống'
      },
      {
        id: 13,
        question: 'Sức mạnh nào góp phần quyết định giúp dân tộc Việt Nam giành được những thắng lợi lớn trong công cuộc chống ngoại xâm?',
        options: ['Nghệ thuật quân sự độc đáo', 'Khối Đại đoàn kết dân tộc', 'Tinh thần đấu tranh anh dũng', 'Truyền thống yêu nước'],
        answer: 'Khối Đại đoàn kết dân tộc'
      },
      {
        id: 14,
        question: 'Truyền thuyết nào sau đây chứng minh khối Đại đoàn kết dân tộc Việt Nam đã có từ thuở bình minh lịch sử?',
        options: ['Con Rồng Cháu Tiên', 'Bánh Trưng, Bánh Dày', 'Sự tích Trầu Cau', 'Sơn Tinh Thủy Tinh'],
        answer: 'Con Rồng Cháu Tiên'
      },
      {
        id: 15,
        question: 'Ngày nay trong sự nghiệp phát triển kinh tế, văn hóa và giữ gìn ổn định xã hội, bảo vệ toàn vẹn lãnh thổ và chủ quyền quốc gia, khối Đại đoàn kết dân tộc có vai trò gì?',
        options: ['Cùng cố an ninh quốc phòng', 'Bảo vệ chủ quyền quốc gia', 'Huy động sức mạnh toàn dân tộc', 'Chống lại các thế lực thù địch'],
        answer: 'Huy động sức mạnh toàn dân tộc'
      },
      {
        id: 16,
        question: 'Nội dung nào sau đây được quán triệt trong toàn Đảng, toàn quân, toàn dân nhằm xây dựng khối Đại đoàn kết dân tộc?',
        options: ['Bình đẳng, hợp tác và giúp đỡ nhau cùng phát triển', 'Đoàn kết, giúp đỡ nhau để vượt qua mọi khó khăn', 'Hợp tác, tương trợ và giúp đỡ nhau trong cuộc sống', 'Đoàn kết, bình đẳng và tương trợ cùng phát triển'],
        answer: 'Đoàn kết, bình đẳng và tương trợ cùng phát triển'
      },
      {
        id: 17,
        question: 'Nội dung nào sau đây không đúng quan điểm của Đảng và Nhà nước trong công tác dân tộc và chính sách dân tộc?',
        options: ['Để ra chủ trương chính sách phù hợp từng vùng miền', 'Để ra chủ trương chính sách phù hợp từng địa phương', 'Để ra chủ trương chính sách phù hợp từng dân tộc', 'Để ra chủ trương chính sách phù hợp từng đơn vị'],
        answer: 'Để ra chủ trương chính sách phù hợp từng đơn vị'
      },
      {
        id: 18,
        question: 'Tính toàn diện trong chính sách dân tộc của Nhà nước Việt Nam hiện nay được thể hiện trên các lĩnh vực nào sau đây?',
        options: ['Chính trị, quân sự, văn hóa, an sinh xã hội', 'Kinh tế, văn hóa, xã hội, an ninh quốc phòng', 'Kinh tế, chính trị, xã hội, an ninh quốc phòng', 'Chính trị, văn hóa, giáo dục, an ninh quốc phòng'],
        answer: 'Kinh tế, văn hóa, xã hội, an ninh quốc phòng'
      },
      {
        id: 19,
        question: 'Nhà nước chủ trương phát triển kinh tế miền núi, vùng dân tộc thiểu số để khắc phục vấn đề nào sau đây?',
        options: ['Chênh lệch giữa các vùng, các dân tộc', 'Tình trạng thiếu lương thực, thực phẩm', 'Tình trạng lạc hậu về khoa học kỹ thuật', 'Cơ sở hạ tầng phát triển không đồng bộ'],
        answer: 'Chênh lệch giữa các vùng, các dân tộc'
      },
      {
        id: 20,
        question: 'Yếu nào sau đây là nội dung bao trùm trong chính sách văn hóa dân tộc của Đảng và Nhà nước Việt Nam hiện nay?',
        options: ['Xây dựng nền văn hóa theo từng đặc điểm của vùng miền', 'Xây dựng nền văn hóa tiên tiến đậm đà bản sắc dân tộc', 'Xây dựng nền văn hóa trên nền tảng dân tộc Kinh', 'Xây dựng nền văn hóa hài hòa trên nền tảng nhiều dân tộc'],
        answer: 'Xây dựng nền văn hóa tiên tiến đậm đà bản sắc dân tộc'
      }
    ]
  }
];
