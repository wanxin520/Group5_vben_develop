import { MockMethod } from 'vite-plugin-mock';
import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util';

                // 合同模板正文
const content =[
    {
        "attributes": {
            "bold": true
        },
        "insert": "租赁合同"
    },
    {
        "attributes": {
            "align": "center",
            "header": {
                "value": 2
            }
        },
        "insert": "\n"
    },
    {
        "attributes": {
            "background": "#ffffff",
            "color": "#e60000"
        },
        "insert": "NO:1000000023"
    },
    {
        "attributes": {
            "align": "right"
        },
        "insert": "\n"
    },
    {
        "insert": "出租方（甲方）： "
    },
    {
        "attributes": {
            "underline": true
        },
        "insert": "  申宏春房地产有限公司   "
    },
    {
        "insert": "\n\n承租方（乙方）： "
    },
    {
        "attributes": {
            "underline": true
        },
        "insert": "           李江涛             "
    },
    {
        "insert": "\n\n\n"
    },
    {
        "attributes": {
            "bold": true
        },
        "insert": "兹根据国家《中华人民共和国合同法》、《中华人民共和国房屋租赁合同法》、《中华人民共和国物权法》等相关法律法规，有甲方将____区____小区________的房屋出租给乙方作为居住使用，乙方已对上述房产做了充分了解愿意承租，双方友好协商达成如下协议："
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "一、租期从_______年_______月_______日至_______年_______月_______日止，时间为年，个人出租房合同。本协议签订之日，乙方支付给甲方人民币元整（大写：元"
    },
    {
        "insert": "\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "整）作为租房定金。待甲方交房时转入为租房押金。"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "二、租期内房租每年人民币元整（大写：元整），租金每年支付一次，先付后住，不得拖欠。乙方不得转租，如转租必须提前通知甲方。甲方如同意，方可转租。甲方如不同'"
    },
    {
        "insert": "\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "意，乙方无权转租。否则甲方有权终止合同，收回出租房，押金没收，后果乙方自负。"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "三、租期内甲方不得以任何理由随意加价。租期满后如乙方续租，租金、租期由甲乙双方再重新商定。租期内水、电、煤气、宽带、闭路电视等一切费用由乙方自付，并按时"
    },
    {
        "insert": "\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "交纳，在租期结束时不得有拖欠，否则甲方有权在押金中予以扣除。"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "四、甲方必须保证房屋的产权清楚并负责缴纳采暖费及物业管理费，并在移交房屋是保证水、电、燃气等费用没有拖欠。如发生房屋产权纠纷事件，由甲方解决，乙方概不负"
    },
    {
        "insert": "\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "责。因此给乙方造成的经济损失由甲方承担。"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "五、乙方必须提供身份证的复印件，作为租房协议附件。"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "六、甲乙双方如不租或续租都应提前壹个月通知对方，在同等条件下乙方有优先续租权。"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "七、乙方不得损坏房屋结构，如须装璜需经得甲方同意。在租用期内，不得改变房屋结构及其房内设施，使用中如有因乙方原因造成损坏等情况，应予修复，费用乙方自理，"
    },
    {
        "insert": "\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "合同范本《个人出租房合同协议书》。"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "八、租期内甲方应帮助乙方协调水、电等的供应问题，保证正常畅通并当面检查一切正常后交给乙方使用，租期内的安全由乙方自己负责。"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "九、租房押金人民币元整（大写：元整）乙方到期不续租，待费用结清交还电卡、钥匙后甲方应将押金退还给乙方。退租时，乙方把清洁卫生搞好，恢复原来房东交付使用时的干净状态，否则甲方从押金中扣元作为打扫卫生费用。乙方在承租期间已满，没有说明续租和签约，占房不交，整天锁门，联系中断，甲方有权打开房门收回此房，并扣除押金，一切后果乙方自负。"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "十、租期内如因乙方原因如发生火灾、跑水等事故造成经济损失，应由乙方按价赔偿给甲方，造成第三方房屋财产损失，由乙方负责处理，并由乙方全额赔偿对方。不可抗拒的自然灾害乙方不承担赔偿责任。"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "十一、租期内任何时间，乙方人员不得在房屋内从事国家公安机关明令禁止的违法活动，在房屋里不得制造任何噪声影响他人生活和休息，若有投诉3次以上甲方有权终止合同收回房子，押金没收。"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "十二、其它未尽事宜双方协商解决。本协议一式二份。甲乙双方各执一份自签字之日起生效。甲乙双方共同遵守不得违约。"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "italic": true
        },
        "insert": "十三、租期内如发生争议甲乙双方应协商解决如协商不成可向法院起诉。十四、移交乙方的还有电卡1张、燃气卡1张、房屋钥匙2把。十五、本协议一式两份，甲乙各执一份。十六、移交乙方时房屋室内家具、家电情况"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "bold": true
        },
        "insert": "请您确认：在签署合同之前，您仔细阅读过本合同的的条款并于理解和接受，请务必仔细阅读"
    },
    {
        "attributes": {
            "header": {
                "value": 3
            }
        },
        "insert": "\n"
    },
    {
        "insert": "\n"
    },
    {
        "attributes": {
            "underline": true
        },
        "insert": "1、乙方应遵纪守法，合法居住，并自行办理相关手续、承担相关责任。"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "underline": true
        },
        "insert": "2、乙方应注意居住安全，自行采取防火、防盗等安全措施。加强用电安全，不得乱拖、乱接电线;对于防盗、防火、用电安全进行经常检查。如乙方措施不当造成的所有损失，其损失由乙方自行承担;造成甲方房屋财产损失，由乙方全额赔偿给甲方;造成第三方房屋财产损失，由乙方负责处理，由乙方全额赔偿对方。并按违约处理"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "underline": true
        },
        "insert": "3、乙方对租用房没有处理权，不能擅自转租或借给他人，也不能改变其用途，否则属于违约。如有此类情况发生除支付违约金外，甲方有权解除协议并收回房屋。"
    },
    {
        "insert": "\n\n"
    },
    {
        "attributes": {
            "underline": true
        },
        "insert": "4、电、水、电视及其它设施由乙方使用，产生的费用(包括治安、政府部门的各项管理费用)由乙方按时、足额缴纳，如有失误，造成麻烦，乙方自行解决，确需甲方出面协助解决时，乙方应与甲方协商。"
    },
    {
        "insert": "\n\n甲方（签名）_________________________乙方（签名）_________________________\n\n签订日期：_______年_______月_______日\n"
    }

        ]

