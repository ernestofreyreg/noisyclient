import { Component } from 'react'
import ScreenFrame from "../components/ScreenFrame";
import PageHeader from "../components/PageHeader";
import Logo from "../components/Logo";
import Container from "../components/Container";
import MuniCard from "../components/MuniCard";

import { muniStops } from '../common/muni'
import BusPrediction from "../components/BusPrediction";
import Density from "../components/Density";

const initializeRTM = (id, dispatcher) => {
  const rtm = new RTM('wss://rv6bqxdr.api.satori.com', 'cCab773fCDc1c38CbCDE0d243DAA2FEe')
  const channel = rtm.subscribe(
    'timed-devices',
    RTM.SubscriptionMode.SIMPLE,
    {
      filter: 'SELECT * FROM `timed-devices` WHERE `id` = "' + id + '" OR `scannerid` = "' + id + '"',
      history: { count: 1 }
    }
  )

  channel.on('rtm/subscription/data', pdu => {
    pdu.body.messages.forEach(msg => {
      dispatcher(msg)
    })
  })

  rtm.on('data', pdu => {
    if (pdu.action.endsWith('/error')) {
      rtm.restart()
    }
  })

  rtm.start()

  return { rtm }
}

export default class Index extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = { prediction: null, count: null }
  }

  componentDidMount () {
    const { url } = this.props
    const query = url.query
    const id = query.id

    console.log('Initializing RTM')
    const satori = initializeRTM(id, this.satoriDispatcher)
    this.setState({satori})
  }

  componentWillUnmount () {
    this.state.satori.rtm.stop()
  }

  satoriDispatcher = data => {
    console.log(data)

    if (data.type === 'muni-prediction') {
      this.setState({prediction: data})
    } else {
      this.setState({count: data})
    }
  }


  render () {
    const { url } = this.props
    const { prediction, count } = this.state

    const query = url.query
    const id = query.id
    const stop = muniStops[id]

    return (
      <ScreenFrame>
        <PageHeader title='Noisy'/>

        <Container>
          <Logo/>

          <MuniCard
            route={stop.route}
            title={stop.title}
            page={`/muni?id=${id}`}
          />

          {prediction && <BusPrediction {...prediction} />}
          {count && <Density {...count} />}
        </Container>

        {/*language=CSS*/}
        <style jsx global>{`
          body {
            font-family: "Helvetica Neue", Helvetica, sans-serif;
          }
        `}</style>
      </ScreenFrame>
    )
  }
}
