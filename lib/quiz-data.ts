export type QuestionType = 'choice' | 'true-false' | 'matching' | 'input';

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

export interface InputQuestion extends BaseQuestion {
  type: 'input';
  answer: string | string[];
  hint?: string;
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

export type Question = ChoiceQuestion | TrueFalseQuestion | MatchingQuestion | InputQuestion;

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
  },
  {
    id: 'bai-29',
    title: 'Bài 29: VIRUS',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: 'Đặc điểm nào sau đây không đúng với virus?',
        options: [
          'Có kích thước siêu nhỏ (khoảng 20 – 300 nm).',
          'Có cấu tạo tế bào mặc dù còn rất đơn giản.',
          'Có vật chất di truyền là DNA hoặc RNA.',
          'Chỉ có thể nhân lên trong tế bào vật chủ'
        ],
        answer: 'Có cấu tạo tế bào mặc dù còn rất đơn giản.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Phát biểu nào sau đây đúng khi nói về sự khác nhau của virus và vi khuẩn?',
        options: [
          'Virus không nhất thiết phải sống kí sinh nội bào bắt buộc còn vi khuẩn phải sống kí sinh nội bào bắt buộc.',
          'Virus không có hệ thống sinh năng lượng còn vi khuẩn thì có hệ thống sinh năng lượng.',
          'Virus có hiện tượng sinh trưởng và nhân lên còn vi khuẩn thì không có hiện tượng sinh trưởng và nhân lên.',
          'Virus có thể mẫn cảm với các chất kháng sinh còn vi khuẩn thì không mẫn cảm với các chất kháng sinh.'
        ],
        answer: 'Virus không có hệ thống sinh năng lượng còn vi khuẩn thì có hệ thống sinh năng lượng.'
      },
      {
        id: 3,
        type: 'choice',
        question: 'Tại sao virus không thể nuôi trong môi trường tổng hợp như vi khuẩn?',
        options: [
          'Vì virus có kích thước rất nhỏ.',
          'Vì virus có vật chất di truyền là RNA.',
          'Vì virus sống kí sinh nội bào bắt buộc.',
          'Vì virus không mẫn cảm với chất kháng sinh.'
        ],
        answer: 'Vì virus sống kí sinh nội bào bắt buộc.'
      },
      {
        id: 4,
        type: 'choice',
        question: 'Thành phần cơ bản của virus là',
        options: [
          'Vỏ capsid và lõi nucleic acid.',
          'Vỏ capsid và vỏ ngoài.',
          'Vỏ ngoài và lõi nucleic acid.',
          'Lõi nucleic acid và gai glycoprotein.'
        ],
        answer: 'Vỏ capsid và lõi nucleic acid.'
      },
      {
        id: 5,
        type: 'choice',
        question: 'Quan sát hình ảnh mô tả cấu tạo của virus dưới đây. Thành phần cấu tạo gồm các số 1, 2, 3, 4 theo thứ tự lần lượt là',
        options: [
          'Vỏ capsid, vỏ ngoài, lõi nucleic acid, gai glycoprotein.',
          'Vỏ ngoài, vỏ capsid, lõi nucleic acid, gai glycoprotein.',
          'Vỏ capsid, gai glycoprotein, lõi nucleic acid, vỏ ngoài.',
          'Gai glycoprotein, vỏ capsid, lõi nucleic acid, vỏ ngoài.'
        ],
        answer: 'Vỏ ngoài, vỏ capsid, lõi nucleic acid, gai glycoprotein.'
      },
      {
        id: 6,
        type: 'choice',
        question: 'Các đơn vị cấu tạo nên vỏ capsid của virus là',
        options: ['Capsomer.', 'Glycoprotein.', 'Glycerol.', 'Nucleotide.'],
        answer: 'Capsomer.'
      },
      {
        id: 7,
        type: 'choice',
        question: 'Cho các chức năng sau:\n(1) Nhận diện tế bào vật chủ để xâm nhập.\n(2) Bảo vệ virus khỏi hệ thống miễn dịch của tế bào vật chủ.\n(3) Giúp virus bám vào tế bào vật chủ.\n(4) Giúp virus nhân lên nhanh chóng.\nLớp vỏ ngoài của virus đảm nhận số chức năng là',
        options: ['1.', '2.', '3.', '4.'],
        answer: '2.'
      },
      {
        id: 8,
        type: 'choice',
        question: 'Franken và Conrat đã tiến hành thí nghiệm tách lõi RNA ra khỏi vỏ protein của hai chủng virus A và B. Sau đó, tiến hành lấy lõi nucleic acid của chủng A kết hợp với vỏ capsid của chủng B để tạo thành virus lai. Nhiễm chủng virus lai vào cây thuốc lá thì cây sẽ bị bệnh. Theo lí thuyết, khi tiến hành phân lập từ lá cây bị bệnh sẽ thu được virus có cấu tạo gồm',
        options: [
          'Lõi nucleic acid của chủng A và vỏ capsid của chủng B.',
          'Lõi nucleic acid của chủng B và vỏ capsid of chủng A.',
          'Lõi nucleic acid of chủng A và vỏ capsid of chủng A.',
          'Lõi nucleic acid of chủng B và vỏ capsid of chủng B.'
        ],
        answer: 'Lõi nucleic acid of chủng A và vỏ capsid of chủng A.'
      },
      {
        id: 9,
        type: 'choice',
        question: 'Cho các tiêu chí sau:\n(1) Sự tồn tại của lớp vỏ ngoài\n(2) Sự sắp xếp của capsomer ở vỏ capsid\n(3) Loại vật chất di truyền\n(4) Loại vật chủ\nSố tiêu chí được sử dụng để phân loại virus là',
        options: ['1.', '2.', '3.', '4.'],
        answer: '4.'
      },
      {
        id: 10,
        type: 'choice',
        question: 'Virus có thể kí sinh ở bao nhiêu sinh vật trong các sinh vật sau đây?\n(1) Vi khuẩn | (2) Nấm | (3) Thực vật | (4) Động vật | (5) Người',
        options: ['2.', '3.', '4.', '5.'],
        answer: '5.'
      },
      {
        id: 11,
        type: 'choice',
        question: 'Trình tự các giai đoạn trong quá trình nhân lên của virus là',
        options: [
          'Xâm nhập → hấp phụ → tổng hợp → lắp ráp → phóng thích.',
          'Xâm nhập → hấp phụ → lắp ráp → tổng hợp → phóng thích.',
          'Hấp phụ → xâm nhập → lắp ráp → tổng hợp → phóng thích.',
          'Hấp phụ → xâm nhập → tổng hợp → lắp ráp → phóng thích.'
        ],
        answer: 'Hấp phụ → xâm nhập → tổng hợp → lắp ráp → phóng thích.'
      },
      {
        id: 12,
        type: 'choice',
        question: 'Cho các yếu tố sau:\n(1) Lượng virus\n(2) Tốc độ nhân lên và lây lan của virus\n(3) Tình trạng sức khỏe của vật chủ\n(4) Các bệnh nền của vật chủ\nTrong số các yếu tố trên, số yếu tố ảnh hưởng đến khả năng gây bệnh của virus là',
        options: ['1.', '2.', '3.', '4.'],
        answer: '4.'
      },
      {
        id: 13,
        type: 'true-false',
        question: 'Nhận định về phage sau đây là Đúng hay Sai?',
        statements: [
          { id: 'a', text: 'Phage xâm nhập vào bên trong tế bào nhờ vào sự dung hợp màng sinh chất với vỏ ngoài.', answer: false },
          { id: 'b', text: 'Phage xâm nhập toàn bộ thành phần cấu trúc vào bên trong tế bào vật chủ.', answer: false },
          { id: 'c', text: 'Phage kí sinh nội bào bắt buộc bên trong cơ thể người, động vật, thực vật và nấm.', answer: false },
          { id: 'd', text: 'Phage có cấu trúc hỗn hợp, vừa có cấu trúc xoắn vừa có cấu trúc khối.', answer: true }
        ]
      },
      {
        id: 14,
        type: 'true-false',
        question: 'Khi nói về ứng dụng của virus trong y học. Mỗi nhận định sau đây là Đúng hay Sai về ứng dụng này.',
        statements: [
          { id: 'a', text: 'Sản xuất vaccine để phòng các bệnh do virus gây ra.', answer: true },
          { id: 'b', text: 'Sản xuất chất interferon để chống virus, tuy nhiên interferon có tính đặc hiệu với virus.', answer: false },
          { id: 'c', text: 'Sản xuất hormone insulin để điều trị bệnh tiểu đường.', answer: true },
          { id: 'd', text: 'Sản xuất interferon để tăng cường khả năng miễn dịch cho cơ thể.', answer: true }
        ]
      }
    ]
  },
  {
    id: 'bai-30',
    title: 'Bài 30: ỨNG DỤNG CỦA VIRUS TRONG Y HỌC VÀ THỰC TIỄN',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: 'Chế phẩm sinh học nào sau đây được sản xuất nhờ virus?',
        options: ['Đệm lót sinh học.', 'Bio – EM.', 'Thuốc trừ sâu Bt.', 'Insulin.'],
        answer: 'Insulin.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Ưu điểm của chế phẩm được sản xuất nhờ ứng dụng virus là gì?',
        options: [
          '(1), (2).',
          '(1), (3).',
          '(2), (3).',
          '(2), (4).'
        ],
        answer: '(1), (3).'
      },
      {
        id: 3,
        type: 'choice',
        question: 'Dựa vào tính chất nào mà phage được dùng để làm vector trong sản xuất chế phẩm sinh học bằng công nghệ tái tổ hợp?',
        options: [
          'Một số phage, chứa các đoạn gene không thực sự quan trọng, nếu cắt bỏ và thay bởi một đoạn gene khác thì quá trình nhân lên của chúng không bị ảnh hưởng.',
          'Phage có hệ gene là các phân tử RNA, có thể vận chuyển bất cứ gen nào vào tế bào vi khuẩn và luôn có khả năng nhân lên rất nhanh.',
          'Một số phage chứa các DNA dạng vòng có thể mang gene mong muốn vào tế bào vi khuẩn và có khả năng nhân lên rất nhanh.',
          'Phage có hệ gene là các phân tử DNA đủ dài để có thể vận chuyển các gene mong muốn vào tế bào vi khuẩn mà không ảnh hưởng đến khả năng nhân lên của nó trong tế bào chủ.'
        ],
        answer: 'Một số phage, chứa các đoạn gene không thực sự quan trọng, nếu cắt bỏ và thay bởi một đoạn gene khác thì quá trình nhân lên của chúng không bị ảnh hưởng.'
      },
      {
        id: 4,
        type: 'choice',
        question: 'Hãy sắp xếp các bước của quy trình sản xuất chế phẩm sinh học bằng công nghệ tái tổ hợp sử dụng vector từ virus sao cho phù hợp.\n(1) Tạo vector virus tái tổ hợp.\n(2) Tiến hành nuôi vi khuẩn để thu sinh khối.\n(3) Biến nạp gene mong muốn vào cơ thể vi khuẩn.\n(4) Tách chiết sinh khối để thu chế phẩm.',
        options: [
          '(1), (2), (3), (4).',
          '(1), (2), (4), (3).',
          '(1), (3), (2), (4).',
          '(1), (3), (4), (2).'
        ],
        answer: '(1), (3), (2), (4).'
      },
      {
        id: 5,
        type: 'choice',
        question: 'Vì sao insulin được dùng để điều trị bệnh tiểu đường?',
        options: [
          'Vì insulin có khả năng kích thích làm cho glucose chuyển hóa thành glycogen dự trữ trong gan, cơ; làm chậm quá trình phân giải glycogen; ức chế chuyển hóa amino acid và glycerol thành glucose.',
          'Vì insulin có khả năng ức chế làm cho glucose chuyển hóa thành glycogen dự trữ trong gan, cơ; làm chậm quá trình phân giải glycogen; ức chế chuyển hóa amino acid và glycerol thành glucose.',
          'Vì insulin có khả năng ức chế làm cho glucose chuyển hóa thành glycogen dự trữ trong gan, cơ; làm tăng quá trình phân giải glycogen; ức chế chuyển hóa amino acid và glycerol thành glucose.',
          'Vì insulin có khả năng ức chế làm cho glucose chuyển hóa thành glycogen dự trữ trong gan, cơ; làm tăng quá trình phân giải glycogen; kích thích chuyển hóa amino acid và glycerol thành glucose.'
        ],
        answer: 'Vì insulin có khả năng kích thích làm cho glucose chuyển hóa thành glycogen dự trữ trong gan, cơ; làm chậm quá trình phân giải glycogen; ức chế chuyển hóa amino acid và glycerol thành glucose.'
      },
      {
        id: 6,
        type: 'choice',
        question: 'Phát biểu nào sau đây là đúng khi nói về vai trò của interferon trong việc giúp cơ thể chống lại virus?',
        options: [
          'Interferon có tính đặc hiệu với từng loại virus nhất định.',
          'Interferon có khả năng kích thích cơ thể sản xuất ra kháng thể chống lại virus.',
          'Interferon kích thích cơ thể tạo ra chất chống virus.',
          'Interferon có vai trò như kháng thể, có khả năng chống lại virus.'
        ],
        answer: 'Interferon kích thích cơ thể tạo ra chất chống virus.'
      },
      {
        id: 7,
        type: 'choice',
        question: 'Điểm khác biệt giữa Interferon và vaccine là gì?',
        options: [
          'Interferon là protein do tế bào sản xuất ra, còn vaccine là kháng nguyên đã bị làm yếu đi, có nguồn gốc từ virus hoặc vi khuẩn gây bệnh.',
          'Interferon là protein do hệ gene virus sản xuất ra, còn vaccine là virus hoặc vi khuẩn gây bệnh đã được làm yếu đi.',
          'Interferon là chất ức chế sự nhân lên của virus, còn vaccine có tác dụng kích thích cơ thể sản xuất kháng thể chống lại virus.',
          'Interferon có tính đặc hiệu with virus, còn vaccine không có tính đặc hiệu with virus.'
        ],
        answer: 'Interferon là protein do tế bào sản xuất ra, còn vaccine là kháng nguyên đã bị làm yếu đi, có nguồn gốc từ virus hoặc vi khuẩn gây bệnh.'
      },
      {
        id: 8,
        type: 'choice',
        question: 'Thuốc trừ sâu từ virus được sản xuất dựa trên cơ sở nào?',
        options: [
          'Một số loại virus mang gene kháng vi nấm gây bệnh cho cây trồng.',
          'Một số loại virus làm vector chuyển gene kháng bệnh cho cây trồng.',
          'Một số loại virus có khả năng tạo ra chất để tiêu diệt sâu hại cây trồng.',
          'Một số loại virus có khả năng xâm nhập và gây bệnh cho sâu hại cây trồng.'
        ],
        answer: 'Một số loại virus có khả năng xâm nhập và gây bệnh cho sâu hại cây trồng.'
      }
    ]
  },
  {
    id: 'bai-31',
    title: 'Bài 31: VIRUS GÂY BỆNH',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: 'Virus nào sau đây không lây qua đường hô hấp?',
        options: ['SARV-CoV-2.', 'Cúm.', 'Viêm gan B.', 'Lao phổi.'],
        answer: 'Viêm gan B.'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Sau khi xâm nhập vào tế bào vật chủ, virus có khả năng nhân lên......, phá vỡ tế bào, tiếp tục lan truyền sang phá vỡ các tế bào khác.',
        options: ['nhanh.', 'rất nhanh.', 'chậm.', 'tương đối nhanh.'],
        answer: 'rất nhanh.'
      },
      {
        id: 3,
        type: 'choice',
        question: 'Trong các phương thức sau, đâu không phải là phương thức lây truyền bệnh do virus ở người, động vật, thực vật?',
        options: ['Truyền ngang.', 'Truyền dọc.', 'Truyền từ cá thể này sang cá thể khác.', 'Truyền gián tiếp.'],
        answer: 'Truyền gián tiếp.'
      },
      {
        id: 4,
        type: 'choice',
        question: 'Virus không lây lan qua tiếp xúc trực tiếp theo con đường nào?',
        options: ['Dùng chung chén đĩa.', 'Qua gió.', 'Qua đường máu.', 'Qua vết cắn chó mèo.'],
        answer: 'Qua gió.'
      },
      {
        id: 5,
        type: 'choice',
        question: 'Trong các con đường sau, đâu không phải là con đường lây lan bằng phương thức truyền dọc đối với người và động vật?',
        options: ['Qua phấn hoa.', 'Qua vết cắn sâu bọ.', 'Qua hạt giống.', 'Qua nhân giống vô tính.'],
        answer: 'Qua vết cắn sâu bọ.'
      },
      {
        id: 6,
        type: 'choice',
        question: 'Để phòng chống virus lây qua đường hô hấp. Ta cần phải làm gì?',
        options: [
          'Không dùng chung bát đĩa, ly nước.',
          'Giữ gìn vệ sinh cá nhân.',
          'Tránh tiếp xúc với với các động vật truyền bệnh.',
          'Đeo khẩu trang khi đi ra đường.'
        ],
        answer: 'Đeo khẩu trang khi đi ra đường.'
      },
      {
        id: 7,
        type: 'choice',
        question: 'Người mẹ cần phải làm gì để phòng chống virus lây qua đường từ mẹ sang con?',
        options: [
          'Đeo khẩu trang khi chăm sóc con.',
          'Không để con bú sữa mẹ.',
          'Vẫn quyết định đẻ, khi biết mình có nguy cơ mắc bệnh truyền nhiễm.',
          'Tiêm vaccine đầy đủ trước khi mang thai.'
        ],
        answer: 'Tiêm vaccine đầy đủ trước khi mang thai.'
      },
      {
        id: 8,
        type: 'choice',
        question: 'HIV/AIDS lây lan qua bao nhiêu con đường?',
        options: ['2.', '3.', '4.', '5.'],
        answer: '3.'
      },
      {
        id: 9,
        type: 'choice',
        question: '"Nhức đầu, đau họng, sốt rét, sưng hạch. Bệnh lây qua đường hô hấp, nhân lên trong đường hô hấp sau đó tới máu và da". Đây là triệu chứng của nhiễm loại virus nào?',
        options: ['Cúm.', 'SARV-CoV.', 'Sởi Đức.', 'Viêm đường hô hấp cấp.'],
        answer: 'Sởi Đức.'
      },
      {
        id: 10,
        type: 'choice',
        question: 'Lợn sốt cao, bỏ ăn, lưỡi vận động, một số vùng da chuyển sang màu xanh tím, xuất huyết ở tai và bụng. Một thời gian sau lợn hôn mê và chết. Đây là triệu chứng của',
        options: ['Xuất huyết tiêu hóa.', 'Dịch tả lợn Châu Phi.', 'Bệnh đóng dấu lợn.', 'Cầu trùng ở lợn.'],
        answer: 'Dịch tả lợn Châu Phi.'
      },
      {
        id: 11,
        type: 'choice',
        question: 'Trong các bệnh sau bệnh nào do virus gây nên?',
        options: ['Sốt.', 'HIV.', 'Vàng da.', 'Tiêu chảy.'],
        answer: 'HIV.'
      },
      {
        id: 12,
        type: 'true-false',
        question: 'Hình bên mô tả một dịch bệnh do một loại virus cúm A trên gia cầm gây ra... Hãy cho biết phát biểu nhận định nào sau đây đúng hay sai',
        statements: [
          { id: 'a', text: 'Dịch bệnh này do virus cúm A H₅N₁ gây ra.', answer: true },
          { id: 'b', text: 'Kiểu gây bệnh của virus này là truyền ngang.', answer: true },
          { id: 'c', text: 'Virus này gây ra các bệnh nguy hiểm về hệ miễn dịch.', answer: false },
          { id: 'd', text: 'Vật trung gian truyền bệnh là gia cầm, gia súc.', answer: true }
        ]
      }
    ]
  }
];

