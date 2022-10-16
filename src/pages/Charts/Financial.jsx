import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from '@syncfusion/ej2-react-charts';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { Header } from '../../components';
const date1 = new Date('2017, 1, 1');

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}

const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Financial' title='APPLE Historical' />
      <ChartComponent
        id='financial-chart'
        height='420px'
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
        tooltip={{ enable: true, shared: true }}
      >
        <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={returnValue} xName='x' yName='low' name='Apple Inc' type='Hilo' low='low' high='high' />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
