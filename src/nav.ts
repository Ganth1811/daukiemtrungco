// Nơi duy nhất khai báo route tĩnh (Home, About...) dùng cho nav.
// Đổi tên file trong src/pages/ thì chỉ cần sửa href ở đây,
// không phải lục tìm trong từng component.
export const NAV_LINKS = [
  { href: '/blog', label: 'Bài viết' },
  { href: '/about', label: 'Giới thiệu' },
] as const;
