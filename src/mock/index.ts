// 使用 Mock
import Mock from 'mockjs'

Mock.mock('/api/menus', 'get', {
  code: 0,
  data: [
    { id: 1, label: '首页', name: 'Home', icon: 'HomeOutline' },
    { id: 2, label: '资源管理', name: 'Resource', icon: 'AppsOutline', children: [
      { id: 6, label: '文章管理', name: 'Article', icon: 'ArticleOutlined' },
      { id: 7, label: '分类管理', name: 'Category', icon: 'CategoryFilled' }
    ] },
    { id: 4, label: '用户管理', name: 'Users', icon: 'PersonOutline' },
    { id: 5, label: '系统设置', name: 'Settings', icon: 'Settings' }
  ]
})
