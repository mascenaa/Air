import { PathLayer } from '@deck.gl/layers';
import { DeckGL } from 'deck.gl';

export default function LandingMap({ data, viewState }: { data: any, viewState: any }) {

     const layer = new PathLayer({
          id: 'path-layer',
          data,
          pickable: true,
          widthScale: 20,
          widthMinPixels: 2,
          getPath: d => d.path,
          getWidth: d => 5
     });


     return (
          <DeckGL viewState={viewState}
               layers={[layer]}
               getTooltip={({ object }: { object: any }) => object && object.name} />
     )
}