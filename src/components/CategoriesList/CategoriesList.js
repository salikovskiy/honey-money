import React, { Component } from 'react';
import './CategoriesList.css';
import alcohol from '../../assets/icons/alcohol/cocktail.svg';
import invorce from '../../assets/icons/communal/invoice.svg';
import entertaiment from '../../assets/icons/entertainment/kite.svg';
import health from '../../assets/icons/health/hands-holding-heart.svg';
import hobby from '../../assets/icons/hobby/clay.svg';
import household from '../../assets/icons/household/couch.svg';
import learning from '../../assets/icons/learning/book.svg';
import products from '../../assets/icons/products/diet.svg';
import tools from '../../assets/icons/tools/tools.svg';
import transport from '../../assets/icons/transport/car.svg';
import other from '../../assets/icons/ufo/ufo.svg';

class CategoriesList extends Component {
  render() {
    return (
      <div className="categoriesWrap">
        <ul className="categoryList">
          <li className="categoryWrapper">
            <p className="categoryAmount">5000</p>
            <div className="svgWrapper">
              <img alt="products" className="categoryIcon" src={products} />
            </div>
            <p className="categoryName">Продукты</p>
          </li>

          <li className="categoryWrapper">
            <p className="categoryAmount">5000</p>
            <div className="svgWrapper">
              <img alt="alcohol" className="categoryIcon" src={alcohol}></img>
            </div>
            <p className="categoryName">алкоголь</p>
          </li>
          <li className="categoryWrapper">
            <p className="categoryAmount">5000</p>
            <div className="svgWrapper">
              <img
                alt="entertaiment"
                className="categoryIcon"
                src={entertaiment}
              ></img>
            </div>
            <p className="categoryName">развлечение</p>
          </li>
          <li className="categoryWrapper">
            <p className="categoryAmount">5000</p>
            <div className="svgWrapper">
              <img alt="health" className="categoryIcon" src={health}></img>
            </div>
            <p className="categoryName">здоровье</p>
          </li>
          <li className="categoryWrapper">
            <p className="categoryAmount">5000</p>
            <div className="svgWrapper ">
              <img
                alt="transport"
                className="categoryIcon"
                src={transport}
              ></img>
            </div>
            <p className="categoryName">транспорт</p>
          </li>
          <li className="categoryWrapper">
            <p className="categoryAmount">5000</p>
            <div className="svgWrapper ">
              <img
                alt="household"
                className="categoryIcon"
                src={household}
              ></img>
            </div>
            <p className="categoryName">все для дома</p>
          </li>
          <li className="categoryWrapper">
            <p className="categoryAmount">5000</p>
            <div className="svgWrapper ">
              <img alt="tools" className="categoryIcon" src={tools}></img>
            </div>
            <p className="categoryName">техника</p>
          </li>
          <li className="categoryWrapper">
            <p className="categoryAmount">5000</p>
            <div className="svgWrapper ">
              <img alt="communals" className="categoryIcon" src={invorce}></img>
            </div>
            <p className="categoryName">комуналка</p>
          </li>
          <li className="categoryWrapper">
            <p className="categoryAmount">5000</p>
            <div className="svgWrapper">
              <img alt="hobby" className="categoryIcon" src={hobby}></img>
            </div>
            <p className="categoryName">хобби</p>
          </li>
          <li className="categoryWrapper">
            <p className="categoryAmount">5000</p>
            <div className="svgWrapper ">
              <img alt="book" className="categoryIcon" src={learning}></img>
            </div>
            <p className="categoryName">образование</p>
          </li>
          <li className="categoryWrapper">
            <p className="categoryAmount">5000</p>
            <div className="svgWrapper ">
              <img alt="ufo" className="categoryIcon" src={other}></img>
            </div>
            <p className="categoryName">прочее</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
