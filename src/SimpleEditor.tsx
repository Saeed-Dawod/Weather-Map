import React, { PureComponent } from 'react';
import { PanelEditorProps } from '@grafana/ui';

import { SimpleOptions } from './types';

export class SimpleEditor extends PureComponent<PanelEditorProps<SimpleOptions>> {
  render() {
    return (
      <div className="section gf-form-group">
        <h5 className="section-heading">Display</h5>
      </div>
    );
  }
}
