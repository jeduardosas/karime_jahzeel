import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.css'

const TimeLine = () => {
  return (
    <>
      <h3 className='timeline-title-cont'>Protocolo</h3>
      <VerticalTimeline
      lineColor={'#bea77b'}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c68f7e', color: '#fff', marginRight:'10px' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e'}}
          date="12:00 PM"
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', fill: '#fff', boxShadow:'0 0 0 4px #bea77b'}} 
          icon={<img src='/img/icons/church_white.svg' alt='icon-church' className='custom-icon'/>}
        >
          <h3 className="vertical-timeline-element-title timeline-title">Ceremonia Religiosa</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c68f7e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e' }}
          date="02:00 PM"
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', fill: '#fff', boxShadow:'0 0 0 4px #bea77b'}} 
          icon={<img src='/img/icons/rings_white.svg' alt='icon-rings' className='custom-icon'/>}
        >
          <h3 className="vertical-timeline-element-title timeline-title">Recepción</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c68f7e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e' }}
          date="02:30 PM"
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', fill: '#fff', boxShadow:'0 0 0 4px #bea77b'}}
          icon={<img src='/img/icons/wedding-vows_white.svg' alt='icon-rings' className='custom-icon'/>}
        >
          <h3 className="vertical-timeline-element-title timeline-title">Ceremonia "Boda Civil"</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c68f7e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e' }}
          date="03:00 PM"
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', fill: '#fff', boxShadow:'0 0 0 4px #bea77b'}} 
          icon={<img src='/img/icons/cutlery_white.svg' alt='icon-rings' className='custom-icon'/>}
        >
          <h3 className="vertical-timeline-element-title timeline-title">Banquete</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c68f7e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e' }}
          date="04:30 PM"
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', fill: '#fff', boxShadow:'0 0 0 4px #bea77b'}}
          icon={<img src='/img/icons/drinking_white.svg' alt='icon-rings' className='custom-icon'/>}
        >
          <h3 className="vertical-timeline-element-title timeline-title">Protocolo y Tradiciones</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c68f7e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e' }}
          date="06:00 PM"
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', fill: '#fff', boxShadow:'0 0 0 4px #bea77b'}} 
          icon={<img src='/img/icons/music_white.svg' alt='icon-rings' className='custom-icon'/>}
        >
          <h3 className="vertical-timeline-element-title timeline-title">Baile (Hasta amanecernos)</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c68f7e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e' }}
          date="09:30 PM"
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', fill: '#fff', boxShadow:'0 0 0 4px #bea77b'}} 
          icon={<img src='/img/icons/cofee.svg' alt='icon-rings' className='custom-icon'/>}
        >
          <h3 className="vertical-timeline-element-title timeline-title">Taquiza, Chocolate Oaxaqueño acompañado de pan Teloloapense</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c68f7e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e' }}
          date="..."
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', fill: '#fff', boxShadow:'0 0 0 4px #bea77b'}} 
          icon={<img src='/img/icons/party.svg' alt='icon-rings' className='custom-icon'/>}
        >
          <h3 className="vertical-timeline-element-title timeline-title">¡El baile sigue y sigue!</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  )
}

export default TimeLine