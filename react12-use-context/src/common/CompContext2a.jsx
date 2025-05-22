import { SimpleContext } from "../context/SimpleContext";
import { useContext } from "react"

const CompContext2a = () => {
  //컨텍스트 파일을 인수로 사용해서 useContext파일 이용
  const contextData = useContext(SimpleContext) ;
  return (
    <div>
      <h4>context2a 컴포넌트</h4>
      {contextData}
    </div>
  );
}
export default CompContext2a;