import React, { Component } from 'react';
import css from './CategoriesList.module.css';
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

const transformIcon = {
  Транспорт: transport,
  Хобби: hobby,
  Прочее: other,
  Алкоголь: alcohol,
  Здоровье: health,
  'Все для дома': household,
  Техника: tools,
  'Коммуналка,Связь': invorce,
  Образование: learning,
  Развлечение: entertaiment,
  Продукты: products,
  'Все категории': other,
};

class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      currentId: null,
    };
  }

  handleChangeBackground = (evt, id) => {
    evt.target
      .closest('ul')
      .querySelectorAll('img')
      .forEach(elem => {
        elem.parentElement.classList.replace(css.selected, css.svgWrapper);
      });
    if (!evt.target.parentElement.classList.contains(css.selected)) {
      evt.target.parentElement.classList.replace(css.selected, css.svgWrapper);
    } else if (evt.target.parentElement.id) {
      evt.target.parentElement.classList.replace(css.svgWrapper, css.selected);
    }
  };

  backgroundChange(e, id) {
    e.persist();
    this.props.selectCategoryClick(id);
    let unicId = id === this.state.currentId ? null : id;
    this.setState({
      currentId: unicId,
    });
  }
  render() {
    return (
      <div className={css.categoriesWrap}>
        <ul className={css.categoryList}>
          {this.props.categoriesData.map(item => (
            <li
              key={item._id}
              id={item._id}
              className={css.categoryWrapper}
              onClick={e => this.backgroundChange(e, item._id)}
            >
              <p className={css.categoryAmount}>{item.amount}</p>
              <div
                key={item._id}
                className={
                  item._id === this.state.currentId
                    ? css.selected
                    : css.svgWrapper
                }
                id={item._id}
              >
                <img
                  width="100%"
                  height="100%"
                  alt={item.name}
                  src={transformIcon[item.name]}
                  className={css.categoryIcon}
                />
              </div>
              <p className={css.categoryName}>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
