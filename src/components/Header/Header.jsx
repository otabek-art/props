import React from 'react'
import './Header.css'
import Card from '../Card/Card'
import Title from '../Title/Title'

const Header = () => {
  return (
<>

  <Title>транспорт</Title>  
<div className="wrap">
    <Card name="велосипед" image="/card-1.jpg"  />
    <Card name="мотоцикл" image="https://th.bing.com/th/id/R.0e5954a12b6e0cb7f02123a8b716f203?rik=J2KfdEwdI65w1Q&riu=http%3a%2f%2fbazamoto.ru%2fimg%2fbmw%2fk-1300s%2fk-1300s_2014_1.jpg&ehk=kiY0nZU0ullE1jvmYlAuOoNZNI1WznZza5RIwKhNMWg%3d&risl=&pid=ImgRaw&r=0" />
    <Card name="самокат" image="https://th.bing.com/th/id/R.d03cac03554bf531008cd6e29e7f1151?rik=JMRv60%2fF5R4yPA&pid=ImgRaw&r=0" />
<Card />
</div>

<Title>одежды</Title>

<div className="wrap">
    <Card name="велосипед" image="/card-1.jpg"  />
    <Card name="мотоцикл" image="https://th.bing.com/th/id/R.0e5954a12b6e0cb7f02123a8b716f203?rik=J2KfdEwdI65w1Q&riu=http%3a%2f%2fbazamoto.ru%2fimg%2fbmw%2fk-1300s%2fk-1300s_2014_1.jpg&ehk=kiY0nZU0ullE1jvmYlAuOoNZNI1WznZza5RIwKhNMWg%3d&risl=&pid=ImgRaw&r=0" />
    <Card name="самокат" image="https://th.bing.com/th/id/R.d03cac03554bf531008cd6e29e7f1151?rik=JMRv60%2fF5R4yPA&pid=ImgRaw&r=0" />
<Card />
</div>
</>
  )
}

export default Header