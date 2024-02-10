import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import FirebaseStorageService from "../FirebaseStorageService";
import { Col, Row } from "react-bootstrap";

function ImageUploadPreview({
  basePath,
  existingImageUrl,
  handleUploadFinish,
  handleUploadCancel,
}) {
  const [uploadProgress, setUploadProgrses] = useState(-1);
  const [imageUrlComp, setImageUrlComp] = useState("");

  const fileInputRef = useRef();

  useEffect(() => {
    if (existingImageUrl) {
      setImageUrlComp(existingImageUrl);
    } else {
      setUploadProgrses(-1);
      setImageUrlComp("");
      fileInputRef.current.value = null;
    }
  }, [existingImageUrl]);

  async function handleFileChanged(event) {
    const files = event.target.files;
    const file = files[0];

    if (!file) {
      alert("File Select Failed. Please try again.");
      return;
    }

    const generatedFileId = uuidv4();

    try {
      const downloadUrl = await FirebaseStorageService.uploadFile(
        file,
        `${basePath}/${generatedFileId}`,
        setUploadProgrses
      );

      setImageUrlComp(downloadUrl);
      handleUploadFinish(downloadUrl);
    } catch (error) {
      setUploadProgrses(-1);
      fileInputRef.current.value = null;
      alert(error.message);
      throw error;
    }
  }

  function handleCancelImageClick() {
    FirebaseStorageService.deleteFile(imageUrlComp);
    fileInputRef.current.value = null;
    setImageUrlComp("");
    setUploadProgrses(-1);
    handleUploadCancel();
  }

  return (
    <Row>
      <input
        type="file"
        accept="image/*"
        className="form-control"
        onChange={handleFileChanged}
        ref={fileInputRef}
        hidden={uploadProgress > -1 || imageUrlComp}
      />
      {!imageUrlComp && uploadProgress > -1 ? (
        <div>
          <label htmlFor="file">Upload Progress:</label>
          <progress
            id="file"
            value={uploadProgress}
            max="100"
            className="progress-bar progress-bar-striped"
          >
            {uploadProgress}%
          </progress>
          <span>{uploadProgress}%</span>
        </div>
      ) : null}
      {imageUrlComp ? (
        <Row>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <img
                src={imageUrlComp}
                alt={"imagedu profil"}
                className="img-fluid img-thumbnail"
              />
            </Col>
          </Row>
          <Row>
            <button
              type="button"
              onClick={handleCancelImageClick}
              className="btn btn-danger"
            >
              Changer l'image de profil
            </button>
          </Row>
        </Row>
      ) : null}
    </Row>
  );
}

export default ImageUploadPreview;
