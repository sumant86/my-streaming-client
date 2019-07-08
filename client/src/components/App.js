import React from "react";
import HeadBar from "./HeadBar";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streamer/StreamCreate";
import StreamDelete from "./streamer/StreamDelete";
import StreamEdit from "./streamer/StreamEdit";
import StreamList from "./streamer/StreamList";
import StreamShow from "./streamer/StreamShow";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div className="ui segment">
          <HeadBar />
          <div className="ui divider" />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
