import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Display from "./util/Display";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = (props) => {
  const [imageList, updateImageList] = useState([]);
  const [query, handleQuery] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [speechUsed, updateSpeechUsed] = useState(false);

  const GetImages = async () => {
    updateSpeechUsed(false);

    const response = await fetch(
      `https://pixabay.com/api/?key=19856103-8aca091369517f2334a8974ba&q=${encodeURIComponent(
        query
      )}&image_type=photo&pretty=true`
    );
    const rawImageObject = await response.json();
    const rawImageList = rawImageObject.hits;

    const imageList = cleanImageList(rawImageList);
    updateImageList(imageList);
  };

  function textToImageStart() {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Sorry!! Your browser currently doesn't support voice recognition");
      return;
    }
    SpeechRecognition.startListening();
  }

  function textToImageStop() {
    SpeechRecognition.stopListening();
    handleQuery(transcript);
    updateSpeechUsed(true);
  }

  if (speechUsed) GetImages();

  return (
    <div className="App" align="center">
      <form className="mainForm" noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Enter the query"
          value={query}
          onChange={(event) => {
            handleQuery(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <Button variant="contained" color="secondary" onClick={GetImages}>
          Search
        </Button>
        <br></br>
        <br></br>
        <Button variant="contained" color="primary" onClick={textToImageStart}>
          Start Talking
        </Button>
        <Button variant="contained" color="secondary" onClick={textToImageStop}>
          Stop Talking
        </Button>
        <br></br>
        <br></br>

        {imageList.length > 0 && <Display imageList={imageList}></Display>}
      </form>
    </div>
  );
};

const cleanImageList = (rawImageList) => {
  const imageList = [];
  for (const i of rawImageList) {
    imageList.push({
      previewURL: i.previewURL,
      webformatURL: i.webformatURL,
    });
  }
  return imageList;
};

export default App;