export const ENGLISH_DATA: Topic[] = [
  {
    id: 'en-vocab',
    title: 'English: Vocabulary',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: "Lack of an education limits women's access _____ information and opportunities.",
        options: ['to', 'with', 'about', 'from'],
        answer: 'to'
      },
      {
        id: 2,
        type: 'choice',
        question: '_____ involves making sure that boys and girls have the same chances to learn and grow.',
        options: ['Job opportunity', 'Gender equality', 'Gender role', 'Physical strength'],
        answer: 'Gender equality'
      },
      {
        id: 3,
        type: 'choice',
        question: 'In the past, women were kept at home, limiting their opportunities and _____.',
        options: ['risks', 'pressure', 'fitness', 'rights'],
        answer: 'rights'
      },
      {
        id: 4,
        type: 'choice',
        question: 'In _____ learning, students may have class discussions, take online tests and submit homework online.',
        options: ['normal', 'blended', 'traditional', 'face-to-face'],
        answer: 'blended'
      },
      {
        id: 5,
        type: 'choice',
        question: 'ASEAN is a regional organization that _____ to promote economic and security cooperation among its members.',
        options: ['creates', 'aims', 'develops', 'promotes'],
        answer: 'aims'
      },
      {
        id: 6,
        type: 'choice',
        question: 'Foreign companies in Vietnam try to make products of higher quality at _____ prices.',
        options: ['essential', 'practical', 'active', 'competitive'],
        answer: 'competitive'
      },
      {
        id: 7,
        type: 'choice',
        question: 'Online education offers access for students facing geospatial barriers to traditional _____.',
        options: ['schedules', 'lessons', 'materials', 'classrooms'],
        answer: 'classrooms'
      },
      {
        id: 8,
        type: 'choice',
        question: 'Social _____ is the way students interact with each other, with their teachers, the environment they study in, and their materials.',
        options: ['instruction', 'distraction', 'interaction', 'communication'],
        answer: 'interaction'
      },
      {
        id: 9,
        type: 'choice',
        question: 'We are often asked to _____ for short presentations in class.',
        options: ['choose', 'prepare', 'watch', 'discuss'],
        answer: 'prepare'
      },
      {
        id: 10,
        type: 'choice',
        question: 'Air pollution is mainly caused by waste gases that _____ out of vehicles, machines, or factories.',
        options: ['come', 'lead', 'produce', 'run'],
        answer: 'come'
      },
      {
        id: 11,
        type: 'choice',
        question: 'The ice _____ in the Arctic sea region is a serious problem, and there are many dangers and risks associated with this.',
        options: ['flooding', 'burning', 'melting', 'rising'],
        answer: 'melting'
      },
      {
        id: 12,
        type: 'choice',
        question: 'Animals should be kept in their natural _____.',
        options: ['forests', 'areas', 'habitats', 'lands'],
        answer: 'habitats'
      },
      {
        id: 13,
        type: 'choice',
        question: 'There are many places for tourists to _____ the island.',
        options: ['explore', 'explain', 'explode', 'expand'],
        answer: 'explore'
      },
      {
        id: 14,
        type: 'choice',
        question: '_____ people are very friendly and welcoming to tourists.',
        options: ['Home', 'Inside', 'Foreign', 'Local'],
        answer: 'Local'
      },
      {
        id: 15,
        type: 'choice',
        question: '_____ tourism has a negative impact on the environment.',
        options: ['Mass', 'Massive', 'Eco-', 'Eco-friendly'],
        answer: 'Mass'
      },
      {
        id: 16,
        type: 'choice',
        question: 'Using digital devices in class can help students improve their _____ experience in many ways.',
        options: ['education', 'educational', 'educationally', 'educator'],
        answer: 'educational'
      },
      {
        id: 17,
        type: 'choice',
        question: 'The United Nations is an example of an international organization focused on _____.',
        options: ['growth level', 'member countries', 'peacekeeping activities', 'technical support'],
        answer: 'peacekeeping activities'
      },
      {
        id: 18,
        type: 'choice',
        question: 'There are many things for tourists to _____ on the island.',
        options: ['explore', 'explain', 'explode', 'expand'],
        answer: 'explore'
      },
      {
        id: 19,
        type: 'choice',
        question: '_____ tourism has a lot of negative impact on the environment.',
        options: ['Mass', 'Safe', 'Eco-', 'Eco-friendly'],
        answer: 'Mass'
      },
      {
        id: 20,
        type: 'choice',
        question: 'Ecotourists respect the local _____ by following the customs and traditions of the places they visit.',
        options: ['businesses', 'cultures', 'education', 'environment'],
        answer: 'cultures'
      },
      {
        id: 21,
        type: 'choice',
        question: '_____ learning combines classroom methods and e-lessons for diverse education.',
        options: ['Online', 'Traditional', 'Blended', 'Group'],
        answer: 'Blended'
      },
      {
        id: 22,
        type: 'choice',
        question: 'The _____ of a species depends on its ability to adapt to changes in its environment.',
        options: ['aspect', 'identification', 'movements', 'survival'],
        answer: 'survival'
      },
      {
        id: 23,
        type: 'choice',
        question: 'Tourists are encouraged not to throw any _____ during their hikes, which makes the environment cleaner.',
        options: ['wetsuit', 'herb', 'litter', 'scenery'],
        answer: 'litter'
      },
      {
        id: 24,
        type: 'choice',
        question: 'Visiting Cai Be _____ Market helps you explore the daily life of the people on Tien River.',
        options: ['Floating', 'Walking', 'Diving', 'Swimming'],
        answer: 'Floating'
      }
    ]
  },
  {
    id: 'en-grammar',
    title: 'English: Grammar',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: 'Action to stop domestic violence must _____ immediately.',
        options: ['take', 'took', 'be taken', 'be taking'],
        answer: 'be taken'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Assignment could _____ on the school platform.',
        options: ['uploaded', 'be uploaded', 'be uploading', 'upload'],
        answer: 'be uploaded'
      },
      {
        id: 3,
        type: 'choice',
        question: 'Girls _____ to get married before the age of 18.',
        options: ['should force', 'shouldn\'t force', 'should be forced', 'shouldn\'t be forced'],
        answer: 'shouldn\'t be forced'
      },
      {
        id: 4,
        type: 'choice',
        question: 'Landmark 81 is _____ building in HCM city.',
        options: ['higher', 'higher than', 'highest', 'the highest'],
        answer: 'the highest'
      },
      {
        id: 5,
        type: 'choice',
        question: 'The weather in the UK in the autumn is _____ the weather in Iceland.',
        options: ['warmer', 'warmer than', 'warmest', 'the warmest'],
        answer: 'warmer than'
      },
      {
        id: 6,
        type: 'choice',
        question: 'This is _____ film I have ever seen.',
        options: ['the most exciting', 'more exciting', 'most exciting', 'exciting than'],
        answer: 'the most exciting'
      },
      {
        id: 7,
        type: 'choice',
        question: 'Today, our country is _____ active on the international stage than it was in the past.',
        options: ['the most', 'the more', 'more', 'most'],
        answer: 'more'
      },
      {
        id: 8,
        type: 'choice',
        question: 'My friend _____ visited my class last week, is a famous singer.',
        options: ['who', 'which', 'that', 'whom'],
        answer: 'who'
      },
      {
        id: 9,
        type: 'choice',
        question: 'My car, _____ I bought last week, is eco-friendly.',
        options: ['that', 'which', 'who', 'whom'],
        answer: 'which'
      },
      {
        id: 10,
        type: 'choice',
        question: 'He is the man _____ sister is a vegetarian.',
        options: ['who', 'which', 'whose', 'that'],
        answer: 'whose'
      },
      {
        id: 11,
        type: 'choice',
        question: 'This is the greenhouse _____ they built last month.',
        options: ['who', 'which', 'whose', 'that'],
        answer: 'that'
      },
      {
        id: 12,
        type: 'choice',
        question: 'My mother, _____ everyone admires, is a famous teacher.',
        options: ['where', 'whom', 'which', 'whose'],
        answer: 'whom'
      },
      {
        id: 13,
        type: 'choice',
        question: 'The old building _____ is in front of my house fell down.',
        options: ['of which', 'which', 'whose', 'whom'],
        answer: 'which'
      },
      {
        id: 14,
        type: 'choice',
        question: 'Tom _____ that his mother was in hospital.',
        options: ['told me', 'told to me', 'said me', 'asked me'],
        answer: 'told me'
      },
      {
        id: 15,
        type: 'choice',
        question: 'Mai asked Quang _____.',
        options: ['when he will come back', 'when he would come back', 'when he comes back', 'when he is coming back'],
        answer: 'when he would come back'
      },
      {
        id: 16,
        type: 'choice',
        question: 'She told me that she _____ to me the Sunday before.',
        options: ['wrote', 'has written', 'was writing', 'had written'],
        answer: 'had written'
      },
      {
        id: 17,
        type: 'choice',
        question: 'Helen asked me _____ I would go to the cinema with her the following week.',
        options: ['if', 'where', 'when', 'what'],
        answer: 'if'
      },
      {
        id: 18,
        type: 'choice',
        question: 'They said that they had driven through the desert _____.',
        options: ['the previous day', 'tonight', 'today', 'the following day'],
        answer: 'the previous day'
      },
      {
        id: 19,
        type: 'choice',
        question: 'If you _____ a choice, which country would you visit?',
        options: ['have', 'had', 'have had', 'will have'],
        answer: 'had'
      },
      {
        id: 20,
        type: 'choice',
        question: 'If you _____ to be chosen for the job, you\'ll have to be experienced in the field.',
        options: ['want', 'wanted', 'have had', 'will have'],
        answer: 'want'
      },
      {
        id: 21,
        type: 'choice',
        question: 'You will become ill if you _____ working long hours every day.',
        options: ['keep', 'will keep', 'kept', 'would keep'],
        answer: 'keep'
      },
      {
        id: 22,
        type: 'choice',
        question: 'My friend would be disappointed if he _____ the truth.',
        options: ['knows', 'will know', 'knew', 'would know'],
        answer: 'knew'
      },
      {
        id: 23,
        type: 'choice',
        question: 'If my grandmother were in better health, she _____ my uncle in HCM City.',
        options: ['visits', 'will visit', 'visited', 'would visit'],
        answer: 'would visit'
      },
      {
        id: 24,
        type: 'choice',
        question: 'If doctors find effective treatments for the disease, many lives _____ saved.',
        options: ['are', 'will be', 'were', 'would be'],
        answer: 'will be'
      }
    ]
  },
  {
    id: 'en-writing',
    title: 'English: Writing',
    questions: [
      {
        id: 1,
        type: 'input',
        question: 'Combine: Nam plays soccer very well. He is only 14 years old.',
        answer: [
          'Nam, who is only 14 years old, plays soccer very well.',
          'Nam, who plays soccer very well, is only 14 years old.',
          'Nam, who is only 14 years old, is a very good soccer player.'
        ],
        hint: 'Use a relative pronoun'
      },
      {
        id: 2,
        type: 'input',
        question: 'Combine: The girl looked very upset. Her electronic dictionary is not working.',
        answer: [
          'The girl whose electronic dictionary is not working looked very upset.',
          'The girl whose electronic dictionary is not working appeared very upset.',
          'The girl, whose electronic dictionary is not working, looked very upset.'
        ],
        hint: 'Use a relative pronoun'
      },
      {
        id: 3,
        type: 'input',
        question: 'Combine: He was sitting on a chair. It was uncomfortable.',
        answer: [
          'He was sitting on a chair that was uncomfortable.',
          'He was sitting on a chair which was uncomfortable.',
          'The chair that he was sitting on was uncomfortable.',
          'The chair on which he was sitting was uncomfortable.'
        ],
        hint: 'Use a relative pronoun'
      },
      {
        id: 4,
        type: 'input',
        question: 'Combine: His grandmother had a great influence on his life. She was a hard-working woman.',
        answer: [
          'His grandmother, who was a hard-working woman, had a great influence on his life.',
          'His grandmother, who had a great influence on his life, was a hard-working woman.',
          'His grandmother, a hard-working woman, had a great influence on his life.',
          'His hard-working grandmother had a great influence on his life.'
        ],
        hint: 'Use a relative pronoun'
      },
      {
        id: 5,
        type: 'input',
        question: 'Passive: Local engineers will build a new hospital.',
        answer: [
          'A new hospital will be built by local engineers.',
          'A new hospital is going to be built by local engineers.',
          'A new hospital will be built.'
        ],
      },
      {
        id: 6,
        type: 'input',
        question: 'Passive: Mary may send a letter to my grandmother.',
        answer: [
          'A letter may be sent to my grandmother.',
          'A letter may be sent to my grandmother by Mary.',
          'My grandmother may be sent a letter by Mary.',
          'A letter might be sent to my grandmother by Mary.'
        ],
      },
      {
        id: 7,
        type: 'input',
        question: 'Passive: We must do the project before it\'s too late.',
        answer: [
          'The project must be done before it\'s too late.',
          'The project has to be done before it\'s too late.',
          'The project must be completed before it\'s too late.',
          'The project needs to be done before it\'s too late.'
        ],
      },
      {
        id: 8,
        type: 'input',
        question: 'Passive: Jane must type a letter to her.',
        answer: [
          'A letter must be typed to her.',
          'A letter must be typed by Jane for her.',
          'A letter has to be typed to her by Jane.',
          'A letter must be typed and sent to her by Jane.'
        ],
      },
      {
        id: 9,
        type: 'input',
        question: 'Rewrite: Nothing is more important than happiness.',
        answer: [
          'Happiness is the most important thing.',
          'Happiness is the most important thing in life.',
          'Happiness is more important than anything else.',
          'Nothing can be compared to the importance of happiness.'
        ],
      },
      {
        id: 10,
        type: 'input',
        question: 'Rewrite: No forest in the world is larger than Amazon.',
        answer: [
          'Amazon is the largest forest in the world.',
          'The Amazon is the largest forest in the world.',
          'Amazon is larger than any other forest in the world.',
          'No other forest in the world is as large as the Amazon.'
        ],
      },
      {
        id: 11,
        type: 'input',
        question: 'Rewrite: Imported goods are not as expensive as local goods.',
        answer: [
          'Local goods are more expensive than imported goods.',
          'Imported goods are cheaper than local goods.',
          'Local goods are not as cheap as imported goods.',
          'Imported goods are less expensive than local goods.'
        ],
      },
      {
        id: 12,
        type: 'input',
        question: 'Rewrite: The black car is cheaper than the red car.',
        answer: [
          'The red car is more expensive than the black car.',
          'The black car is not as expensive as the red car.',
          'The red car is not as cheap as the black car.',
          'The black car is less expensive than the red car.'
        ],
      },
      {
        id: 13,
        type: 'input',
        question: 'Rewrite: Hurry up or, we will be late for work.',
        answer: [
          'If we don\'t hurry up, we\'ll be late for work.',
          'Unless we hurry up, we will be late for work.',
          'If we hurry up, we won\'t be late for work.',
          'We will be late for work if we don\'t hurry up.'
        ],
        hint: 'Use If sentence'
      },
      {
        id: 14,
        type: 'input',
        question: 'Rewrite: They don\'t understand the problem. They won\'t find any right solution.',
        answer: [
          'If they understood the problem, they would find the right solution.',
          'If they understood the problem, they would find a right solution.',
          'They would find the right solution if they understood the problem.',
          'Unless they understood the problem, they wouldn\'t find the right solution.'
        ],
        hint: 'Use If sentence type 2'
      },
      {
        id: 15,
        type: 'input',
        question: 'Rewrite: Ran can\'t lose weight because she doesn\'t exercise regularly.',
        answer: [
          'Ran could lose weight if she exercised regularly.',
          'If Ran exercised regularly, she could lose weight.',
          'If she exercised regularly, Ran would be able to lose weight.',
          'Ran would lose weight if she exercised on a regular basis.'
        ],
      },
      {
        id: 16,
        type: 'input',
        question: 'Rewrite: Unless Nam apologizes to me, I won\'t talk to him again.',
        answer: [
          'If Nam doesn\'t apologize to me, I won\'t talk to him again.',
          'I won\'t talk to Nam again if he doesn\'t apologize to me.',
          'If Nam apologizes to me, I will talk to him again.',
          'I will only talk to Nam again if he apologizes to me.'
        ],
      },
      {
        id: 17,
        type: 'input',
        question: 'Reported: "I am doing a project on the world\'s leading environmental organizations." Mr. Minh said.',
        answer: [
          'Mr. Minh said that he was doing a project on the world\'s leading environmental organizations.',
          'Mr. Minh told us that he was doing a project on the world\'s leading environmental organizations.',
          'Mr. Minh said he was working on a project about the world\'s leading environmental organizations.',
          'According to Mr. Minh, he was doing a project on the world\'s leading environmental organizations.'
        ],
      },
      {
        id: 18,
        type: 'input',
        question: 'Reported: "How long have you worked for the World Wide Fund for Nature, Mr. Nam?" Mai asked.',
        answer: [
          'Mai asked Mr. Nam how long he had worked for the WWF.',
          'Mai asked Mr. Nam how long he had worked for the World Wide Fund for Nature.',
          'Mai wanted to know how long Mr. Nam had worked for the World Wide Fund for Nature.',
          'Mai asked Mr. Nam how long he had been working for the WWF.',
          'Mai questioned Mr. Nam about how long he had worked for the WWF.'
        ],
      },
      {
        id: 19,
        type: 'input',
        question: 'Reported: "Do you like watching TV programmes about wild animals?" my friend asked me.',
        answer: [
          'My friend asked me if I liked watching TV programmes about wild animals.',
          'My friend asked me whether I liked watching TV programmes about wild animals.',
          'My friend wanted to know if I liked watching TV programmes about wild animals.',
          'My friend asked me whether or not I liked watching TV programmes about wild animals.'
        ],
      },
      {
        id: 20,
        type: 'input',
        question: 'Reported: "I will continue to help you with the project" my teacher said.',
        answer: [
          'My teacher said he/she would continue to help with the project.',
          'My teacher said that he/she would continue to help me with the project.',
          'My teacher told me that he/she would continue to help me with the project.',
          'My teacher promised to continue helping me with the project.',
          'My teacher said he/she was going to continue to help me with the project.'
        ],
      }
    ]
  },
  {
    id: 'en-arrangement',
    title: 'English: Arrangement & Exchange',
    questions: [
      {
        id: 1,
        type: 'choice',
        question: 'Arrange: a. Tom: Good morning, Alice! Did you sleep well? \nb. Alice: Yes, thank you. How about you? \nc. Alice: Good morning, Tom!',
        options: ['a-b-c', 'c-b-a', 'b-c-a', 'c-a-b'],
        answer: 'c-a-b'
      },
      {
        id: 2,
        type: 'choice',
        question: 'Arrange: a. Emma: Hey, Jack! I haven\'t seen you in ages. \nb. Emma: That\'s fantastic! I need to get back to the gym, too. \nc. Jack: Hi, Emma! Yeah, I\'ve been busy with work, but I go to the gym regularly.',
        options: ['a-c-b', 'c-a-b', 'a-b-c', 'b-c-a'],
        answer: 'a-c-b'
      },
      {
        id: 3,
        type: 'choice',
        question: 'Arrange: a. John: Really? I\'ve been many to watch it this weekend. \nb. John: Hey, Mike! Have you seen the new movie that came out last week? \nc. Mike: Hi, John! Yes, I saw it yesterday. It was incredible!',
        options: ['a-b-c', 'b-c-a', 'a-c-b', 'b-a-c'],
        answer: 'b-c-a'
      },
      {
        id: 4,
        type: 'choice',
        question: 'Arrange: a. Ethan: Hi, Mia! Yes, I went there last weekend. The coffee was fantastic! \nb. Mia: That\'s great to hear! I\'ll have to check it out soon. \nc. Mia: Hey, Ethan! Have you tried that new café on Maple Street?',
        options: ['a-b-c', 'c-a-b', 'a-c-b', 'c-b-a'],
        answer: 'c-a-b'
      },
      {
        id: 5,
        type: 'choice',
        question: 'Arrange: a. Leo: I was thinking we could start by checking out the local art scene. I heard there are some amazing galleries. \nb. Mia: Hey Leo, Have you decided what we should do when we visit the new city next weekend? \nc. Mia: That sounds awesome! I also want to explore the food markets. I love trying local dishes.',
        options: ['a-b-c', 'b-c-a', 'b-a-c', 'c-b-a'],
        answer: 'b-a-c'
      },
      {
        id: 6,
        type: 'choice',
        question: 'Arrange: a. Jason: That\'s awesome! I wish I could have gone with you. \nb. Jason: Hi, Emma! Did you enjoy the concert last night? \nc. Emma: Hey, Jason! It was incredible! The band played all my favorite songs.',
        options: ['a-c-b', 'b-a-c', 'b-c-a', 'd-b-a'],
        answer: 'b-c-a'
      },
      {
        id: 7,
        type: 'choice',
        question: 'Arrange paragraph: \na. Also, volunteering makes students aware of the needs around them. \nb. Finally, doing volunteer work helps students feel good about supporting others. \nc. It is thought that high school students benefit from doing voluntary work in many ways. \nd. Additionally, students develop such important skills as teamwork and communication. \ne. It should be true. Firstly, students who do voluntary work gain valuable real-world experience.',
        options: ['e-c-a-b-d', 'e-a-c-b-d', 'c-a-b-d-e', 'c-e-a-d-b'],
        answer: 'c-e-a-d-b'
      },
      {
        id: 8,
        type: 'choice',
        question: 'Arrange exchange: \na. John: I\'ve been thinking about starting a new blog. \nb. Linda: That\'s a great idea! What will it be about? \nc. John: I\'m planning to write about travel and photography. \nd. Linda: Sounds exciting! You\'ve always been passionate about those topics. \ne. John: Exactly! I can\'t wait to share my experiences.',
        options: ['a-b-c-d-e', 'a-e-d-b-c', 'a-d-b-c-e', 'a-b-d-c-e'],
        answer: 'a-b-c-d-e'
      },
      {
        id: 9,
        type: 'choice',
        question: 'Arrange letter: \na. I\'ve just finished reading the book you recommended. \nb. It was such a gripping story! I couldn\'t put it down. \nc. The characters were so well-developed, and the plot twists were unexpected. \nd. Thanks again for the recommendation – I loved it! \ne. Let\'s catch up soon and talk more about it.',
        options: ['a-b-c-d-e', 'a-e-c-b-d', 'a-b-d-c-e', 'a-d-c-b-e'],
        answer: 'a-b-c-d-e'
      },
      {
        id: 10,
        type: 'choice',
        question: 'Arrange paragraph: \na. It also enhances cognitive abilities and boosts memory. \nb. In addition, it can open doors to new career opportunities. \nc. Language learning requires consistent practice and dedication. \nd. Overall, it\'s a rewarding process that enriches both personal and professional life. \ne. One of the main benefits of learning a new language is improving communication skills.',
        options: ['a-b-d-c-e', 'a-c-b-d-e', 'e-a-b-c-d', 'a-d-c-b-e'],
        answer: 'e-a-b-c-d'
      },
      {
        id: 11,
        type: 'choice',
        question: 'Arrange letter: \na. It was such a fantastic read! \nb. I finished it in just a few days because I couldn\'t put it down. \nc. I just wanted to thank you for recommending that book to me. \nd. Hope to chat soon. \ne. Let me know if you have any more suggestions like that!',
        options: ['c-a-b-e-d', 'a-c-b-d-e', 'a-b-d-c-e', 'c-a-d-b-e'],
        answer: 'c-a-b-e-d'
      },
      {
        id: 12,
        type: 'choice',
        question: 'Arrange letter: \na. I had a fantastic time meeting everyone. \nb. The food was delicious, and the games were so much fun! \nc. I wanted to thank you for inviting me to your party last weekend. \nd. Let\'s plan to get together again soon. \ne. I really appreciate your hospitality!',
        options: ['c-d-e-b-a', 'c-a-b-e-d', 'a-b-d-c-e', 'c-e-a-d-b'],
        answer: 'c-a-b-e-d'
      },
      {
        id: 13,
        type: 'choice',
        question: 'Arrange letter: \na. I feel much more confident about it now. \nb. Let\'s grab coffee soon so I can catch you up on everything! \nc. I really appreciate your support. \nd. I wanted to say thanks for your help with my project last week. \ne. Your insights made a huge difference in my presentation.',
        options: ['d-e-a-c-b', 'a-d-b-c-e', 'd-c-a-b-e', 'a-c-b-d-e'],
        answer: 'd-e-a-c-b'
      }
    ]
  }
];
