import Image from "next/image";
import styled from "styled-components";

const FileContainer = styled.div`
  border: 2px solid red;
  padding: 10px;
`;

function ReceiptDisplay({ url, onClick }) {
  return (
    <div>
      <FileContainer>
        <Image src={url} alt="imge" width={100} height={60} priority />
      </FileContainer>

      <button type="button" onClick={onClick}>
        Delete
      </button>
    </div>
  );
}

export default ReceiptDisplay;
