import { Component } from 'react'
import ScreenFrame from "../components/ScreenFrame";
import PageHeader from "../components/PageHeader";
import Logo from "../components/Logo";
import Container from "../components/Container";
import MuniCard from "../components/MuniCard";

import { muniStops } from '../common/muni'

export default class Index extends Component {


  render () {
    const { url } = this.props

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
