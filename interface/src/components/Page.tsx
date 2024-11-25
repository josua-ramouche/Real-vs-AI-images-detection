import { FileUploader } from "react-drag-drop-files";
import "./Page.css";
import { useState } from "react";
import { Button } from "@mui/material";

const fileTypes = ["JPG"];

const Page = () => {
  const [file, setFile] = useState<File | null>(null);
  const [disableButton, setDisableButton] = useState(true);
  const [displayDragAndDropPage,setDisplayDragAndDropPage] = useState("DRAGANDDROP");

  const handleChange = (file: File) => {
    setFile(file);
    setDisableButton(file == null);
  };

  const handleDisplayDragAndDropPage = (value:string) => {
    setDisplayDragAndDropPage(value);
  }

  return (
    <div className="page">
      {displayDragAndDropPage === "DRAGANDDROP" ? (
        <div>
          <h3>Drag & Drop your image here</h3>
          <FileUploader
            multiple={false}
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
          <p>{file != null ? `File name: ${file.name}` : "No file uploaded yet"}</p>
          <Button
            disabled={disableButton}
            variant="contained"
            onClick={() => handleDisplayDragAndDropPage("RESULTS")}
            sx={{
              backgroundColor: "#65b2a0",
              color: "#fff",
              "&:hover": { backgroundColor: "#386258" },
            }}
          >
            Go
          </Button>
        </div>
      ) : (
        <div>
          <Button
          variant="contained"
          onClick={() => handleDisplayDragAndDropPage("DRAGANDDROP")}
          sx={{
            backgroundColor: "#65b2a0",
            color: "#fff",
            "&:hover": { backgroundColor: "#386258" },
          }}
          >
            Analyze an other image
          </Button>
        </div>
      )}
    </div>
  );
};

export default Page;
