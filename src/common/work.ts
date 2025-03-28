/**
 * 常用服务
 * useful server
 */

const icon_prefix = '/static/index/128/'

/*
 */
export const us = {
  data: [
    {
      title: 'online',
      icon: icon_prefix + 'qingjia1.png',
      description: '请假申请',
      useCount: 10000,
      routeIndex: 'online',
      enabled: true,
    },
    {
      title: 'demo',
      icon: icon_prefix + 'chuchai.png',
      description: '出差申请',
      useCount: 10000,
      routeIndex: 'demo',
      enabled: true,
    },
    {
      title: '公文发文',
      icon: icon_prefix + 'gongwen.png',
      description: '公文发文',
      useCount: 10000,
      routeIndex: 'docSend',
    },
    {
      title: '通知公告',
      icon: icon_prefix + 'tongzhi.png',
      description: '查看企业对员工下发的通知公告',
      useCount: 10000,
      routeIndex: 'annotationList',
      enabled: true,
    },
    {
      title: '日程',
      icon: icon_prefix + 'richeng.png',
      description: '建立和查看个人工作安排',
      useCount: 10000,
      routeIndex: 'plan',
    },
    {
      title: '考勤',
      icon: icon_prefix + 'kaoqin.png',
      description: '工作考勤',
      routeIndex: 'attendance',
      useCount: 10000,
    },
    {
      title: '内部邮件',
      icon: icon_prefix + 'youjian.png',
      description: '查看内部消息',
      useCount: 10000,
      dot: false,
      routeIndex: 'mailHome',
    },
    {
      title: '通讯录',
      icon: icon_prefix + 'tongxun.png',
      description: '查看组员',
      useCount: 10000,
      //routeIndex:'addressBook',
      routeIndex: 'levelAddressBook',
    },
    {
      title: '日报',
      icon: icon_prefix + 'richang.png',
      description: '记录每天的工作经验和心得',
      useCount: 1000,
    },
    {
      title: '周报',
      icon: icon_prefix + 'zhoubao.png',
      description: '总结每周的工作情况和下周计划',
      useCount: 10000,
    },
  ],
}

/**
 * other server 其他服务
 */
export const os = {
  data: [
    {
      title: '新闻中心',
      icon: icon_prefix + 'xinwen.png',
      description: '新闻中心',
      routeIndex: 'columnList',
      useCount: 10000,
    },
    {
      title: '文档中心',
      icon: icon_prefix + 'wendang.png',
      description: '文档中心',
      routeIndex: 'fileHome',
      useCount: 10000,
    },
    {
      title: '会议',
      icon: icon_prefix + 'huiyi.png',
      description: '会议',
      useCount: 10000,
      routeIndex: 'meeting',
    },
    {
      title: '任务中心',
      icon: icon_prefix + 'renwu.png',
      description: '任务中心',
      useCount: 10000,
    },
    {
      title: '合同',
      icon: icon_prefix + 'hetong.png',
      description: '合同',
      useCount: 10000,
    },
    // #ifndef MP-WEIXIN
    {
      title: '聊天',
      icon: icon_prefix + 'kehu.png',
      description: '聊天',
      routeIndex: 'chathome',
    },
    // #endif
  ],
}