export default [
  // 创建 dashboard API 对象
  {
    url: '/basic-api/contractmanage',
    timeout: 1000,
    method: 'get',
    response: () => {
      // 没有异常
      return resultSuccess({
        // 合同配置
        contractmanage: [
          {id:1,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
          {id:2,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
        //   {id:3,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
        //   {id:4,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
        //   {id:5,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
        //   {id:6,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
        //   {id:7,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
        //   {id:8,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
        //   {id:9,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
        //   {id:10,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
        //   {id:11,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
        //   {id:12,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
        //   {id:13,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
        //   {id:14,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
          // {id:15,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
          // {id:16,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
          // {id:17,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
          // {id:18,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
          // {id:19,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
          // {id:20,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
          // {id:21,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
          // {id:22,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
          // {id:23,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
          // {id:24,status: "@integer(0,1)",name:"租客电子合同模板@integer(1,10)",scope:"@integer(1,3)",email:"@integer(100000000,500000000)@qq.com",createTime:"@datetime",isAuth:"@integer(0,2)",authUser:"@string(5,10)",content:content},
        ],
        // 预约管理
        reservationManage:[
            {id:1,status: "@integer(1,5)",userInfo:"@cname - 1@integer(3000000000,9999999999)",homeSourse:"@character@integer(100,500) 测试楼栋@character@integer(1,6)栋@integer(1,6)单元 - @integer(1000,9999)室 ",reservationType:"-",checkInDate:"@datetime",checkInTime:"@integer(0,5)",earnest:"@integer(100,1200)",number:"@integer(1000000000,5000000000)"},
            {id:2,status: "@integer(1,5)",userInfo:"@cname - 1@integer(3000000000,9999999999)",homeSourse:"@character@integer(100,500) 测试楼栋@character@integer(1,6)栋@integer(1,6)单元 - @integer(1000,9999)室 ",reservationType:"-",checkInDate:"@datetime",checkInTime:"@integer(0,5)",earnest:"@integer(100,1200)",number:"@integer(1000000000,5000000000)"},
            {id:3,status: "@integer(1,5)",userInfo:"@cname - 1@integer(3000000000,9999999999)",homeSourse:"@character@integer(100,500) 测试楼栋@character@integer(1,6)栋@integer(1,6)单元 - @integer(1000,9999)室 ",reservationType:"-",checkInDate:"@datetime",checkInTime:"@integer(0,5)",earnest:"@integer(100,1200)",number:"@integer(1000000000,5000000000)"},
            {id:4,status: "@integer(1,5)",userInfo:"@cname - 1@integer(3000000000,9999999999)",homeSourse:"@character@integer(100,500) 测试楼栋@character@integer(1,6)栋@integer(1,6)单元 - @integer(1000,9999)室 ",reservationType:"-",checkInDate:"@datetime",checkInTime:"@integer(0,5)",earnest:"@integer(100,1200)",number:"@integer(1000000000,5000000000)"},
            {id:5,status: "@integer(1,5)",userInfo:"@cname - 1@integer(3000000000,9999999999)",homeSourse:"@character@integer(100,500) 测试楼栋@character@integer(1,6)栋@integer(1,6)单元 - @integer(1000,9999)室 ",reservationType:"-",checkInDate:"@datetime",checkInTime:"@integer(0,5)",earnest:"@integer(100,1200)",number:"@integer(1000000000,5000000000)"},
            {id:6,status: "@integer(1,5)",userInfo:"@cname - 1@integer(3000000000,9999999999)",homeSourse:"@character@integer(100,500) 测试楼栋@character@integer(1,6)栋@integer(1,6)单元 - @integer(1000,9999)室 ",reservationType:"-",checkInDate:"@datetime",checkInTime:"@integer(0,5)",earnest:"@integer(100,1200)",number:"@integer(1000000000,5000000000)"},
            {id:7,status: "@integer(1,5)",userInfo:"@cname - 1@integer(3000000000,9999999999)",homeSourse:"@character@integer(100,500) 测试楼栋@character@integer(1,6)栋@integer(1,6)单元 - @integer(1000,9999)室 ",reservationType:"-",checkInDate:"@datetime",checkInTime:"@integer(0,5)",earnest:"@integer(100,1200)",number:"@integer(1000000000,5000000000)"},
            {id:8,status: "@integer(1,5)",userInfo:"@cname - 1@integer(3000000000,9999999999)",homeSourse:"@character@integer(100,500) 测试楼栋@character@integer(1,6)栋@integer(1,6)单元 - @integer(1000,9999)室 ",reservationType:"-",checkInDate:"@datetime",checkInTime:"@integer(0,5)",earnest:"@integer(100,1200)",number:"@integer(1000000000,5000000000)"},
            {id:9,status: "@integer(1,5)",userInfo:"@cname - 1@integer(3000000000,9999999999)",homeSourse:"@character@integer(100,500) 测试楼栋@character@integer(1,6)栋@integer(1,6)单元 - @integer(1000,9999)室 ",reservationType:"-",checkInDate:"@datetime",checkInTime:"@integer(0,5)",earnest:"@integer(100,1200)",number:"@integer(1000000000,5000000000)"},
            {id:10,status: "@integer(1,5)",userInfo:"@cname - 1@integer(3000000000,9999999999)",homeSourse:"@character@integer(100,500) 测试楼栋@character@integer(1,6)栋@integer(1,6)单元 - @integer(1000,9999)室 ",reservationType:"-",checkInDate:"@datetime",checkInTime:"@integer(0,5)",earnest:"@integer(100,1200)",number:"@integer(1000000000,5000000000)"},
            {id:11,status: "@integer(1,5)",userInfo:"@cname - 1@integer(3000000000,9999999999)",homeSourse:"@character@integer(100,500) 测试楼栋@character@integer(1,6)栋@integer(1,6)单元 - @integer(1000,9999)室 ",reservationType:"-",checkInDate:"@datetime",checkInTime:"@integer(0,5)",earnest:"@integer(100,1200)",number:"@integer(1000000000,5000000000)"},
            {id:12,status: "@integer(1,5)",userInfo:"@cname - 1@integer(3000000000,9999999999)",homeSourse:"@character@integer(100,500) 测试楼栋@character@integer(1,6)栋@integer(1,6)单元 - @integer(1000,9999)室 ",reservationType:"-",checkInDate:"@datetime",checkInTime:"@integer(0,5)",earnest:"@integer(100,1200)",number:"@integer(1000000000,5000000000)"},
            {id:13,status: "@integer(1,5)",userInfo:"@cname - 1@integer(3000000000,9999999999)",homeSourse:"@character@integer(100,500) 测试楼栋@character@integer(1,6)栋@integer(1,6)单元 - @integer(1000,9999)室 ",reservationType:"-",checkInDate:"@datetime",checkInTime:"@integer(0,5)",earnest:"@integer(100,1200)",number:"@integer(1000000000,5000000000)"},
            {id:14,status: "@integer(1,5)",userInfo:"@cname - 1@integer(3000000000,9999999999)",homeSourse:"@character@integer(100,500) 测试楼栋@character@integer(1,6)栋@integer(1,6)单元 - @integer(1000,9999)室 ",reservationType:"-",checkInDate:"@datetime",checkInTime:"@integer(0,5)",earnest:"@integer(100,1200)",number:"@integer(1000000000,5000000000)"},
            {id:15,status: "@integer(1,5)",userInfo:"@cname - 1@integer(3000000000,9999999999)",homeSourse:"@character@integer(100,500) 测试楼栋@character@integer(1,6)栋@integer(1,6)单元 - @integer(1000,9999)室 ",reservationType:"-",checkInDate:"@datetime",checkInTime:"@integer(0,5)",earnest:"@integer(100,1200)",number:"@integer(1000000000,5000000000)"},
        ]

      })
      // 出现异常
    },
  },
] as MockMethod[];
