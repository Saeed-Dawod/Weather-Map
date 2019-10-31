import React, {PureComponent} from 'react';
import {Button, PanelProps} from '@grafana/ui';
import {SimpleOptions} from 'types';

interface Props extends PanelProps<SimpleOptions> {
}

interface Istate {
    latitude?: any;
    longitude?: any;
}

export class SimplePanel extends PureComponent<Props, Istate> {
    constructor(props: Props) {
        super(props);
        this.state = {
            latitude: 53.66,
            longitude: -1.673,
        };
    }

    focusCountry = (e: any) => {
        this.setState({
            latitude: e.target.dataset.lat,
            longitude: e.target.dataset.lon,
        });
    };

    render() {
        const styles = {
            marginRight: '2%',
        };
        
        return (
            <div>
                <Button data-lat={51.51279} data-lon={-0.09184} style={styles} onClick={this.focusCountry}>
                    UK
                </Button>
                <Button data-lat={48.8534} data-lon={2.3488} style={styles} onClick={this.focusCountry}>
                    France
                </Button>
                <Button data-lat={32.072683399999995} data-lon={34.7954018} style={styles} onClick={this.focusCountry}>
                    Nat int
                </Button>
                <Button data-lat={-25.2743988} data-lon={133.7751312} style={styles} onClick={this.focusCountry}>
                    Australia
                </Button>
                <Button data-lat={39.742043} data-lon={-104.991531} style={styles} onClick={this.focusCountry}>
                    Usa
                </Button>
                <iframe
                    width="1280"
                    height="800"
                    src={`https://embed.windy.com/embed2.html?lat=${this.state.latitude}&lon=${this.state.longitude}
                     &zoom=6&level=surface&overlay=rain&menu=
                      &message=true&marker=&calendar=&pressure=&type=map&location=coordinates&detail=true&detailLat=${this.state.latitude}
                     &detailLon=${this.state.longitude}&metricWind=default&metricTemp=%C2%B0C&radarRange=-1`}
                    frameBorder="0"
                />
            </div>
        );
    }
}
