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

export const BIOLOGY_DATA: Topic[] = [
  {
    id: 'bai-18',
    title: 'Bài 18: CHU KÌ TẾ BÀO',
    questions: [
      {
        id: 1,
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
        question: 'Chu kì tế bào bao gồm các pha theo trình tự là:',
        options: ['G1, G2, S, pha M.', 'G1, S, G2, pha M.', 'S, G1, G2, pha M.', 'G2, G1, S, pha M.'],
        answer: 'G1, S, G2, pha M.'
      },
      {
        id: 3,
        question: 'Trong một chu kì tế bào thời gian dài nhất là:',
        options: ['Kì trung gian.', 'Kì đầu.', 'Kì giữa.', 'Kì cuối.'],
        answer: 'Kì trung gian.'
      },
      {
        id: 4,
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
        question: 'Trình tự các giai đoạn mà tế bào trải qua trong khoảng thời gian giữa hai lần phân chia liên tiếp được gọi là:',
        options: ['Quá trình phân bào.', 'Chu kì tế bào.', 'Phát triển tế bào.', 'Phân chia tế bào.'],
        answer: 'Chu kì tế bào.'
      },
      {
        id: 6,
        question: 'Tế bào nào ở người có thời gian chu kì tế bào ngắn nhất?',
        options: ['Tế bào ruột.', 'Tế bào gan.', 'Tế bào phôi.', 'Tế bào cơ.'],
        answer: 'Tế bào phôi.'
      },
      {
        id: 7,
        question: 'Nhận định nào SAI khi nói về ung thư?',
        options: [
          'Ung thư liên quan đến việc tăng sinh tế bào một cách mất kiểm soát.',
          'Di căn là hiện tượng các tế bào ung thư có khả năng xâm lấn sang những mô kế cận.',
          'Mục tiêu điều trị ung thư là ngăn ngừa và loại bỏ khối u.',
          'Ung thư tuyệt đối không chữa trị được.'
        ],
        answer: 'Ung thư tuyệt đối không chữa trị được.'
      },
      {
        id: 8,
        question: 'Nhận định nào SAI khi nói về chu kì tế bào?',
        options: [
          'Chu kì tế bào là thời gian từ lúc tế bào sinh ra đến khi tế bào chết đi.',
          'Kết thúc mỗi chu kì tế bào, từ một tế bào mẹ tạo ra vô số tế bào con.',
          'Thời gian của chu kì tế bào là thời gian của các giai đoạn trong chu kì tế bào.',
          'Chu kì tế bào diễn ra khác nhau ở sinh vật nhân sơ và sinh vật nhân thực.'
        ],
        answer: 'Chu kì tế bào là thời gian từ lúc tế bào sinh ra đến khi tế bào chết đi.'
      }
    ]
  },
  {
    id: 'bai-19',
    title: 'Bài 19: QUÁ TRÌNH PHÂN BÀO',
    questions: [
      {
        id: 1,
        question: 'Một tế bào sinh dục giảm phân vào kì giữa của giảm phân I thấy có 96 sợi cromatit. Kết thúc giảm phân tạo các giao tử, trong mỗi tế bào giao tử có số NST là:',
        options: ['24.', '48.', '36.', '12.'],
        answer: '24.'
      },
      {
        id: 2,
        question: 'Từng NST kép tách nhau ở tâm động thành 2 NST đơn phân li về 2 cực của tế bào. NST bắt đầu tháo xoắn. Quá trình này là ở kì nào của nguyên phân?',
        options: ['Kì đầu.', 'Kì giữa.', 'Kì sau.', 'Kì cuối.'],
        answer: 'Kì sau.'
      },
      {
        id: 3,
        question: 'Ở kì giữa của quá trình nguyên phân, các NST kép xếp thành mấy hàng trên mặt phẳng xích đạo?',
        options: ['1 hàng.', '2 hàng.', '3 hàng.', '4 hàng.'],
        answer: '1 hàng.'
      },
      {
        id: 4,
        question: 'Kì giữa I của giảm phân có hiện tượng',
        options: [
          'NST kép bắt cặp tương đồng, thoi phân bào hình thành, màng nhân và nhân con tiêu biến',
          'NST kép co xoắn cực đại, tập trung thành hai hàng ở mặt phẳng xích đạo',
          'NST kép co xoắn cực đại, tập trung thành một hàng ở mặt phẳng xích đạo',
          'Mỗi NST kép trong cặp tương đồng di chuyển về 2 cực của tế bào'
        ],
        answer: 'NST kép co xoắn cực đại, tập trung thành hai hàng ở mặt phẳng xích đạo'
      },
      {
        id: 5,
        question: 'Một tế bào có bộ nhiễm sắc thể 2n = 48 đang thực hiện quá trình nguyên phân. Quan sát có 96 nhiễm sắc thể ở trạng thái đơn. Tế bào đang ở',
        options: ['kì đầu.', 'kì giữa.', 'kì sau.', 'kì cuối.'],
        answer: 'kì sau.'
      },
      {
        id: 6,
        question: 'Một tế bào sinh dục đực, qua quá trình giảm phân tạo ra:',
        options: ['1 trứng và 3 thể định hướng', '4 tinh trùng', '4 loại giao tử', '4 trứng'],
        answer: '4 tinh trùng'
      },
      {
        id: 7,
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
        question: 'Một nhóm tế bào sinh tinh tham gia quá trình giảm phân đã tạo ra 512 tinh trùng. Số tế bào sinh tinh là',
        options: ['16', '32', '64', '128'],
        answer: '128'
      },
      {
        id: 9,
        question: 'Một tế bào có bộ NST 2n = 16, nguyên phân liên tiếp 3 lần. Tổng số tế bào con tạo ra là',
        options: ['32 tế bào', '12 tế bào', '8 tế bào', '6 tế bào'],
        answer: '8 tế bào'
      },
      {
        id: 10,
        question: 'Một tế bào có bộ nhiễm sắc thể 2n = 8, thực hiện nguyên phân liên tiếp 3 lần. Số nhiễm sắc thể của số tế bào con tạo ra là:',
        options: ['16 NST', '32 NST', '48 NST', '64 NST'],
        answer: '64 NST'
      },
      {
        id: 11,
        question: 'Một tế bào nguyên phân 5 lần liên tiếp thì tổng số tế bào con thu được là:',
        options: ['10', '20', '5', '32'],
        answer: '32'
      }
    ]
  }
];
