import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  author: { name: 'XingChenwa', link: 'https://github.com/XingChenwa' },
  group: [
    {
      title: '友链',
      icon: 'fa-solid fa-robot',
      links: [
        { name: '个人博客', href: 'https://blog.q2.hk/' },
        { name: 'Fivem解密网', href: 'https://fxap.web.1239.xin:883/decrypt' },
      ]
    },
    {
      title: '相关链接',
      icon: 'fab fa-github',
      links: [
        { name: 'Fivem', href: 'http://fivem.net/' },
        { name: 'ESX', href: 'https://github.com/esx-framework/esx_core' },
        { name: 'QB', href: 'https://qbcore.net/' },
      ]
    },
  ]
}