import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPostWrite,
  setContent,
  setContents,
  setImages,
} from "store/Postwrite/PostwriteSlice";
import PrevNext from "./common/PrevNext";
import { Title } from "./common";

const PhaseSix = (props) => {
  const [imageFiles, setImageFiles] = useState([]);
  const dispatch = useDispatch();
  const { contents, images } = useSelector(selectPostWrite);

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
          dispatch(setImages({ files, url }));
          setImageFiles((prev) => prev.concat(url));
        });
      }),
    );
    // s3로 업로드
    console.log(images);
  };
  return (
    <>
      <Title>방을 보여줄 사진, 간단한 소개글을 입력해주세요.</Title>
      <UploadedFilePreviewContainer>
        <PreviewList>
          {images.urls &&
            images.urls?.map((url, idx) => (
              <ImageItem key={idx}>
                <Thumbnail src={url} />
              </ImageItem>
            ))}
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
        <textarea
          onChange={(e) => dispatch(setContents(e.target.value))}
          value={contents}
        ></textarea>
      </div>
      <PrevNext />
    </>
  );
};

PhaseSix.propTypes = {};

export default PhaseSix;

const UploadedFilePreviewContainer = styled.div``;

const PreviewList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ImageItem = styled.li`
  height: 100%;
`;

const Thumbnail = styled.img`
  min-width: 300px;
  min-height: 300px;
  object-fit: cover;
  max-width: 300px;
  max-height: 300px;
  /* width: 100%;
  height: 100%; */
`;
