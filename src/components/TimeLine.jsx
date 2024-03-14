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
          contentStyle={{ background: '#c68f7e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e' }}
          date="12:00 PM"
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', color: '#bea77b', boxShadow:'0 0 0 4px #bea77b'}} 
        >
          <h3 className="vertical-timeline-element-title timeline-title">Ceremonia Religiosa</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c68f7e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e' }}
          date="02:00 PM"
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', color: '#bea77b', boxShadow:'0 0 0 4px #bea77b'}} 
        >
          <h3 className="vertical-timeline-element-title timeline-title">Recepción</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c68f7e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e' }}
          date="02:30 PM"
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', color: '#bea77b', boxShadow:'0 0 0 4px #bea77b'}} 
        >
          <h3 className="vertical-timeline-element-title timeline-title">Ceremonia "Boda Civil"</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c68f7e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e' }}
          date="03:00 PM"
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', color: '#bea77b', boxShadow:'0 0 0 4px #bea77b'}} 
        >
          <h3 className="vertical-timeline-element-title timeline-title">Banquete</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c68f7e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e' }}
          date="04:30 PM"
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', color: '#bea77b', boxShadow:'0 0 0 4px #bea77b'}} 
        >
          <h3 className="vertical-timeline-element-title timeline-title">Protocolo y Tradiciones</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c68f7e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e' }}
          date="06:00 PM"
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', color: '#bea77b', boxShadow:'0 0 0 4px #bea77b'}} 
        >
          <h3 className="vertical-timeline-element-title timeline-title">Baile (Hasta amanecernos)</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c68f7e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e' }}
          date="09:30 PM"
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', color: '#bea77b', boxShadow:'0 0 0 4px #bea77b'}} 
        >
          <h3 className="vertical-timeline-element-title timeline-title">Taquiza, Chocolate Oaxaqueño acompañado de pan Teloloapence</h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#c68f7e', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #c68f7e' }}
          date="..."
          dateClassName='custom-date-color'
          iconStyle={{ background: '#c68f7e', color: '#bea77b', boxShadow:'0 0 0 4px #bea77b'}} 
        >
          <h3 className="vertical-timeline-element-title timeline-title">¡El baile sigue y sigue!</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  )
}

export default TimeLine