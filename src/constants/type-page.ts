export default function renderTypeNews(type: number) {
  switch (type) {
    case 1:
      return 'Tin tức';
    case 2:
      return 'Sự kiện';
    case 3:
      return 'Thông báo';
    case 4:
      return 'Tài liệu';
    case 5:
      return 'Hội thảo';
    case 6:
      return 'Cuộc thi';
    case 7:
      return 'Dịch vụ';

    default:
      return 'Tin tức';
  }
}
