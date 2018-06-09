import React, { Component } from 'react';
import { Card } from 'antd';
import './AvatarCard.css';
import img from '../../assets/images/崔鹏.jpg';

const { Meta } = Card;

class AvatarCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCollege: '',
      collegeList: [
        {
          key: 1,
          name: '机械工程学院',
        },
        {
          key: 2,
          name: '交通与车辆工程学院',
        },
        {
          key: 3,
          name: '农业工程与食品科学学院',
        },
        {
          key: 4,
          name: '电气与电子工程学院',
        },
        {
          key: 5,
          name: '计算机科学与技术学院',
        },
        {
          key: 6,
          name: '化学化工学院',
        },
        {
          key: 7,
          name: '建筑工程学院',
        },
        {
          key: 8,
          name: '资源与环境工程学院',
        },
        {
          key: 9,
          name: '材料科学与工程学院',
        },
        {
          key: 10,
          name: '生命科学学院',
        },
        {
          key: 11,
          name: '数学与统计学院',
        },
        {
          key: 12,
          name: '物理与光电工程学院',
        },
        {
          key: 13,
          name: '经济学院',
        },
        {
          key: 14,
          name: '管理学院',
        },
        {
          key: 15,
          name: '文学与新闻传播学院',
        },
        {
          key: 16,
          name: '外国语学院',
        },
        {
          key: 17,
          name: '法学院',
        },
        {
          key: 18,
          name: '美术学院',
        },
        {
          key: 19,
          name: '音乐学院',
        },
        {
          key: 20,
          name: '体育学院',
        },
        {
          key: 21,
          name: '鲁泰纺织服装学院'
        }
      ]
    }
  }
  componentWillReceiveProps() {
    let a = this.state.collegeList.filter((item, index) => {
      return item.key.toString() === this.props.match.params.id
    })
    if(a && a.length === 1) {
      console.log('nice!!!')
      this.setState({
        currentCollege: a[0].name
      });
    }
    console.log(this.props.match.params.id, a)
  }
  render() {
    return (
      <div className="main-content">
        <div style={{textAlign: 'left'}}>
          <pre>this.props.match.params.id</pre>——{ this.props.match.params.id }
          <pre>this.state.currentCollege</pre>——{ this.state.currentCollege }
        </div>
        <div className="personal-pic">
          <Card
            hoverable
            style={{ width: 240, margin: 10 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta
              title="崔鹏"
              description="辅导员"
            />
          </Card> <Card
            hoverable
            style={{ width: 240, margin: 10 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta
              title="崔鹏"
              description="辅导员"
            />
          </Card> 
          <Card
            hoverable
            style={{ width: 240, margin: 10 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta
              title="崔鹏"
              description="辅导员"
            />
          </Card> 
          <Card
            hoverable
            style={{ width: 240, margin: 10 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta
              title="崔鹏"
              description="辅导员"
            />
          </Card>  
        </div>
        <div className="college-desc">
          <Card title="学院简介">
            <p>农业工程与食品科学学院学生工作以培养高素质的合格人才为目标，以基础文明教育为先导，以加强学风建设为中心，以科技创新为载体,狠抓落实，锐意进取，积极打造学生成长成才的和谐环境，促进学生快乐学习、快乐生活、快乐成长。</p>
            <p>近四年来，我院学生工作在各个方面都取得了不菲的成绩。在全国“挑战杯”、“山东省机电大赛”、“齐鲁创业大赛”等科技创新竞赛活动中，共获得省部级以上奖励112项，涉及510人次；共有321人考取硕士研究生，考研率稳中有进，就业率维持在90%以上，连续被评为教学工作、学生工作、就业工作、共青团工作先进集体。在以后的工作中，我们会始终坚持以学风建设中心不动摇，在思想引领、科技创新、创业教育、职业规划、文化活动等方面充分结合实际，总结经验，发扬特色，创新工作思路，服务学生教育管理，争取更大的成绩。</p>
            <p>农业工程与食品科学学院全体学生工作人员将以饱满的热情，务实的态度，与全院同学一起，打造农业工程学院学生工作的品牌。</p>
          </Card>
        </div>
      </div>
    );
  }
}

export default AvatarCard;