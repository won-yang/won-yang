import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PhaseSix = (props) => {
  const [imageFiles, setImageFiles] = useState([]);

  const handleUploadImagePreview = (e) => {
    const files = Array.from(e.target.files);
    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.addEventListener("load", (event) => {
            resolve(event.target.result);
          });
          reader.addEventListener("error", reject);
          reader.readAsDataURL(file);
        }).then((url) => {
          setImageFiles((prev) => prev.concat(url));
        });
      }),
    );
  };
  return (
    <>
      <h2>방을 보여줄 사진, 간단한 소개글을 입력해주세요.</h2>
      <UploadedFilePreviewContainer>
        <PreviewList>
          {imageFiles?.map((image, idx) => (
            <img key={idx} src={image}></img>
          ))}
          <li></li>
        </PreviewList>
      </UploadedFilePreviewContainer>
      <div>
        <label>사진</label>
        <input
          type="file"
          multiple
          accept=".jpg, .png, .jpeg"
          onChange={handleUploadImagePreview}
        ></input>
      </div>
      <div>
        <label>글 내용</label>
        <textarea></textarea>
      </div>
    </>
  );
};

PhaseSix.propTypes = {};

export default PhaseSix;

const UploadedFilePreviewContainer = styled.div``;

const PreviewList = styled.ul`
  display: flex;
  align-items: center;
  & > img {
    max-width: 150px;
  }
`;
