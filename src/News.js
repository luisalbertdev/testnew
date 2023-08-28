import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const News = () => {
  const [news, setNews] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsdata.io/api/1/news?country=ve&apikey=pub_2801302e4a5db45a7b7932463de7d638b455e'
        );
        // Filtrar las noticias con source_id igual a "lapatilla"
        const filteredNews = response.data.results.filter(
          (article) => article.source_id !== 'lapatilla'
        );
        setNews(filteredNews);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  const handleCloseModal = () => {
    setShow(false);
  };

  const handleOpenModal = (article) => {
    setSelectedArticle(article);
    setShow(true);
  };

  const getImagePath = (index) => {
    return `/images/image${index + 1}.jpg`; // Ruta a la imagen predefinida correspondiente al artículo
  };

  return (
    <div className="container">
      
      <div className="row">
        {news.map((article, index) => (
          <div key={article._id} className="col-lg-4 col-md-6 col-12">
            <div className="meeting-item">
              <div className="thumb">
              {/*   <img src={getImagePath(index)} alt={article.title} className="col-12"/> */}
              </div>
              <div className="down-content">
                <div className="date">
                  <h6>{article.pubDate}</h6>
                </div>
                <h4 onClick={() => handleOpenModal(article)}>{article.title}</h4>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedArticle && selectedArticle.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedArticle && <p>{selectedArticle.content}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default News;

