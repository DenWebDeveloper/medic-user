import React, {Component} from 'react'

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './style.css'

class CoursesPage extends Component {

    componentDidMount() {

    }

    render() {
        const images = [
            {
                original: 'http://www.radionetplus.ru/uploads/posts/2013-07/1374306712_krasivye-oboi-1.jpg',
                thumbnail: 'http://www.radionetplus.ru/uploads/posts/2013-07/1374306712_krasivye-oboi-1.jpg',
            },
            {
                original: 'http://wallpapers-image.ru/1920x1080/winter/wallpapers/winter-wallpapers-1920x1080-00012.jpg',
                thumbnail: 'http://wallpapers-image.ru/1920x1080/winter/wallpapers/winter-wallpapers-1920x1080-00012.jpg'
            },
            {
                original: 'http://wallpapers-image.ru/1920x1080/winter/wallpapers/winter-wallpapers-1920x1080-00012.jpg',
                thumbnail: 'http://wallpapers-image.ru/1920x1080/winter/wallpapers/winter-wallpapers-1920x1080-00012.jpg'
            }
        ];
        return (
            <div>
                <div className="section">
                    <div className='row'>
                        <div className="col m5 offset-m1">
                            <ImageGallery items={images} autoPlay showFullscreenButton={false} showNav={false}
                                          showPlayButton={false}/>
                        </div>
                        <div className="col m5">
                            <h3 className='mt-0'>Курс: Нафтазин</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quo sit sunt. Amet
                                animi beatae debitis doloribus esse explicabo fugiat fugit laboriosam nam, nisi
                                perspiciatis, quas qui repudiandae veritatis voluptates.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi doloribus
                                hic itaque maxime nobis quos ut? Ab ad aspernatur dolore harum impedit laudantium magni
                                nam placeat quod similique, suscipit.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m5 offset-m1">
                            <table className="striped flow-text">
                                <tbody>
                                <tr>
                                    <td>Важкість</td>
                                    <td>Cередня</td>
                                </tr>
                                <tr>
                                    <td>Приблизний час</td>
                                    <td>2 години</td>
                                </tr>
                                <tr>
                                    <td>Тема</td>
                                    <td>Виготовлення ліків</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col m5">
                            <table className="striped flow-text">
                                <tbody>
                                <tr>
                                    <td>Важкість</td>
                                    <td>Cередня</td>
                                </tr>
                                <tr>
                                    <td>Приблизний час</td>
                                    <td>2 години</td>
                                </tr>
                                <tr>
                                    <td>Тема</td>
                                    <td>Виготовлення ліків</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="section container">
                    <div className="row">
                        <div className="col m5 offset-m1">
                            <h3>Матеріали</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="card horizontal">
                                <div className="card-image img-center">
                                    <img src="/assets/img/doc.svg" className="doc-icon"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <h5>Вступ</h5>
                                        <p>I am a very simple card. I am good at containing small bits of
                                            information.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="#">Читати</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card horizontal">
                                <div className="card-image img-center">
                                    <img src="/assets/img/pdf.svg" className="doc-icon"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <h5>Вступ</h5>
                                        <p>I xam a very simple card. I am good at containing small bits of
                                            information.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="#">Читати</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card horizontal">
                                <div className="card-image img-center">
                                    <img src="/assets/img/pptx.svg" className="doc-icon"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <h5>Вступ</h5>
                                        <p>I am a very simple card. I am good at containing small bits of
                                            information.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="#">Читати</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card horizontal">
                                <div className="card-image img-center">
                                    <img src="/assets/img/doc.svg" className="doc-icon"/>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <h5>Вступ</h5>
                                        <p>I am a very simple card. I am good at containing small bits of
                                            information.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="#">Читати</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoursesPage;