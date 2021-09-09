
import './apimatic-widget.bundled';
import React from 'react';

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'apimatic-widget': { 
          apiKey?: string,
          dotNet?: boolean,
          java?: boolean,
          php?: boolean,
          ruby?: boolean,
          python?: boolean,
          ts?: boolean, 
        };
      }
    }
  }

function WidgetWrapper() {
    return <apimatic-widget
          apiKey='aNevcjuZmnpNoxByvnLpxOQfIyDDZQy0UswqjiWxeD3d6VdOelI6t7whM02BEZGG' 
          java={true}
          php={true}
          ruby={true}
          dotNet={true}
          python={true}
          ts={true}
        ></apimatic-widget>
}

export default WidgetWrapper;