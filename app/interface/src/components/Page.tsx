import { FileUploader } from "react-drag-drop-files";
import "./Page.css";
import { useState } from "react";
import { Button } from "@mui/material";

const fileTypes = ["JPG"];

const Page = () => {
  const [file, setFile] = useState<File | null>(null);
  const [disableButton, setDisableButton] = useState(true);
  const [displayDragAndDropPage,setDisplayDragAndDropPage] = useState("DRAGANDDROP");
  const [isResultReady, setIsResultReady] = useState(false); // Pour gérer si on affiche la bar de progression ou non
  //TODO : ajouter la bar de progression

  const handleChange = (file: File) => {
    setFile(file);
    setDisableButton(file == null);
  };

  const handleDisplayDragAndDropPage = (value:string) => {
    setDisplayDragAndDropPage(value);
    if (value === "DRAGANDDROP") {
      setDisableButton(true);
    }
  }
  // TODO : Obtenir le résultat du modèle
  const result = "NOT GENERATED BY AN AI";
  //const result = "GENERATED BY AN AI"
  const accuracy = 92


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
          <h3> TODO : Display the image here</h3>
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
          <h3> TODO : Display the image here </h3>
          <h3> TODO : Display a green check or a red cross </h3>
          <h2> After an Analyze, we think this image is {result}. </h2>
          <h3> The accuracy of the result is {accuracy}% </h3>
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