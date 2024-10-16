export interface Test {
  name: string;
  date: string;
  score: string;
}

export interface Student {
  name: string;
  phone: string;
  score?: string;
  tests: Test[];
  image?: string;
}


export const studentsData: Student[] = [
  {
    name: 'Nguyễn Thụy Minh Anh',
    phone: '0937 177 073',
    score: 'IELTS: 5.0',
    tests: [
      { name: 'Test F', date: '2024/10/01', score: '5' },
      { name: 'Test F', date: '2024/02/01', score: '9' },
      { name: 'Test A', date: '2024/08/01', score: '10' },
      { name: 'Test E', date: '2024/02/01', score: '8' },
      { name: 'Test A', date: '2024/08/01', score: '7' },
      { name: 'Test E', date: '2024/02/01', score: '6' },
      { name: 'Test F', date: '2024/01/01', score: '5' },
      { name: 'Test F', date: '2024/03/01', score: '6' },
      { name: 'Test A', date: '2024/07/01', score: '8' },
      { name: 'Test E', date: '2024/01/01', score: '7' },
      { name: 'Test A', date: '2024/09/01', score: '9' },
      { name: 'Test E', date: '2024/03/01', score: '5' },
      { name: 'Test M', date: '2024/09/01', score: '7' },
      { name: 'Test M', date: '2024/01/01', score: '8' },
      { name: 'Test F', date: '2024/04/01', score: '7' },
      { name: 'Test A', date: '2024/10/01', score: '10' },
      { name: 'Test E', date: '2024/04/01', score: '6' },
      { name: 'Test M', date: '2024/10/01', score: '9' },
      { name: 'Test A', date: '2024/02/01', score: '7' },
      { name: 'Test F', date: '2024/05/01', score: '6' },
      { name: 'Test E', date: '2024/05/01', score: '8' },
      { name: 'Test M', date: '2024/11/01', score: '7' },
      { name: 'Test A', date: '2024/03/01', score: '10' },
      { name: 'Test F', date: '2024/06/01', score: '8' },
      { name: 'Test M', date: '2024/07/01', score: '9' },
      { name: 'Test E', date: '2024/08/01', score: '7' },
      { name: 'Test F', date: '2024/09/01', score: '5' },
      { name: 'Test A', date: '2024/11/01', score: '8' },
      { name: 'Test E', date: '2024/06/01', score: '9' },
      { name: 'Test M', date: '2024/05/01', score: '6' },
      { name: 'Test F', date: '2024/10/01', score: '7' },
      { name: 'Test A', date: '2024/04/01', score: '9' },
      { name: 'Test E', date: '2024/07/01', score: '8' },
      { name: 'Test M', date: '2024/02/01', score: '7' },
      { name: 'Test F', date: '2024/11/01', score: '9' },
      { name: 'Test A', date: '2024/05/01', score: '10' },
      { name: 'Test E', date: '2024/09/01', score: '6' },
      { name: 'Test M', date: '2024/03/01', score: '8' },
      { name: 'Test A', date: '2024/06/01', score: '7' },
      { name: 'Test F', date: '2024/12/01', score: '10' },
      { name: 'Test E', date: '2024/11/01', score: '5' },
      { name: 'Test M', date: '2024/12/01', score: '6' },
      { name: 'Test F', date: '2024/08/01', score: '8' },
      { name: 'Test A', date: '2024/12/01', score: '9.75' },
      { name: 'Test E', date: '2024/10/01', score: '7.5' },
      { name: 'Test M', date: '2024/06/01', score: '8.5' },
      { name: 'Test A', date: '2024/01/01', score: '10' },
      { name: 'Test F', date: '2024/07/01', score: '9' },
      { name: 'Test E', date: '2024/12/01', score: '8' },
      { name: 'Test M', date: '2024/04/01', score: '7' },
      { name: 'Test M', date: '2024/08/01', score: '9' },
      { name: 'Test M', date: '2024/02/01', score: '6' }
    ],
    image: 'https://example.com/image.jpg' // URL của hình ảnh
  },
  {
    name: 'Nguyễn Nhật Minh Anh',
    phone: '0769 618 303',
    score: 'COM - A',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "9" },
      { name: 'Test B', date: '01/02/2024', score: "1" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Nguyễn Minh Anh',
    phone: '0906 693 889',
    score: 'COM - B',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "4.5" },
      { name: 'Test B', date: '01/02/2024', score: "4" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Lê Phúc Minh Anh',
    phone: '0917 388 215',
    score: 'IELTS: 6.0+',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "6" },
      { name: 'Test B', date: '01/02/2024', score: "10" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Trần Thái Minh Anh',
    phone: '0932 030 666',
    score: 'IELTS: 8.0+',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "1" },
      { name: 'Test B', date: '01/02/2024', score: "5" },
    ]
  },
  // Thêm hơn 95 học sinh giả khác ở đây
  {
    name: 'Nguyễn Văn A',
    phone: '0901 234 567',
    score: 'TOEIC: 750',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "7" },
      { name: 'Test B', date: '01/02/2024', score: "4" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Nguyễn Văn B',
    phone: '0902 234 567',
    score: 'TOEIC: 800',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "7" },
      { name: 'Test B', date: '01/02/2024', score: "4" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Nguyễn Văn C',
    phone: '0903 234 567',
    score: 'TOEIC: 850',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "6" },
      { name: 'Test B', date: '01/02/2024', score: "9" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  // ...
  {
    name: 'Nguyễn Văn Z',
    phone: '0911 234 567',
    score: 'TOEIC: 990',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "7" },
      { name: 'Test B', date: '01/02/2024', score: "4" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Nguyễn Thụy Minh Anh',
    phone: '0937 177 073',
    score: 'IELTS: 5.0',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "6" },
      { name: 'Test B', date: '01/02/2024', score: "9" },
    ]
  },
  {
    name: 'Nguyễn Văn Z',
    phone: '0911 234 567',
    score: 'TOEIC: 990',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "7" },
      { name: 'Test B', date: '01/02/2024', score: "9" },
    ]
  },
  // 10 học sinh mới
  {
    name: 'Lê Hoàng Nam',
    phone: '0901 234 567',
    score: 'TOEFL: 95',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "2" },
      { name: 'Test B', date: '01/02/2024', score: "4" },
    ]
  },
  {
    name: 'Trần Thị Hồng',
    phone: '0902 345 678',
    score: 'SAT: 1450',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "7" },
      { name: 'Test B', date: '01/02/2024', score: "4" },
    ]
  },
  {
    name: 'Phạm Văn Tùng',
    phone: '0903 456 789',
    score: 'GRE: 320',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "9" },
      { name: 'Test B', date: '01/02/2024', score: "10" },
    ]
  },
  {
    name: 'Nguyễn Thị Mai',
    phone: '0904 567 890',
    score: 'IELTS: 7.0',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "8" },
      { name: 'Test B', date: '01/02/2024', score: "4" },
    ]
  },
  {
    name: 'Đỗ Văn Trung',
    phone: '0905 678 901',
    score: 'TOEFL: 102',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "9" },
      { name: 'Test B', date: '01/02/2024', score: "4" },
    ]
  },
  {
    name: 'Vũ Thị Lan',
    phone: '0906 789 012',
    score: 'SAT: 1380',
    tests: [
      { name: 'Test R', date: '01/08/2024', score: "9" },
      { name: 'Test S', date: '01/02/2024', score: "9" },
    ]
  },
  {
    name: 'Lâm Quang Huy',
    phone: '0907 890 123',
    score: 'GRE: 310',
    tests: [
      { name: 'Test S', date: '01/08/2024', score: "9" },
      { name: 'Test A', date: '01/02/2024', score: "9" },
    ]
  },
  {
    name: 'Bùi Thị Thảo',
    phone: '0908 901 234',
    score: 'TOEIC: 850',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "9" },
      { name: 'Test Q', date: '01/02/2024', score: "9" },

    ]
  },
  {
    name: 'Cao Văn Sơn',
    phone: '0909 012 345',
    score: 'IELTS: 6.5',
    tests: [
      { name: 'Test T', date: '01/08/2024', score: "9" },
      { name: 'Test R', date: '01/02/2024', score: "9" },

    ]
  },
  {
    name: 'Ngô Thị Bích',
    phone: '0910 123 456',
    score: 'TOEFL: 100',
    tests: [
      { name: 'Test P', date: '01/08/2024', score: "9" },
      { name: 'Test B', date: '01/02/2024', score: "9" },

    ]
  },
  {
    name: 'Lê Văn Phú',
    phone: '0911 234 678',
    score: 'GRE: 305',
    tests: [
      { name: 'Test L', date: '01/08/2024', score: "9" },
      { name: 'Test M', date: '01/02/2024', score: "9" },

    ]
  },
  {
    name: 'Hoàng Thị Yến',
    phone: '0912 345 678',
    score: 'IELTS: 8.0',
    tests: [
      { name: 'Test I', date: '01/08/2024', score: "9" },
      { name: 'Test T', date: '01/02/2024', score: "9" },

    ]
  },
  {
    name: 'Lê Phúc Minh Anh',
    phone: '0917 388 215',
    score: 'IELTS: 6.0+',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "9" },
      { name: 'Test L', date: '01/02/2024', score: "9" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Nguyễn Thị Lan Anh',
    phone: '0917 123 456',
    score: 'IELTS: 6.5+',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "9" },
      { name: 'Test B', date: '01/02/2024', score: "9" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Trần Văn Hoàng',
    phone: '0917 654 321',
    score: 'IELTS: 7.0+',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "9" },
      { name: 'Test B', date: '01/02/2024', score: "9" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Phạm Minh Tuấn',
    phone: '0917 789 456',
    score: 'IELTS: 6.0+',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "9" },
      { name: 'Test B', date: '01/02/2024', score: "9" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Bùi Thị Hồng Nhung',
    phone: '0917 987 654',
    score: 'IELTS: 6.5+',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "9" },
      { name: 'Test B', date: '01/02/2024', score: "9" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Đỗ Văn Dũng',
    phone: '0917 246 810',
    score: 'IELTS: 7.0+',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "9" },
      { name: 'Test B', date: '01/02/2024', score: "9" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Lê Thị Ngọc Anh',
    phone: '0917 135 790',
    score: 'IELTS: 6.0+',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "9" },
      { name: 'Test B', date: '01/02/2024', score: "9" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Nguyễn Văn An',
    phone: '0917 246 813',
    score: 'IELTS: 6.5+',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "9" },
      { name: 'Test B', date: '01/02/2024', score: "9" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Trần Thị Hạnh',
    phone: '0917 357 924',
    score: 'IELTS: 7.0+',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "9" },
      { name: 'Test B', date: '01/02/2024', score: "9" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Phạm Thị Mai',
    phone: '0917 468 135',
    score: 'IELTS: 6.0+',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "9" },
      { name: 'Test B', date: '01/02/2024', score: "9" },
      // Thêm 8 bài test nữa ở đây
    ]
  },
  {
    name: 'Bùi Văn Đức',
    phone: '0917 579 246',
    score: 'IELTS: 6.5+',
    tests: [
      { name: 'Test A', date: '01/08/2024', score: "9" },
      { name: 'Test B', date: '01/02/2024', score: "9" },
      // Thêm 8 bài test nữa ở đây
    ]
  }
];