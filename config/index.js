/* eslint-disable */
const USER_CONFIG = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: '',

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: '',

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句
    CIBA: false,
    // 每日一言
    oneTalk: true,
    // 土味情话(彩虹屁)
    earthyLoveWords: false,
    // 朋友圈文案
    momentCopyrighting: false,
    // 毒鸡汤
    poisonChickenSoup: false,
    // 古诗古文
    poetry: false,

    /** 星座运势 */
    horoscope: true,

    /** 生日消息和节日消息 */
    birthdayMessage: true,

    // 学生课表
    courseSchedule: false,
  },

  /** 每日一言 */

  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: '',

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: '我的静',
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogKOR6j965HSAjzxxBRmCe6ASZKI', //8.41，此为测试用
      // 你想对他发送的模板消息的模板ID
      useTemplateId: 'm6cWiTRIMlAU4FxPfOqvynADOXflyWemGvHqXZCJe6I',
      // 所在省份
      province: '河南',
      // 所在城市
      city: '信阳',
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '04-04',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: 'https://s.weibo.com/top/summary',
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '我静', year: '2001', date: '03-11',
        },
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-07-24' },
        // 考研
        { keyword: 'exam_day', date: '2022-12-28' },
        // 到期日
        //{ keyword: 'ex_day', date: '2022-12-30' }
      ],
      // 课程表相关配置
      // 如果courseSchedule不存在或者为空（null）则认为没有课程
      // 如果courseSchedule是一个数组，则认为不区分单双周，直接填写星期几对应的课表数据即可
      // 如果courseSchedule是一个对象（如下面所示）
      courseSchedule: {
        // 单双周的基准
        benchmark: {
          // 这里设置一个日期，用来作为判断课表是否单双周的依据
          date: '2022-09-23',
          // 该日期是否为单周
          isOdd: true
        },
        // 课表
        courses: {
          // 单周课表
          // 从星期一到星期日（星期六和星期日的课表数组可不填写）
          odd: [
            // 例子，周一的课表
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周二
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周三
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周四
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周五
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周六
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周日
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ]
          ],
          // 双周课表
          even: [
            [],
            [],
            [],
            [],
            [],
            [],
            []
          ]
        }
      },
    },
    {
      name: '老婆课表',
      id: '',
      useTemplateId: '',
      province: '河南',
      city: '信阳',
      horoscopeDate: '04.04',
      horoscopeDateType: '今天',
      openUrl: 'https://wangxinleo.cn',
      festivals: [],
      customizedDateList: [],
      courseSchedule: {
        benchmark: {
          date: '2022-09-23',
          isOdd: false
        },
        courses: {
          odd: [
            [
              '08:00-09:40 英语二（外语楼306）',
              '10:00-11:40 英国文学史（外语楼303）',
              '14:30-16:10 英语二（外语楼306）',
              '16:20-18:00 英国文学史（外语楼303）',
              '19:00-20:40 英语二（外语楼306）',
            ],
            // 周二
            [
              '08:00-09:35 语言学概论（外语楼310）',
            ],
            // 周三
            [
              '08:00-09:35 英语二（外语楼306）',
              '09:50-11:25 词汇学（）'
            ],
            // 周四
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周五
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周六
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ],
            // 周日
            [
              '08:00-09:35 高等数学',
              '09:50-11:25 高等物理'
            ]
          ],
          // 双周课表
          even: [
            [],
            [],
            [],
            [],
            [],
            [],
            []
          ]
        }
      },
    },
    {
      name: '自己课表',
      id: 'ogKOR6j965HSAjzxxBRmCe6ASZKI',
      useTemplateId: 'MrCO041Ce-j-1PYFfConR25UQGZkx27fwGtWI6LAYFo',
      province: '河南',
      city: '郑州',
      horoscopeDate: '2000.12.16',
      horoscopeDateType: '今日',
      openUrl: 'https://wangxinleo.cn',
      festivals: [],
      customizedDateList: [],
      courseSchedule: {
          [
            [],
            // 周二
            [
              '08:00-09:40 天然药物化学 (2#五)',
            ],
            // 周三
            [],
            // 周四
            [
              '10:10-12:50 天然药物化学 (12#一)',
            ],
            // 周五
            [],
            // 周六
            [],
            // 周日
            []
          ],
        }
      },
    },
    {
      name: '老婆3',
      id: '',
      useTemplateId: '',
      province: '',
      city: '',
      horoscopeDate: '',
      horoscopeDateType: '',
      openUrl: 'https://wangxinleo.cn',
      festivals: [],
      customizedDateList: [],
      courseSchedule: null
    }
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'ay8_ZTxd7DP_WndM8rlHA_t13sIRGSGJaxnm4Fjl62A',

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: '自己',
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogKOR6j965HSAjzxxBRmCe6ASZKI',
      openUrl: 'https://s.weibo.com/top/summary',
    }
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: '河南',
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: '郑州',

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   *
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   *
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   *
   * --- 是否展示周岁信息开始 ---
   * isShowAge: true 展示岁数, 仅type为生日生效
   * isShowAge: false 不展示岁数, 仅type为生日生效
   * 删除isShowAge属性，也会不展示岁数
   * --- 是否展示周岁信息结束 ---
   */
  FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    {
      type: '*生日', name: '老婆', year: '1996', date: '09-09', isShowAge: true,
    },
    {
      type: '节日', name: '结婚纪念日', year: '2020', date: '09-03',
    },
    // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
    {
      type: '生日', name: '李四', year: '1996', date: '09-31', isShowAge: true,
    },
    {
      type: '节日', name: '被搭讪纪念日', year: '2021', date: '09-01',
    }
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
   * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    { keyword: 'love_day', date: '2022-09-08' },
    // 结婚纪念日
    { keyword: 'marry_day', date: '2022-09-09' },
    // 退伍日
    { keyword: 'ex_day', date: '2022-09-10' }
    // 你可以不断按格式往下增加
    // ...
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
   * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    { keyword: 'encourage_oneself', contents: '你主要的问题在于读书太少而想得太多' },
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'lover_prattle',
      contents: [
        '因为太喜欢你，所以看谁都像是情敌。',
        '申请成为你爱里的永久居民。',
        '你很傻，你很笨，可我还是很羡慕你，因为你有我',
        '遇见你，就好像捡到了100斤的运气'
      ],
    }
    // 你可以不断按格式往下增加
    // ...
  ],
  // 默认的课表配置
  COURSE_SCHEDULE: null
}
export default USER_CONFIG
