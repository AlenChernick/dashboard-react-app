import React from 'react';
import { Header, PieChart } from '../../components';
import { pieChartData } from '../../data/dummy';

const Pie = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Pie' title='Project Cost Breakdown' />
      <div className='w-full'>
        <PieChart height='420px' data={pieChartData} legendVisiblity={true} />
      </div>
    </div>
  );
};

export default Pie;
