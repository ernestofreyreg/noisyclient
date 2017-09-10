import { Component } from 'react'
import ScreenFrame from "../components/ScreenFrame";
import PageHeader from "../components/PageHeader";
import Logo from "../components/Logo";
import Container from "../components/Container";
import MuniCard from "../components/MuniCard";
import { muniStops } from '../common/muni'
import ParisomaCard from "../components/ParisomaCard";

export default class Index extends Component {
  render () {
    return (
      <ScreenFrame>
        <PageHeader title='Noisy'/>

        <Container>
          <Logo/>

          {Object.keys(muniStops).map(id =>
            <MuniCard
              key={id}
              route={muniStops[id].route}
              title={muniStops[id].title}
              page={`/muni?id=${id}`}
            />
          )}

          <ParisomaCard page={`/parisoma?id=090ef701-5fb6-428c-bf1a-2dfcc26df812`}/>

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
