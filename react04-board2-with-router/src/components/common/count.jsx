import { useParams,useNavigate, Navigate } from "react-router-dom";

function plusMinus({maxNo}) {
  const {no} = useParams();
  const currentNo = parseInt(no);
  const navigate = useNavigate();

  
  const next = () => {
  if (currentNo >= maxNo) {
    alert('마지막 페이지입니다.');
  } else {
    navigate(`/view/${currentNo + 1}`);
  }
};

const back = () => {
  if (currentNo <= 1) {
    alert('첫 페이지입니다.');
  } else {
    navigate(`/view/${currentNo - 1}`);
  }
};
}

export default plusMinus;