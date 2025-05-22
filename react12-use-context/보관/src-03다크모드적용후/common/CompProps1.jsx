import CompState2 from './CompProps2';

const CompProps1 = ( {propData, myNumber} ) => {
  return (
    <div>
      <h4>프롭스 컴포넌트</h4>
      {propData}
      <CompState2 propData2={propData} myNumber={myNumber}/>
    </div>
  );
}
export default CompProps1;