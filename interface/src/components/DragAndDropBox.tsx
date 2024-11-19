import { FileUploader } from "react-drag-drop-files";
import "./DragAndDropBox.css";
import { useState } from "react";
import { Button } from "@mui/material";

const fileTypes = ["JPG"];

const DragAndDropBox = () => {
  const [file, setFile] = useState<File[] | null>(null);

  const handleChange = (files: File[]) => {
    setFile(files);
  };

  return (
    <div className="drag-and-drop">
      <h3>Drag & Drop your image here</h3>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}>
      </FileUploader>
      <p>{file && file.length > 0 ? `File name: ${file[0].name}` : "No files uploaded yet"}</p>
      <Button 
        variant="contained"
        sx={{ backgroundColor: '#65b2a0', color: '#fff', '&:hover': { backgroundColor: '#386258' } }}>
        Go
      </Button>
    </div>
  );
};

export default DragAndDropBox;
