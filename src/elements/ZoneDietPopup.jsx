import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function ZoneDietPopUp() {
  const [show, setShow] = useState(false);
  const [articles, setArticles] = useState([]);
  const articleId = 5;

  useEffect(() => {
    axios
      .get(`https://api-healthycare-dev.up.railway.app/articles/${articleId}`)
      .then((response) => {
        setArticles([response.data.data]);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <button className="pop btn btn-success" onClick={() => setShow(true)}>
        Menu Diet
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Menu Zone Diet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {articles.map((article) => (
            <div dangerouslySetInnerHTML={{ __html: article.menu_diet }}></div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ZoneDietPopUp;
