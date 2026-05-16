export type QuestionType = 'choice' | 'true-false' | 'matching';

export interface BaseQuestion {
  id: number;
  type: QuestionType;
  question: string;
}

export interface ChoiceQuestion extends BaseQuestion {
  type: 'choice';
  options: string[];
  answer: string;
}

export interface TrueFalseStatement {
  id: string;
  text: string;
  answer: boolean;
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true-false';
  statements: TrueFalseStatement[];
}

export interface MatchingPair {
  left: string;
  right: string;
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'matching';
  pairs: MatchingPair[];
}

export type Question = ChoiceQuestion | TrueFalseQuestion | MatchingQuestion;

export interface Topic {
  id: string;
  title: string;
  questions: Question[];
}

export const BIOLOGY_DATA: Topic[] = [
  {
    id: 'bai-18',
    title: 'Bài 18: CHU KÌ TẾ BÀO',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: 'Chu kì tế bào là khoảng thời gian từ khi',
        options: [
          'tế bào được sinh ra cho đến khi tế bào lão hóa và chết đi.',
          'tế bào được sinh ra cho đến khi tế bào có khả năng phân chia để tạo tế bào con.',
          'tế bào bắt đầu phân chia cho đến khi hình thành nên hai tế bào con.',
          'tế bào được sinh ra, lớn lên và phân chia thành hai tế bào con.'
        ],
        answer: 'tế bào được sinh ra, lớn lên và phân chia thành hai tế bào con.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Chu kì tế bào bao gồm các pha theo trình tự là:',
        options: ['G1, G2, S, pha M.', 'G1, S, G2, pha M.', 'S, G1, G2, pha M.', 'G2, G1, S, pha M.'],
        answer: 'G1, S, G2, pha M.'
      },
      {
        id: 3,
        type: 'choice',
        question: 'Trong một chu kì tế bào thời gian dài nhất là:',
        options: ['Kì trung gian.', 'Kì đầu.', 'Kì giữa.', 'Kì cuối.'],
        answer: 'Kì trung gian.'
      },
      {
        id: 4,
        type: 'choice',
        question: 'Chu kì tế bào bao gồm các giai đoạn là:',
        options: [
          'giai đoạn chuẩn bị và kì trung gian',
          'giai đoạn chuẩn bị và giai đoạn phân chia tế bào',
          'Kì đầu, kì giữa, kì sau và kì cuối',
          'Pha M, kì đầu, kì giữa, kì sau và kì cuối'
        ],
        answer: 'giai đoạn chuẩn bị và giai đoạn phân chia tế bào'
      },
      {
        id: 5,
        type: 'choice',
        question: 'Trình tự các giai đoạn mà tế bào trải qua trong khoảng thời gian giữa hai lần phân chia liên tiếp được gọi là:',
        options: ['Quá trình phân bào.', 'Chu kì tế bào.', 'Phát triển tế bào.', 'Phân chia tế bào.'],
        answer: 'Chu kì tế bào.'
      },
      {
        id: 6,
        type: 'choice',
        question: 'Tế bào nào ở người có thời gian chu kì tế bào ngắn nhất?',
        options: ['Tế bào ruột.', 'Tế bào gan.', 'Tế bào phôi.', 'Tế bào cơ.'],
        answer: 'Tế bào phôi.'
      },
      {
        id: 7,
        type: 'true-false',
        question: 'Mỗi nhận định sau đây là Đúng hay Sai khi nói về ung thư?',
        statements: [
          { id: 'a', text: 'Ung thư liên quan đến việc tăng sinh tế bào một cách mất kiểm soát.', answer: true },
          { id: 'b', text: 'Di căn là hiện tượng các tế bào ung thư có khả năng xâm lấn sang những mô kế cận hoặc di chuyển đến những bộ phận khác trong cơ thể.', answer: true },
          { id: 'c', text: 'Mục tiêu điều trị ung thư là ngăn ngừa và loại bỏ khối u.', answer: true },
          { id: 'd', text: 'Ung thư tuyệt đối không chữa trị được.', answer: false }
        ]
      },
      {
        id: 8,
        type: 'true-false',
        question: 'Mỗi nhận định sau đây là Đúng hay Sai khi nói về chu kì tế bào?',
        statements: [
          { id: 'a', text: 'Chu kì tế bào là thời gian từ lúc tế bào sinh ra đến khi tế bào chết đi.', answer: false },
          { id: 'b', text: 'Kết thúc mỗi chu kì tế bào, từ một tế bào mẹ tạo ra vô số tế bào con.', answer: false },
          { id: 'c', text: 'Thời gian của chu kì tế bào là thời gian của các giai đoạn trong chu kì tế bào.', answer: true },
          { id: 'd', text: 'Chu kì tế bào diễn ra khác nhau ở sinh vật nhân sơ và sinh vật nhân thực.', answer: true }
        ]
      },
      {
        id: 9,
        type: 'true-false',
        question: 'Mỗi nhận định sau đây là Đúng hay Sai khi nói về sự kiểm soát chu kì tế bào?',
        statements: [
          { id: 'a', text: 'Khi phát hiện sai sót, sự kiểm soát sẽ chặn chu kì tế bào tại điểm kiểm soát.', answer: true },
          { id: 'b', text: 'Nếu sai hỏng không được khắc phục, điểm kiểm soát sẽ kích hoạt cơ chế tự hủy của tế bào.', answer: true },
          { id: 'c', text: 'Nếu sự kiểm soát chu kì tế bào tốt, chúng sẽ tạo ra khối u lành tính.', answer: false },
          { id: 'd', text: 'Nếu sai hỏng quá lớn, sự kiểm soát sẽ bị phá hủy để tiến hành giai đoạn tiếp theo.', answer: false }
        ]
      }
    ]
  },
  {
    id: 'bai-19',
    title: 'Bài 19: QUÁ TRÌNH PHÂN BÀO',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: 'Một tế bào sinh dục giảm phân vào kì giữa của giảm phân I thấy có 96 sợi cromatit. Kết thúc giảm phân tạo các giao tử, trong mỗi tế bào giao tử có số NST là:',
        options: ['24.', '48.', '36.', '12.'],
        answer: '24.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Từng NST kép tách nhau ở tâm động thành 2 NST đơn phân li về 2 cực của tế bào. NST bắt đầu tháo xoắn. Quá trình này là ở kì nào của nguyên phân?',
        options: ['Kì đầu.', 'Kì giữa.', 'Kì sau.', 'Kì cuối.'],
        answer: 'Kì sau.'
      },
      {
        id: 3,
        type: 'choice',
        question: 'Ở kì giữa của quá trình nguyên phân, các NST kép xếp thành mấy hàng trên mặt phẳng xích đạo?',
        options: ['1 hàng.', '2 hàng.', '3 hàng.', '4 hàng.'],
        answer: '1 hàng.'
      },
      {
        id: 4,
        type: 'choice',
        question: 'Kì giữa I của giảm phân có hiện tượng',
        options: [
          'NST kép bắt cặp tương đồng, thoi phân bào hình thành, màng nhân và nhân con tiêu biến',
          'NST kép co xoắn cực đại, tập trung thành hai hàng ở mặt phẳng xích đạo của thoi phân bào',
          'NST kép co xoắn cực đại, tập trung thành một hàng ở mặt phẳng xích đạo của thoi phân bào',
          'Mỗi NST kép trong cặp NST kép tương đồng di chuyển theo thoi phân bào về 2 cực của TB'
        ],
        answer: 'NST kép co xoắn cực đại, tập trung thành hai hàng ở mặt phẳng xích đạo của thoi phân bào'
      },
      {
        id: 5,
        type: 'choice',
        question: 'Một tế bào có bộ nhiễm sắc thể 2n = 48 đang thực hiện quá trình nguyên phân. Quan sát dưới kính hiển vi thấy tế bào có 96 nhiễm sắc thể ở trạng thái đơn. Tế bào đang ở',
        options: ['kì đầu.', 'kì giữa.', 'kì sau.', 'kì cuối.'],
        answer: 'kì sau.'
      },
      {
        id: 6,
        type: 'choice',
        question: 'Một tế bào sinh dục đực, qua quá trình giảm phân tạo ra:',
        options: ['1 trứng và 3 thể định hướng', '4 tinh trùng', '4 loại giao tử', '4 trứng'],
        answer: '4 tinh trùng'
      },
      {
        id: 7,
        type: 'choice',
        question: 'Đặc điểm cơ bản nhất của giảm phân là:',
        options: [
          'Tế bào con có bộ NST giảm đi một nửa so với tế bào mẹ',
          '1 tế bào mẹ sinh ra 2 tế bào con',
          'Tế bào mẹ và tế bào con có bộ gen như nhau',
          '1 tế bào mẹ sinh ra 4 tế bào con'
        ],
        answer: 'Tế bào con có bộ NST giảm đi một nửa so với tế bào mẹ'
      },
      {
        id: 8,
        type: 'choice',
        question: 'Một nhóm tế bào sinh tinh tham gia quá trình giảm phân đã tạo ra 512 tinh trùng. Số tế bào sinh tinh là',
        options: ['16', '32', '64', '128'],
        answer: '128'
      },
      {
        id: 9,
        type: 'choice',
        question: 'Một tế bào có bộ NST 2n = 16, nguyên phân liên tiếp 3 lần. Tổng số tế bào con tạo ra là',
        options: ['32 tế bào', '12 tế bào', '8 tế bào', '6 tế bào'],
        answer: '8 tế bào'
      },
      {
        id: 10,
        type: 'choice',
        question: 'Một tế bào có bộ nhiễm sắc thể 2n = 8, thực hiện nguyên phân liên tiếp 3 lần. Số nhiễm sắc thể của số tế bào con tạo ra từ tế bào trên là:',
        options: ['16 NST', '32 NST', '48 NST', '64 NST'],
        answer: '64 NST'
      },
      {
        id: 11,
        type: 'choice',
        question: 'Một tế bào nguyên phân 5 lần liên tiếp thì tổng số tế bào con thu được là:',
        options: ['10', '20', '5', '32'],
        answer: '32'
      },
      {
        id: 12,
        type: 'matching',
        question: 'Dựa vào đặc điểm nhiễm sắc thể, hãy nối mỗi hình ảnh với kì tương ứng của quá trình nguyên phân, giảm phân. (Lưu ý: Quan sát hình ở đề cương)',
        pairs: [
          { left: 'Hình 1', right: 'Kì giữa của giảm phân I' },
          { left: 'Hình 2', right: 'Kì sau của giảm phân I' },
          { left: 'Hình 3', right: 'Kì sau của giảm phân II' },
          { left: 'Hình 4', right: 'Kì cuối của giảm phân II' }
        ]
      },
      {
        id: 13,
        type: 'true-false',
        question: 'Hình bên mô tả một giai đoạn phân bào của một tế bào nhân thực lưỡng bội. Biết rằng, 4 nhiễm sắc thể đơn trong mỗi nhóm có hình dạng, kích thước khác nhau. Những nhận định sau đây là đúng hay sai khi mô tả hình bên?',
        statements: [
          { id: 'A', text: 'Bộ NST của loài 2n = 4', answer: false },
          { id: 'B', text: 'Hình trên biểu diễn một giai đoạn của giảm phân II', answer: true },
          { id: 'C', text: 'Hình trên biểu diễn một tế bào đang ở kì sau nguyên phân', answer: false },
          { id: 'D', text: 'Quá trình phân bào này xảy ra ở tế bào thực vật', answer: false }
        ]
      }
    ]
  },
  {
    id: 'bai-21',
    title: 'Bài 21: CÔNG NGHỆ TẾ BÀO',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: 'Để nhân giống vô tính ở cây trồng, người ta thường sử dụng mô giống được lấy từ bộ phận nào của cây?',
        options: ['Đỉnh sinh trưởng.', 'bộ phận rễ.', 'bộ phận thân.', 'cành lá.'],
        answer: 'Đỉnh sinh trưởng.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Cừu Dolly là sản phẩm của phương pháp?',
        options: ['Gây đột biến.', 'Sinh sản hữu tính.', 'Nhân bản vô tính.', 'Biến dị tổ hợp.'],
        answer: 'Nhân bản vô tính.'
      },
      {
        id: 3,
        type: 'choice',
        question: 'Các nhóm cây nào sau đây có thể được nhân giống thành công nhờ nuôi cấy mô tế bào thực vật?',
        options: [
          'Cây ăn quả, cây cảnh, cây dược liệu, cây lấy gỗ',
          'Cây ăn quả, cây cảnh ngắn ngày, cây dược liệu',
          'Cây cảnh có giá trị cao, cây cảnh ngắn ngày, cây ăn quả',
          'Cây cảnh có giá trị cao, cây dược liệu, cây lấy gỗ'
        ],
        answer: 'Cây ăn quả, cây cảnh, cây dược liệu, cây lấy gỗ'
      },
      {
        id: 4,
        type: 'choice',
        question: 'Từ một cây hoa quý hiếm, bằng cách áp dụng kĩ thuật nào sau đây có thể nhanh chóng tạo ra nhiều cây có kiểu gene giống nhau và giống với cây hoa ban đầu?',
        options: ['Nuôi cấy hạt phấn.', 'Nuôi cấy mô.', 'Nuôi cấy noãn chưa thụ tinh.', 'Lai hữu tính.'],
        answer: 'Nuôi cấy mô.'
      },
      {
        id: 5,
        type: 'choice',
        question: 'Cừu Dolly được tạo nên từ nhân bản vô tính mang đặc điểm giống với',
        options: ['cừu cho nhân.', 'cừu cho trứng.', 'cừu cho nhân và cho trứng.', 'cừu mẹ.'],
        answer: 'cừu cho nhân.'
      },
      {
        id: 6,
        type: 'true-false',
        question: 'Khi nói về phương pháp cấy truyền phôi ở động vật. Mỗi nhận định sau đây là đúng hay sai?',
        statements: [
          { id: 'a', text: 'Từ một phôi ban đầu được phân cắt thành nhiều phôi sau đó cấy vào cơ quan sinh sản của những con cái khác nhau.', answer: true },
          { id: 'b', text: 'Các phôi được phân cắt trước khi cấy vào cơ quan sinh sản của các cá thể cái phải được nuôi dưỡng trong môi trường dinh dưỡng xác định.', answer: true },
          { id: 'c', text: 'Phối hợp hai hay nhiều phôi để tạo thành thể khảm hoặc làm biến đổi thành phần của phôi khi mới phát triển.', answer: true },
          { id: 'd', text: 'Tạo ra một số lượng lớn cá thể đực và cái trong thời gian ngắn từ 1 phôi ban đầu.', answer: false }
        ]
      },
      {
        id: 7,
        type: 'true-false',
        question: 'Mỗi nhận định sau là đúng hay sai khi nói về ưu điểm của việc ứng dụng nhân giống vô tính trong ống nghiệm ở cây trồng?',
        statements: [
          { id: 'a', text: 'Chủ động công việc tạo các giống cây trồng từ phòng thí nghiệm.', answer: false },
          { id: 'b', text: 'Tạo ra một số lượng cây giống sạch bệnh trong thời gian ngắn.', answer: true },
          { id: 'c', text: 'Giảm bớt được khâu bảo quản giống trước khi sản xuất.', answer: false },
          { id: 'd', text: 'Vận chuyển giống đi xa được dễ dàng khi sản xuất.', answer: false }
        ]
      },
      {
        id: 8,
        type: 'true-false',
        question: 'Cừu Dolly (05/07/1996) là động vật có vú đầu tiên được nhân bản vô tính trên thế giới. Khi nói về quá trình nhân bản trên, mỗi nhận định sau đây Đúng hay Sai về kỹ thuật này?',
        statements: [
          { id: 'A', text: 'Cừu (S) là cừu Dolly và tế bào Y là tế bào xoma.', answer: false },
          { id: 'B', text: 'Sản phẩm của bước 5 là hợp tử.', answer: true },
          { id: 'C', text: 'Bước 7 là chuyển gen vào cừu cái mang thai hộ', answer: false },
          { id: 'D', text: 'Tế bào X là tế bào tuyến vú.', answer: true }
        ]
      }
    ]
  },
  {
    id: 'bai-22',
    title: 'Bài 22: KHÁI QUÁT VỀ VI SINH VẬT',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: 'Vi sinh vật là những sinh vật có kích thước nhỏ,',
        options: [
          'có cấu trúc đơn bào, đa bào hay tập đoàn đơn bào',
          'chỉ có cấu trúc đơn bào',
          'có cấu trúc đơn bào hoặc đa bào',
          'có cấu trúc đơn bào hoặc tập đoàn đơn bào'
        ],
        answer: 'có cấu trúc đơn bào hoặc tập đoàn đơn bào'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Vi sinh vật không có đặc điểm nào sau đây?',
        options: [
          'có cấu trúc đơn bào (nhân sơ hoặc nhân thực)',
          'có mặt ở khắp mọi nơi',
          'hấp thụ và chuyển hóa chất dinh dưỡng nhanh',
          'có cấu trúc đa bào'
        ],
        answer: 'có cấu trúc đa bào'
      },
      {
        id: 3,
        type: 'choice',
        question: 'Vi sinh vật sinh trưởng và sinh sản rất nhanh vì chúng',
        options: [
          'có khả năng hấp thu và chuyển hóa nhanh các chất dinh dưỡng.',
          'có kích thước rất nhỏ bé.',
          'có thể tồn tại ở khắp mọi nơi, đặc biệt là trong cơ thể sinh vật.',
          'có cấu trúc đơn bào (nhân sơ hoặc nhân thực), một số khác là tập đoàn đơn bào.'
        ],
        answer: 'có khả năng hấp thu và chuyển hóa nhanh các chất dinh dưỡng.'
      },
      {
        id: 4,
        type: 'choice',
        question: 'Cho các phát biểu sau đây về đặc điểm của vi sinh vật:\n(1) Vi sinh vật là những sinh vật có kích thước nhỏ.\n(2) Tất cả vi sinh vật đều có cấu trúc đơn bào.\n(3) Vi sinh vật chỉ tồn tại được trong cơ thể sinh vật.\n(4) Vi sinh vật có khả năng hấp thụ và chuyển hóa nhanh các chất dinh dưỡng.\nTrong các phát biểu trên, có bao nhiêu phát biểu đúng?',
        options: ['1.', '2.', '3.', '4.'],
        answer: '2.'
      },
      {
        id: 5,
        type: 'choice',
        question: 'Cho các kiểu dinh dưỡng sau đây:\n(1) Quang tự dưỡng. (2) Hóa tự dưỡng. (3) Quang dị dưỡng. (4) Hóa dị dưỡng\nTrong kiểu dinh dưỡng trên, có bao nhiêu kiểu dinh dưỡng có ở vi sinh vật?',
        options: ['1.', '2.', '3.', '4.'],
        answer: '4.'
      },
      {
        id: 6,
        type: 'choice',
        question: 'Trùng roi xanh có kiểu dinh dưỡng là......... sử dụng nguồn năng lượng từ ánh sáng và nguồn carbon là CO₂. Cụm từ thích hợp điền vào chỗ trống là',
        options: ['Quang tự dưỡng.', 'Quang dị dưỡng.', 'Hóa tự dưỡng.', 'Hóa dị dưỡng.'],
        answer: 'Quang tự dưỡng.'
      },
      {
        id: 7,
        type: 'choice',
        question: 'Vi sinh vật sử dụng nguồn năng lượng từ chất vô cơ và nguồn carbon là CO₂ có kiểu dinh dưỡng nào sau đây?',
        options: ['Quang tự dưỡng.', 'Quang dị dưỡng.', 'Hóa tự dưỡng.', 'Hóa dị dưỡng.'],
        answer: 'Hóa tự dưỡng.'
      },
      {
        id: 8,
        type: 'choice',
        question: 'Nấm men là vi sinh vật có kiểu dinh dưỡng là......... sử dụng nguồn năng lượng từ chất hữu cơ và nguồn carbon là chất hữu cơ. Cụm từ thích hợp điền vào chỗ trống là',
        options: ['Quang tự dưỡng.', 'Quang dị dưỡng.', 'Hóa tự dưỡng.', 'Hóa dị dưỡng.'],
        answer: 'Hóa dị dưỡng.'
      },
      {
        id: 9,
        type: 'choice',
        question: 'Phương pháp nghiên cứu vi sinh vật nào sau đây dùng để nghiên cứu hình dạng, kích thước của một số nhóm vi sinh vật?',
        options: ['Phương pháp quan sát bằng kính hiển vi.', 'Phương pháp nuôi cấy.', 'Phương pháp phân lập vi sinh vật.', 'Phương pháp định danh vi khuẩn.'],
        answer: 'Phương pháp quan sát bằng kính hiển vi.'
      },
      {
        id: 10,
        type: 'choice',
        question: 'Người ta sử dụng phương pháp nuôi cấy vi sinh vật nhằm mục đích?',
        options: [
          'Nghiên cứu khả năng hoạt động hiếu khí, kị khí của vi sinh vật và sản phẩm của chúng tạo ra',
          'Nghiên cứu hình dạng, kích thước của một số nhóm vi sinh vật',
          'Tách riêng các vi khuẩn từ quần thể ban đầu tạo thành các dòng thuần để khảo sát',
          'Nghiên cứu cấu tạo bên trong của tế bào vi sinh vật'
        ],
        answer: 'Nghiên cứu khả năng hoạt động hiếu khí, kị khí của vi sinh vật và sản phẩm của chúng tạo ra'
      }
    ]
  },
  {
    id: 'bai-24',
    title: 'Bài 24: QUÁ TRÌNH TỔNG HỢP VÀ PHÂN GIẢI Ở VI SINH VẬT',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: 'Trong quá trình tổng hợp carbohydrate, các phân tử polysaccharide được tạo ra nhờ sự liên kết các phân tử glucose bằng liên kết',
        options: ['glycosid.', 'peptide.', 'ion.', 'liên kết hidro.'],
        answer: 'glycosid.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Con người đã sử dụng chủng vi sinh vật nào sau đây làm sữa chua, yaourt?',
        options: ['Tảo Chlorella', 'Tảo xoắn Spirulina', 'Vi khuẩn Lactic', 'Nấm men Saccharomyces cerevisiae'],
        answer: 'Vi khuẩn Lactic'
      },
      {
        id: 3,
        type: 'choice',
        question: 'Rượu, nước trái cây lên men là sản phẩm được tạo thành từ quá trình phân giải chất nào sau đây?',
        options: ['Tinh bột', 'Carbohydrate', 'Cellulose', 'Protein'],
        answer: 'Carbohydrate'
      },
      {
        id: 4,
        type: 'choice',
        question: 'Trong công nghiệp, con người đã sử dụng chủng vi sinh vật nào sau đây để sản xuất bột ngọt?',
        options: ['Tảo Chlorella', 'Tảo xoắn Spirulina', 'Vi khuẩn Corynebacterium glutamicum', 'Nấm men Saccharomyces cerevisiae'],
        answer: 'Vi khuẩn Corynebacterium glutamicum'
      },
      {
        id: 5,
        type: 'choice',
        question: 'Làm nước mắm từ cá là ứng dụng của quá trình phân giải chất hữu cơ nào sau đây?',
        options: ['Tinh bột', 'Protein', 'Cellulose', 'Lipid'],
        answer: 'Protein'
      },
      {
        id: 6,
        type: 'choice',
        question: 'Cho các phát biểu sau đây về vai trò của vi sinh vật:\n(1) Vi sinh vật có vai trò quan trọng trong tự nhiên và đời sống con người.\n(2) Vi sinh vật đóng vai trò quan trọng trong quá trình chuyển hóa vật chất trong tự nhiên.\n(3) Con người đã ứng dụng vi sinh vật vào nhiều lĩnh vực trong trong đời sống.\n(4) Con người đã ứng dụng vi sinh vật vào nhiều lĩnh vực trong trong sản xuất.\nTrong các phát biểu trên, có bao nhiêu phát biểu ĐÚNG?',
        options: ['1.', '2.', '3.', '4.'],
        answer: '4.'
      },
      {
        id: 7,
        type: 'true-false',
        question: 'Các phát biểu sau đây là Đúng hay Sai khi nói về quá trình lên men của vi sinh vật.',
        statements: [
          { id: 'a', text: 'Quá trình lên men thực chất là quá trình phân giải protein của vi sinh vật.', answer: false },
          { id: 'b', text: 'Trong quá trình lên men lactic có sự tham gia của nấm men rượu.', answer: false },
          { id: 'c', text: 'Quá trình lên men của vi khuẩn lactic đồng hình sinh ra nhiều chất hơn so với quá trình lên men của vi khuẩn lactic dị hình.', answer: false },
          { id: 'd', text: 'Sản phẩm chính yếu của quá trình lên men rượu là ethanol.', answer: true }
        ]
      }
    ]
  },
  {
    id: 'bai-25',
    title: 'Bài 25: SINH TRƯỞNG VÀ SINH SẢN Ở VI SINH VẬT',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: 'Sinh trưởng của vi sinh vật được hiểu là:',
        options: [
          'sự gia tăng khối lượng cá thể của vi sinh vật',
          'sự gia tăng số lượng tế bào của cơ thể sinh vật',
          'sự gia tăng số lượng cá thể của quần thể sinh vật',
          'sự gia tăng khối lượng và số lượng tế bào của quần thể sinh vật'
        ],
        answer: 'sự gia tăng số lượng cá thể của quần thể sinh vật'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Công thức tính tổng số tế bào sau n lần phân chia của vi sinh vật là?',
        options: ['N = No + 2n', 'N = No x 2n', 'N = No x n²', 'N = No x 2ⁿ'],
        answer: 'N = No x 2ⁿ'
      },
      {
        id: 3,
        type: 'choice',
        question: 'Vi khuẩn thích nghi với môi trường, tăng cường tiết enzym trao đổi chất, chuẩn bị phân chia xảy ra ở pha nào?',
        options: ['Lũy thừa.', 'Tiềm phát.', 'Cân bằng.', 'Suy vong.'],
        answer: 'Tiềm phát.'
      },
      {
        id: 4,
        type: 'choice',
        question: 'Số lượng vi khuẩn sinh ra bằng với số lượng vi khuẩn chết đi là đặc điểm của pha nào?',
        options: ['Lũy thừa.', 'Tiềm phát.', 'Cân bằng.', 'Suy vong.'],
        answer: 'Cân bằng.'
      },
      {
        id: 5,
        type: 'choice',
        question: 'Việc ức chế sự sinh trưởng của vi khuẩn trên một số loại rau, trái cây bằng cách ngâm nước muối có mối liên quan mật thiết đến nhân tố nào dưới đây?',
        options: ['Nhiệt độ.', 'Độ pH.', 'Áp suất thẩm thấu.', 'Ánh sáng.'],
        answer: 'Áp suất thẩm thấu.'
      }
    ]
  },
  {
    id: 'bai-26',
    title: 'Bài 26: CÔNG NGHỆ VI SINH VẬT',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: 'Cho các thành tựu sau đây:\n(1) Sử dụng vi khuẩn Corynebacterium glutamicum để sản xuất mì chính.\n(2) Sử dụng nấm mốc Aspergillus niger để sản xuất enzyme amylase, protease bổ sung vào thức ăn chăn nuôi.\n(3) Sử dụng nấm Penicillium chrysogenum để sản xuất kháng sinh penicillin.\n(4) Sử dụng vi khuẩn Lactococcus lactis để sản xuất phomat.\nTrong các thành tựu trên, số thành tựu của công nghệ vi sinh trong công nghiệp thực phẩm là',
        options: ['1.', '2.', '3.', '4.'],
        answer: '3.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Hiện nay trên thị trường, kháng sinh tự nhiên được sản xuất từ xạ khuẩn và nấm chiếm tỉ lệ khoảng',
        options: ['50%.', '70%.', '80%.', '90%.'],
        answer: '90%.'
      },
      {
        id: 3,
        type: 'choice',
        question: 'Lĩnh vực nào sau đây ít có sự liên quan đến công nghệ vi sinh vật?',
        options: ['Nông nghiệp.', 'Môi trường.', 'Công nghệ thực phẩm.', 'Công nghệ thông tin.'],
        answer: 'Công nghệ thông tin.'
      },
      {
        id: 4,
        type: 'choice',
        question: 'Sản xuất pin nhiên liệu vi sinh vật (microbial fuel cell) nhằm mục đích',
        options: [
          'tạo giống vi sinh vật mới.',
          'làm chỉ thị đánh giá nhanh nước thải.',
          'sản xuất năng lượng sinh học.',
          'bảo tồn các chủng vi sinh vật quý.'
        ],
        answer: 'làm chỉ thị đánh giá nhanh nước thải.'
      },
      {
        id: 5,
        type: 'choice',
        question: 'Sử dụng công nghệ Nano Bioreactor nhằm mục đích',
        options: ['sản xuất mĩ phẩm bảo vệ da.', 'bảo quản giống vi sinh vật.', 'xử lí nước thải.', 'tạo giống vi sinh vật mới.'],
        answer: 'xử lí nước thải.'
      },
      {
        id: 6,
        type: 'choice',
        question: 'Công nghệ vi sinh vật là',
        options: [
          'lĩnh vực nghiên cứu, ứng dụng vi sinh vật trong sản xuất, chế biến các sản phẩm phục vụ đời sống con người.',
          'lĩnh vực nghiên cứu, ứng dụng vi sinh vật trong sản xuất, chế biến các sản phẩm xử lí ô nhiễm môi trường.',
          'lĩnh vực nghiên cứu, ứng dụng vi sinh vật trong sản xuất, chế biến các sản phẩm thuốc chữa bệnh cho người và động vật.',
          'lĩnh vực nghiên cứu, ứng dụng vi sinh vật trong sản xuất, chế biến các loại đồ ăn, thức uống giàu giá trị dinh dưỡng.'
        ],
        answer: 'lĩnh vực nghiên cứu, ứng dụng vi sinh vật trong sản xuất, chế biến các sản phẩm phục vụ đời sống con người.'
      },
      {
        id: 7,
        type: 'choice',
        question: 'Cho các đặc điểm sau:\n(1) Có kích thước hiển vi.\n(2) Tốc độ trao đổi chất với môi trường nhanh.\n(3) Sinh trưởng và sinh sản nhanh.\n(4) Hình thức dinh dưỡng đa dạng.\nTrong số các đặc điểm trên, số đặc điểm là cơ sở khoa học của công nghệ vi sinh vật là',
        options: ['1.', '2.', '3.', '4.'],
        answer: '4.'
      },
      {
        id: 8,
        type: 'choice',
        question: 'Cơ sở khoa học của việc sử dụng vi sinh vật để sản xuất phân bón sinh học là một số vi sinh vật có khả năng',
        options: [
          'sinh trưởng nhanh giúp tăng sinh khối cho cây trồng.',
          'tiết chất độc diệt sâu, côn trùng gây hại cho cây trồng.',
          'tiết hoặc chuyển hóa các chất có lợi cho cây trồng.',
          'tiết enzyme giúp tăng tốc độ sinh sản cho cây trồng.'
        ],
        answer: 'tiết hoặc chuyển hóa các chất có lợi cho cây trồng.'
      },
      {
        id: 9,
        type: 'choice',
        question: 'Phát biểu nào sau đây là không đúng khi nói về phân bón vi sinh?',
        options: [
          'Phân bón vi sinh được tạo thành bằng cách phối trộn chế phẩm vi sinh vật với chất mang hoặc các chất hữu cơ.',
          'Phân bón vi sinh luôn chỉ chứa một chủng vi sinh vật có khả năng cố định đạm hoặc phân giải các chất hữu cơ, vô cơ khó hấp thụ.',
          'Một số loại phân bón vi sinh phổ biến hiện nay là phân vi sinh cố định đạm, phân vi sinh phân giải lân, phân vi sinh phân giải cellulose,...',
          'Phân bón vi sinh có nhiều ưu điểm nổi bật như đảm bảo an toàn cho đất, cây trồng, con người và môi trường.'
        ],
        answer: 'Phân bón vi sinh luôn chỉ chứa một chủng vi sinh vật có khả năng cố định đạm hoặc phân giải các chất hữu cơ, vô cơ khó hấp thụ.'
      },
      {
        id: 10,
        type: 'choice',
        question: 'Đâu không phải là ưu điểm của thuốc trừ sâu sinh học so với thuốc trừ sâu hóa học?',
        options: [
          'Cho hiệu quả diệt trừ sâu hại nhanh chóng.',
          'An toàn với sức khỏe con người và môi trường.',
          'Bảo vệ được sự cân bằng sinh học trong tự nhiên.',
          'Sản xuất khá đơn giản và có chi phí thấp.'
        ],
        answer: 'Cho hiệu quả diệt trừ sâu hại nhanh chóng.'
      },
      {
        id: 11,
        type: 'choice',
        question: 'Ngành nghề nào sau đây có liên quan đến công nghệ vi sinh vật nhiều hơn các ngành nghề còn lại?',
        options: ['Giáo viên.', 'Bác sĩ.', 'Nhà dịch tễ học.', 'Dược sĩ.'],
        answer: 'Nhà dịch tễ học.'
      },
      {
        id: 12,
        type: 'choice',
        question: 'Trong sản xuất tương, nấm mốc Aspergillus oryzae có vai trò',
        options: [
          'tiết acid lactic để làm đông tụ tinh bột và protein trong đậu tương',
          'tiết độc tố để ức chế sự phát triển của vi sinh vật gây thối hỏng tương',
          'tiết enzyme ngoại bào thủy phân tinh bột và protein trong đậu tương',
          'tiết chất kháng sinh để ức chế sự phát triển của vi sinh vật gây thối hỏng tương'
        ],
        answer: 'tiết chất kháng sinh để ức chế sự phát triển của vi sinh vật gây thối hỏng tương'
      },
      {
        id: 13,
        type: 'choice',
        question: 'Có bao nhiêu ứng dụng sau đây là ứng dụng của vi sinh vật trong thực tiễn?\n(1) Xử lí rác thải\n(2) Tổng hợp chất kháng sinh\n(3) Lên men sữa chua\n(4) Tạo ra máy đo đường huyết\n(5) Sản xuất thuốc trừ sâu sinh học',
        options: ['2', '3', '4', '5'],
        answer: '4'
      },
      {
        id: 14,
        type: 'choice',
        question: 'Con người chú trọng việc sử dụng thuốc trừ sâu vi sinh thay cho thuốc trừ sâu hóa học vì:',
        options: [
          'thuốc trừ sâu hóa học tiêu diệt sâu, bệnh trên diện tích rộng.',
          'thuốc trừ sâu hóa học thường có thời gian phân hủy kéo dài.',
          'thuốc trừ sâu hóa học có khả năng tiêu diệt nhanh sâu, bệnh.',
          'thuốc trừ sâu hóa học rất phức tạp trong khâu bảo quản.'
        ],
        answer: 'thuốc trừ sâu hóa học thường có thời gian phân hủy kéo dài.'
      },
      {
        id: 15,
        type: 'choice',
        question: 'Vì sao thuốc trừ sâu vi sinh ngày càng được ưa chuộng trong ngành nông nghiệp?',
        options: [
          'Bảo quản dễ dàng, thời gian sử dụng kéo dài.',
          'Thuốc phân hủy chậm nên độc lực kéo dài.',
          'Tiêu diệt sâu, bệnh hại nhanh chóng.',
          'An toàn với con người và các thiên địch có lợi.'
        ],
        answer: 'An toàn với con người và các thiên địch có lợi.'
      },
      {
        id: 16,
        type: 'choice',
        question: 'Nghề làm nước mắm truyền thống ở Phú Quốc, người ta không sử dụng trực tiếp enzyme protease. Giải thích nào sau đây phù hợp với việc chuyển hóa protein cá cơm thành nước mắm?',
        options: [
          'Các vi sinh vật có sẵn trong môi trường rơi vào phân giải protein cá.',
          'Các vi sinh vật trên da cá hay trong mang cá có enzyme phân giải protein cá.',
          'Protein của cá tự hòa tan vào nước mắm mà không cần vi sinh vật.',
          'Các vi sinh vật phân giải protein cá chủ yếu có trong ruột cá.'
        ],
        answer: 'Các vi sinh vật phân giải protein cá chủ yếu có trong ruột cá.'
      },
      {
        id: 17,
        type: 'true-false',
        question: 'Nhận định sau đây đúng/sai khi nói về thành tựu hiện đại của công nghệ gen?',
        statements: [
          { id: 'A', text: 'Liệu pháp gen là quá trình thay thế gen bị lỗi trong cơ thể bằng một gen khỏe mạnh nhằm chữa trị các bệnh di truyền.', answer: true },
          { id: 'B', text: 'Một trong những ứng dụng của công nghệ gen là phát triển các phương pháp xét nghiệm di truyền, giúp phát hiện sớm các bệnh di truyền.', answer: true },
          { id: 'C', text: 'Công nghệ gen chỉ được ứng dụng trong y học và không có ứng dụng trong nông nghiệp.', answer: false },
          { id: 'D', text: 'Dolly là con cừu đầu tiên được nhân bản vô tính thành công vào năm 1996. Kỹ thuật này bao gồm việc lấy nhân từ một tế bào cơ thể (tế bào somatic) và cấy vào một trứng đã loại bỏ nhân. Dolly đã mở ra một bước tiến lớn trong lĩnh vực sinh học phân tử và di truyền, dẫn đến nhiều nghiên cứu và ứng dụng mới trong nhân bản động vật và y học. Sự ra đời của Dolly cũng đặt ra nhiều câu hỏi về đạo đức và an toàn liên quan đến công nghệ nhân bản.', answer: true }
        ]
      },
      {
        id: 18,
        type: 'true-false',
        question: 'Nhận định sau đây đúng/sai khi nói về công nghệ gen và chuyển gen để sản xuất các chế phẩm sinh học?',
        statements: [
          { id: 'A', text: 'Công nghệ gen là quá trình chuyển các gen mong muốn từ sinh vật này sang sinh vật khác nhằm tạo ra các sinh vật biến đổi gen.', answer: true },
          { id: 'B', text: 'lasmid là đoạn DNA nhỏ, vòng và độc lập với nhiễm sắc thể của vi khuẩn, thường được sử dụng làm vector chuyển gen.', answer: true },
          { id: 'C', text: 'Trong công nghệ chuyển gen, gene mong muốn chỉ được cấy vào động vật, không thể cấy vào thực vật.', answer: false },
          { id: 'D', text: 'Công nghệ chuyển gen cho phép đưa các gen có khả năng kháng sâu bệnh từ một sinh vật khác (thường là từ vi khuẩn hoặc sinh vật khác có khả năng tự nhiên) vào cây trồng. Ví dụ, gen kháng sâu từ vi khuẩn Bacillus thuringiensis (Bt) đã được chuyển vào cây bông, ngô và khoai tây để giúp cây tự sản sinh ra protein độc đối với sâu hại nhưng an toàn cho người và động vật.', answer: true }
        ]
      }
    ]
  },
  {
    id: 'bai-27',
    title: 'Bài 27: ỨNG DỤNG VI SINH VẬT TRONG THỰC TIỄN',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: 'Xạ khuẩn (chi Streptomyces) được dùng sản xuất:',
        options: ['nước tương', 'phomat', 'kháng sinh', 'thuốc trừ sâu'],
        answer: 'kháng sinh'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Phương pháp sinh học hiếu khí (bùn hoạt tính) được sử dụng trong lĩnh vực nào?',
        options: [
          'Sản xuất nông nghiệp.',
          'Sản xuất công nghiệp đồ uống.',
          'Bảo quản thực phẩm.',
          'Bảo vệ môi trường.'
        ],
        answer: 'Bảo vệ môi trường.'
      },
      {
        id: 3,
        type: 'choice',
        question: 'Cho các đặc điểm sau:\n(1) Không gây độc cho người, động vật và cây trồng.\n(2) Có khả năng tiêu diệt một cách có chọn lọc các loại sâu bệnh.\n(3) Phổ độc hẹp.\n(4) Hiệu lực chậm.\nĐặc điểm nào là ưu điểm thuốc trừ sâu sinh học so với thuốc hóa học?',
        options: ['1,2.', '3,4.', '1,2,3.', '1,2,3,4.'],
        answer: '1,2.'
      },
      {
        id: 4,
        type: 'choice',
        question: 'Vi sinh vật nào sau đây được ứng dụng in công nghiệp thực phẩm?',
        options: ['Bacillus thuringiensis.', 'Penicillium chrysogenum.', 'Lactococcus lactic.', 'Saccharomyces cerevisiae.'],
        answer: 'Lactococcus lactic.'
      },
      {
        id: 5,
        type: 'choice',
        question: 'Trong thời gian ủ tương của quá trình làm nước tương, nấm mốc vàng hoa cau (Aspergillus oryzae) có vai trò:',
        options: [
          'tiết enzim tổng hợp tinh bột, protein',
          'tiết enzim thủy phân tinh bột, protein.',
          'tiết enzim chống vi sinh vật gây hại.',
          'lên men tổng hợp protein nước tương.'
        ],
        answer: 'tiết enzim thủy phân tinh bột, protein.'
      },
      {
        id: 6,
        type: 'choice',
        question: 'Dựa trên khả năng tự tổng hợp các chất cần thiết bằng cách sử dụng các enzyme và năng lượng nội bào của vi sinh vật, có thể ứng dụng vi sinh vật để',
        options: ['tổng hợp chất kháng sinh.', 'sản xuất nước mắm.', 'sản xuất sữa chua.', 'xử lí rác thải.'],
        answer: 'tổng hợp chất kháng sinh.'
      },
      {
        id: 7,
        type: 'choice',
        question: 'Chế phẩm Bacillus thuringiensis diệt côn trùng gây hại bằng cách nào?',
        options: [
          'Vi khuẩn Bacillus thuringiensis kí sinh và làm chết côn trùng.',
          'Các chất độc do vi khuẩn Bacillus thuringiensis tạo ra có khả năng diệt côn trùng.',
          'Vi khuẩn Bacillus thuringiensis ức chế quá trình sinh sản của côn trùng.',
          'Các enzyme do vi khuẩn Bacillus thuringiensis tạo ra có khả năng phá vỡ màng tế bào của côn trùng.'
        ],
        answer: 'Các chất độc do vi khuẩn Bacillus thuringiensis tạo ra có khả năng diệt côn trùng.'
      },
      {
        id: 8,
        type: 'choice',
        question: 'Xử lý nước thải là ứng dụng của công nghệ vi sinh vật trong',
        options: ['y học.', 'nông nghiệp.', 'bảo vệ môi trường.', 'sinh hoạt.'],
        answer: 'bảo vệ môi trường.'
      },
      {
        id: 9,
        type: 'choice',
        question: 'Thành tựu nào sau đây là ứng dụng của công nghệ vi sinh vật trong nông nghiệp?',
        options: ['Kháng sinh.', 'Dưa muối.', 'Nước tương.', 'Phân bón.'],
        answer: 'Phân bón.'
      },
      {
        id: 10,
        type: 'true-false',
        question: 'Mỗi nhận định sau là ĐÚNG hay SAI khi nói về phomat?',
        statements: [
          { id: 'a', text: 'Sữa làm phomat phải được tiệt trùng.', answer: false },
          { id: 'b', text: 'Chủng vi khuẩn được sử dụng là Lactococcus lactic.', answer: true },
          { id: 'c', text: 'Trong sữa thành phần được lên men tạo acid là đường lactose.', answer: true },
          { id: 'd', text: 'Việc chế biến sữa tươi thành phomat giúp cho việc bảo quản sữa được lâu hơn.', answer: true }
        ]
      }
    ]
  }
];
