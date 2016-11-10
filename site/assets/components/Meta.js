import React from 'react';
import DocumentMeta from 'react-document-meta';

const empresa = "Seven Thinkers Produções";
const empresaUrl = "http://www.seventhinkers.com.br";
const cssUrl = "css/global.css";


class Meta extends React.Component {
   render() {    
    console.log('Meta funcionando')
    const meta = {
      title: empresa,
      description: 'O evento da sua empresa onde e quando você quiser.',
      link: {     
        rel: {          
          stylesheet: cssUrl,
          canonical: empresaUrl
        }
      },   
      meta: {
        charset: 'utf-8',        
        name: {
          keywords: 'jornalismo, notícias, vídeos, Brasil, mundo, economia, negócios, política, eleições 2010, crime, justiça, carros, concursos, empregos, educação, vestibular, ciência, saúde, tecnologia, internet, jogos, games, planeta bizarro, pop e arte, cultura, rio de janeiro, são paulo, Renato Freitas, www.renatojfreitas.com, Seven Thinkers Produções',
          viewport: 'width=device-width, initial-scale=1',
          robots: 'index, follow',
          author: empresa,
          copyright: empresa
        },
        property : {
          'og:title': empresa,
          'og:url': empresaUrl,
          'og:site_name': empresa,
          'og:type': 'event',
          'og:image:type': 'image/jpg',
          'og:image:width': '1200',
          'og:image:height': '628',
          'og:image': 'http://www.seventhinkers.com.br/img/img_facebook.jpg'
        }
      }      
    };

    return (
      <DocumentMeta {...meta} />      
      );
  }
}

export default Meta;


