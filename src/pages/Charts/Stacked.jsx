import React from 'react';
import { Header, StackedChart } from '../../components';

const Stacked = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Stacked' title='Revenue Breakdown' />
      <div className='w-full'>
        <StackedChart />
      </div>
    </div>
  );
};

export default Stacked;
