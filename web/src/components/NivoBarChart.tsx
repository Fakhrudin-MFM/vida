import { MARGIN } from './Constants';
import { ResponsiveBar } from '@nivo/bar'
import { ChartProps } from './ChartProps'
import DisplayFormatter from './DisplayFormatter';

const NivoBarChart = (props: ChartProps) => (
    <ResponsiveBar
        data={props.data}
        keys={props.keys}
        enableLabel={false}
        indexBy={props.axes && props.axes.x.dataColumn}
        margin={{ top: MARGIN.top, right: MARGIN.right, bottom: MARGIN.bottom, left: MARGIN.left }}
        padding={0.1}
        colors={props.colors}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: props.axes && props.axes.x.label,
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: props.axes && props.axes.y.label,
            legendPosition: 'middle',
            legendOffset: -40,
            format: (e) => {return DisplayFormatter.formatKMG(e)}
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)

export default NivoBarChart