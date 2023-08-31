import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import './App.css';


const News = () => {
  const [news, setNews] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsdata.io/api/1/news?country=ve&apikey=pub_2801302e4a5db45a7b7932463de7d638b455e&size=9&domain=vtv,telesurtv'
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
      {news.map((article, index) => {
  // Obtener la fecha de publicación de la API
  const pubDate = new Date(article.pubDate);

  // Restar 4 horas a la fecha de publicación
  pubDate.setHours(pubDate.getHours() - 4);

  // Formatear la fecha en el formato deseado (por ejemplo, 'DD/MM/YYYY HH:mm')
  const formattedPubDate = pubDate.toLocaleString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div key={article._id} className="col-lg-4 col-md-6 col-12">
      <div className="meeting-item">
        <div className="thumb">
         {/*  <img src={article.image_url} alt={article.title} className="col-12" /> */}
        </div>
        <div className="down-content">
          <div className="date">
            <h6>{formattedPubDate}</h6>
           {/*  <p>{article.source_id}</p> */}
          </div>
          <Nav.Link><h4 onClick={() => handleOpenModal(article)}>{article.title}</h4></Nav.Link>
        </div>
      </div>
    </div>
  );
})}
        
      </div>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedArticle && selectedArticle.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedArticle && <p>{selectedArticle.content}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger" onClick={handleCloseModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default News;

